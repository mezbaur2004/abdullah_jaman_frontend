import contactData from "@/lib/data/contact.json";
/**
 * While `site.email` is blank every email link on the site disappears, and the
 * contact page falls back to the verified route: the two school websites. Both
 * of them — he holds the same post at each, and sending every enquiry to one
 * of the pair implies a seniority between them that does not exist.
 */

export const contactIntro = {
  eyebrow: "Contact",
  headline: "Get in *touch*.",
  lede: "For speaking invitations, academic partnerships, media requests and institutional enquiries.",
} as const;

export const contactChannels = contactData.channels;

export const contactCta = {
  eyebrow: "Get in touch",
  headline: "Enquiries and invitations are *welcome*.",
  lede: "For speaking, partnerships, media and institutional enquiries.",
} as const;
