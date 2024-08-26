/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "superb-kookabura-710.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "necessary-chicken-860.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "robust-marmoset-94.clerk.accounts.dev",
      },
    ],
  },
};

export default nextConfig;