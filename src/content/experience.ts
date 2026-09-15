import type { Initiative, Role } from "./types";

/**
 * PLACEHOLDER CONTENT — see CONTENT.md.
 * Periods, locations and outcome figures are stand-ins. Confirm every date and
 * number with Abdullah Jaman before launch.
 */

export const roles: Role[] = [
  {
    slug: "pedago-academy",
    organization: "Pedago Academy",
    title: "Managing Director",
    period: "Present",
    location: "Dhaka, Bangladesh",
    current: true,
    summary:
      "Leads the academy's direction across curriculum design, teacher development and academic partnerships with schools.",
    highlights: [
      "Sets the academic model and quality standards the academy is measured against.",
      "Builds teacher development programmes that move practice, not just attendance records.",
      "Works with partner institutions on curriculum architecture and academic governance.",
    ],
  },
  {
    slug: "wheaton-international-school",
    organization: "Wheaton International School",
    title: "Founder & Managing Director",
    period: "Present",
    location: "Dhaka, Bangladesh",
    current: true,
    summary:
      "Founded the school and continues to lead its academic strategy, faculty development and institutional governance.",
    highlights: [
      "Designed the academic model, from curriculum sequencing to assessment policy.",
      "Recruited and developed the founding faculty and leadership team.",
      "Established the governance structures that let the school run independently of its founders.",
    ],
  },
  {
    slug: "guidance-international-school",
    organization: "Guidance International School",
    title: "Principal",
    period: "Present",
    location: "Dhaka, Bangladesh",
    current: true,
    summary:
      "Holds academic and pastoral leadership of the school, accountable for standards across teaching, student outcomes and school culture.",
    highlights: [
      "Leads the academic team and owns teaching quality across every year group.",
      "Runs the pastoral framework pairing academic rigour with student wellbeing.",
      "Serves as the school's principal point of accountability to parents and the board.",
    ],
  },
];

export const initiatives: Initiative[] = [
  {
    slug: "academic-framework",
    title: "A curriculum built to be taught, not filed",
    category: "Curriculum design",
    summary:
      "A sequenced academic framework that makes the path from learning objective to lesson plan to assessment explicit — so teachers know what is expected and students know what they are being measured on.",
    outcomes: [
      "Year-by-year sequencing across core subjects",
      "Assessment criteria written in language students can use",
      "Shared planning resources that cut new-teacher onboarding time",
    ],
  },
  {
    slug: "teacher-development",
    title: "Teacher development that survives the term",
    category: "Faculty",
    summary:
      "A coaching-led development programme built around classroom observation and structured feedback rather than one-off workshops, designed so improvement is visible in practice within a single term.",
    outcomes: [
      "Observation cycles with written, actionable feedback",
      "Mentor pairing for every teacher in their first year",
      "Subject-team review sessions built into the timetable",
    ],
  },
  {
    slug: "academic-governance",
    title: "Governance that makes standards enforceable",
    category: "Institution building",
    summary:
      "Academic governance structures — committees, review cycles and escalation paths — that turn stated standards into decisions with consequences, and reduce the school's dependence on any individual leader.",
    outcomes: [
      "Defined academic decision rights and review cadence",
      "Documented escalation routes for academic and pastoral concerns",
      "Succession-ready leadership roles with written remits",
    ],
  },
  {
    slug: "parent-partnership",
    title: "Bringing parents inside the academic conversation",
    category: "Community",
    summary:
      "A reporting and engagement model that replaces grade-only updates with a clear account of what a student can do, what they are working on next, and how the school and family each contribute.",
    outcomes: [
      "Narrative reporting alongside grades",
      "Structured parent conferences with prepared agendas",
      "Clear channels for raising concerns early",
    ],
  },
];
