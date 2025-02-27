// import '@azure/core-asynciterator-polyfill';

import { PowerSyncDatabase } from '@powersync/web';
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
    this.supabaseConnector = new SupabaseConnector();
    this.powersync = new PowerSyncDatabase({
      schema: AppSchema,
      database: {
        dbFilename: 'sqlite.db'
      }
    });
    this.dizzleDb = wrapPowerSyncWithDrizzle(this.powersync, {
      schema: drizzleSchema
    });
  }

  async init() {
    await this.powersync.init();
    await this.powersync.connect(this.supabaseConnector);
  }

  async destroy() {
    await this.powersync.disconnect();
    // await this.powersync.close()
  }
}

export const system = new System();

export const SystemContext = React.createContext(system);
export const useSystem = () => React.useContext(SystemContext);
