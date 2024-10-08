/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_HOST}/api/:path*`,
      },
    ];
  },
  output: 'standalone',
};

export default nextConfig;
