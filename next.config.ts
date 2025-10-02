import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverRuntimeConfig: {
    apiUrl: process.env.NEXT_API_URL,
    apiKey: process.env.NEXT_API_KEY,
  },
};

export default nextConfig;
