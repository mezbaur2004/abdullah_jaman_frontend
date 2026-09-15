/**
 * The three accents, and the classes each one resolves to.
 *
 * One table, so a section, its separator, its eyebrow and its cards cannot end
 * up disagreeing about which colour they are using. Components take an
 * `accent` and read from here; none of them names a colour itself.
 *
 * Blue is the default everywhere and should stay the common case. Yellow and
 * red are for rhythm — a page that alternates all three in equal measure has
 * no accent at all, only stripes.
 */
export const ACCENTS = ["blue", "yellow", "red"] as const;
export type Accent = (typeof ACCENTS)[number];

type AccentClasses = {
  /** A block or rule a few pixels across. Saturated; never carries text. */
  mark: string;
  /** Same, on the dark band. */
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
  blue: {
    mark: "bg-accent",
    markInverse: "bg-accent-on-inverse",
    text: "text-accent",
    textInverse: "text-accent-on-inverse",
    border: "border-accent",
    soft: "bg-accent-soft",
  },
  yellow: {
    mark: "bg-highlight-solid",
    markInverse: "bg-highlight-on-inverse",
    text: "text-highlight",
    textInverse: "text-highlight-on-inverse",
    border: "border-highlight-solid",
    soft: "bg-highlight-soft",
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
 * Alternating with blue rather than cycling all three: a grid where every card
 * is a different colour has no accent, only stripes. In a blue section this
 * returns blue throughout and nothing varies, which is the intended common
 * case — the variation only appears in the sections that carry a warm accent.
 */
export function cardAccent(section: Accent, index: number): Accent {
  return index % 2 === 0 ? section : "blue";
}
