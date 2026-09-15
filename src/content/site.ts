import type { NavItem } from "./types";

/**
 * VERIFIED unless marked otherwise. See CONTENT.md for the source dataset and
 * src/content/status.ts for what is still outstanding.
 */

export const site = {
  name: "Abdullah Jaman",
  shortName: "Abdullah Jaman",
  /** VERIFIED — the role he holds at both schools. */
  role: "Founder & Principal",
  title:
    "Abdullah Jaman — Founder & Principal, Wheaton International School & Guidance International School",
  /**
   * VERIFIED. This is the approved positioning statement and the strongest
   * claim the available evidence supports. Do not strengthen it without new
   * source material.
   */
  description:
    "Abdullah Jaman is an education leader and institutional founder based in Dhaka, Bangladesh. He is the Founder and Principal of Wheaton International School (WIS) and Guidance International School (GIS), with an association with the University of Cambridge.",
  tagline: "Education leader and institutional founder, Dhaka.",

  /** TO COLLECT — placeholder domain. Canonical URLs, Open Graph, the sitemap
   *  and robots.txt all derive from this, so it must be set before launch. */
  url: "https://abdullahjaman.com",
  locale: "en_US",

  /** VERIFIED. */
  location: "Dhaka, Bangladesh",

  /** TO COLLECT — a professional address has not been supplied. Empty on
   *  purpose: every email link on the site disappears while it is blank,
   *  rather than pointing somewhere wrong. */
  email: "",
  phone: "",
  whatsapp: "",
} as const;

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  ...primaryNav,
];

/**
 * TO COLLECT — no verified personal profile URLs. The LinkedIn profile is
 * known to exist but its canonical URL was not supplied, so nothing is linked.
 * Add entries here and they appear in the header, footer and contact page.
 */
export const socialLinks: NavItem[] = [];

/**
 * VERIFIED — the one institutional site confirmed in the dataset. It doubles
 * as the only working contact route until a professional address is supplied.
 */
export const institutionLinks: NavItem[] = [
  {
    label: "Wheaton International School",
    href: "https://wheaton.edu.bd",
    description: "Official school website",
  },
];
