"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * The YouTube thumbnail. Removes itself if it fails to load, so the card
 * falls back to its drawn navy frame instead of a broken-image icon.
 */
export function VideoThumb({ id, sizes }: { id: string; sizes: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <>
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes={sizes}
        onError={() => setFailed(true)}
        className="-z-10 object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
      />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-scrim/25" />
    </>
  );
}
