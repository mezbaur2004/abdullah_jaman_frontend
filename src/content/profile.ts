import type {
  EducationEntry,
  GlanceItem,
  ImageAsset,
  Organization,
} from "./types";
import { site } from "./site";

/**
 * VERIFIED unless marked otherwise.
 *
 * Biography, career narrative and leadership philosophy are all still TO
 * COLLECT. They are deliberately absent rather than approximated — the About
 * page renders only what exists.
 */

/**
 * TO COLLECT — no photograph of Abdullah Jaman has been supplied. Null keeps
 * every portrait slot empty rather than captioning a stand-in as him.
 *
 * To add one: drop the file in public/images/ and set this to
 * { src: "/images/portrait.jpg", alt: "Abdullah Jaman", width, height }.
 */
export const portrait: ImageAsset | null = null;

/**
 * Decorative only. An abstract plate, not a photograph and not a likeness, so
 * it makes no claim about anyone. The empty `alt` hides it from assistive
 * technology. It gives the hero a visual anchor until a real portrait exists.
 */
export const heroPanel: ImageAsset = {
  src: "/images/panel-hero.jpg",
  alt: "",
  width: 1200,
  height: 1500,
};

export const hero = {
  eyebrow: site.positioning,
  /** The institutions, named — not a count of how many were founded. */
  headline: "Wheaton International School & Guidance International School",
  lede: site.description,
  primaryCta: { label: "About Abdullah", href: "/about" },
  secondaryCta: { label: "Get in touch", href: "/contact" },
} as const;

/** VERIFIED — roles, campus counts and the WIS website are all confirmed. */
export const organizations: Organization[] = [
  {
    name: "Wheaton International School",
    shortName: "WIS",
    role: "Founder & Principal",
    location: "Dhaka, Bangladesh",
    campuses: 3,
    href: "https://wheaton.edu.bd",
  },
  {
    name: "Guidance International School",
    shortName: "GIS",
    role: "Founder & Principal",
    location: "Dhaka, Bangladesh",
    campuses: 3,
  },
];

export const totalCampuses = organizations.reduce(
  (sum, organization) => sum + (organization.campuses ?? 0),
  0,
);

/**
 * VERIFIED — the association with Cambridge is confirmed. The degree, subject
 * and dates are not, so no qualification is stated.
 */
export const education: EducationEntry[] = [
  {
    institution: "University of Cambridge",
    note: "Programme and dates to be confirmed.",
  },
];

/**
 * The at-a-glance strip. Every value is verified, which is why this section
 * can carry real numbers where the statistics band still cannot.
 */
export const atAGlance: GlanceItem[] = [
  {
    icon: "campus",
    label: "Campuses",
    value: String(totalCampuses),
    detail: "Three at Wheaton, three at Guidance",
  },
  {
    icon: "role",
    label: "Role",
    value: "Principal",
    detail: "Academic and institutional leadership",
  },
  {
    icon: "location",
    label: "Based in",
    value: "Dhaka",
    detail: "Bangladesh",
  },
  {
    icon: "education",
    label: "Education",
    value: "Cambridge",
    detail: "University of Cambridge",
  },
];

export const aboutTeaser = {
  eyebrow: "About",
  headline: "Leading two international schools across six campuses.",
  /** VERIFIED — the approved positioning statement, unembellished. */
  body: [site.description],
  cta: { label: "More about Abdullah", href: "/about" },
} as const;

export const aboutPage = {
  eyebrow: "About",
  headline: "Abdullah Jaman",
  lede: site.description,
  /**
   * TO COLLECT — short bio, long bio, personal story, career journey and
   * leadership philosophy. Add entries here and the About page renders them
   * in order; while the array is empty the page shows only verified facts.
   */
  sections: [] as Array<{ heading: string; body: string[] }>,
  facts: [
    { label: "Position", value: "Founder & Principal" },
    {
      label: "Institutions",
      value: "Wheaton International School, Guidance International School",
    },
    { label: "Campuses", value: `${totalCampuses} across both institutions` },
    { label: "Based in", value: site.location },
    { label: "Education", value: "University of Cambridge" },
  ],
} as const;
