/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the public base URL for the application. This can be overridden via the
  // NEXT_PUBLIC_BASE_URL environment variable.
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || 'https://atendor.xyz',
  },
  // When deploying under a subpath (e.g. https://atendor.xyz/atendor-ds),
  // specify the subpath here. It can be configured through
  // NEXT_PUBLIC_BASE_PATH at build time.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig;