import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard names the winners of the first Vanguard Open.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "News · October 3, 2026",
    title: "Vanguard Open",
    titleItalic: "winners named.",
    footerRight: "The Vanguard Open 2026",
  });
}
