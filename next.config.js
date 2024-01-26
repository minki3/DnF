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
    const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY
    return [
      {
        source: '/rank/:path*',
        destination: `https://api.neople.co.kr/:path*?&apikey=${API_KEY}`,
      },
      {
        source: '/serverData',
        destination: `https://api.neople.co.kr/df/servers?apikey=${API_KEY}`,
      },
    ]
  },
}
// next.config.js

module.exports = nextConfig
