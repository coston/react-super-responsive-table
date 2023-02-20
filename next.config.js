/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-pkg-demo'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
