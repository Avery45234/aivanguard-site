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
  "/policy-brief",
  "/get-involved",
  "/competition",
  "/competition/rubric",
  "/portal",
  "/portal/register",
  "/portal/submit",
  "/portal/help",
  "/contact",
  "/press",
  "/people/avery-updike",
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
