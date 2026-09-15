import type { NavItem } from "./types";

/**
 * PLACEHOLDER CONTENT — see CONTENT.md.
 * Every value below is a stand-in written to exercise the layout. Replace with
 * signed-off copy and the live domain before launch.
 */

export const site = {
  name: "Abdullah Jaman",
  shortName: "Abdullah Jaman",
  title: "Abdullah Jaman — Educationist & Institution Builder",
  tagline: "Educationist. Institution builder. School leader.",
  description:
    "Abdullah Jaman is an educationist and institution builder — Managing Director of Pedago Academy and founding leader of Wheaton International School and Guidance International School.",
  /** Used for canonical URLs, Open Graph and the sitemap. Update at launch. */
  url: "https://abdullahjaman.com",
  locale: "en_US",
  email: "developers.pedagoacademy@gmail.com",
  phone: "",
  location: "Dhaka, Bangladesh",
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

export const socialLinks: NavItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];
