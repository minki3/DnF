/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-api.neople.co.kr',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.neople.co.kr/:path*',
      },
    ]
  },
}
// next.config.js

module.exports = nextConfig
