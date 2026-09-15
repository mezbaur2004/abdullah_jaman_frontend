import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "quiet";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Adds context for links whose label alone is ambiguous out of context. */
  srSuffix?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 text-sm font-medium tracking-[0.01em] transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-action px-7 py-3.5 text-on-action hover:bg-action-hover",
  secondary:
    "rounded-full border border-line-strong px-7 py-3.5 text-content hover:border-content hover:bg-content/[0.04]",
  // For use on the inverse band, where the fill has to read light in both themes.
  inverse:
    "rounded-full bg-action-inverse px-7 py-3.5 text-on-action-inverse hover:bg-action-inverse-hover",
  quiet: "border-b border-line-strong pb-1 text-content hover:border-content",
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function Button({
  href,
  children,
  variant = "primary",
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
