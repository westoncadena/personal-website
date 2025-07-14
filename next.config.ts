import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['imgix.cosmicjs.com', 'res.cloudinary.com'],
  },
};

export default nextConfig;
