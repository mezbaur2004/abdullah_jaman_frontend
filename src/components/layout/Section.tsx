import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "paper" | "soft" | "ink";
  /** Vertical rhythm. "tight" is for sections that sit directly on a sibling. */
  spacing?: "default" | "tight" | "loose";
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

const tones = {
  paper: "bg-paper text-ink-900",
  soft: "bg-paper-soft text-ink-900",
  ink: "bg-ink-950 text-paper",
} as const;

const spacings = {
  tight: "py-14 sm:py-16 lg:py-20",
  default: "py-20 sm:py-28 lg:py-36",
  loose: "py-24 sm:py-32 lg:py-44",
} as const;

export function Section({
  children,
  id,
  className,
  tone = "paper",
  spacing = "default",
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(tones[tone], spacings[spacing], className)}
      {...aria}
    >
      {children}
    </section>
  );
}
