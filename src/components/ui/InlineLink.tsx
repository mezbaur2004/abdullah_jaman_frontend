import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * A link inside a sentence, and the fourth and quietest of the four styles.
 *
 * Gold type with a rule that slides in from the left on hover — the same
 * `.link-underline` the footer has always used, given a component so that
 * every inline link on the site is demonstrably the same link rather than
 * coincidentally similar.
 *
 * It is the only one of the four that does not carry an arrow. An arrow inside
 * a line of prose breaks the line; the other three are all objects with a
 * boundary and can hold one.
 */
export function InlineLink({
  href,
  children,
  tone = "base",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "base" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";
  const classes = cn(
    "link-underline font-medium transition-colors",
    inverse
      ? "text-accent-on-inverse hover:text-on-inverse"
      : "text-accent hover:text-content",
    className,
  );

  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {isHttp ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
