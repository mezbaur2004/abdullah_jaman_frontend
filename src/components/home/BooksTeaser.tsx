import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLink } from "@/components/ui/SectionLink";
import { BookCover } from "@/components/books/BookCover";
import { Price } from "@/components/books/Price";
import { booksIntro } from "@/content/books";
import { books, type Book } from "@/data/books";
import { emphasise } from "@/lib/emphasis";

/**
 * Authorship on the homepage: the argument on one side, the work on the
 * other. Heading, lede and the link to /books read top to bottom on the left;
 * the titles from src/lib/data/books.json play one at a time on the right, so
 * the section stays the same height however many books are added.
 */
export function BooksTeaser({ index }: { index?: string }) {
  return (
    <Section
      tone="ivory"
      index={index}
      indexLabel="Books"
      accent="gold"
      pattern
      aria-labelledby="books-teaser-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 id="books-teaser-heading" className="text-display-xl text-content">
                {emphasise(booksIntro.headline)}
              </h2>
            </Reveal>
            <Reveal step={1}>
              <p className="mt-8 max-w-xl text-lede text-content-muted">{booksIntro.lede}</p>
            </Reveal>
            <Reveal step={2} className="mt-10 block">
              <SectionLink href="/books">All books</SectionLink>
            </Reveal>
          </div>

          <Reveal step={1} className="min-w-0 lg:col-span-7">
            <Carousel label="Books by Abdullah Jaman" itemLabel="book">
              {books.map((book, i) => (
                <BookSlide key={book.slug} book={book} priority={i === 0} />
              ))}
            </Carousel>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** One title, large: the cover beside its name, details and price. */
function BookSlide({ book, priority }: { book: Book; priority: boolean }) {
  return (
    <Card
      as="article"
      tone="inverse"
      accent="gold"
      padding="lg"
      className="grid h-full items-center gap-8 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-10"
    >
      <BookCover
        book={book}
        priority={priority}
        className="mx-auto w-full max-w-[11rem] sm:max-w-none"
        sizes="(min-width: 640px) 13rem, 11rem"
      />

      <div>
        <p className="text-eyebrow font-semibold uppercase text-accent-on-inverse">
          {book.subjectEn}
        </p>
        <h3 className="mt-4 font-bangla text-display-md leading-snug text-on-inverse">
          <Link
            href={`/books/${book.slug}`}
            className="transition-colors after:absolute after:inset-0 after:content-[''] hover:text-accent-on-inverse"
          >
            {book.titleBn}
          </Link>
        </h3>
        <p className="mt-2 text-lede text-on-inverse-muted">{book.titleEn}</p>

        <p className="mt-6 text-ui text-on-inverse-muted">
          {[book.year, book.format, `${book.pages} pages`].join(" · ")}
        </p>

        <div className="mt-6 flex items-center justify-between gap-5 border-t border-line-inverse pt-5">
          <p className="font-display text-2xl text-on-inverse">
            <Price amount={book.listPrice} currency={book.currency} />
          </p>
          <span className="flex items-center gap-2 text-ui font-semibold text-accent-on-inverse">
            View book
            <ArrowRight aria-hidden="true" className="size-4" />
          </span>
        </div>
      </div>
    </Card>
  );
}
