/**
 * PLACEHOLDER CONTENT — see CONTENT.md.
 * Add a real phone number and postal address before launch, or leave them
 * empty and the contact page will simply omit those rows.
 */

export const contactIntro = {
  eyebrow: "Contact",
  headline: "Start a conversation.",
  lede: "For speaking invitations, academic partnerships, media requests or institutional advisory work.",
} as const;

export const contactChannels = [
  {
    label: "Speaking & events",
    description:
      "Keynotes, panels and workshops on school leadership, curriculum design and teacher development.",
  },
  {
    label: "Academic partnerships",
    description:
      "Curriculum architecture, academic governance and faculty development work with institutions.",
  },
  {
    label: "Media & press",
    description:
      "Interviews, commentary and contributed writing on education and institutional leadership.",
  },
];

export const contactCta = {
  eyebrow: "Get in touch",
  headline: "If the work here is close to something you are trying to build, write.",
  lede: "Enquiries about speaking, partnerships and advisory work are read personally.",
} as const;
