import type {
  Certification,
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
 * VERIFIED — supplied by the owner.
 *
 * Cropped to 4:5 from a square original so the hero and the About page can
 * share one file without either needing its own crop. The alt text names him
 * and stops there: it is a photograph of a person, not a claim about a role,
 * and a caption that editorialises is a claim the image cannot support.
 *
 * Setting this to null is still supported everywhere — the hero and About
 * both fall back to the decorative plate below.
 */
export const portrait: ImageAsset | null = {
  src: "/images/portrait.jpg",
  alt: "Abdullah Jaman",
  width: 1000,
  height: 1250,
};

/**
 * VERIFIED — supplied by the owner, for the homepage hero specifically.
 *
 * A square original, shown whole rather than cropped: the hero's frame is
 * already 1:1, so nothing is cut to fit it.
 */
export const heroPhoto: ImageAsset = {
  src: "/images/hero-photo.jpg",
  alt: "Abdullah Jaman speaking into a microphone.",
  width: 1320,
  height: 1320,
};

/**
 * Decorative only. An abstract plate, not a photograph and not a likeness, so
 * it makes no claim about anyone. The empty `alt` hides it from assistive
 * technology. Now that a real portrait exists it is only the fallback, kept so
 * that clearing `portrait` never leaves a hole in the layout.
 */
export const heroPanel: ImageAsset = {
  src: "/images/panel-hero.jpg",
  alt: "",
  width: 1200,
  height: 1500,
};

/**
 * VERIFIED — supplied by the owner. The two guests are not identified: no
 * names were given, and inventing them would be the same failure as inventing
 * an award.
 */
export const booksFeature: ImageAsset = {
  src: "/images/gallery-office.jpg",
  alt: "Abdullah Jaman seated at a desk in front of shelves of school books.",
  width: 824,
  height: 620,
};

export const aboutFeature: ImageAsset = {
  src: "/images/feature-reception.jpg",
  alt: "Abdullah Jaman seated in conversation with two guests at a reception.",
  width: 1600,
  height: 1066,
  // The subjects sit across the lower half of the frame, under a tall wall of
  // flowers. At its own ratio the picture was mostly the flowers; weighting the
  // crop low puts the three people in it.
  position: "50% 74%",
};

export const hero = {
  eyebrow: site.positioning,
  /**
   * The role line, as supplied by the owner. It names the founding without
   * reducing him to it — "education leader" is the wider remit the earlier
   * decision was protecting, and it sits in the same line rather than in a
   * paragraph further down. See the Positioning entry in status.ts.
   */
  headline: "Founder, Principal & Education Leader",
  lede: "An educationist in Dhaka, Bangladesh. He leads Wheaton International School and Guidance International School, and writes Islamic Studies and Arabic learning materials for the classrooms he helps run.",
  primaryCta: { label: "Explore his work", href: "/leadership" },
  secondaryCta: { label: "Books", href: "/books" },
  /**
   * The line under the hero's buttons, replacing the row of short tags that
   * used to sit under the portrait.
   *
   * Every one of these three names already appears in the content layer —
   * the two institutions in `organizations`, Cambridge in `education`. Nothing
   * new is claimed here; it is the same record set as a masthead credential
   * rather than as three badges.
   */
  credentials: [
    "Wheaton International School",
    "Guidance International School",
    "University of Cambridge",
  ],
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
    /* VERIFIED — supplied by the owner. */
    href: "https://guidance.edu.bd/",
  },
];

/**
 * VERIFIED — supplied by the owner from his current Wheaton profile.
 *
 * This replaces a single placeholder entry that named Cambridge and admitted
 * it knew nothing else. The wording is kept as supplied rather than tidied
 * into a house style: "Postgraduate Advanced Certificate in Educational
 * Studies (Assessment)" is the qualification's name, not a description of it,
 * and paraphrasing a credential is how credentials drift.
 *
 * Still absent, and still not guessed: the years. None were supplied, so none
 * are shown.
 */
export const education: EducationEntry[] = [
  {
    institution: "University of Dhaka",
    qualification: "BSS (Hons.)",
    field: "Sociology",
    note: "Social Sciences & Human Behaviour",
  },
  {
    institution: "Al-Madinah International University, Malaysia",
    qualification: "M.A.",
    field: "Islamic Aqidah",
    note: "Islamic Theology & Creed",
  },
  {
    institution: "Institute of Education and Research, University of Dhaka",
    qualification: "M.Ed.",
    field: "Pre-Primary & Primary Education",
    note: "Early Childhood & Primary Pedagogy",
  },
  {
    institution: "University of Cambridge, UK",
    qualification:
      "Postgraduate Advanced Certificate in Educational Studies (Assessment)",
    note: "PGCert in Educational Assessment — Assessment Design & Academic Evaluation",
  },
];

/**
 * VERIFIED — from his founder page, supplied by the owner as the final source.
 *
 * Certificates rather than degrees, so they are kept out of the ledger above.
 * The Level 7 psychology entry used to sit in that ledger as "Child
 * Psychology, Level 7, United Kingdom"; the source names it and its provider
 * precisely, so it is recorded here in those words.
 */
