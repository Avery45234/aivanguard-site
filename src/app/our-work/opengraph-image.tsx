import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · Our Work — Research, policy advocacy, and community building for student voice on AI.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Our Work",
    title: "Three programs.",
    titleItalic: "One loop.",
    footerRight: "Research · Advocacy · Community",
  });
}
