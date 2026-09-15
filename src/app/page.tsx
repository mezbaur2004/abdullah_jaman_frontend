import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Awards } from "@/components/home/Awards";
import { ContactCta } from "@/components/home/ContactCta";
import { Credibility } from "@/components/home/Credibility";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { KeyStats } from "@/components/home/KeyStats";
import { MediaHighlights } from "@/components/home/MediaHighlights";
import { Work } from "@/components/home/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <AboutTeaser />
      <KeyStats />
      <Work />
      <Awards />
      <MediaHighlights />
      <Gallery />
      <ContactCta />
    </>
  );
}