export const professionalDevelopment: Certification[] = [
  { title: "120-Hour TESOL Certificate", issuer: "World TESOL Academy" },
  {
    title: "Positive Psychology Coach Certification",
    issuer: "CMA — Coaching & Mentoring Academy",
  },
  { title: "Psychology Level 7", issuer: "One Education, UK" },
  { title: "Psychology & Psychiatry Level 5", issuer: "South London College" },
];

/** VERIFIED — the role line and areas of expertise from his founder page. */
export const roleLine = [
  "Curriculum Expert",
  "Author",
  "Administrator",
  "Cambridge Scholar",
  "Value-based School Curriculum Designer",
  "Multiple Institutions Founder",
] as const;

export const expertise = [
  "Curriculum Design",
  "International Frameworks",
  "Assessment Science",
  "Islamic Education",
  "Digital Schooling",
  "Teacher Training",
  "School Administration",
] as const;

/**
 * VERIFIED — his own words, from the message on his founder page.
 *
 * This is the quotation the site did not have, and it is set as one. The
 * source message is written for an academy that this site does not name (see
 * status.ts), so the sentences about that academy are left out whole. Nothing
 * that remains is reworded, except that "Here, we believe" opens as "We
 * believe", since the "here" it pointed to is one of the omitted sentences.
 */
export const founderMessage = {
  eyebrow: "Message",
  heading: "A message from Abdullah *Jaman*.",
  basmalah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
  basmalahTranslation: "In the Name of Allah, the Most Merciful",
  lead: "Education, in its truest form, is an act of ibādah — a sacred trust entrusted to humanity by Allah ﷻ. It is not merely the transfer of information, but the cultivation of hearts, minds, and character in a way that leads a learner closer to truth, responsibility, and purpose.",
  body: [
    "Over the past two decades, I have witnessed the beauty of learning — and also its painful distortions. I have seen education reduced to grades without wisdom, speed without depth, and success without values. I have seen children burdened with pressure, yet deprived of meaning; fluent in answers, yet unsure of purpose.",
    "This reality compelled me to pause, reflect, and ask a fundamental question: What kind of education do our children truly deserve?",
    "We believe that knowledge must walk hand in hand with faith, and excellence must be grounded in ethics. We believe that learning should awaken curiosity, discipline the intellect, soften the heart, and strengthen one’s relationship with Allah ﷻ.",
  ],
  refrain: [
    "We do not rush learning. We honour its natural pace.",
    "We do not fragment knowledge. We connect it with meaning.",
    "We do not teach for examinations alone. We teach for life.",
  ],
  signoff: "With faith, hope, and responsibility",
  cta: { label: "Read the full message", href: "/about#message" },
} as const;

/** The verse that closes his founder page. Scripture, cited, not a claim. */
export const verse = {
  arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
  translation: "Read in the name of your Lord who created.",
  reference: "Surah Al-‘Alaq, 96:1",
  note: "The First Revelation — A Command to Seek Knowledge",
} as const;

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
    label: "Studied",
    value: "Dhaka · Cambridge",
    detail: "Sociology, Aqidah, Education and Assessment",
  },
];

/**
 * The philosophy teaser.
 *
 * APPROVED FRAMING, not a verified quotation. The owner asked for his
 * educational philosophy to be introduced, and this is written from the
 * documented material — the integration of academic standards with character
 * and Islamic values. It states a position rather than reporting words he
 * said, and nothing here is presented as his phrasing.
 */
export const aboutTeaser = {
  eyebrow: "Philosophy",
  headline: "Academic rigour and character are not *separate* subjects.",
  body: [
    "A school can teach a child to pass an examination without teaching them who to be. The two are not in tension, and treating them as separate timetables is how they come apart.",
    "His work holds them together — an academic standard that would stand anywhere, taught inside a framework of Islamic values, with the development of the whole child treated as the actual objective rather than a line in a prospectus.",
  ],
  cta: { label: "Read more about Abdullah", href: "/about" },
} as const;

/**
 * The closing statement.
 *
 * NOT A QUOTATION, and deliberately not typeset as one — no quotation marks,
 * no attribution rule, no name beneath it. No verified quotation from him has
 * been supplied, and setting composed words in quote marks under his name
 * would be inventing a quotation, which is the one thing a page like this must
 * not do. It reads as the site's statement of his position, which is what it
 * is. Replace it the moment something he actually said is on the record.
 */
export const closingStatement = {
  eyebrow: "In closing",
  text: "Education is not only what a child knows by the end of it. It is who they have become, and what they do with what they know.",
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
    { label: "Specialism", value: "Curriculum Design & Islamic Education" },
    { label: "Experience", value: "20+ years in education" },
    {
      label: "Institutions",
      value: "Wheaton International School, Guidance International School",
    },
    { label: "Based in", value: site.location },
    {
      label: "Studied at",
      value:
        "University of Dhaka · Al-Madinah International University · University of Cambridge",
    },
  ],
} as const;
