/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: "https://v1.nocodeapi.com/:path*",
      },
      
    ];
  },
  images: {
    domains: ['cdn-images-1.medium.com'],
  },
};

module.exports = nextConfig;
