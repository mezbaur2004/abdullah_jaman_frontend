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
  "group inline-flex items-center justify-center gap-2.5 text-sm font-medium tracking-[0.01em] transition-colors duration-300 ease-editorial";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-ink-900 px-7 py-3.5 text-paper hover:bg-ink-700",
  secondary:
    "rounded-full border border-ink-900/20 px-7 py-3.5 text-ink-900 hover:border-ink-900/50 hover:bg-ink-900/[0.03]",
  inverse:
    "rounded-full bg-paper px-7 py-3.5 text-ink-900 hover:bg-brass-200",
  quiet:
    "border-b border-ink-900/25 pb-1 text-ink-900 hover:border-ink-900",
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
          "size-4 transition-transform duration-300 ease-editorial",
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
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
