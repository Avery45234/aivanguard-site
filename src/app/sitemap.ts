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
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : highValue.has(r) ? 0.85 : 0.7,
  }));
}
