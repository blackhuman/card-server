import { column, Schema, Table } from '@powersync/web';

export const CARD_TABLE = 'Card';

const Card = new Table(
  {
    // id column (text) is automatically included
    text: column.text,
    textTranslation: column.text,
    sentence: column.text,
    sentenceTranslation: column.text,
    articleId: column.text,
    conversationId: column.text,
    createdAt: column.text,
    updatedAt: column.text,
    createdById: column.text
  },
  { indexes: {} }
);

export const AppSchema = new Schema({
  Card,
});

export type Database = (typeof AppSchema)['types'];
export type CardRecord = Database['Card'];
// OR:
// export type Todo = RowType<typeof todos>;

