import { AbstractPowerSyncDatabase, CrudEntry, PowerSyncBackendConnector, UpdateType } from '@powersync/web';

import { createSupabaseClient } from './supabase-client';

/// Postgres Response codes that we cannot recover from by retrying.
const FATAL_RESPONSE_CODES = [
  // Class 22 — Data Exception
  // Examples include data type mismatch.
  new RegExp('^22...$'),
  // Class 23 — Integrity Constraint Violation.
  // Examples include NOT NULL, FOREIGN KEY and UNIQUE violations.
  new RegExp('^23...$'),
  // INSUFFICIENT PRIVILEGE - typically a row-level security violation
  new RegExp('^42501$')
];

export class SupabaseConnector implements PowerSyncBackendConnector {
  public client

  constructor() {
    this.client = createSupabaseClient()
  }

  async userId() {
    const {
      data: { session },
    } = await this.client.auth.getSession();

    const userId = session?.user.id;
    console.log('userId', userId)
    return userId;
  }

  async fetchCredentials() {
    // return {
    //   endpoint: AppConfig.powersyncUrl,
    //   token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6InBvd2Vyc3luYy1kZXYtMzIyM2Q0ZTMifQ.eyJzdWIiOiJkYzljN2UwYy0zNGJlLTQ3NTktOTAwOS0xMjFkNTc0ZWU3MWQiLCJpYXQiOjE3NDAwMzgxMTEsImlzcyI6Imh0dHBzOi8vcG93ZXJzeW5jLWFwaS5qb3VybmV5YXBwcy5jb20iLCJhdWQiOiJodHRwczovLzY3YjQxODMzYmNkMzFkNjM1ODYwMDIwMi5wb3dlcnN5bmMuam91cm5leWFwcHMuY29tIiwiZXhwIjoxNzQwMDgxMzExfQ.R3CDxcsRs5SzYElsnspFYubiLb4NPDxxbbDvLn-XN1VujGcWTtqarMYtFU38Hma31iNVuiY2TNV0ZMd6kWDpY_Ikp-aRQ4MgMMKBL9nl7ZcDT_J63eBQppX6TNFJ-bxYaX0gO6EGCIF6MvMNDNGVRpm-2wGTGXcv-tcJaaV2tp6B6CtCWkF5ShdiIu-q0bjCNjf108C29HsNLU-xTgZ6jC4E10mj-Yr4kiVWS-RnH_qLKWFEKMmltPoJqNxGJtt6yQOUpxU2gyPI0lNHMm3TV0dW0fz0svUDkVvImLEfX7g6Uqi0lfvoNEdKTHb-2ckpv8YMJ3udjv6OkQty3bhkYw'
    // }
    const {
      data: { session },
      error
    } = await this.client.auth.getSession();

    console.log('fetchCredentials session', session)
    console.log('fetchCredentials error', error)

    if (!session || error) {
      throw new Error(`Could not fetch Supabase credentials: ${error}`);
    }

    if (!process.env.NEXT_PUBLIC_CARD_POWERSYNC_URL) {
      throw new Error('NEXT_PUBLIC_CARD_POWERSYNC_URL is not set');
    }

    console.debug('session expires at', session.expires_at);

    return {
      endpoint: process.env.NEXT_PUBLIC_CARD_POWERSYNC_URL,
      token: session.access_token ?? ''
    };
  }

  async uploadData(database: AbstractPowerSyncDatabase): Promise<void> {
    const transaction = await database.getNextCrudTransaction();

    if (!transaction) {
      return;
    }

    let lastOp: CrudEntry | null = null;
    try {
      // Note: If transactional consistency is important, use database functions
      // or edge functions to process the entire transaction in a single call.
      for (const op of transaction.crud) {
        lastOp = op;
        const table = this.client.from(op.table);
        let result: any = null;
        switch (op.op) {
          case UpdateType.PUT:
            // eslint-disable-next-line no-case-declarations
            const record = { ...op.opData, id: op.id };
            result = await table.upsert(record);
            break;
          case UpdateType.PATCH:
            result = await table.update(op.opData).eq('id', op.id);
            break;
          case UpdateType.DELETE:
            result = await table.delete().eq('id', op.id);
            break;
        }

        if (result.error) {
          result.error.message = `Could not ${op.op} data to Supabase error: ${JSON.stringify(result)}`;
          console.error('supabase uploadData error', result.error);
          throw result.error;
        }
      }

      await transaction.complete();
    } catch (ex: any) {
      console.debug(ex);
      if (typeof ex.code == 'string' && FATAL_RESPONSE_CODES.some((regex) => regex.test(ex.code))) {
        /**
         * Instead of blocking the queue with these errors,
         * discard the (rest of the) transaction.
         *
         * Note that these errors typically indicate a bug in the application.
         * If protecting against data loss is important, save the failing records
         * elsewhere instead of discarding, and/or notify the user.
         */
        console.error('Data upload error - discarding:', lastOp, ex);
        await transaction.complete();
      } else {
        // Error may be retryable - e.g. network error or temporary server error.
        // Throwing an error here causes this call to be retried after a delay.
        throw ex;
      }
    }
  }
}
