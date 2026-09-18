import type { MetadataRoute } from "next";

import { primaryNav, site } from "@/content/site";
import { books } from "@/data/books";

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
    /* One entry per title. The set is not among them: it is a way of buying
       these same two volumes, has no page here, and listing it would put a
       third book in front of a crawler. */
    ...books.map((book) => ({
      url: new URL(`/books/${book.slug}`, site.url).toString(),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
