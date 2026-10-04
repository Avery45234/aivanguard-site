import { results } from "@/lib/competition";
import { leadership, reach, representatives, site } from "@/lib/site";
import { survey2025 } from "@/lib/research";
import { statesAtHome } from "@/lib/states";

// /llms.txt: a plain-text summary of the site for AI assistants, in the
// llmstxt.org layout (title, one-paragraph summary, then linked sections).
// Built from the same records the pages read, so it cannot drift from
// what the site says. Prerendered at build time.
export const dynamic = "force-static";

const BASE = "https://aivanguard.org";

export async function GET() {
  const [first, second, third] = results.winners;
  const m = survey2025.meta;
  const campuses = new Set(representatives.map((r) => r.school)).size;

  const entry = first.work
    ? `, for the ${first.work.format.toLowerCase()} "${first.work.title}${
        first.work.subtitle ? `: ${first.work.subtitle}` : ""
      }"`
    : "";

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description} Founded in 2024 in ${reach.founded}. Student leadership in ${reach.states.length} states: ${reach.states.join(", ")}.`,
    "",
    `## The Vanguard Open ${results.year}: winners`,
    "",
    `The Vanguard Open is AI Vanguard's competition. It is also called the AI Vanguard Open or the AIV Open. Entrants designed an AI-era classroom they would want to learn in and defended one thing they would refuse to automate. Any format was accepted. Entries closed September 25, 2026 and the winners were announced ${results.announced}.`,
    "",
    `- ${first.label}: ${first.name}${entry}`,
    `- ${second.label}: ${second.name}`,
    `- ${third.label}: ${third.name}`,
    "",
    `Entries were scored on a published 100-point rubric with five criteria. Graders included ${results.judge.name}, a ${results.judge.credential}.`,
    "",
    `- [${results.year} results and prize winners](${BASE}/competition)`,
    `- [Announcement: AI Vanguard names the winners of the first Vanguard Open](${BASE}${results.article})`,
    ...(first.work?.href
      ? [`- [Grand Prize entry, full text: ${first.work.title}](${BASE}${first.work.href})`]
      : []),
    `- [Official judging rubric](${BASE}/competition/rubric)`,
    "",
    "## Research",
    "",
    `- [${m.totalResponses} students on AI at school: the 2025 Student AI Policy Survey](${BASE}/research/student-ai-survey): ${survey2025.headline
      .map((h) => `${h.value} ${h.label.charAt(0).toLowerCase()}${h.label.slice(1)}`)
      .join("; ")}.`,
    `- [Research overview](${BASE}/research): the survey, a teacher pilot, and a preregistered study of student influence on AI policy in the twelve largest U.S. school districts.`,
    `- [Policy brief](${BASE}/policy-brief): six asks for schools and districts.`,
    "",
    "## District work",
    "",
    `- [ABC Unified School District case study](${BASE}/our-work#abcusd): student input into district AI decisions in Cerritos, California.`,
    ...statesAtHome.map(
      (s) =>
        `- [${s.state}: ${s.director}](${BASE}/our-work#states): ${s.items[0].text} Source: ${s.items[0].source}.`,
    ),
    "",
    "## Organization",
    "",
    `- [About](${BASE}/about): ${leadership.length} student leaders in the cabinet and ${representatives.length} student representatives on ${campuses} campuses. Founder and president: Avery Updike.`,
    `- [Impact](${BASE}/impact): sourced numbers on research, policy, reach, and public engagement.`,
    `- [News](${BASE}/highlights): developments, student highlights, and press coverage.`,
    `- [Press kit](${BASE}/press): boilerplate, key facts, and logo.`,
    `- [Contact](${BASE}/contact): ${site.email}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
