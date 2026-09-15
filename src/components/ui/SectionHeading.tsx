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
  className?: string;
  id?: string;
  as?: "h1" | "h2";
};

/**
 * Every major section opens with this, so the hierarchy is identical
 * everywhere: eyebrow, title, supporting line, accent rule.
 *
 * The title deliberately stays one size across the site. Scaling headings per
 * section to signal importance is the thing that makes a page feel assembled
 * from templates; the accent and the section index carry that signal instead,
 * at a size that does not disturb the reading rhythm.
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
  className,
  id,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const inverse = tone === "inverse";

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
            Heading === "h1" ? "text-display-xl" : "text-display-lg",
            inverse ? "text-on-inverse" : "text-content",
          )}
        >
          {title}
        </Heading>
        {lede ? (
          <p
            className={cn(
              "max-w-2xl text-lede",
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
            className={cn("mt-1", align === "center" && "mx-auto")}
          />
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
