import type { ReactNode } from "react";

import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  /** A CTA or supporting note pinned to the right on wide screens. */
  aside?: ReactNode;
  tone?: "base" | "inverse";
  align?: "start" | "center";
  className?: string;
  id?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  aside,
  tone = "base",
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
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
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
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
