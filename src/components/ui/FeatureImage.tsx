import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/content/types";

type FeatureImageProps = {
  image: ImageAsset;
  caption?: string;
  /** Set on the one that is above the fold for its page. */
  priority?: boolean;
  className?: string;
};

/**
 * A single landscape photograph set into a page, at the full width of the text
 * column.
 *
 * Deliberately without the hover zoom the gallery tiles carry. The line is by
 * category rather than by whether the image is clickable — neither is. A
 * gallery is a grid you browse, and a small push-in rewards looking closer; an
 * image set into a page is illustrating the prose around it, and something
 * that moves under the cursor there is an effect competing with the reading.
 */
export function FeatureImage({
  image,
  caption,
  priority = false,
  className,
}: FeatureImageProps) {
  return (
    <Reveal className={cn(className)}>
      <Figure
        image={image}
        caption={caption}
        priority={priority}
        // One column wide at every breakpoint, capped at the container's own
        // maximum so the largest screens do not fetch more than they show.
        sizes="(min-width: 1280px) 1152px, (min-width: 640px) 92vw, 90vw"
      />
    </Reveal>
  );
}
