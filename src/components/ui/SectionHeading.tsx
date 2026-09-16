import type { ReactNode } from "react";

import { AccentLine } from "./AccentLine";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/accent";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  /** A CTA or supporting note pinned to the right on wide screens. */
  aside?: ReactNode;
  tone?: "base" | "inverse";
  /** Matches the section's accent, so the header and its separator agree. */
  accent?: Accent;
  /**
   * The short accent rule closing the header block. On by default — it is what
   * turns eyebrow, title and lede into one unit instead of three stacked
   * paragraphs.
   */
  rule?: boolean;
  align?: "start" | "center";
  /**
   * `feature` is one step up, for the two or three sections on a page that
   * carry it — the philosophy passage, the author's note, the closing band. It
   * also pairs the closing rule with gold.
   */
  size?: "default" | "feature";
  className?: string;
  id?: string;
  as?: "h1" | "h2";
};

/**
 * Every major section opens with this, so the hierarchy is identical
 * everywhere: eyebrow, title, supporting line, accent rule.
 *
 * The title has exactly two sizes, and the restraint is the point. Scaling a
 * heading per section to signal importance is what makes a page read as
 * assembled from templates, so the accent and the section index carry that
 * signal almost everywhere. `feature` is the one exception: the two or three
 * passages a page is actually built around, where the step up says *this is
 * the argument* and the rest of the page stays at one level beneath it.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  aside,
  tone = "base",
  accent = "blue",
  rule = true,
  align = "start",
  size = "default",
  className,
  id,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const inverse = tone === "inverse";
  const feature = size === "feature";

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        !!aside && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          align === "center" && "items-center text-center",
          !!aside && "lg:max-w-2xl",
        )}
      >
        {eyebrow ? (
          <Eyebrow tone={tone} accent={accent}>
            {eyebrow}
          </Eyebrow>
        ) : null}
        <Heading
          id={id}
          className={cn(
            Heading === "h1" || feature
              ? "text-display-xl"
              : "text-display-lg",
            inverse ? "text-on-inverse" : "text-content",
          )}
        >
          {title}
        </Heading>
        {lede ? (
          <p
            className={cn(
              "text-lede",
              feature ? "max-w-[38rem]" : "max-w-2xl",
              inverse ? "text-on-inverse-muted" : "text-content-muted",
            )}
          >
            {lede}
          </p>
        ) : null}
        {rule ? (
          <AccentLine
            accent={accent}
            tone={tone}
            pair={feature}
            className={cn("mt-1", align === "center" && "mx-auto")}
          />
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
