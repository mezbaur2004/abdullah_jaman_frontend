import { Play } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { VideoThumb } from "@/components/media/VideoThumb";
import { cn } from "@/lib/cn";
import type { VideoItem } from "@/content/types";

/** The 11-character video id from a youtu.be, watch or embed link. */
function youtubeId(href: string): string | null {
  const match = href.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/);
  return match ? match[1] : null;
}

/**
 * One video, linked out to YouTube.
 *
 * Shows the video's own YouTube thumbnail, under the red play mark. The navy
 * lattice stays beneath it, so a thumbnail that fails to load still leaves a
 * designed frame rather than a hole.
 */
export function VideoCard({ video, lead = false }: { video: VideoItem; lead?: boolean }) {
  const id = youtubeId(video.href);

  return (
    <Card as="article" padding="none" hover="lift" className={cn("flex h-full flex-col overflow-hidden", lead && "lg:flex-row")}>
      <div
        className={cn(
          "relative isolate flex items-center justify-center overflow-hidden bg-surface-inverse",
          lead ? "aspect-video lg:w-7/12 lg:shrink-0" : "aspect-video",
        )}
      >
        <GeometricPattern intensity="soft" fade="radial" className="-z-10" />
        {id ? (
          <VideoThumb
            id={id}
            sizes={lead ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          />
        ) : null}
        <span
          aria-hidden="true"
          className={cn(
            "flex items-center justify-center rounded-full bg-emphasis-solid text-white shadow-card transition-transform group-hover/card:scale-105",
            lead ? "size-20" : "size-14",
          )}
        >
          <Play
            fill="currentColor"
            strokeWidth={0}
            className={cn("translate-x-0.5", lead ? "size-8" : "size-6")}
          />
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col", lead ? "p-7 sm:p-9 lg:justify-center lg:p-12" : "p-6")}>
        <p className="text-eyebrow font-semibold uppercase text-accent">
          YouTube · {video.kind}
        </p>
        <h3
          className={cn(
            "mt-3 font-display leading-snug text-content",
            lead ? "text-display-md" : "text-2xl",
          )}
        >
          <a
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
          >
            {video.title}
            <span className="sr-only"> (opens YouTube in a new tab)</span>
          </a>
        </h3>
      </div>
    </Card>
  );
}
