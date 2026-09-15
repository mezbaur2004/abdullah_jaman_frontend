/**
 * Shapes for every piece of editorial content on the site.
 *
 * The UI only ever reads these types, never a data source. Swapping the plain
 * objects in this folder for a CMS client later means implementing the same
 * shapes in an async loader — no component has to change.
 */

export type ImageAsset = {
  /** Path under /public, or an absolute URL once remotePatterns is configured. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional focal hint, e.g. "50% 25%", for tightly cropped portraits. */
  position?: string;
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type Organization = {
  name: string;
  role: string;
  /** One line on what the institution is, used as the accessible description. */
  summary: string;
  href?: string;
};

export type Statistic = {
  /** Kept as a string so "15+", "2", "1,200+" all render identically. */
  value: string;
  label: string;
  detail?: string;
};

export type Role = {
  slug: string;
  organization: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  current?: boolean;
};

export type Initiative = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  outcomes: string[];
  image?: ImageAsset;
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
};

export type MediaItem = {
  title: string;
  outlet: string;
  type: "Interview" | "Feature" | "Opinion" | "Talk" | "Publication";
  date: string;
  summary: string;
  /** Omit until the live link exists; the card renders without a link. */
  href?: string;
};

export type GalleryItem = {
  caption: string;
  image: ImageAsset;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};
