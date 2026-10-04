import type { MetadataRoute } from "next";

// Everything on the public site is meant to be found. The named crawlers
// below are the ones behind the main search engines and AI assistants;
// listing them makes the welcome explicit rather than implied.
const WELCOME = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "Applebot-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: WELCOME, allow: "/" },
    ],
    sitemap: "https://aivanguard.org/sitemap.xml",
    host: "https://aivanguard.org",
  };
}
