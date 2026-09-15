import type { MetadataRoute } from "next";

import { primaryNav, site } from "@/content/site";

/**
 * Derived from the same nav the header renders, so a new page cannot be added
 * to the site and forgotten here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...primaryNav.map((item) => ({
      url: new URL(item.href, site.url).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
