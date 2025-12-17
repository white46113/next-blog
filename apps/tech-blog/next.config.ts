/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    compress: true,
    optimizeFonts: true,
    swcMinify: true,
    poweredByHeader: false,
};

export default nextConfig;
