// AI Vanguard 2025 Policy Survey — aggregated findings.
//
// Source: Google Form "AI Vanguard Policy Survey" run 8/25/2025 – 12/17/2025,
// distributed through student reps on partner campuses. Raw CSV lives at
// scripts/data/policy-survey-2025.csv and is analyzed by
// scripts/analyze-survey.mjs.
//
// Privacy: student emails and identifying names are deliberately excluded.
// Quotes are attributed only by grade and school, matching the published
// nonprofit's privacy posture (PRD §12).

export const survey2025 = {
  meta: {
    name: "AI Vanguard Policy Survey",
    cycle: "First cycle · Fall 2025",
    window: "Aug 25 – Dec 17, 2025",
    totalResponses: 447,
    schoolCount: 6,
    instrument: "Google Form, nine items, distributed by AI Vanguard student representatives at their campuses",
    // Every percentage on the site divides by all 447 submitted responses.
    // 12 rows are exact duplicates of another response (same school, grade,
    // and answers, different timestamp), most likely double submissions.
    // Removing them (n = 435) moves no headline figure by more than half a
    // point, so the published analysis keeps all 447 and discloses this.
    duplicateRows: 12,
    uniqueResponses: 435,
    analysisScript:
      "https://github.com/Avery45234/aivanguard-site/blob/master/scripts/analyze-survey.mjs",
    citation:
      "AI Vanguard. (2026). 2025 Student AI Policy Survey: what 447 students said about AI at school. https://aivanguard.org/research/student-ai-survey",
    // Peer-reviewed or journal publication of the analysis. Rendered only
    // when href is set; title and year are filled from the published record.
    publication: {
      venue: "Curieux Academic Journal",
      title: "",
      year: "",
      href: "",
    },
  },

  // Exact question wording from the form, in order.
  questions: [
    "What school do you attend?",
    "Grade level",
    "Have you used AI tools (e.g., ChatGPT, Grammarly, Khanmigo, QuillBot) for schoolwork?",
    "What have you primarily used AI tools for? (select all that apply)",
    "How helpful do you find AI tools for your learning?",
    "Do you think using AI for schoolwork should be considered…",
    "Do you feel all students at your school have equal access to AI tools?",
    "What role should schools play in guiding AI use?",
    "Comments or request for policy advocation? (optional)",
  ],

  // Headline percentages, each with its count over all 447 responses and the
  // exact response options that were counted. The first figure was
  // previously published as 84%; that was the count of frequent users (84)
  // mistaken for a percentage. Corrected September 2026.
  headline: [
    {
      value: "80%",
      n: 357,
      label: "Used AI for schoolwork",
      hint: "Frequently or occasionally · 357 of 447",
      question: "Have you used AI tools (e.g., ChatGPT, Grammarly, Khanmigo, QuillBot) for schoolwork?",
      counted: "\u201cYes, frequently (weekly or more)\u201d (84) + \u201cYes, occasionally (a few times)\u201d (273)",
      rest: "52 had heard of AI tools but not used them, 24 had never used them, and 14 wrote in a custom answer, most describing limited or teacher-directed use.",
    },
    {
      value: "87%",
      n: 389,
      label: "Find AI helpful",
      hint: "Very or somewhat · 389 of 447",
      question: "How helpful do you find AI tools for your learning?",
      counted: "\u201cVery helpful\u201d (182) + \u201cSomewhat helpful\u201d (207)",
      rest: "35 said not helpful, 7 said harmful, and 16 wrote in an answer, mostly non-users.",
    },
    {
      value: "90%",
      n: 404,
      label: "Say AI is acceptable",
      hint: "With guidance or for specific tasks · 404 of 447",
      question: "Do you think using AI for schoolwork should be considered…",
      counted: "\u201cAcceptable, as long as it\u2019s used responsibly\u201d (222) + \u201cAcceptable only for certain tasks\u201d (182)",
      rest: "16 (4%) called it cheating even if just for help, 22 were not sure, and 5 wrote in an answer.",
    },
    {
      value: "74%",
      n: 330,
      label: "Want schools to teach responsible use",
      hint: "The dominant policy preference · 330 of 447",
      question: "What role should schools play in guiding AI use?",
      counted: "\u201cTeach students how to use AI responsibly\u201d, in a select-all-that-apply question",
      rest: "Students could choose more than one role, so the options below total more than 100%.",
    },
  ],

  // Grade distribution of respondents.
  grades: [
    { label: "Freshman (9th)", n: 140, pct: 31 },
    { label: "Sophomore (10th)", n: 133, pct: 30 },
    { label: "Junior (11th)", n: 125, pct: 28 },
    { label: "Senior (12th)", n: 49, pct: 11 },
  ],

  // Equal access to AI tools at school (single choice).
  equalAccess: [
    { label: "Yes, most students have equal access", n: 296, pct: 66 },
    { label: "No, some students do not", n: 82, pct: 18 },
    { label: "Don\u2019t know", n: 67, pct: 15 },
    { label: "Other", n: 2, pct: 0 },
  ],

  // Schools represented — honest about the distribution.
  schoolDistribution: [
    { school: "Downey", n: 247, pct: 55 },
    { school: "Cerritos", n: 181, pct: 41 },
    { school: "Cypress", n: 16, pct: 4 },
    { school: "Beckman", n: 1, pct: 0 },
    { school: "Sunny Hills", n: 1, pct: 0 },
    { school: "Troy", n: 1, pct: 0 },
  ],

  // What students want schools to do (multi-select, % of all responses).
  // Ordered by support. Clearly shows: students want guidance, not bans.
  policyPreferences: [
    { label: "Teach students how to use AI responsibly", n: 330, pct: 74 },
    { label: "Involve students in shaping AI rules and policies", n: 158, pct: 35 },
    { label: "Create stricter rules to limit misuse", n: 116, pct: 26 },
    { label: "Allow free use with minimal restrictions", n: 106, pct: 24 },
    { label: "Do nothing; AI use should be up to individuals", n: 63, pct: 14 },
    { label: "AI should complete most of the work", n: 22, pct: 5 },
  ],

  // Stance on AI for schoolwork — only 4% call it outright cheating.
  stance: [
    { label: "Acceptable if used responsibly", pct: 50 },
    { label: "Acceptable only for certain tasks", pct: 41 },
    { label: "Cheating, even if it's just for help", pct: 4 },
    { label: "Not sure", pct: 5 },
  ],

  // VERBATIM quotes from the comments field — no edits to spelling, grammar,
  // or punctuation. Attribution is grade + school (no names, per PRD §12).
  // Selected to represent the range of views students surfaced, not to
  // cherry-pick a narrative. Authentic student voice, typos and all.
  quotes: [
    {
      text: "Even if there are restrictions on AI, there is most likely ALWAYS a way to bypass them. Thus I advocate for a policy on guiding students on how to use AI, as I see most students solely using AI to complete the whole assignment or project with minimal effort. I only use AI for problem solving or generation of ideas, in which I believe is the most efficient. Though I also strongly believe that AI could be impactful to everyone if utilized the right way.",
      attribution: "Junior · Cerritos High School",
    },
    {
      text: "I like to use ai to study for test, brain storm, and to explain things when im not at school and cant ask a teacher for help. I feel cheated when other people use ai to do all there work and end up with a higher score then me on something so I would like there to be better ways of telling when people are cheating on there entire assignment. Whats the point of doing all this work if another kid is going to have a computer put in all the effort and then end up with higher score and gpas then me.",
      attribution: "Junior · Downey High School",
    },
    {
      text: "Some teachers are terrible at teaching, and some students (including me) use AI as a second teacher. AI helps whether you are confused about a topic, or want to learn the steps to the correct answer to an assignment. As long as AI is not writing your work, AI should be used whenever students need help.",
      attribution: "Freshman · Cerritos High School",
    },
    {
      text: "AI is a great tool, however, I hope we learn how to use it properly and not strip away our critical thinking skills.",
      attribution: "Junior · Downey High School",
    },
  ],
} as const;

