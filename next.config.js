/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SERVER_URL: "http://localhost:3003/getdata",
  },
};

module.exports = nextConfig;
