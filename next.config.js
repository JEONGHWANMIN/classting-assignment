/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["page.tsx", "page.ts"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/quiz",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
