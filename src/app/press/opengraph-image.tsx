import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · Press Kit — Boilerplate, logo, research stats, and a press contact.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Press Kit",
    title: "Writing about us?",
    titleItalic: "Start here.",
    footerRight: "info@aivanguard.org",
  });
}
