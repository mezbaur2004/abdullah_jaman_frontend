import type { ImageAsset, Organization, Testimonial } from "./types";

/**
 * PLACEHOLDER CONTENT — see CONTENT.md.
 * Narrative copy is written in the intended voice but has not been approved.
 * Portraits point at generated placeholder plates; drop real photography in at
 * the same paths and dimensions and nothing else needs to change.
 */

export const portrait: ImageAsset = {
  src: "/images/portrait-hero.jpg",
  alt: "Portrait of Abdullah Jaman",
  width: 1200,
  height: 1500,
};

export const portraitSecondary: ImageAsset = {
  src: "/images/portrait-about.jpg",
  alt: "Abdullah Jaman photographed at work",
  width: 1200,
  height: 1500,
};

export const hero = {
  eyebrow: "Educationist & Institution Builder",
  headline: "Building schools that outlast the people who start them.",
  lede: "Abdullah Jaman has spent his career turning educational intent into institutions — designing the academic systems, teaching cultures and leadership structures that let a school keep its standards long after the founding team has moved on.",
  primaryCta: { label: "Read the full story", href: "/about" },
  secondaryCta: { label: "Get in touch", href: "/contact" },
} as const;

export const organizations: Organization[] = [
  {
    name: "Pedago Academy",
    role: "Managing Director",
    summary:
      "An education venture building teaching capacity, curriculum design and academic leadership programmes.",
  },
  {
    name: "Wheaton International School",
    role: "Founder & Managing Director",
    summary:
      "An international-curriculum school founded on a structured, inquiry-led academic model.",
  },
  {
    name: "Guidance International School",
    role: "Principal",
    summary:
      "A school community focused on academic rigour paired with character and pastoral care.",
  },
];

export const aboutTeaser = {
  eyebrow: "About",
  headline: "A career spent on the unglamorous half of education.",
  body: [
    "Most conversations about schools begin with buildings and end with results. The work in between — how a syllabus is sequenced, how a new teacher is coached through their first difficult term, how a leadership team makes decisions when nobody is watching — is where a school is actually made or lost.",
    "That middle ground has been Abdullah Jaman's working life. As Managing Director of Pedago Academy and founding leader of Wheaton International School, he has built academic systems from first principles and stayed close enough to the classroom to know when they are failing.",
  ],
  cta: { label: "More about Abdullah", href: "/about" },
} as const;

export const aboutPage = {
  eyebrow: "About",
  headline: "Abdullah Jaman",
  lede: "Educationist, institution builder and school leader, working at the point where academic ambition meets the systems that have to deliver it.",
  sections: [
    {
      heading: "The work",
      body: [
        "Abdullah Jaman builds and leads schools. That means curriculum architecture, teacher development, academic governance and the day-to-day judgement calls that decide whether a stated standard is a real one. He currently serves as Managing Director of Pedago Academy, Founder and Managing Director of Wheaton International School, and Principal of Guidance International School.",
        "Across those roles the brief has been consistent: establish an academic model that is demanding but humane, build a teaching team capable of running it, and put enough structure around both that the institution does not depend on any single person — including him.",
      ],
    },
    {
      heading: "Approach",
      body: [
        "Start with the classroom and work outwards. Policy that has never survived contact with a Tuesday afternoon lesson is not policy, it is paperwork. Every system introduced is tested against whether it makes a teacher's job clearer and a student's learning more visible.",
        "Measure what is uncomfortable to measure. Attendance and grades are easy. Whether students can defend an argument, whether a new teacher is genuinely improving, whether parents trust the school with a difficult conversation — those take more effort to see, and they are the ones that predict where an institution ends up.",
      ],
    },
    {
      heading: "Beyond the schools",
      body: [
        "Alongside institutional work, Abdullah Jaman writes and speaks on school leadership, teacher development and the practical realities of running an academic institution — sharing what has worked, and what has been expensive to learn.",
      ],
    },
  ],
  facts: [
    { label: "Focus", value: "School leadership & academic systems" },
    { label: "Based in", value: "Dhaka, Bangladesh" },
    { label: "Currently", value: "Managing Director, Pedago Academy" },
    { label: "Speaks on", value: "Curriculum design, teacher development" },
  ],
} as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "He is unusually willing to sit in a classroom and watch before changing anything. By the time a decision is announced, it has already been argued against harder than anyone in the room could manage.",
    name: "Placeholder Name",
    title: "Head of Academics, placeholder institution",
  },
];
