import { renderOgCard, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "AI Vanguard · About — A student-led nonprofit ensuring students have a voice in how AI enters the classroom.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OG() {
  return renderOgCard({
    eyebrow: "About",
    title: "Run by students —",
    titleItalic: "not for them.",
    footerRight: "501(c)(3) · Southern California",
  });
}
