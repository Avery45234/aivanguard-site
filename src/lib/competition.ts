// Shared data for the Vanguard Open 2026, AI Vanguard's competition.
// Used by /competition (web presentation) and /competition/rubric
// (formal document view) so the rubric can't drift between the two.

// Entries close 11:59 PM Pacific on September 25, 2026. Shared so the
// public pages and the portal can't disagree about when the window shuts.
export const SUBMISSION_DEADLINE = new Date("2026-09-25T23:59:59-07:00");

// Results are announced October 3, 2026. Used by the site-wide banner to
// move from "judging underway" to "meet the winners".
export const RESULTS_DATE = new Date("2026-10-03T00:00:00-07:00");

// The Entrant Portal is closed: the 2026 Open has ended and the winners
// are announced. While this is false, every /portal route shows a closed
// notice instead of sign-in, registration, submission, or the help form
// (see src/app/portal/layout.tsx). Set it to true to reopen the portal
// for the next Open.
export const PORTAL_OPEN: boolean = false;

// ---------------------------------------------------------------------
// 2026 results. Names and order are from the organizer (Avery Updike),
// announced October 3, 2026. Everything on /competition, the home-page
// strip, and the News update reads from this record.
//
// `work` is each winner's entry as they submitted it: fill it from the
// submission record (entry title, format, Rationale, hosted link), never
// from memory. A winner without `work` shows name, place, and prize only.
//
// `stats` holds the participation figures shown in the at-a-glance row.
// Add them only from the registration record. A figure may be phrased
// generously ("nearly 90") but must be true as written.
// ---------------------------------------------------------------------
export type WinnerWork = {
  /** Entry title, exactly as submitted. */
  title: string;
  /** The entry's own subtitle, when it has one. */
  subtitle?: string;
  /** "Essay", "Working app", "Film", "Design", ... */
  format: string;
  /** Two or three sentences on what the entry is and does. */
  summary: string;
  /** The one thing the entrant refuses to automate, in their own words. */
  refusal?: string;
  /** Where to read it: a page on this site ("/...") or a public link. */
  href?: string;
  /** The original file as submitted, served from /public. */
  pdf?: string;
};

export type WinnerLink = { label: string; href: string };

// Optional fields are filled only from the submission and registration
// records, never from memory:
//   affiliation  school or organization, as registered
//   location     city or country, as registered
//   links        public links the winner has agreed to (entry, portfolio)
//   work         the entry as submitted
// Portraits are picked up automatically from
//   public/img/open/2026/first|second|third.(jpg|jpeg|png|webp)
// (see src/lib/open-photos.ts). Without a file, a monogram is shown.
export type Winner = {
  place: 1 | 2 | 3;
  slug: "first" | "second" | "third";
  label: string;
  ordinal: string;
  award: string;
  name: string;
  affiliation?: string;
  location?: string;
  perks: string[];
  links?: WinnerLink[];
  work?: WinnerWork;
};

export const results: {
  year: string;
  announced: string;
  article: string;
  winners: Winner[];
  stats: { k: string; v: string }[];
  judge: { name: string; credential: string; detail: string };
  winnerNotice: string;
} = {
  year: "2026",
  announced: "October 3, 2026",
  article: "/highlights/vanguard-open-2026-winners",
  winners: [
    {
      place: 1,
      slug: "first",
      label: "Grand Prize",
      ordinal: "First place",
      award: "$500",
      name: "Shusuke Kamiura",
      perks: [
        "Cash award",
        "Published feature on aivanguard.org",
        "Presentation opportunity",
        "Board opportunity",
      ],
      // From the entry as submitted (PDF supplied by the organizer,
      // October 2026). The refusal is the author's own sentence. The full
      // text lives in src/lib/open-entries/ and is generated from the PDF,
      // word for word.
      work: {
        title: "Nothing Happens Until You Ask",
        subtitle: "A world where the question is the only engine",
        format: "Essay",
        summary:
          "Kamiura designs shiro, a virtual learning space with no timetable, no curriculum, and no teachers, where AI is everywhere and will answer anything. The one thing it never does is offer a question, so nothing in that world moves until the learner asks. The essay also names its own cost: a space with no measurement cannot prove from the outside that it works.",
        refusal: "I would refuse to automate the generation of the question.",
        href: "/competition/2026/nothing-happens-until-you-ask",
        pdf: "/open/2026/nothing-happens-until-you-ask.pdf",
      },
    },
    {
      place: 2,
      slug: "second",
      label: "Second Prize",
      ordinal: "Second place",
      award: "$300",
      name: "Ade Ijidakinro",
      perks: ["Cash award", "Published feature", "Board opportunity"],
    },
    {
      place: 3,
      slug: "third",
      label: "Third Prize",
      ordinal: "Third place",
      award: "$200",
      name: "Simone Maria Moemo",
      perks: ["Cash award", "Published feature", "Board opportunity"],
    },
  ],
  stats: [],
  // The featured grader, one of several, named exactly as the organizer
  // asked: first name and initials only. Do not add his surname here or
  // anywhere on the site, do not name his employer, and do not link a
  // profile that shows either. Credentials are from his own public
  // profile and the organizer (October 2026).
  judge: {
    name: "Paul G. U.",
    credential: "Caltech alumnus and former USC professor",
    detail: "M.S. in Electrical Engineering, Caltech · Former professor, USC · Software engineer",
  },
  // Shown under the winners, in the FAQ, and in the News article.
  winnerNotice:
    "We will be reaching out to each winner by email very soon, at the address used to register, to arrange their prize.",
};

