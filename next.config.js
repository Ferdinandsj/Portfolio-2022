/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["c.tenor.com", "thumbs.gfycat.com", "i.pinimg.com"],
  },
};

module.exports = nextConfig;
