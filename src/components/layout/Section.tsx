import type { ReactNode } from "react";

import { Container } from "./Container";
import { cn } from "@/lib/cn";

type Tone = "base" | "soft" | "raised" | "inverse";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: Tone;
  /** Vertical rhythm. "tight" is for a band that supports its neighbour. */
  spacing?: "default" | "tight" | "loose";
  /**
   * A rule along the top edge. On by default: adjacent sections in the same
   * tone would otherwise run together, and the rule is what makes every
   * boundary legible rather than only the ones where the tone happens to
   * change.
   */
  divider?: boolean;
  /** Two-digit marker shown against the section's top rule, e.g. "03". */
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
  inverse: "bg-surface-inverse text-on-inverse",
};

/**
 * Top and bottom are declared separately rather than as `py-*` plus a `pt-*`
 * override: both compile to padding-top, so which one won would depend on
 * Tailwind's internal ordering rather than on anything stated here.
 *
 * An indexed section gets a shorter top inset because the index row above it
 * already carries its own.
 */
const spacings = {
  tight: {
    plain: "py-14 sm:py-16 lg:py-20",
    indexed: "pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-12",
  },
  default: {
    plain: "py-20 sm:py-28 lg:py-32",
    indexed: "pb-20 pt-10 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-14",
  },
  loose: {
    plain: "py-24 sm:py-32 lg:py-40",
    indexed: "pb-24 pt-10 sm:pb-32 sm:pt-12 lg:pb-40 lg:pt-14",
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

  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        divider && "border-t",
        divider && (inverse ? "border-line-inverse" : "border-line"),
        className,
      )}
      {...aria}
    >
      {index ? (
        <Container className="pt-6 sm:pt-8">
          <p
            className={cn(
              "flex items-center gap-3 text-eyebrow font-medium uppercase",
              inverse ? "text-on-inverse-muted" : "text-content-subtle",
            )}
          >
            <span className={inverse ? "text-accent-on-inverse" : "text-accent"}>
              {index}
            </span>
            {indexLabel ? (
              <>
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-px w-6",
                    inverse ? "bg-line-inverse" : "bg-line-strong",
                  )}
                />
                <span>{indexLabel}</span>
              </>
            ) : null}
          </p>
        </Container>
      ) : null}

      <div className={spacings[spacing][index ? "indexed" : "plain"]}>
        {children}
      </div>
    </section>
  );
}
