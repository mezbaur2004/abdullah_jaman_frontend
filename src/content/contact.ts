/**
 * TO COLLECT — professional email, phone, WhatsApp, LinkedIn and office
 * address. None have been supplied.
 *
 * While `site.email` is blank every email link on the site disappears, and the
 * contact page falls back to the one verified route: the Wheaton International
 * School website.
 */

export const contactIntro = {
  eyebrow: "Contact",
  headline: "Get in *touch*.",
  lede: "For speaking invitations, academic partnerships, media requests and institutional enquiries.",
} as const;

export const contactChannels = [
  {
    label: "Speaking & events",
    description:
      "Invitations to speak, take part in panels, or contribute to education events.",
  },
  {
    label: "Institutional enquiries",
    description:
      "Enquiries relating to Wheaton International School or Guidance International School.",
  },
  {
    label: "Media & press",
    description: "Interview requests and press enquiries.",
  },
];

/**
 * Shown while no direct contact details exist. Delete once `site.email` is set.
 */
export const contactPending =
  "Direct contact details are being confirmed. In the meantime, enquiries can be directed through the Wheaton International School website.";

export const contactCta = {
  eyebrow: "Get in touch",
  headline: "Enquiries and invitations are *welcome*.",
  lede: "For speaking, partnerships, media and institutional enquiries.",
} as const;
