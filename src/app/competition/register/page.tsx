import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PORTAL_OPEN } from "@/lib/competition";

// Registration lives in the Entrant Portal. Keep this route alive for
// links already shared to /competition/register. While the portal is
// closed, send people to the results instead of a closed door.
export const metadata: Metadata = {
  alternates: { canonical: "/competition/register" },
};

export default function CompetitionRegisterRedirect() {
  redirect(PORTAL_OPEN ? "/portal/register" : "/competition");
}
