import { column, Schema, Table } from '@powersync/web';
import { DrizzleAppSchema, toPowerSyncTable } from '@powersync/drizzle-driver'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const CARD_TABLE = 'Card';

export const CardTable = sqliteTable('Card', {
  id: text(),
  text: text().notNull(),
  textTranslation: text(),
  sentence: text(),
  sentenceTranslation: text(),
  articleId: text(),
  conversationId: text(),
  createdAt: text(),
  updatedAt: text(),
  createdById: text()
});

export const drizzleSchema = {
  Card: CardTable
};

// Infer the PowerSync schema from your Drizzle schema
export const AppSchema = new DrizzleAppSchema(drizzleSchema);

export const AppSchema1 = new Schema({
  // Card,
  Card: toPowerSyncTable(CardTable)
});

export type Database = (typeof AppSchema)['types'];
export type CardRecord = Database['Card'];
// OR:
// export type Todo = RowType<typeof todos>;

