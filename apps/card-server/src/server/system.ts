// import '@azure/core-asynciterator-polyfill';

import { PowerSyncDatabase } from '@powersync/web';
import React from 'react';
import Logger from 'js-logger';
import { AppSchema } from './AppSchema';
import { SupabaseConnector } from './SupabaseConnector';

Logger.useDefaults();

export class System {
  supabaseConnector: SupabaseConnector;
  powersync: PowerSyncDatabase;

  constructor() {
    this.supabaseConnector = new SupabaseConnector();
    this.powersync = new PowerSyncDatabase({
      schema: AppSchema,
      database: {
        dbFilename: 'sqlite.db'
      }
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
