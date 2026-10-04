import type { MetadataRoute } from "next";

const base = "https://aivanguard.org";
const routes = [
  "",
  "/about",
  "/our-work",
  "/impact",
  "/research",
  "/research/student-ai-survey",
  "/highlights",
  "/highlights/vanguard-open-2026-winners",
  "/policy-brief",
  "/get-involved",
  "/competition",
  "/competition/rubric",
  "/competition/2026/nothing-happens-until-you-ask",
  // The Entrant Portal is closed (PORTAL_OPEN in src/lib/competition.ts),
  // so its routes are left out. Add them back when it reopens.
  "/contact",
  "/press",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const highValue = new Set(["", "/impact", "/research", "/research/student-ai-survey", "/policy-brief"]);
  // The Open results are the newest and most searched-for pages; mark
  // them as top priority and frequently updated so crawlers come back.
  const results = new Set([
    "/competition",
    "/highlights/vanguard-open-2026-winners",
    "/competition/2026/nothing-happens-until-you-ask",
    "/highlights",
  ]);
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" || results.has(r) ? "weekly" : "monthly",
    priority: r === "" ? 1 : results.has(r) ? 0.95 : highValue.has(r) ? 0.85 : 0.7,
  }));
}
