import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverRuntimeConfig: {
    apiUrl: process.env.NEXT_API_URL,
    apiKey: process.env.NEXT_API_KEY,
  },
  transpilePackages: ['mui-tel-input'],
  // experimental:{
  //   optimizePackageImports: ["@chakra-ui/react"],
  // },
};

export default nextConfig;
