/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
      },
    ],
  },
  trailingSlash: true,
  // Disable server-side features that aren't compatible with static export
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
