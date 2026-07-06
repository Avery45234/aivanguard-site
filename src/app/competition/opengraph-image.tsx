import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard Open Competition — Design an AI-era classroom you'd actually want to learn in. Any format, $1,000 in prizes.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Open Competition",
    title: "Design a classroom",
    titleItalic: "you'd actually want to learn in.",
    footerRight: "Any format · $1,000 in prizes",
  });
}
