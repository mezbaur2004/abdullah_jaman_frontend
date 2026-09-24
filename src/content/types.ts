/**
 * Shapes for every piece of editorial content on the site.
 *
 * The UI only ever reads these types, never a data source. Swapping the plain
 * objects in this folder for a CMS client later means implementing the same
 * shapes in an async loader — no component has to change.
 *
 * Every collection here is allowed to be empty, and the UI is built to remove
 * the corresponding section when it is. That is load-bearing: most of the
 * dataset is still being collected, and an empty array must render as nothing
 * rather than as invented filler.
 */

/**
 * How far a piece of information has been established.
 *
 * Only `verified` content is ever rendered on the public site. The other two
 * exist so that what is known-but-unconfirmed and what is missing entirely
 * stay recorded in the repository instead of in someone's memory.
 */
export type Confidence = "verified" | "awaiting-confirmation" | "to-collect";

export type ImageAsset = {
  /** Path under /public, or an absolute URL once remotePatterns is configured. */
  src: string;
  /** Empty string marks the image as decorative; it is then hidden from AT. */
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

/**
 * Note what is absent: there is no campus count and no size field. The
 * institutions are named, never tallied — see the note at the top of site.ts.
 */
export type Organization = {
  name: string;
  shortName?: string;
  role: string;
  location?: string;
  /** Only set this once there is something factual to say. */
  summary?: string;
  href?: string;
};

/** Icon keys for the at-a-glance cards, mapped to components in the UI. */
export type GlanceIcon = "focus" | "role" | "location" | "education";

export type GlanceItem = {
  icon: GlanceIcon;
  label: string;
  value: string;
  detail: string;
};

export type EducationEntry = {
  institution: string;
  /** Left undefined until a real qualification is confirmed. */
  qualification?: string;
  field?: string;
  period?: string;
  note?: string;
};

/** A professional certificate, as distinct from a degree. */
export type Certification = {
  title: string;
  issuer: string;
};

/** A recorded talk, interview or message, linked to where it is hosted. */
export type VideoItem = {
  title: string;
  kind: string;
  href: string;
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
  /** Undefined until dates are confirmed — never guess one. */
  period?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  href?: string;
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
  date?: string;
  summary?: string;
  /** Omit until the live link exists; the entry then renders without a link. */
  href?: string;
};

/** One line of the outstanding-research register rendered at /content-status. */
export type ContentGap = {
  area: string;
  items: string[];
};

export type OpenQuestion = {
  subject: string;
  known: string;
  missing: string;
};

/** A question that has been answered, kept so the reasoning is not lost. */
export type ResolvedDecision = {
  subject: string;
  decision: string;
  rationale: string;
};
