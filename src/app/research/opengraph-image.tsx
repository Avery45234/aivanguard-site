import { OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "edge";
export const alt =
  "AI Vanguard · Research — a preregistered study of student voice in AI policy, plus the 2025 policy survey.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Research",
    title: "Evidence first.",
    titleItalic: "Then the argument.",
    footerRight: "12-district study · 447 students surveyed",
  });
}
