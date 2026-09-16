import type { ReactNode } from "react";

import { GeometricPattern } from "./GeometricPattern";
import { cn } from "@/lib/cn";

type Tone = "raised" | "inverse" | "ivory";

type PanelProps = {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  /** Adds the geometric layer inside the panel, clipped to its own corners. */
  pattern?: boolean;
  padding?: "md" | "lg";
};

const tones: Record<Tone, string> = {
  raised: "border-line bg-surface-raised text-content shadow-raise",
  inverse: "border-line-inverse bg-surface-inverse text-on-inverse shadow-raise",
  ivory: "border-line bg-surface-ivory text-content shadow-raise",
};

const paddings = {
  md: "p-8 sm:p-10 lg:p-14",
  lg: "p-8 sm:p-12 lg:p-16",
} as const;

/**
 * A contained surface that holds a whole section's content, rather than one
 * card's worth of it.
 *
 * The distinction from `Card` is scale and intent, and it shows in the radius:
 * a panel's corner is noticeably rounder than a card's, so a panel never reads
 * as one very large card that has swallowed the section. It is a plane the
 * content sits on, lifted off the band behind it.
 *
 * Use it where a section is making a single move — an invitation, a statement
 * — and the band around it is doing the framing. A section full of cards does
 * not want one, because a surface inside a surface inside a surface is where
 * depth stops meaning anything.
 */
export function Panel({
  children,
  className,
  tone = "raised",
  pattern = false,
  padding = "lg",
}: PanelProps) {
  return (
    <div
      className={cn(
        // `overflow-hidden` is what keeps the pattern off the corners. Nothing
        // interactive is clipped by it: the panel's content is ordinary flow,
        // and focus rings sit inside padding that starts at 32px.
        "relative isolate overflow-hidden rounded-panel border",
        tones[tone],
        paddings[padding],
        className,
      )}
    >
      {pattern ? (
        <GeometricPattern
          intensity={tone === "inverse" ? "soft" : "faint"}
          fade="radial"
          className="-z-10"
        />
      ) : null}
      {children}
    </div>
  );
}
