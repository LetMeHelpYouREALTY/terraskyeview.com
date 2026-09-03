import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.terraskyeview.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'terraskyeview.com' }],
        destination: 'https://www.terraskyeview.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
