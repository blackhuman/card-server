import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    urlImports: ['https://accounts.google.com/gsi/client'],
  },
  transpilePackages: ['@relba/card-client'],
  outputFileTracingRoot: path.join(__dirname, '../../')
};

export default config;
