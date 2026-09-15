import type { ReactNode } from "react";

import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { cn } from "@/lib/cn";

type Tone = "base" | "soft" | "raised" | "accent" | "inverse";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: Tone;
  /** Vertical rhythm. "tight" is for a band that supports its neighbour. */
  spacing?: "default" | "tight" | "loose";
  /**
   * The decorative rule along the top edge. On by default: adjacent sections
   * in the same tone would otherwise run together, and the separator is what
   * makes every boundary legible rather than only the ones where the tone
   * happens to change.
   */
  divider?: boolean;
  /** Two-digit marker shown above the heading, e.g. "03". */
  index?: string;
  /** Rendered beside the index, naming the section in the page's sequence. */
  indexLabel?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

const tones: Record<Tone, string> = {
  base: "bg-surface text-content",
  soft: "bg-surface-soft text-content",
  raised: "bg-surface-raised text-content",
  /* The tinted band. Carries the brand hue at low saturation, so the page can
     change key without reaching for the full dark band every time. */
  accent: "bg-surface-accent text-content",
  inverse: "bg-surface-inverse text-on-inverse",
};

/**
 * Top and bottom are declared separately rather than as `py-*` plus a `pt-*`
 * override: both compile to padding-top, so which one won would depend on
 * Tailwind's internal ordering rather than on anything stated here.
 *
 * An indexed section splits its top inset in two — most of it above the marker,
 * a small remainder below — so the marker, the heading and the lede read as one
 * block instead of the number floating alone at the top of the band.
 */
const spacings = {
  tight: {
    plain: "py-14 sm:py-16 lg:py-20",
    marker: "pt-12 sm:pt-14 lg:pt-16",
    indexed: "pb-14 pt-5 sm:pb-16 sm:pt-6 lg:pb-20",
  },
  default: {
    plain: "py-20 sm:py-28 lg:py-32",
    marker: "pt-16 sm:pt-20 lg:pt-24",
    indexed: "pb-20 pt-5 sm:pb-28 sm:pt-6 lg:pb-32 lg:pt-7",
  },
  loose: {
    plain: "py-24 sm:py-32 lg:py-40",
    marker: "pt-16 sm:pt-24 lg:pt-28",
    indexed: "pb-24 pt-5 sm:pb-32 sm:pt-6 lg:pb-40 lg:pt-7",
  },
} as const;

export function Section({
  children,
  id,
  className,
  tone = "base",
  spacing = "default",
  divider = true,
  index,
  indexLabel,
  ...aria
}: SectionProps) {
  const inverse = tone === "inverse";
  const rhythm = spacings[spacing];

  return (
    <section id={id} className={cn(tones[tone], className)} {...aria}>
      {divider ? (
        <SectionSeparator tone={inverse ? "inverse" : "base"} />
      ) : null}

      {index ? (
        <Container className={rhythm.marker}>
          <Eyebrow tone={inverse ? "inverse" : "base"} index={index}>
            {indexLabel}
          </Eyebrow>
        </Container>
      ) : null}

      <div className={index ? rhythm.indexed : rhythm.plain}>{children}</div>
    </section>
  );
}
