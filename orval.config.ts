import { defineConfig } from 'orval';

export default defineConfig({
  schema: {
    input: './openapi/schema.yaml',
    output: './src/lib/openapi/client.ts',
  },
})