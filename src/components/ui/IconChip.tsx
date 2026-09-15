import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

type IconChipProps = {
  icon: LucideIcon;
  className?: string;
  tone?: "base" | "inverse";
  size?: "sm" | "md";
};

/** A framed icon. Always decorative — the label beside it carries the meaning. */
export function IconChip({
  icon: Icon,
  className,
  tone = "base",
  size = "md",
}: IconChipProps) {
  const inverse = tone === "inverse";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-chip border",
        size === "md" ? "size-11" : "size-9",
        inverse
          ? "border-line-inverse bg-on-inverse/10 text-accent-on-inverse"
          : "border-line-accent bg-accent-soft text-accent",
        className,
      )}
    >
      <Icon strokeWidth={1.5} className={size === "md" ? "size-5" : "size-4"} />
    </span>
  );
}
