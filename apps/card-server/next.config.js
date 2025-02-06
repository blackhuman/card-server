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
};

export default config;
