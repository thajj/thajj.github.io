/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "thirtynorthgst.ca",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;