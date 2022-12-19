/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/signup',
        destination: '/signup/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
