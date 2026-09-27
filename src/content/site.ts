import profileData from "@/lib/data/profile.json";
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

  /** Canonical URLs, Open Graph, the sitemap and robots.txt all derive from
   *  this. */
  url: "https://abdullahjaman.com",
  locale: "en_US",

  /** VERIFIED. */
  location: "Dhaka, Bangladesh",

  /** Direct contact details. Every email, phone and WhatsApp link on the
   *  site renders only when its value is set, so a blank one simply hides. */
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
 * Personal profile links (LinkedIn and the like). Rendered in the footer and
 * structured data only when the list has entries.
 */
export const socialLinks: NavItem[] = [];

/**
 * The institutions' own websites, derived from `organizations` in
 * src/lib/data/profile.json so a new institution with an `href` appears in the
 * footer and on the contact page with no code change. They double as the
 * contact route while no direct email is set.
 */
export const institutionLinks: NavItem[] = (
  profileData.organizations as Array<{ name: string; href?: string }>
)
  .filter((organization) => organization.href)
  .map((organization) => ({
    label: organization.name,
    href: organization.href as string,
    description: "Official school website",
  }));
