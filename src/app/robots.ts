import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal working page. It also carries a noindex tag; this is belt and
      // braces so it never surfaces in search.
      disallow: "/content-status",
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
