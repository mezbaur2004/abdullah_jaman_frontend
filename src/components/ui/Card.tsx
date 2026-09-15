import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Tone = "raised" | "soft" | "inverse" | "outline" | "feature";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  tone?: Tone;
  /** Adds a hover lift. Only for cards that are themselves a link. */
  interactive?: boolean;
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
  outline: "border border-line bg-transparent",
  inverse:
    "border border-line-inverse bg-surface-inverse text-on-inverse shadow-card",
  // For the one card in a group that should draw the eye. The accent border is
  // what carries it in dark mode, where `surface-inverse` sits too close to
  // `surface-raised` for the fill alone to register as a difference.
  feature:
    "border border-accent/45 bg-surface-inverse text-on-inverse shadow-card",
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
  interactive = false,
  padding = "md",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-card",
        tones[tone],
        paddings[padding],
        interactive &&
          "transition-shadow duration-300 ease-editorial hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
