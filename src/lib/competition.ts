// Shared data for the AI Vanguard Open Competition 2026.
// Used by /competition (web presentation) and /competition/rubric
// (formal document view) so the rubric can't drift between the two.

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
        range: "21–25",
        text: "A genuinely novel angle, or a familiar idea reframed so sharply it feels new. Judges want to argue about it afterward.",
      },
      {
        range: "15–20",
        text: "A solid, specific idea with at least one original element or unexpected connection — we're looking for nuance.",
      },
      {
        range: "8–14",
        text: "Competent but familiar. Ideas the judges have encountered in mainstream ed-tech discourse.",
      },
      {
        range: "0–7",
        text: "Generic. “AI tutor personalizes learning; teachers provide human connection” with no further development.",
      },
    ],
  },
  {
    n: "02",
    title: "The Acceptance vs. the Refusal",
    points: 25,
    question: "What would you automate — and what would you refuse to automate?",
    bands: [
      {
        range: "21–25",
        text: "The refusals and acceptances are specific and surprising, defended with real reasoning (not sentiment), and structurally connected to the design — remove them and the whole submission changes.",
      },
      {
        range: "15–20",
        text: "A clear, specific acceptance and refusal with genuine argumentation, though the connection to the design may be loose.",
      },
      {
        range: "8–14",
        text: "A refusal is named but defended with platitudes (“human connection matters”) rather than reasoning, or it reads as a list rather than a position.",
      },
      {
        range: "0–7",
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
        range: "17–20",
        text: "Engages seriously with trade-offs, failure modes, or counterarguments. Acknowledges what the design costs, not just what it gains.",
      },
      {
        range: "12–16",
        text: "Some awareness of trade-offs or limitations; addresses at least one obvious objection.",
      },
      {
        range: "6–11",
        text: "Purely first-order thinking. The design is presented as having only upsides.",
      },
      {
        range: "0–5",
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
        range: "17–20",
        text: "Exceptional craft: polished, deliberate, and complete for its medium. For apps: it works. For essays: it's well-written. For films: it's well-made.",
      },
      {
        range: "12–16",
        text: "Solid execution with minor rough edges that don't obscure the idea.",
      },
      {
        range: "6–11",
        text: "Noticeable gaps in execution — broken features, unclear writing, unfinished sections — that get in the way.",
      },
      {
        range: "0–5",
        text: "Execution problems make the idea hard to evaluate at all.",
      },
    ],
  },
  {
    n: "05",
    title: "Communication",
    points: 10,
    question: "Can we understand it — quickly?",
    bands: [
      {
        range: "9–10",
        text: "The core idea lands within minutes. The Rationale is sharp. Nothing requires re-reading.",
      },
      {
        range: "6–8",
        text: "Clear overall, with occasional confusion or clutter.",
      },
      {
        range: "3–5",
        text: "The idea is in there, but the judge has to dig for it.",
      },
      {
        range: "0–2",
        text: "Unclear what is being proposed.",
      },
    ],
  },
];

export const judgingRounds = [
  {
    n: "01",
    title: "Screening",
    body: "Organizers check each entry for completeness — the work, the Rationale, and the AI disclosure — and rules compliance. Incomplete entries get one email and 48 hours to fix.",
  },
  {
    n: "02",
    title: "Scoring",
    body: "Every eligible entry is independently scored by at least two judges using the rubric, and the scores are averaged. If two judges' totals differ by more than 20 points, a third judge scores the entry and the outlier is dropped.",
  },
  {
    n: "03",
    title: "Finalist panel",
    body: "The top 10 entries are re-read by the full judging panel together, and judges may adjust scores after discussion. Finalists may be invited to a brief 10-minute live or video Q&A — used to verify authorship and probe reasoning, not to re-pitch.",
  },
];
