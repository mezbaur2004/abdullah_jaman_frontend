import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Placeholder art direction ships as JPEG; real photography should be
    // dropped in at the same paths. AVIF first keeps hero imagery light.
    formats: ["image/avif", "image/webp"],
    // YouTube's own thumbnails for the video cards.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  /**
   * /experience became /leadership when the page's remit widened past a list
   * of roles. Permanent, because the old path is in the wild — the site has
   * been deployed under it — and a 404 is a worse answer than a redirect.
   */
  async redirects() {
    return [{ source: "/experience", destination: "/leadership", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
