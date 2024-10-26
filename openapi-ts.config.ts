import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'openapi/schema.json',
  output: 'src/lib/openapi',
});