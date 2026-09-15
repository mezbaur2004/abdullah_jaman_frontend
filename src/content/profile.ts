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
  /** The institutions, named — never counted, and never called his alone. */
  headline: "Wheaton International School & Guidance International School",
  lede: site.description,
  primaryCta: { label: "About Abdullah", href: "/about" },
  secondaryCta: { label: "Get in touch", href: "/contact" },
} as const;

/**
 * VERIFIED — the roles and the WIS website are confirmed.
 *
 * Campus counts were supplied and are recorded in status.ts, but they are
 * deliberately not carried here: nothing in the UI can render a number that
 * the content layer does not hold.
 */
export const organizations: Organization[] = [
  {
    name: "Wheaton International School",
    shortName: "WIS",
    role: "Founder & Principal",
    location: "Dhaka, Bangladesh",
    href: "https://wheaton.edu.bd",
  },
  {
    name: "Guidance International School",
    shortName: "GIS",
    role: "Founder & Principal",
    location: "Dhaka, Bangladesh",
  },
];

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
 * The at-a-glance strip. Four qualities, no quantities: each value says what
 * kind of thing he does rather than how much of it there is.
 */
export const atAGlance: GlanceItem[] = [
  {
    icon: "focus",
    label: "Field",
    value: "Education",
    detail: "Curriculum, teaching and school leadership",
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
  headline: "An educationist leading international schools in Dhaka.",
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
  /**
   * "Current" is doing real work in the first label. Earlier positions have
   * not been collected, so a bare "Position" would read as the whole career.
   */
  facts: [
    { label: "Field", value: "Education" },
    { label: "Current position", value: "Founder & Principal" },
    {
      label: "Institutions",
      value: "Wheaton International School, Guidance International School",
    },
    { label: "Based in", value: site.location },
    { label: "Education", value: "University of Cambridge" },
  ],
} as const;
