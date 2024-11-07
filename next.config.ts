import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000"],
      // bodySizeLimit: "2mb", // default is "1mb"
    },
  },
};

export default nextConfig;
