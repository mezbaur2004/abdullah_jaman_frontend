import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

type IconChipProps = {
  icon: LucideIcon;
  className?: string;
  tone?: "base" | "inverse";
  size?: "sm" | "md";
};

/**
 * A framed icon. Always decorative — the label beside it carries the meaning.
 *
 * It answers its card's hover rather than its own: the `group-hover/card`
 * variants are inert unless an ancestor `Card` provides the group, so the same
 * chip works standing alone and brightens in step with the card around it.
 */
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
        "inline-flex shrink-0 items-center justify-center rounded-chip border transition-colors",
        size === "md" ? "size-11" : "size-9",
        inverse
          ? "border-line-inverse bg-on-inverse/10 text-accent-on-inverse group-hover/card:border-accent-on-inverse/50"
          : "border-line-accent bg-accent-soft text-accent group-hover/card:border-accent/60 group-hover/card:text-accent-strong",
        className,
      )}
    >
      <Icon strokeWidth={1.5} className={size === "md" ? "size-5" : "size-4"} />
    </span>
  );
}
