/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: undefined
  images: {
    // formats: ['image/avif', 'image/webp', 'svg', ''],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
}

module.exports = nextConfig
