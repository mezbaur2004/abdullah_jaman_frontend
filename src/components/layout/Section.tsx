import type { ReactNode } from "react";

import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/accent";

type Tone = "base" | "soft" | "raised" | "accent" | "ivory" | "inverse" | "gold";

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
  /**
   * The section's accent, carried by its separator and its index marker.
   * Passed in by the page rather than chosen here: rhythm is a property of the
   * sequence, and a section cannot see the sequence it is in.
   */
  accent?: Accent;
  /** Which divider the boundary above this section uses. */
  separator?: "band" | "quiet";
  /**
   * The depth wash behind the band. Defaults to on for every coloured tone and
   * off for the plain paper ones, which is almost always the right answer:
   * paper is the page's zero and should read as flat, and a coloured band is
   * the thing that needs a near side and a far side to stop reading as a
   * rectangle of paint. Pass it explicitly only to argue with that.
   */
  veil?: boolean;
  /** Adds the geometric layer behind the band. Used sparingly — see below. */
  pattern?: boolean;
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
  /* Ivory — warmer than the blue-white paper, and reserved for the places
     where the writing itself is the subject. It is what makes the books
     material feel like a different kind of page without leaving the palette. */
  ivory: "bg-surface-ivory text-content",
  inverse: "bg-surface-inverse text-on-inverse",
  /* The accent at full strength, across a whole band. One per page. */
  gold: "bg-surface-gold text-on-gold",
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

/** The tones whose ground is a colour rather than paper, and so want depth. */
const washed: Record<Tone, boolean> = {
  base: false,
  raised: false,
  soft: true,
  accent: true,
  ivory: true,
  inverse: true,
  /* No wash on gold: a gradient over a saturated ground reads as a printing
     fault rather than as depth. */
  gold: false,
};

export function Section({
  children,
  id,
  className,
  tone = "base",
  spacing = "default",
  divider = true,
  accent = "gold",
  separator = "band",
  veil,
  pattern = false,
  index,
  indexLabel,
  ...aria
}: SectionProps) {
  const inverse = tone === "inverse";
  const gold = tone === "gold";
  const rhythm = spacings[spacing];
  const washing = veil ?? washed[tone];

  return (
    <section
      id={id}
      className={cn(
        "relative isolate",
        // Hosts the view timeline the pattern inside drifts against.
        pattern && "geo-parallax-host",
        tones[tone],
        className,
      )}
      {...aria}
    >
      {/* The depth layers, both decorative and both behind everything: `isolate`
          on the section makes the negative z-index safe by giving it a stacking
          context of its own, so these can never slide underneath the section's
          own background or above the page. */}
      {washing ? (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            inverse ? "section-veil-inverse" : "section-veil",
          )}
        />
      ) : null}
      {pattern ? (
        <GeometricPattern
          intensity={inverse ? "soft" : "faint"}
          fade="radial"
          parallax
          className="-z-10"
        />
      ) : null}

      {divider ? (
        <SectionSeparator
          variant={separator}
          tone={inverse ? "inverse" : gold ? "gold" : "base"}
        />
      ) : null}

      {index ? (
        <Container className={rhythm.marker}>
          <Eyebrow
            tone={inverse ? "inverse" : gold ? "gold" : "base"}
            accent={accent}
            index={index}
          >
            {indexLabel}
          </Eyebrow>
        </Container>
      ) : null}

      <div className={index ? rhythm.indexed : rhythm.plain}>{children}</div>
    </section>
  );
}
