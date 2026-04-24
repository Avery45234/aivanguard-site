import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · Get Involved — Apply as a student representative, partner with us, or support the work.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Get Involved",
    title: "There's a door",
    titleItalic: "with your name on it.",
    footerRight: "Apply · Partner · Support",
  });
}
