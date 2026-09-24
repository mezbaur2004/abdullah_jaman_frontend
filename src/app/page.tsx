import type { ReactNode } from "react";

import { AboutTeaser } from "@/components/home/AboutTeaser";
import { AtAGlance } from "@/components/home/AtAGlance";
import { Awards } from "@/components/home/Awards";
import { BooksTeaser } from "@/components/home/BooksTeaser";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { ContactCta } from "@/components/home/ContactCta";
import { Credibility } from "@/components/home/Credibility";
import { FounderMessage } from "@/components/home/FounderMessage";
import { Hero } from "@/components/home/Hero";
import { KeyStats } from "@/components/home/KeyStats";
import { LeadershipTeaser } from "@/components/home/LeadershipTeaser";
import { MediaHighlights } from "@/components/home/MediaHighlights";
import { awards, statistics } from "@/content/achievements";
import { mediaItems, videos } from "@/content/media";
import { atAGlance, organizations } from "@/content/profile";

/**
 * The homepage introduces and routes. It does not try to contain the site.
 *
 * The order is the narrative the site is built to tell — who he is, what he
 * believes, what he runs, what he has written, where he has been heard — so a
 * reader who goes no further still leaves with the shape of it, and one who
 * wants the detail has an obvious door on every section.
 *
 * Several sections still remove themselves for want of verified content.
 * Numbering them here rather than hard-coding "01" through "09" into each one
 * keeps the sequence contiguous as they appear: with six present the reader
 * sees 01 to 06, not 01, 04, 09. Each component still guards itself; this list
 * decides the count.
 */
const sections: Array<{ key: string; show: boolean; render: (index: string) => ReactNode }> = [
  {
    key: "credibility",
    show: organizations.length > 0,
    render: (index) => <Credibility index={index} />,
  },
  {
    key: "glance",
    show: atAGlance.length > 0,
    render: (index) => <AtAGlance index={index} />,
  },
  { key: "message", show: true, render: (index) => <FounderMessage index={index} /> },
  { key: "philosophy", show: true, render: (index) => <AboutTeaser index={index} /> },
  {
    key: "leadership",
    show: true,
    render: (index) => <LeadershipTeaser index={index} />,
  },
  {
    key: "stats",
    show: statistics.length > 0,
    render: (index) => <KeyStats index={index} />,
  },
  {
    key: "awards",
    show: awards.length > 0,
    render: (index) => <Awards index={index} />,
  },
  {
    key: "media",
    show: mediaItems.length + videos.length > 0,
    render: (index) => <MediaHighlights index={index} />,
  },
  // Authorship is confirmed even though the bibliography is not, so this one
  // does not wait on `books` having entries — see the note in BooksTeaser.
  { key: "books", show: true, render: (index) => <BooksTeaser index={index} /> },
  { key: "closing", show: true, render: (index) => <ClosingStatement index={index} /> },
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
