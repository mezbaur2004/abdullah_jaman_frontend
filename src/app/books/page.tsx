import type { Metadata } from "next";

import { BookCard } from "@/components/books/BookCard";
import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { FeatureImage } from "@/components/ui/FeatureImage";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  authorNote,
  books,
  booksByCategory,
  booksIntro,
  booksPending,
  featuredBook,
  uncategorisedBooks,
} from "@/content/books";
import { booksFeature } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Books",
  description:
    "Abdullah Jaman writes and supervises Islamic Studies and Arabic learning materials for school classrooms in Dhaka, Bangladesh.",
  path: "/books",
});

/**
 * The author's page.
 *
 * It reads differently from the rest of the site on purpose — ivory ground,
 * larger type, more air, the geometric layer allowed to show a little more
 * than elsewhere. A bibliography is a different kind of object from a CV, and
 * the page should feel like one.
 *
 * It is also built to be honest while empty. Authorship is on the record; not
 * one title has been supplied. So the page leads with what the writing is
 * *for* rather than with a list, and the list appears the moment `books` has
 * entries. Nothing here is conditional on invention.
 */
export default function BooksPage() {
  const grouped = booksByCategory();
  const loose = uncategorisedBooks();
  const rest = books.filter((book) => book !== featuredBook);

  return (
    <>
      <PageHeader
        eyebrow={booksIntro.eyebrow}
        title={booksIntro.headline}
        lede={booksIntro.lede}
        pattern
      />

      {featuredBook ? (
        <Section
          tone="ivory"
          divider={false}
          index="01"
          indexLabel="Featured"
          accent="yellow"
          aria-labelledby="featured-book-heading"
        >
          <Container>
            <SectionHeading
              id="featured-book-heading"
              title="Featured."
              accent="yellow"
            />
            <Reveal className="mt-14 lg:mt-16">
              <BookCard book={featuredBook} feature />
            </Reveal>
          </Container>
        </Section>
      ) : null}

      {/* The author's approach. With no titles yet this carries the page, and
          it stays first-class once they arrive — how the writing is done is
          more interesting than how much of it there is. */}
      <Section
        tone="ivory"
        divider={Boolean(featuredBook)}
        index={featuredBook ? "02" : "01"}
        indexLabel="The writing"
        accent="yellow"
        separator="editorial"
        aria-labelledby="author-note-heading"
      >
        <Container className="relative">
          <GeometricPattern className="-top-16 h-72" fade />

          <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                id="author-note-heading"
                title={authorNote.headline}
                accent="yellow"
              />
              <div className="mt-10 flex max-w-2xl flex-col gap-6 text-lede text-content-muted">
                {authorNote.body.map((paragraph, i) => (
                  <Reveal key={paragraph.slice(0, 32)} step={i}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <FeatureImage
                image={booksFeature}
                caption="At the school office."
              />
            </div>
          </div>
        </Container>
      </Section>

      {grouped.length > 0 || loose.length > 0 ? (
        <Section
          index={featuredBook ? "03" : "02"}
          indexLabel="Titles"
          accent="blue"
          aria-labelledby="titles-heading"
        >
          <Container>
            <SectionHeading id="titles-heading" title="All titles." />

            <div className="mt-14 flex flex-col gap-16 lg:mt-16">
              {grouped.map((group) => (
                <section key={group.category}>
                  <h3 className="text-eyebrow font-medium uppercase text-content-subtle">
                    {group.category}
                  </h3>
                  <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {group.items.map((book, i) => (
                      <li key={book.title}>
                        <Reveal step={i}>
                          <BookCard book={book} />
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {loose.length > 0 ? (
                <section>
                  {grouped.length > 0 ? (
                    <h3 className="text-eyebrow font-medium uppercase text-content-subtle">
                      Other titles
                    </h3>
                  ) : null}
                  <ul
                    className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ${
                      grouped.length > 0 ? "mt-7" : ""
                    }`}
                  >
                    {loose.map((book, i) => (
                      <li key={book.title}>
                        <Reveal step={i}>
                          <BookCard book={book} />
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            {rest.length === 0 && booksPending ? (
              <Reveal step={1}>
                <PendingNote className="mt-14">{booksPending}</PendingNote>
              </Reveal>
            ) : null}
          </Container>
        </Section>
      ) : (
        <Section
          index={featuredBook ? "03" : "02"}
          indexLabel="Titles"
          accent="blue"
          separator="minimal"
          aria-labelledby="titles-pending-heading"
        >
          <Container>
            <SectionHeading
              id="titles-pending-heading"
              title="Titles."
              lede="Nothing is listed here until the title, the cover and the publication details are confirmed."
            />
            <Reveal step={1}>
              <PendingNote className="mt-12">{booksPending}</PendingNote>
            </Reveal>
          </Container>
        </Section>
      )}

      <ContactCta index={featuredBook ? "04" : "03"} />
    </>
  );
}
