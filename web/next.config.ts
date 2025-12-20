import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverRuntimeConfig: {
    apiUrl: process.env.NEXT_API_URL,
    apiKey: process.env.NEXT_API_KEY,
  },
  transpilePackages: ['mui-tel-input'],
  images: {
    remotePatterns: [
      new URL('https://picsum.photos/**'),
    ],
  },
  // experimental:{
  //   optimizePackageImports: ["@chakra-ui/react"],
  // },
};

export default nextConfig;
