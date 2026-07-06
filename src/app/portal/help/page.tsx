import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { HelpForm } from "./HelpForm";

export const metadata: Metadata = {
  title: "Help",
  description:
    "Get help with the AI Vanguard Open Competition — registration, submissions, rules, or technical issues.",
};

export default function PortalHelpPage() {
  return (
    <section className="py-12 md:py-20">
      <Container size="narrow">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
              Entrant Portal
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink">
              How can we <span className="serif-italic">help?</span>
            </h1>
            <p className="mt-4 text-[14px] text-ink-dim leading-relaxed">
              Requests go straight to the organizers and we reply by email —
              usually within a couple of days.
            </p>
          </div>
          <div className="mt-8">
            <HelpForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
