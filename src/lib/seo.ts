import type { Metadata } from "next";

import { education, organizations } from "@/content/profile";
import { site, socialLinks } from "@/content/site";

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
  alt: `${site.name} — ${site.role}, Wheaton International School and Guidance International School`,
};

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Use "/" for the homepage. */
  path: string;
  /** Keeps a page out of search results — used for the internal status page. */
  noIndex?: boolean;
};

/**
 * Builds per-page metadata from a single source of truth so canonical URLs,
 * Open Graph and Twitter cards can never drift apart.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
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
 * schema.org Person markup, built from the same verified content the pages
 * render. Fields with nothing confirmed behind them are omitted rather than
 * emitted empty — structured data asserting a blank email or a portrait that
 * does not exist is worse than no structured data.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    ...(site.email ? { email: `mailto:${site.email}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    worksFor: organizations.map((organization) => ({
      "@type": "EducationalOrganization",
      name: organization.name,
      ...(organization.href ? { url: organization.href } : {}),
    })),
    alumniOf: education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.institution,
    })),
    ...(socialLinks.length > 0
      ? { sameAs: socialLinks.map((link) => link.href) }
      : {}),
  };
}
