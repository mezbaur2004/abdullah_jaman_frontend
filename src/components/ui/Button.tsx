import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "quiet";

/** Which accent the secondary button's micro-detail uses on hover. */
type Accent = "blue" | "yellow" | "red";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  accent?: Accent;
  className?: string;
  /** Adds context for links whose label alone is ambiguous out of context. */
  srSuffix?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden text-sm font-medium tracking-[0.01em] transition-[transform,background-color,border-color,box-shadow,color]";

const variants: Record<Variant, string> = {
  // Solid blue, white text, a darker blue on hover and a small lift. No
  // gradient: a flat institutional blue is the whole point of the identity.
  primary:
    "rounded-full bg-action px-7 py-3.5 text-on-action shadow-card hover:-translate-y-0.5 hover:bg-action-hover hover:shadow-card-hover",
  // Blue border, blue text, transparent ground — the quieter half of the pair.
  secondary:
    "rounded-full border border-line-accent px-7 py-3.5 text-accent hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft",
  // For use on the inverse band, where the fill has to read light in both themes.
  inverse:
    "rounded-full bg-action-inverse px-7 py-3.5 text-on-action-inverse hover:-translate-y-0.5 hover:bg-action-inverse-hover",
  quiet:
    "border-b border-line-accent pb-1 text-accent hover:border-accent",
};

/** The secondary button's hover detail — a short rule under the label. */
const accentMarks: Record<Accent, string> = {
  blue: "bg-accent",
  yellow: "bg-highlight-solid",
  red: "bg-emphasis-solid",
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function Button({
  href,
  children,
  variant = "primary",
  accent = "blue",
  className,
  srSuffix,
}: ButtonProps) {
  const external = isExternal(href);
  const Icon = external ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      {/* The secondary button's micro-accent: a rule that draws itself along
          the bottom edge on hover. Only the secondary gets one — the primary
          is already solid blue and has nothing to add. */}
      {variant === "secondary" ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 transition-transform group-hover:scale-x-100",
            accentMarks[accent],
          )}
        />
      ) : null}
      <span>
        {children}
        {srSuffix ? <span className="sr-only"> {srSuffix}</span> : null}
      </span>
      <Icon
        aria-hidden="true"
        strokeWidth={1.5}
        className={cn(
          "size-4 transition-transform",
          external
            ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            : "group-hover:translate-x-1",
        )}
      />
    </>
  );

  const classes = cn(base, variants[variant], className);

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
