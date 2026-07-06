import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "The Vanguard Open: design an AI-era classroom you'd actually want to learn in. Any format, $1,000 in prizes.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "The Vanguard Open",
    title: "Design a classroom",
    titleItalic: "you'd actually want to learn in.",
    footerRight: "$1,000 in prizes · Deadline Sept 25",
  });
}
