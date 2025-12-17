/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    optimizeFonts: true,
    swcMinify: true,
    poweredByHeader: false,
    images: {
        domains: ['localhost'],
        unoptimized: true
    }
}

module.exports = nextConfig;
