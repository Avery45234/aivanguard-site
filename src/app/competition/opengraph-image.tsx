import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "The Vanguard Open 2026 results: meet the three winners of AI Vanguard's competition to design an AI-era classroom worth learning in.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "The Vanguard Open · 2026 results",
    title: "Meet the",
    titleItalic: "2026 winners.",
    footerRight: "$1,000 in prizes · Announced October 3",
  });
}