// AI Vanguard 2026 teacher survey — "AI in Education Survey." 10 responses
// from educators (teachers + a district office voice). A BROAD survey on
// teacher attitudes, AI use, and detection confidence, distributed January
// 2026 through AI Vanguard's network. NOT related to the "AI Perception
// Change" field study below — that is a separate, smaller piece of primary
// research with a different methodology.
export const teacherSurvey2026 = {
  meta: {
    name: "AI in Education Survey (Teachers)",
    cycle: "Pilot cycle · Jan 2026",
    window: "Jan 12 – Jan 15, 2026",
    totalResponses: 10,
  },

  headline: [
    {
      value: "80%",
      label: "Feel pressure to integrate AI",
      hint: "Yes or somewhat",
    },
    {
      value: "80%",
      label: "Suspect frequent unauthorized student use",
      hint: "Rated 4 or 5 out of 5",
    },
    {
      value: "30%",
      label: "Accuracy on a 3-paragraph detection quiz",
      hint: "Worse than random chance (33%)",
    },
    {
      value: "0/10",
      label: "Correctly identified the student-written paragraph",
      hint: "Every teacher called it AI or AI-assisted",
    },
  ],

  // The gap this data exposes: teachers feel pressure and suspect use, but
  // their detection accuracy is worse than random chance and their confidence
  // in wrong answers is high. The policy vacuum students describe is real on
  // the other side of the desk.
  viewBreakdown: [
    { label: "Somewhat positive view of AI in education", pct: 50 },
    { label: "Neutral view", pct: 30 },
    { label: "Somewhat negative view", pct: 20 },
  ],

  // Detection quiz results — each teacher classified 3 unlabeled paragraphs.
  // Ground truth: P1 = student + AI assistance, P2 = entirely AI, P3 =
  // entirely student (with human resources). Scored after Avery provided the
  // answer key in chat on 2026-04-20.
  detectionQuiz: {
    overallAccuracy: "9/30 = 30%",
    randomBaseline: "33%",
    perParagraph: [
      {
        id: "P1",
        truth: "Student with AI assistance",
        correct: 6,
        total: 10,
        pct: 60,
      },
      {
        id: "P2",
        truth: "Entirely AI",
        correct: 3,
        total: 10,
        pct: 30,
      },
      {
        id: "P3",
        truth: "Entirely student",
        correct: 0,
        total: 10,
        pct: 0,
      },
    ],
  },
} as const;

