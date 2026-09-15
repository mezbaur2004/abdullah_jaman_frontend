import type { Award, Statistic } from "./types";

/**
 * PLACEHOLDER CONTENT — see CONTENT.md.
 * Figures, award titles, issuing bodies and years are illustrative stand-ins
 * chosen to show the layout. None of them are verified — replace all of them.
 */

export const statistics: Statistic[] = [
  {
    value: "3",
    label: "Institutions led",
    detail: "Founding, managing and academic leadership roles held concurrently.",
  },
  {
    value: "15+",
    label: "Years in education",
    detail: "From the classroom through to institutional leadership.",
  },
  {
    value: "100+",
    label: "Educators developed",
    detail: "Teachers coached through structured observation and feedback cycles.",
  },
  {
    value: "2",
    label: "Schools founded",
    detail: "Built from academic model and governance upwards.",
  },
];

export const achievementsIntro = {
  eyebrow: "Achievements",
  headline: "What the work has added up to.",
  lede: "A record built on institutions that still run well, teachers who went further than they expected to, and academic standards that held when they were inconvenient.",
} as const;

export const awards: Award[] = [
  {
    title: "Recognition for Excellence in School Leadership",
    issuer: "Education Leadership Forum",
    year: "2024",
    description:
      "Awarded for sustained academic leadership and institutional development across multiple schools.",
  },
  {
    title: "Distinguished Educationist Recognition",
    issuer: "Regional Schools Association",
    year: "2023",
    description:
      "Recognising contribution to curriculum design and teacher development in the region.",
  },
  {
    title: "Institution Builder of the Year",
    issuer: "National Education Council",
    year: "2022",
    description:
      "For founding and establishing schools with durable academic governance structures.",
  },
  {
    title: "Outstanding Contribution to Teacher Development",
    issuer: "Teachers' Professional Body",
    year: "2021",
    description:
      "Acknowledging coaching-led professional development work with early-career teachers.",
  },
];

export const milestones = [
  {
    year: "2024",
    title: "Academic governance framework rolled out",
    description:
      "Formal academic committees, review cycles and written leadership remits established across the group.",
  },
  {
    year: "2022",
    title: "Guidance International School leadership",
    description:
      "Took academic and pastoral accountability for the school as Principal.",
  },
  {
    year: "2020",
    title: "Wheaton International School founded",
    description:
      "Established the school, its academic model and its founding faculty.",
  },
  {
    year: "2018",
    title: "Pedago Academy established",
    description:
      "Set up the academy to build teaching capacity and academic leadership beyond a single school.",
  },
];
