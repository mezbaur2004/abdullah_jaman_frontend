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
};

/**
 * The single place next/image is configured. Images are cropped by a ratio box
 * rather than by their intrinsic size, so replacing a placeholder plate with a
 * real photograph of different dimensions never breaks a layout.
 */
export function Figure({
  image,
  sizes,
  priority = false,
  caption,
  className,
  ratio,
  rounded = false,
}: FigureProps) {
  const frame = (
    <div
      className={cn(
        "relative overflow-hidden bg-paper-deep",
        rounded && "rounded-sm",
      )}
      style={{ aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
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
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-500">
        {caption}
      </figcaption>
    </figure>
  );
}
