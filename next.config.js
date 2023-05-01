/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: "https://api.medium.com/v1/users/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
