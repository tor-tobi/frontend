/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV !== 'development'

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/frontend' : '',
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
}

module.exports = nextConfig
