import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · Contact — Reach out for partnerships, press, or collaboration.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "Contact",
    title: "Let's talk.",
    titleItalic: "We reply within 48 hours.",
    footerRight: "info@aivanguard.org",
  });
}
