import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Figure } from "@/components/ui/Figure";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLink } from "@/components/ui/SectionLink";
import { BookSetNote } from "@/components/books/BookSetNote";
import { BookTitleCard } from "@/components/books/BookTitleCard";
import { booksIntro } from "@/content/books";
import { booksFeature } from "@/content/profile";
import { books } from "@/data/books";
import { emphasise } from "@/lib/emphasis";

/**
 * Authorship as a homepage section in its own right — and now with the work
 * on it rather than only an account of the work.
 *
 * The section used to be the argument and a photograph, because the
 * bibliography was outstanding and inventing a title to fill the space was
 * never on the table. Two volumes are published, so the covers are here, each
 * card a door to the title's own page. A homepage that describes someone's
 * writing without showing any of it is a homepage asking to be taken on trust.
 *
 * The office photograph still opens the books page, so a reader following the
 * link meets it twice — a real cost, and the one the owner weighed when asking
 * for it here.
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2
                id="books-teaser-heading"
                className="max-w-xl text-display-xl text-content"
              >
                {emphasise(booksIntro.headline)}
              </h2>
            </Reveal>

            <Reveal step={1}>
              <p className="mt-9 max-w-xl text-lede text-content-muted">
                {booksIntro.lede}
              </p>
            </Reveal>

            {/* The published titles, beneath the argument and beside the
                photograph. Each card is the whole target, cover included. */}
            <ul className="mt-12 grid gap-5 sm:max-w-lg sm:grid-cols-2 lg:max-w-none">
              {books.map((book, i) => (
                <li key={book.slug}>
                  <Reveal step={i + 1} className="h-full">
                    <BookTitleCard book={book} size="compact" />
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal step={2}>
              <BookSetNote className="mt-8 max-w-lg" />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-3">
            <ArchFrame className="mx-auto w-full max-w-sm lg:max-w-none">
              <ImageReveal>
                <Figure
                  image={booksFeature}
                  ratio="4 / 5"
                  frame="none"
                  sizes="(min-width: 1024px) 44vw, (min-width: 640px) 24rem, 90vw"
                />
              </ImageReveal>
            </ArchFrame>
          </div>
        </div>

        <Reveal className="mt-16 block lg:mt-20">
          <SectionLink href="/books" detail="The writing, and both published volumes.">
            Books
          </SectionLink>
        </Reveal>
      </Container>
    </Section>
  );
}
