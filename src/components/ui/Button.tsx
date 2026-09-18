import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Two of the site's four link styles live here — the primary and the
 * secondary. The other two are SectionLink (the full-width row) and
 * InlineLink (the sliding underline).
 *
 * `secondaryInverse` and `onGold` are not extra styles. They are the same two
 * buttons drawn for a ground they would otherwise disappear against: an ivory
 * outline is invisible on parchment, and a gold fill is invisible on the gold
 * band. Which ground a button sits on is not a design decision a caller gets
 * to make differently each time, so it is named in the variant rather than
 * left to a pile of overrides.
 */
type Variant =
  /** Solid gold, navy type. One per screen. */
  | "primary"
  /** Outline that fills on hover. The quiet half of the pair. */
  | "secondary"
  /** The secondary, drawn in ivory for the navy band. */
  | "secondaryInverse"
  /** The primary, drawn in navy for the gold band. */
  | "onGold";

type Size = "default" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** `lg` is for the hero, where a default button is lost under the display type. */
  size?: Size;
  className?: string;
  /** Adds context for links whose label alone is ambiguous out of context. */
  srSuffix?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-control font-medium tracking-[0.005em] transition-[transform,background-color,border-color,box-shadow,color]";

const sizes: Record<Size, string> = {
  default: "text-ui px-8 py-4",
  lg: "text-base px-9 py-[1.15rem] sm:text-[1.0625rem]",
};

const variants: Record<Variant, string> = {
  /**
   * Gold, filled, with navy type — and it is gold on the light ground as well
   * as the dark one. The primary used to be a navy block that turned brass
   * under the cursor, which made the accent something the button became rather
   * than something it was. Brass reads against parchment and against navy, so
   * one variant now covers both grounds and the single loudest control on a
   * screen is unmistakably the identity's own colour.
   */
  primary:
    "bg-action-inverse text-on-action-inverse shadow-card hover:translate-y-[var(--hover-lift)] hover:bg-action-inverse-hover hover:shadow-card-hover",
  /**
   * An outline that fills. On parchment the line is the page's own ink, for
   * the plain reason that an ivory outline on an ivory ground is not an
   * outline. The gesture is identical to its inverse twin: at rest a
   * rectangle, on hover the rectangle solid and the type reversed out.
   */
  secondary:
    "border border-line-strong text-content hover:translate-y-[var(--hover-lift)] hover:border-action hover:bg-action hover:text-on-action",
  secondaryInverse:
    "border border-line-inverse text-on-inverse hover:translate-y-[var(--hover-lift)] hover:border-on-inverse hover:bg-on-inverse hover:text-surface-inverse",
  onGold:
    "bg-on-gold text-surface-gold shadow-card hover:translate-y-[var(--hover-lift)] hover:bg-on-inverse hover:text-on-gold hover:shadow-card-hover",
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  srSuffix,
}: ButtonProps) {
  const external = isExternal(href);
  const Icon = external ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span>
        {children}
        {srSuffix ? <span className="sr-only"> {srSuffix}</span> : null}
      </span>
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className={cn(
          "transition-transform",
          size === "lg" ? "size-5" : "size-[1.05rem]",
          external
            ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            : "group-hover:translate-x-1",
        )}
      />
    </>
  );

  const classes = cn(base, sizes[size], variants[variant], className);

  if (external) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
        {isHttp ? <span className="sr-only">(opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