// "AI Perception Change" — a separate, qualitative field study run by
// Parisa Mabrooka (VP of Outreach; Cypress representative). Five teachers
// compared an AI-assisted paper against a student's original work, first
// blind, then with the source revealed. This is DISTINCT from the broader
// 10-teacher survey above — different methodology, different participant
// pool, different question. Preserved verbatim from the rep's submission;
// public attribution is deliberately anonymized per PRD §12.
export const perceptionStudy = {
  title: "AI Perception Change",
  by: "Saiya Bhakta, AI Vanguard student representative",
  findings: [
    { label: "Teachers surveyed (blind then revealed)", value: "5" },
    { label: "Preferred AI version — both before and after reveal", value: "2" },
    { label: "Preferred student work — grades shifted toward student after reveal", value: "3" },
  ],
  report:
    "Artificial Intelligence versus the human mind. Both are capable of anything. However, it is commonly asked if the two can be compared when it comes to writing. With AI on its way to becoming every student's shortcut to success, millions of papers are written with its help daily. The voices of students themselves slowly fade, but can their teachers tell? Research was conducted in which several teachers were asked to compare an AI assisted paper with a student's original work. Without knowing one was written by AI, the teachers gave grades and explained which they preferred and why. After revealing one was AI, the teachers were then asked if their perceptions on the papers had altered. Out of the five teachers, two teachers were on the same page, while with different thoughts, the other three were aligned. All were surprised, but after the realization set in, they could easily tell the difference between both papers. The two teachers with similar thoughts preferred the AI version through and through as seen through their given grades. Before the reveal, with slight hesitation they chose the AI written paper believing it was easier to read and straight to the point. They had agreed the student's original work had more citations and went into detail, but overall the human written paper was not on the same level as the digital brain for them. After finding out that one was AI, their perceptions had not changed as they believed the AI version was more effective as it was easier to read and straight to the point. Looking at the other three teachers, from the start, they had chosen the student-written paper as they could hear the student's unique voice through the writing. They asserted that the AI paper was a solid essay with just the facts but that's what had made it unmemorable and boring. After the unveiling, their grades for the AI paper dropped and the student's grade rose. They had come to the conclusion that the student's paper was significantly more lively and memorable because of the risk-taking and figurative language.",
} as const;

