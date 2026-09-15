import Image from "next/image";

import type { ImageAsset } from "@/content/types";
import { cn } from "@/lib/cn";

type FigureProps = {
  image: ImageAsset;
  /** Required: without it next/image ships a srcset sized for a full viewport. */
  sizes: string;
  /** Set on the LCP image only. */
  priority?: boolean;
  caption?: string;
  className?: string;
  /** CSS aspect-ratio value, e.g. "4 / 5". Defaults to the asset's own ratio. */
  ratio?: string;
  rounded?: boolean;
  /**
   * Pushes the image in slightly on hover, cropped by the frame. The move is
   * small on purpose: a photograph that leaps is a carousel effect, while a
   * few per cent reads as the image settling under the cursor.
   */
  zoom?: boolean;
};

/**
 * The single place next/image is configured. Images are cropped by a ratio box
 * rather than by their intrinsic size, so swapping in a photograph of
 * different dimensions never breaks a layout.
 *
 * An empty `alt` marks the image decorative, and it is then hidden from
 * assistive technology rather than announced as an unnamed image.
 */
export function Figure({
  image,
  sizes,
  priority = false,
  caption,
  className,
  ratio,
  rounded = false,
  zoom = false,
}: FigureProps) {
  const decorative = image.alt === "";

  const frame = (
    <div
      className={cn(
        "relative overflow-hidden border border-line bg-surface-soft transition-colors",
        rounded && "rounded-sm",
        // Its own group, so a standalone figure zooms on its own hover; the
        // card group is honoured too, for a figure sitting inside a card.
        zoom && "group/figure hover:border-line-accent",
      )}
      style={{ aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover",
          zoom &&
            "transition-transform duration-500 ease-hover group-hover/figure:scale-[var(--hover-zoom)] group-hover/card:scale-[var(--hover-zoom)]",
        )}
        style={image.position ? { objectPosition: image.position } : undefined}
      />
    </div>
  );

  if (!caption) {
    return <div className={className}>{frame}</div>;
  }

  return (
    <figure className={className}>
      {frame}
      <figcaption className="mt-4 text-sm leading-relaxed text-content-subtle">
        {caption}
      </figcaption>
    </figure>
  );
}
