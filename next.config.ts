import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Απαραίτητο για το Cloudflare Pages
  images: {
    unoptimized: true, // Απαραίτητο για να παίζουν οι εικόνες
  },
};

export default nextConfig;