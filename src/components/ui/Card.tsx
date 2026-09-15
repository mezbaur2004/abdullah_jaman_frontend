import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

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
    "border border-accent/45 bg-surface-inverse text-on-inverse shadow-card",
};

/**
 * Both hovers change the border to the accent — that shared note is what makes
 * the whole site's cards feel like one family. Only `lift` adds the movement
 * and the deeper shadow.
 */
const hovers: Record<Hover, string> = {
  none: "",
  lift: "hover:-translate-y-[3px] hover:border-accent/55 hover:shadow-card-hover",
  quiet: "hover:border-accent/40",
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
  sweep = false,
  padding = "md",
}: CardProps) {
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
      {children}
    </Tag>
  );
}
