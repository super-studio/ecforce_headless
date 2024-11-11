/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1ogj02ptc5x6g.cloudfront.net",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
