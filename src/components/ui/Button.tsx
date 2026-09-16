import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { accentMark, type Accent } from "@/lib/accent";

type Variant = "primary" | "secondary" | "inverse" | "quiet";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Which accent the secondary button's micro-rule uses on hover. */
  accent?: Accent;
  className?: string;
  /** Adds context for links whose label alone is ambiguous out of context. */
  srSuffix?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden text-ui font-medium tracking-[0.005em] transition-[transform,background-color,border-color,box-shadow,color]";

const variants: Record<Variant, string> = {
  /**
   * Navy, and on hover the accent arrives: brass ground, navy type.
   *
   * The hover is deliberately not a shade of the resting state. A button that
   * goes from navy to slightly-darker navy is a button reporting that it
   * noticed you; one that turns brass is the identity answering. It is the
   * loudest single moment on the site and the only place the accent fills
   * anything larger than a rule.
   */
  primary:
    "rounded-control bg-action px-8 py-4 text-on-action shadow-card hover:translate-y-[var(--hover-lift)] hover:bg-action-hover hover:text-on-action-hover hover:shadow-card-hover",
  // Brass border, brass type, transparent ground — the quieter half of the pair.
  secondary:
    "rounded-control border border-line-accent px-8 py-4 text-accent hover:translate-y-[var(--hover-lift)] hover:border-accent-solid hover:bg-accent-soft",
  // For the navy band, where the fill has to read light in both themes.
  inverse:
    "rounded-control bg-action-inverse px-8 py-4 text-on-action-inverse hover:translate-y-[var(--hover-lift)] hover:bg-action-inverse-hover",
  quiet: "border-b-2 border-line-accent pb-1 text-accent hover:border-accent-solid",
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function Button({
  href,
  children,
  variant = "primary",
  accent = "gold",
  className,
  srSuffix,
}: ButtonProps) {
  const external = isExternal(href);
  const Icon = external ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      {/* The secondary button's micro-accent: a rule that draws itself along
          the bottom edge on hover. Only the secondary gets one — the primary
          turns brass all over and has nothing left to add. */}
      {variant === "secondary" ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 transition-transform group-hover:scale-x-100",
            accentMark(accent),
          )}
        />
      ) : null}
      <span>
        {children}
        {srSuffix ? <span className="sr-only"> {srSuffix}</span> : null}
      </span>
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className={cn(
          "size-[1.05rem] transition-transform",
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
