import type { Metadata } from "next";

import { BookSetNote } from "@/components/books/BookSetNote";
import { BookTitleCard } from "@/components/books/BookTitleCard";
import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { authorNote, booksIntro } from "@/content/books";
import { booksFeature } from "@/content/profile";
import { books } from "@/data/books";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Books",
  description:
    "Abdullah Jaman is the author of Arabi Shikkha Obhijatra, a two-volume Arabic course for Bengali-speaking readers, and writes and supervises Islamic Studies and Arabic learning materials for school classrooms in Dhaka.",
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
 * It used to lead with an apology for having no titles on it. That is gone:
 * two volumes are published, they are on the page, and the "nothing is listed
 * until it is confirmed" note has been deleted rather than left dormant.
 */
export default function BooksPage() {
  return (
    <>
      <PageHeader
        eyebrow={booksIntro.eyebrow}
        title={booksIntro.headline}
        lede={booksIntro.lede}
        variant="arch"
        image={booksFeature}
      />

      {/* The author's approach. It opens the page rather than the list because
          how the writing is done is the more interesting half, and because the
          titles read better once a reader knows what they are for. */}
      <Section
        tone="ivory"
        divider={false}
        index="01"
        indexLabel="The writing"
        accent="gold"
        aria-labelledby="author-note-heading"
      >
        <Container className="relative">
          <GeometricPattern className="-top-16 h-72" fade />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                id="author-note-heading"
                title={authorNote.headline}
                accent="gold"
                size="feature"
              />
            </div>

            <div className="flex flex-col gap-6 text-lede text-content-muted lg:col-span-7 lg:pt-2">
              {authorNote.body.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 32)} step={i}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* The titles. Navy cards on the paper ground rather than a navy band:
          the covers need a dark surface to read as objects rather than as two
          pale rectangles, and a navy card on navy would be an outline holding
          nothing. It also puts the section's weight in the cards, which is
          where a reader's attention on this page belongs. */}
      <Section
        index="02"
        indexLabel="Titles"
        accent="gold"
        pattern
        aria-labelledby="titles-heading"
      >
        <Container>
          <SectionHeading
            id="titles-heading"
            title="Published *titles*."
            lede="A two-volume Arabic course, published by Manuver in 2024."
          />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
            {books.map((book, i) => (
              <li key={book.slug}>
                <Reveal step={i} className="h-full">
                  <BookTitleCard book={book} />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal step={1}>
            <BookSetNote className="mt-12 max-w-xl" />
          </Reveal>
        </Container>
      </Section>

      <ContactCta index="03" />
    </>
  );
}
