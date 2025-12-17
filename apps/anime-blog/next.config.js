/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  generateEtags: false,
  poweredByHeader: false,
  // App Router specific settings
  experimental: {
    serverComponentsExternalPackages: ['@repo/ui']
  }
}

module.exports = nextConfig