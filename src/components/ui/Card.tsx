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
  accentEdge?: "top" | "left";
  /** Adds the light sweep. Dark tones only — see `.sweep` in globals.css. */
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
 */
const hovers: Record<Hover, string> = {
  none: "",
  lift: "hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-hover",
  quiet: "hover:border-accent/45",
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
  accent = "blue",
  accentEdge = "top",
  sweep = false,
  padding = "md",
}: CardProps) {
  const dark = tone === "inverse" || tone === "feature";

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
        sweep && "overflow-hidden sweep",
        paddings[padding],
        className,
      )}
    >
      {/* The accent micro-line. It draws itself along the card's top edge on
          hover, inside the border radius, and is the only place a card shows
          its accent — a coloured border on every card at rest would turn a
          grid into bunting. */}
      {hover !== "none" ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute transition-transform",
            accentEdge === "top"
              ? "inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-card group-hover/card:scale-x-100"
              : "inset-y-0 left-0 w-0.5 origin-top scale-y-0 rounded-l-card group-hover/card:scale-y-100",
            accentMark(accent, dark),
          )}
        />
      ) : null}
      {children}
    </Tag>
  );
}
