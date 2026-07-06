import { redirect } from "next/navigation";

// Registration moved into the Entrant Portal. Keep this route alive for
// links already shared to /competition/register.
export default function CompetitionRegisterRedirect() {
  redirect("/portal/register");
}
