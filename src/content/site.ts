import type { NavItem } from "./types";

/**
 * VERIFIED unless marked otherwise. See CONTENT.md for the source dataset and
 * src/content/status.ts for what is still outstanding.
 *
 * On positioning: the framing here is deliberately *educationist and education
 * leader*, not "founder of two schools" or "school builder". Founding the
 * institutions is a fact and appears as a role title against each one, but it
 * is not the summary of the person — the remit is wider than the founding.
 *
 * On counting: nothing here quantifies the institutions or their campuses.
 * Two reasons, both from the owner. He is the principal founder but not the
 * only member of the board, so a tally reads as a personal holding when it
 * describes something governed jointly. And the career record is incomplete —
 * earlier positions have not been collected yet — so a headline that counts
 * what is currently known implies a completeness the dataset does not have.
 * Name the institutions; do not add them up. See status.ts.
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
    "Abdullah Jaman is an educationist based in Dhaka, Bangladesh. He leads Wheaton International School and Guidance International School, and holds an association with the University of Cambridge.",
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

/**
 * Seven items is the ceiling. Books earns a place because authorship is a
 * distinct strand of the work rather than a subsection of it; everything else
 * that might want one goes inside an existing page instead.
 */
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Achievements", href: "/achievements" },
  { label: "Books", href: "/books" },
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
 * VERIFIED — both institutional sites, the Guidance address supplied by the
 * owner. They double as the only working contact route until a professional
 * email address is supplied.
 */
export const institutionLinks: NavItem[] = [
  {
    label: "Wheaton International School",
    href: "https://wheaton.edu.bd",
    description: "Official school website",
  },
  {
    label: "Guidance International School",
    href: "https://guidance.edu.bd/",
    description: "Official school website",
  },
];
