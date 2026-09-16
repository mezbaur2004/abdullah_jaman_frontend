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

/**
 * A book's subject. Only the categories actually represented in `books` are
 * ever rendered — an empty category heading advertises a gap rather than
 * filling one.
 */
export type BookCategory =
  | "Islamic Studies"
  | "Arabic Language"
  | "Aqidah"
  | "Educational Materials";

/**
 * One authored or supervised title.
 *
 * Almost every field is optional, and that is the point. A book with nothing
 * but a title is still publishable here; a book with an invented publisher is
 * not. The UI renders what each entry actually carries and omits the rest, so
 * partial metadata never has to be padded out to look complete.
 */
export type Book = {
  /** The only required field. Never approximate one. */
  title: string;
  category?: BookCategory;
  /** Front cover under /images/books/. Absent renders a typographic plate. */
  cover?: ImageAsset;
  /** Series or collection this belongs to, when it is part of one. */
  series?: string;
  /** One or two sentences, from the book or its publisher — never written here. */
  description?: string;
  publisher?: string;
  /** A year only, and only when confirmed. */
  year?: string;
  language?: string;
  /** His role, when it is not sole authorship — e.g. "Supervising editor". */
  role?: string;
  /** A publisher or retailer page. Omit and the card renders without a link. */
  href?: string;
  /** Lifts one title into the featured position on the page. */
  featured?: boolean;
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
