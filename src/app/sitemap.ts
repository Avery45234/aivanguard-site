import type { MetadataRoute } from "next";

const base = "https://aivanguard.org";
const routes = [
  "",
  "/about",
  "/our-work",
  "/impact",
  "/policy-brief",
  "/get-involved",
  "/contact",
  "/press",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const highValue = new Set(["", "/impact", "/policy-brief"]);
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : highValue.has(r) ? 0.85 : 0.7,
  }));
}
