// "When Does Student Voice Change AI Policy?" — the preregistered records
// study led by AI Vanguard's founder. Everything here is summarized from
// the written protocol (September 2026). Keep it in step with the
// protocol and do not add claims the protocol does not make: the sample
// is twelve districts, the analysis is descriptive, and no findings exist
// yet.

export const study = {
  title: "When Does Student Voice Change AI Policy?",
  status: "Records collection and coding underway",
  lead:
    "Led by Avery Updike, AI Vanguard's founder, as an independent preregistered study.",
  question:
    "What conditions are associated with consequential student participation in generative-AI policymaking in U.S. school districts?",
  secondary: [
    "What methods do students use to participate in district AI policymaking?",
    "Which aspects of participation correlate with a traceable response to student recommendations?",
    "How does a student recommendation move from its origin to adoption, modification, rejection, acknowledgment, or an unknown disposition?",
  ],
  sample: {
    count: 12,
    basis:
      "The twelve largest U.S. school districts examined by Liang, Hu, Ren, and Trinidad (2026) in Educational Policy. The sample was fixed before any outcome coding, so it could not be chosen to fit a story.",
    districts: [
      "New York City Public Schools",
      "Los Angeles Unified School District",
      "Miami-Dade County Public Schools",
      "Chicago Public Schools",
      "Clark County School District",
      "Broward County Public Schools",
      "Hillsborough County Public Schools",
      "Orange County Public Schools",
      "Palm Beach County School District",
      "Houston Independent School District",
      "Gwinnett County Public Schools",
      "Fairfax County Public Schools",
    ],
    caveat:
      "These are large, well-documented systems. Findings will describe them, not all U.S. districts.",
  },
  records: {
    count: 20,
    note: "Public-records requests filed under state open-records laws with twenty large school systems, the twelve in the sample among them, between September 3 and September 18, 2026.",
  },
  unit: "A recommendation episode: a specific concern, proposal, or recommendation attributable to students, traced through the district's process to its last documented step.",
  dispositions: [
    { code: "0", label: "Disposition unknown or untraceable" },
    { code: "1", label: "Acknowledged, no serious response established" },
    { code: "2", label: "Considered and rejected with reasoning" },
    { code: "3", label: "Adopted in modified or partial form" },
    { code: "4", label: "Substantially adopted" },
  ],
  dispositionNote:
    "A traceable consequence is coded only for 2, 3, or 4, and only when the recommendation's origin is known, the input preceded the decision, a response is documented, and evidence links the two. A reasoned rejection counts as a consequence; being ignored does not.",
  evidence: [
    {
      level: "A",
      text: "A contemporaneous recommendation, a record of the discussion, and a comparison between draft and decision.",
    },
    {
      level: "B",
      text: "An official district document directly linking a decision to student input, with less detail on the process.",
    },
    {
      level: "C",
      text: "A retrospective account or media report corroborated by another source.",
    },
    {
      level: "D",
      text: "Participant lists, survey announcements, or task-force descriptions: evidence of access, not of consequence.",
    },
  ],
  reliability:
    "Two independent coders code every eligible episode from the same codebook and sources without seeing each other's work. Agreement is reported with Cohen's kappa, weighted for the ordinal disposition scale. If raw agreement falls below 80% or kappa below 0.60, coding stops, the unclear rule is revised, and affected episodes are recoded.",
  preregistration:
    "Sample, coding rules, outcome measure, evidence levels, reliability thresholds, and stopping rules were fixed in a written protocol before outcome coding began. Any deviation is logged with its date, reason, and effect on the analysis.",
  position:
    "The study's lead founded AI Vanguard. The protocol names that as a possible source of bias and builds in controls: a fixed sample, an outcome measure that counts reasoned rejection, unknowns kept unknown, contradictory evidence retained, a second independent coder, and AI Vanguard's own materials held to the same evidentiary standard as any other record. Findings that show no student influence will be reported.",
  timeline:
    "Descriptive findings and up to four process-tracing case studies will be published on this page when the preregistered analysis is complete.",
  source: {
    citation:
      "Liang, S., Hu, Y., Ren, X., and Trinidad, J. E. (2026). Governing GenAI through Redefinition, Regulation, and Innovation: Policy Responses in the Largest US School Districts. Educational Policy.",
    href: "https://doi.org/10.1177/08959048261448552",
  },
} as const;

// Speak Up (Project Tomorrow). These figures are Project Tomorrow's own,
// from its October 2024 release, and describe its reach, not ours.
export const speakUp = {
  cycle: {
    value: "100,000+",
    label: "K-12 students, educators, administrators, and parents in the 2023–24 cycle",
  },
  cumulative: {
    value: "6.3 million",
    label: "participants since Speak Up began in 2003",
  },
  attribution: "Figures reported by Project Tomorrow, October 2024.",
} as const;
