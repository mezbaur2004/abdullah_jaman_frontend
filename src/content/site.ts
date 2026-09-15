import type { NavItem } from "./types";

/**
 * VERIFIED unless marked otherwise. See CONTENT.md for the source dataset and
 * src/content/status.ts for what is still outstanding.
 *
 * On positioning: the framing here is deliberately *educationist and education
 * leader*, not "founder of two schools" or "school builder". Founding the
 * institutions is a fact and appears as a role title against each one, but it
 * is not the summary of the person — the remit is wider than the founding.
 */

export const site = {
  name: "Abdullah Jaman",
  shortName: "Abdullah Jaman",
  /** VERIFIED — the title he holds at both institutions. */
  role: "Founder & Principal",
  /** How the site leads. Broader than the role title, and used in headlines. */
  positioning: "Educationist",
  title:
    "Abdullah Jaman — Educationist, Wheaton International School & Guidance International School",
  /**
   * VERIFIED. The strongest claim the available evidence supports. Do not
   * strengthen it without new source material.
   */
  description:
    "Abdullah Jaman is an educationist based in Dhaka, Bangladesh, leading Wheaton International School and Guidance International School across six campuses, with an association with the University of Cambridge.",
  tagline:
    "Educationist — Wheaton International School & Guidance International School",

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
