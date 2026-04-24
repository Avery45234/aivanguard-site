import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · Policy Brief — Six asks for schools and districts on AI in education.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Policy Brief · 2026",
    title: "Student voice on AI",
    titleItalic: "in education.",
    footerRight: "Six asks · Grounded in 447 student responses",
  });
}
