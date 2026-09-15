import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** "narrow" is the reading measure used for long-form editorial copy. */
  width?: "default" | "narrow" | "wide";
};

const widths = {
  narrow: "max-w-[46rem]",
  default: "max-w-[78rem]",
  wide: "max-w-[92rem]",
} as const;

export function Container({
  children,
  className,
  as: Tag = "div",
  width = "default",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        widths[width],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
