import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · Impact — 447 students surveyed across 6 schools. One clear message.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Impact · Research",
    title: "447 students.",
    titleItalic: "One clear message.",
    footerRight: "aivanguard.org/impact",
  });
}
