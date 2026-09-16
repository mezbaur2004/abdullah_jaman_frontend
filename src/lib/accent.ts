/**
 * The accents, and the classes each one resolves to.
 *
 * One table, so a section, its divider, its eyebrow and its cards cannot end
 * up disagreeing about which colour they are using. Components take an
 * `accent` and read from here; none of them names a colour itself.
 *
 * Gold is the identity and the default. It marks the eyebrow, the section
 * number, the arrow on a link and the rule under the active nav item, and it
 * should stay the common case — a page that alternates three accents in equal
 * measure has no accent at all, only stripes. Navy is the sober alternative
 * for a section that would be loud in brass. Red is rare on purpose.
 *
 * These used to be blue, yellow and red, with blue doing most of the work.
 * The rename is not cosmetic: brass is now the accent and navy is the brand,
 * so a component asking for `"blue"` was asking for a colour the site no
 * longer has.
 */
export const ACCENTS = ["gold", "navy", "red"] as const;
export type Accent = (typeof ACCENTS)[number];

type AccentClasses = {
  /** A block or rule a few pixels across. Saturated; never carries text. */
  mark: string;
  /** Same, on the navy band. */
  markInverse: string;
  /** Type set in the accent. Dark enough to read; not the saturated value. */
  text: string;
  textInverse: string;
  /** A hairline border in the accent. */
  border: string;
  /** A wash, for a card's micro-line background or a soft fill. */
  soft: string;
};

export const accents: Record<Accent, AccentClasses> = {
  gold: {
    mark: "bg-accent-solid",
    markInverse: "bg-accent-on-inverse",
    text: "text-accent",
    textInverse: "text-accent-on-inverse",
    border: "border-accent-solid",
    soft: "bg-accent-soft",
  },
  navy: {
    mark: "bg-ink-solid",
    markInverse: "bg-ink-on-inverse",
    text: "text-ink",
    textInverse: "text-ink-on-inverse",
    border: "border-ink-solid",
    soft: "bg-ink-soft",
  },
  red: {
    mark: "bg-emphasis-solid",
    markInverse: "bg-emphasis-on-inverse",
    text: "text-emphasis",
    textInverse: "text-emphasis-on-inverse",
    border: "border-emphasis-solid",
    soft: "bg-emphasis-soft",
  },
};

/** Picks the mark or text class for the tone a component is sitting on. */
export function accentMark(accent: Accent, inverse = false) {
  return inverse ? accents[accent].markInverse : accents[accent].mark;
}

export function accentText(accent: Accent, inverse = false) {
  return inverse ? accents[accent].textInverse : accents[accent].text;
}

/**
 * The accent for one card in a group.
 *
 * Alternating with navy rather than cycling all three: a grid where every card
 * is a different colour has no accent, only stripes. In a navy section this
 * returns navy throughout and nothing varies, which is the intended common
 * case — the variation only appears where a section carries brass.
 */
export function cardAccent(section: Accent, index: number): Accent {
  return index % 2 === 0 ? section : "navy";
}
