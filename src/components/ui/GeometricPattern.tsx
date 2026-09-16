import { cn } from "@/lib/cn";

type GeometricPatternProps = {
  /**
   * How present the tile is. `faint` is the default and the right answer
   * almost everywhere; `soft` exists for the dark bands, where the same
   * opacity over navy reads as roughly half as much.
   */
  intensity?: "faint" | "soft";
  /** Fades the tile downward so it never meets a section edge as a hard crop. */
  fade?: boolean;
  className?: string;
};

const intensities = {
  faint: "opacity-[0.05]",
  soft: "opacity-[0.09]",
} as const;

/**
 * The geometric layer: an eight-point khatam tile at very low opacity.
 *
 * Purely decorative and `aria-hidden`, with `pointer-events-none` so it never
 * interferes with anything above it. It is positioned by its parent — give the
 * parent `relative` and this fills it.
 *
 * Used on a handful of surfaces only. A motif behind every section stops being
 * a character and becomes wallpaper, which is the opposite of the intent: the
 * reader should feel the design has a cultural grounding without being able to
 * point at where.
 */
export function GeometricPattern({
  intensity = "faint",
  fade = false,
  className,
}: GeometricPatternProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        fade ? "geo-fade geo-pattern" : "geo-pattern",
        intensities[intensity],
        className,
      )}
    />
  );
}
