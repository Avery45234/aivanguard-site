import type { Metadata } from "next";
import { PortalHome } from "./PortalHome";

export const metadata: Metadata = {
  title: "Entrant Portal — AI Vanguard Open Competition",
  description:
    "Register, track your entry, and submit your work for the AI Vanguard Open Competition. Submissions due September 25, 2026.",
};

export default function PortalPage() {
  return <PortalHome />;
}
