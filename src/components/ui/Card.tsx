import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { accentMark, type Accent } from "@/lib/accent";

type Tone = "raised" | "soft" | "accent" | "inverse" | "outline" | "feature";

/**
 * How the card answers the cursor.
 *
 * The distinction is not decorative. `lift` says *this card goes somewhere* —
 * it is for cards that are a link or contain one, and the movement is the
 * affordance. `quiet` is for cards that only hold information: they
 * acknowledge the cursor with colour and nothing else, because lifting a card
 * that cannot be clicked promises something the card does not deliver.
 */
type Hover = "none" | "lift" | "quiet";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  tone?: Tone;
  hover?: Hover;
  /**
   * Which accent this card's hover reveals. Blue is the default and should
   * stay the common case; yellow and red are for a card that wants marking out
   * within a group, not for every card in one.
   */
  accent?: Accent;
  /**
   * Which edge the accent line draws along. `left` suits a card read as a row
   * — an experience entry, a role — where a vertical rule reads as a margin
   * mark rather than as an underline.
   */
  accentEdge?: "top" | "left" | "bottom";
  /**
   * Decoration drawn behind the card's content — a monogram, a watermark.
   *
   * It goes inside the clip layer rather than into `children`, which is what
   * guarantees a graphic bigger than the card is cut at the corner radius
   * instead of escaping it. The layer is `pointer-events: none`, so nothing
   * here can ever intercept a click meant for the card.
   */
  backdrop?: ReactNode;
  /** Adds the light sweep. Dark tones only — see `.card-clip` in globals.css. */
  sweep?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
};

/**
 * Elevation is carried by a border *and* a shadow rather than a shadow alone.
 * The shadow does most of the work on paper; in dark mode a shadow against a
 * near-black ground is close to invisible, so the border and the raised
 * surface are what separate the card from the page.
 */
const tones: Record<Tone, string> = {
  raised: "border border-line bg-surface-raised shadow-card",
  soft: "border border-line bg-surface-soft",
  accent: "border border-line-accent bg-accent-soft",
  outline: "border border-line bg-transparent",
  inverse:
    "border border-line-inverse bg-surface-inverse text-on-inverse shadow-card",
  // For the one card in a group that should draw the eye. The accent border is
  // what carries it in dark mode, where `surface-inverse` sits too close to
  // `surface-raised` for the fill alone to register as a difference.
  feature:
    "border border-accent/50 bg-surface-inverse text-on-inverse shadow-card",
};

/**
 * Both hovers bring the border to blue — that shared note is what makes the
 * whole site's cards feel like one family, whichever accent a card carries.
 * Only `lift` adds the movement and the deeper shadow.
 *
 * The lift reads its distance from `--hover-lift` rather than from a Tailwind
 * step, so the one number in globals.css governs every card on the site. It
 * used to be `-translate-y-1`, which is 4px — a value nothing else agreed
 * with, and a third further than the system's own figure.
 */
const hovers: Record<Hover, string> = {
  none: "",
  lift: "hover:translate-y-[var(--hover-lift)] hover:border-accent/70 hover:shadow-card-hover",
  quiet: "hover:border-accent/50 hover:shadow-card",
};

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
} as const;

export function Card({
  children,
  className,
  as: Tag = "div",
  tone = "raised",
  hover = "none",
  accent = "gold",
  accentEdge = "top",
  backdrop,
  sweep = false,
  padding = "md",
}: CardProps) {
  const dark = tone === "inverse" || tone === "feature";
  const decorated = hover !== "none" || sweep || Boolean(backdrop);

  return (
    <Tag
      className={cn(
        // `group/card` is the hook every child effect hangs off — an arrow that
        // travels, an icon frame that fills, an image that pushes in. They fire
        // from anywhere on the card rather than only from the link itself,
        // which is what makes the whole card feel like one target.
        "group/card relative rounded-card",
        // Duration and easing come from the Tailwind transition defaults, which
        // are set once from the motion tokens in globals.css.
        hover !== "none" &&
          "transition-[transform,box-shadow,border-color,background-color]",
        tones[tone],
        hovers[hover],
        paddings[padding],
        className,
      )}
    >
      {/* Everything decorative a card does on hover happens in here, and this
          is the only element on the card that clips. Nothing can escape the
          corner radius because nothing decorative is drawn outside this box —
          not the accent rule, not the sweep, and not anything added later.

          The card itself deliberately does *not* clip: a focus ring on a link
          near a card's edge is drawn 3px outside its box, and an
          `overflow: hidden` on the card would cut it in half. */}
      {decorated ? (
        <span
          aria-hidden="true"
          className="card-clip"
          {...(sweep ? { "data-sweep": "" } : {})}
        >
          {/* The accent micro-line. It draws itself along one edge on hover,
              and is the only place a card shows its accent — a coloured border
              on every card at rest would turn a grid into bunting. */}
          {backdrop}
          {hover !== "none" ? (
            <span
              className={cn(
                "absolute transition-transform",
                accentEdge === "top" &&
                  "inset-x-0 top-0 h-0.5 origin-left scale-x-0 group-hover/card:scale-x-100",
                accentEdge === "left" &&
                  "inset-y-0 left-0 w-0.5 origin-top scale-y-0 group-hover/card:scale-y-100",
                // The bottom rule is thicker and starts visible at a third of
                // its width, so the card reads as underlined at rest and the
                // hover extends it rather than conjuring it.
                accentEdge === "bottom" &&
                  "inset-x-0 bottom-0 h-[3px] origin-left scale-x-[0.33] group-hover/card:scale-x-100",
                accentMark(accent, dark),
              )}
            />
          ) : null}
        </span>
      ) : null}
      {children}
    </Tag>
  );
}
