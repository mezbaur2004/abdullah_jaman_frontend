import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * The build-time card from `src/app/opengraph-image.tsx`, which Next serves at
 * this path. It has to be named explicitly: Next shallow-merges metadata, so a
 * page that declares its own `openGraph` object replaces the parent's entirely
 * — including the image the file convention attached at the root. Without this
 * every page but the homepage would share with no image at all.
 */
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Use "/" for the homepage. */
  path: string;
};

/**
 * Builds per-page metadata from a single source of truth so canonical URLs,
 * Open Graph and Twitter cards can never drift apart.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "profile",
      siteName: site.name,
      title: `${title} — ${site.name}`,
      description,
      url: canonical,
      locale: site.locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [ogImage],
    },
  };
}

/**
 * schema.org Person markup. Search engines use this to connect the name to the
 * roles and organizations, which is most of the point of a personal-brand site.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email ? `mailto:${site.email}` : undefined,
    jobTitle: "Managing Director",
    description: site.description,
    image: `${site.url}/images/portrait-hero.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    worksFor: [
      { "@type": "Organization", name: "Pedago Academy" },
      { "@type": "EducationalOrganization", name: "Wheaton International School" },
      { "@type": "EducationalOrganization", name: "Guidance International School" },
    ],
    sameAs: [] as string[],
  };
}
