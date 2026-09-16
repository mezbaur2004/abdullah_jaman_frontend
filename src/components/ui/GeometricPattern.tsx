import { cn } from "@/lib/cn";

type GeometricPatternProps = {
  /**
   * How present the tile is. `faint` is the default and the right answer
   * almost everywhere; `soft` exists for the dark bands, where the same
   * opacity over navy reads as roughly half as much.
   */
  intensity?: "faint" | "soft";
  /**
   * How the tile is released at its edges, so it never meets one as a hard
   * crop. `true` fades it downward, which suits a tall block of prose;
   * `"radial"` anchors it to the top right corner and dissolves it across the
   * panel, which is what the wide shallow surfaces — the hero, the footer —
   * need, since a downward fade there would cut the figure in half.
   */
  fade?: boolean | "radial";
  className?: string;
};

/**
 * The two strengths, each resolved from a theme token rather than a fixed
 * opacity. Gold on navy carries considerably further than gold on ivory, so a
 * single figure cannot serve both: the values tuned for paper vanished in dark
 * mode, and the dark-mode values read as a pattern on paper.
 *
 * Both are lower than they look written down. The figure is drawn at 76px, so
 * a reader has to go looking for it — which is the whole intent.
 */
const intensities = {
  faint: "geo-faint",
  soft: "geo-soft",
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
        "geo-pattern",
        fade === "radial" ? "geo-fade-radial" : fade ? "geo-fade" : null,
        intensities[intensity],
        className,
      )}
    />
  );
}
