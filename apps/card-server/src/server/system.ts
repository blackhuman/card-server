// import '@azure/core-asynciterator-polyfill';

import { PowerSyncDatabase, resolveWebPowerSyncFlags } from '@powersync/web';
import React from 'react';
import Logger from 'js-logger';
import { AppSchema, drizzleSchema } from './AppSchema';
import { SupabaseConnector } from './SupabaseConnector';
import { wrapPowerSyncWithDrizzle } from '@powersync/drizzle-driver';

Logger.useDefaults();

export class System {
  supabaseConnector: SupabaseConnector;
  powersync: PowerSyncDatabase;
  dizzleDb;

  constructor() {
    const flags = resolveWebPowerSyncFlags(globalThis.window !== undefined ? {
      enableMultiTabs: true,
      broadcastLogs: true,
      disableSSRWarning: true,
      ssrMode: false,
      useWebWorker: true,
    } : {
      disableSSRWarning: true,
      ssrMode: true,
      useWebWorker: false,
      enableMultiTabs: false,
      broadcastLogs: false,
    })
    this.supabaseConnector = new SupabaseConnector();
    this.powersync = new PowerSyncDatabase({
      schema: AppSchema,
      database: {
        dbFilename: 'sqlite.db',
      },
    });
    this.dizzleDb = wrapPowerSyncWithDrizzle(this.powersync, {
      schema: drizzleSchema
    });
  }

  async init() {
    try {
      await this.powersync.init();
    } catch (e) {
      console.error('init error.', e);
    }
    try {
      await this.powersync.connect(this.supabaseConnector);
    } catch (e) {
      console.error('connect error.', e);
    }
    console.log('System initialized 2');
  }

  async destroy() {
    await this.powersync.disconnect();
    // await this.powersync.close()
  }
}

export const SystemContext = React.createContext<System | null>(null);
export const useSystem = () => React.useContext(SystemContext)!;
