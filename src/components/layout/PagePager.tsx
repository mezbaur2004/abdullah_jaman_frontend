"use client";

import { usePathname } from "next/navigation";

import { Container } from "./Container";
import { SectionLink } from "@/components/ui/SectionLink";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { primaryNav } from "@/content/site";

/**
 * The way forward, above the footer, on every inner page.
 *
 * The site's pages are a sequence — about, leadership, achievements, books,
 * media, contact — and until now the only way to move along it was back up to
 * the header. A reader who has finished the leadership page has just told you
 * what they are interested in; handing them the next page is more useful than
 * handing them the navigation again.
 *
 * Forward only. A "previous" link duplicates the header nav a reader has
 * already used to get here, and a page has exactly one place after it in the
 * sequence — that is the one door worth pointing at. The button is the same
 * one the homepage sections end in, so the gesture is not a new idea.
 *
 * The order is `primaryNav` itself rather than a second list. A pager that
 * disagrees with the header about what follows what is worse than no pager.
 *
 * It lives in the root layout rather than in six pages, and derives its place
 * from the path, so a page cannot be added to the nav and left out of the
 * sequence. Anything not in the list — the homepage, a book's own page, a 404
 * — renders nothing, as does the last page in the sequence, which has nowhere
 * forward to point.
 *
 * Every route here is static, so Next's default prefetch already fetches the
 * destination in full as the button scrolls into view.
 */
export function PagePager() {
  const pathname = usePathname();
  const index = primaryNav.findIndex((item) => item.href === pathname);
  if (index === -1) return null;

  const next = index < primaryNav.length - 1 ? primaryNav[index + 1] : undefined;
  if (!next) return null;

  return (
    <nav aria-label="Next page" className="relative bg-surface">
      {/* The lattice, the same course every section boundary opens with. */}
      <SectionSeparator variant="band" />
      <Container className="py-14 lg:py-16">
        <SectionLink href={next.href}>{next.label}</SectionLink>
      </Container>
    </nav>
  );
}
