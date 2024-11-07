import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cp.oiltech.uz",
        protocol: "https",
      },
      {
        hostname: "cp.oiltech.uz",
        protocol: "http",
      },
    ],
  },
  assetPrefix: "/_next",
};

export default withNextIntl(nextConfig);
