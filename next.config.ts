import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "admin.zoomprospector.com",
      "properties.zoomprospector.com",
      // add any other domains you use for images
    ],
  },
};

export default nextConfig;