export type RubricCriterion = {
  n: string;
  title: string;
  points: number;
  question: string;
  note?: string;
  bands: { range: string; text: string }[];
};

export const rubric: RubricCriterion[] = [
  {
    n: "01",
    title: "Insight & Originality",
    points: 25,
    question: "Does this submission contain an idea we haven't seen fifty times?",
    bands: [
      {
        range: "21-25",
        text: "A genuinely novel angle, or a familiar idea reframed so sharply it feels new. Judges want to argue about it afterward.",
      },
      {
        range: "15-20",
        text: "A solid, specific idea with at least one original element or unexpected connection. We're looking for nuance.",
      },
      {
        range: "8-14",
        text: "Competent but familiar. Ideas the judges have encountered in mainstream ed-tech discourse.",
      },
      {
        range: "0-7",
        text: "Generic. “AI tutor personalizes learning; teachers provide human connection” with no further development.",
      },
    ],
  },
  {
    n: "02",
    title: "The Acceptance vs. the Refusal",
    points: 25,
    question: "What would you automate, and what would you refuse to automate?",
    bands: [
      {
        range: "21-25",
        text: "The refusals and acceptances are specific and surprising, defended with real reasoning (not sentiment), and structurally connected to the design. Remove them and the whole submission changes.",
      },
      {
        range: "15-20",
        text: "A clear, specific acceptance and refusal with genuine argumentation, though the connection to the design may be loose.",
      },
      {
        range: "8-14",
        text: "A refusal is named but defended with platitudes (“human connection matters”) rather than reasoning, or it reads as a list rather than a position.",
      },
      {
        range: "0-7",
        text: "The refusal is missing, an afterthought, or so broad it's meaningless (“I'd never automate teaching”).",
      },
    ],
  },
  {
    n: "03",
    title: "Depth of Reasoning",
    points: 20,
    question: "Has the entrant thought past the first-order effects?",
    bands: [
      {
        range: "17-20",
        text: "Engages seriously with trade-offs, failure modes, or counterarguments. Acknowledges what the design costs, not just what it gains.",
      },
      {
        range: "12-16",
        text: "Some awareness of trade-offs or limitations; addresses at least one obvious objection.",
      },
      {
        range: "6-11",
        text: "Purely first-order thinking. The design is presented as having only upsides.",
      },
      {
        range: "0-5",
        text: "No evidence of reasoning beyond the initial idea.",
      },
    ],
  },
  {
    n: "04",
    title: "Execution & Craft",
    points: 20,
    question: "Is the work well-made for its chosen format?",
    note: "Craft is scored relative to the format's demands, not its production cost. A tightly argued 1,500-word essay can earn 20/20; a feature-rich but confused app can earn 8/20. Judges may also weigh how thoughtfully the entrant used AI (per their AI Use Disclosure) as part of this criterion.",
    bands: [
      {
        range: "17-20",
        text: "Exceptional craft: polished, deliberate, and complete for its medium. For apps: it works. For essays: it's well-written. For films: it's well-made.",
      },
      {
        range: "12-16",
        text: "Solid execution with minor rough edges that don't obscure the idea.",
      },
      {
        range: "6-11",
        text: "Noticeable gaps in execution (broken features, unclear writing, unfinished sections) that get in the way.",
      },
      {
        range: "0-5",
        text: "Execution problems make the idea hard to evaluate at all.",
      },
    ],
  },
  {
    n: "05",
    title: "Communication",
    points: 10,
    question: "Can we understand it, quickly?",
    bands: [
      {
        range: "9-10",
        text: "The core idea lands within minutes. The Rationale is sharp. Nothing requires re-reading.",
      },
      {
        range: "6-8",
        text: "Clear overall, with occasional confusion or clutter.",
      },
      {
        range: "3-5",
        text: "The idea is in there, but the judge has to dig for it.",
      },
      {
        range: "0-2",
        text: "Unclear what is being proposed.",
      },
    ],
  },
];

export const judgingRounds = [
  {
    n: "01",
    title: "Screening",
    body: "Organizers check each entry for completeness (the work, the Rationale, and the AI disclosure) and rules compliance. Incomplete entries get one email and 48 hours to fix.",
  },
  {
    n: "02",
    title: "Scoring",
    body: "Every eligible entry is independently scored by at least two judges using the rubric, and the scores are averaged. If two judges' totals differ by more than 20 points, a third judge scores the entry and the outlier is dropped.",
  },
  {
    n: "03",
    title: "Finalist panel",
    body: "The top 10 entries are re-read by the full judging panel together, and judges may adjust scores after discussion. Finalists may be invited to a brief 10-minute live or video Q&A, used to verify authorship and probe reasoning, not to re-pitch.",
  },
];
