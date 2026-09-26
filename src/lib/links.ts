// External records the site points to as proof. Keep every claim on the
// site within one click of one of these, or of a page on this site that
// shows the underlying numbers. Add entries here rather than inlining
// URLs in pages, so a dead link is fixed in one place.

export const links = {
  // Press coverage lives in src/lib/highlights.ts (press[]).

  // Study sample and method
  liang2026: "https://doi.org/10.1177/08959048261448552",
  analysisScript:
    "https://github.com/Avery45234/aivanguard-site/blob/master/scripts/analyze-survey.mjs",
  repo: "https://github.com/Avery45234/aivanguard-site",

  // District context
  abcEdTechHub: "https://sites.google.com/abcusd.us/edtechhub",
  edsourceCaliforniaDistricts:
    "https://edsource.org/2026/california-schools-ai-approach/753096",

  // National student policy process
  studentsFirstAct: "https://www.aasa.org/resources/resource/students-first-act",
  edweekFramework:
    "https://www.edweek.org/technology/students-created-a-national-ai-policy-framework-heres-what-it-includes/2026/08",
  dayOfAiUsa: "https://www.dayofaiusa.org/",

  // Partners and context
  speakUp: "https://tomorrow.org/speakup/",
  brookingsCouncils:
    "https://www.brookings.edu/articles/enhancing-student-agency-through-school-ai-councils/",
  cdeModelPolicy: "https://www.cde.ca.gov/ci/pl/aipolicy.asp",

  // Downloads on this site
  chartSvg: "/img/research/policy-preferences-2025.svg",
  tableCsv: "/data/policy-preferences-2025.csv",
} as const;
