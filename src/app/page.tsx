import type { ReactNode } from "react";

import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Awards } from "@/components/home/Awards";
import { ContactCta } from "@/components/home/ContactCta";
import { Credibility } from "@/components/home/Credibility";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { KeyStats } from "@/components/home/KeyStats";
import { MediaHighlights } from "@/components/home/MediaHighlights";
import { Work } from "@/components/home/Work";
import { awards, statistics } from "@/content/achievements";
import { initiatives } from "@/content/experience";
import { gallery } from "@/content/gallery";
import { mediaItems } from "@/content/media";
import { organizations } from "@/content/profile";

/**
 * Most of the dataset is still being collected, so several sections have
 * nothing to show and remove themselves. Numbering them here — rather than
 * hard-coding "01" through "09" into each one — keeps the sequence contiguous
 * as sections appear: with only three present the reader sees 01, 02, 03, not
 * 01, 04, 09. Each component still guards itself; this list decides the count.
 */
const sections: Array<{ key: string; show: boolean; render: (index: string) => ReactNode }> = [
  {
    key: "credibility",
    show: organizations.length > 0,
    render: (index) => <Credibility index={index} />,
  },
  { key: "about", show: true, render: (index) => <AboutTeaser index={index} /> },
  {
    key: "stats",
    show: statistics.length > 0,
    render: (index) => <KeyStats index={index} />,
  },
  {
    key: "work",
    show: initiatives.length > 0,
    render: (index) => <Work index={index} />,
  },
  {
    key: "awards",
    show: awards.length > 0,
    render: (index) => <Awards index={index} />,
  },
  {
    key: "media",
    show: mediaItems.length > 0,
    render: (index) => <MediaHighlights index={index} />,
  },
  {
    key: "gallery",
    show: gallery.length > 0,
    render: (index) => <Gallery index={index} />,
  },
  { key: "contact", show: true, render: (index) => <ContactCta index={index} /> },
];

export default function HomePage() {
  const visible = sections.filter((section) => section.show);

  return (
    <>
      <Hero />
      {visible.map((section, i) => (
        <div key={section.key}>
          {section.render(String(i + 1).padStart(2, "0"))}
        </div>
      ))}
    </>
  );
}
