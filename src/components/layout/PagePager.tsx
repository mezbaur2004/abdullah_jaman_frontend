"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "./Container";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { primaryNav } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Previous and next, above the footer, on every inner page.
 *
 * The site's pages are a sequence — about, leadership, achievements, books,
 * media, contact — and until now the only way to move along it was back up to
 * the header. A reader who has finished the leadership page has just told you
 * what they are interested in; handing them the next page is more useful than
 * handing them the navigation again.
 *
 * The order is `primaryNav` itself rather than a second list. A pager that
 * disagrees with the header about what follows what is worse than no pager.
 *
 * It lives in the root layout rather than in six pages, and derives its place
 * from the path, so a page cannot be added to the nav and left out of the
 * sequence. Anything not in the list — the homepage, a book's own page, a 404
 * — renders nothing: a book detail page has its breadcrumb and its sibling
 * card, which are the right neighbours for it, and inventing a position for it
 * in a sequence it is not part of would only be confusing.
 *
 * Every route here is static, so Next's default prefetch already fetches each
 * destination in full as the pager scrolls into view. There is nothing to add.
 */
export function PagePager() {
  const pathname = usePathname();
  const index = primaryNav.findIndex((item) => item.href === pathname);
  if (index === -1) return null;

  const previous = index > 0 ? primaryNav[index - 1] : undefined;
  const next =
    index < primaryNav.length - 1 ? primaryNav[index + 1] : undefined;

  if (!previous && !next) return null;

  return (
    <nav aria-label="Page sequence" className="relative bg-surface">
      {/* The lattice, the same course every section boundary opens with. The
          pager is a boundary too — the end of this page and the start of the
          next — and a hairline here said "another list" where the band says
          "the page is over". */}
      <SectionSeparator variant="band" />
      <Container className="py-14 lg:py-16">
        {/* At the ends of the sequence one cell is missing, and the survivor
            takes the whole width rather than leaving half the row empty. It
            keeps its own alignment, so the direction still reads off the
            side it sits on. */}
        <div className="grid gap-px overflow-hidden border-b border-line sm:grid-cols-2">
          {previous ? (
            <PagerCell
              item={previous}
              direction="previous"
              className={next ? undefined : "sm:col-span-2"}
            />
          ) : null}
          {next ? (
            <PagerCell
              item={next}
              direction="next"
              className={previous ? undefined : "sm:col-span-2"}
            />
          ) : null}
        </div>
      </Container>
    </nav>
  );
}

function PagerCell({
  item,
  direction,
  className,
}: {
  item: { label: string; href: string };
  direction: "previous" | "next";
  className?: string;
}) {
  const forward = direction === "next";
  const Icon = forward ? ArrowRight : ArrowLeft;

  return (
    <Link
      href={item.href}
      className={cn(
        "group/pager relative flex items-center gap-5 bg-surface px-1 py-7 transition-colors hover:bg-surface-soft sm:px-6 sm:py-9",
        // The next cell reads right to left, so the pair mirrors: the label
        // and the arrow sit on the side of the page each one is pointing at.
        forward ? "sm:justify-end sm:text-right" : "",
        className,
      )}
    >
      {!forward ? (
        <Icon
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-6 shrink-0 text-accent transition-transform group-hover/pager:-translate-x-1.5"
        />
      ) : null}

      <span className="min-w-0">
        <span className="block text-eyebrow font-semibold uppercase text-accent">
          {forward ? "Next" : "Previous"}
        </span>
        <span className="mt-2.5 block font-display text-display-md leading-tight text-content transition-colors group-hover/pager:text-accent">
          {item.label}
        </span>
      </span>

      {forward ? (
        <Icon
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-6 shrink-0 text-accent transition-transform group-hover/pager:translate-x-1.5"
        />
      ) : null}
    </Link>
  );
}
