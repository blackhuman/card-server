import { column, Schema, Table } from '@powersync/web';
import { DrizzleAppSchema, toPowerSyncTable } from '@powersync/drizzle-driver'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm';
import { createSupabaseClient } from './supabase-client';

export const CARD_TABLE = 'Card';

const supabase = createSupabaseClient();

function generateUniqueString(length: number = 12): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueString += characters[randomIndex];
  }
  return uniqueString;
}

export const CardTable = sqliteTable('Card', {
  id: text().primaryKey().$default(() => generateUniqueString()),
  text: text().notNull(),
  textTranslation: text(),
  sentence: text(),
  sentenceTranslation: text(),
  articleId: text(),
  conversationId: text(),
  createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text().default(sql`(CURRENT_TIMESTAMP)`),
  createdById: text(),
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

