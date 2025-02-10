import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/9.x/shapes/svg",
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVG images
  },
};

export default nextConfig;
