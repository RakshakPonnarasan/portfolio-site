import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2400],
    imageSizes: [320, 480, 640, 750],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;