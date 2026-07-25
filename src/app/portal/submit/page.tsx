import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SubmitForm } from "./SubmitForm";

export const metadata: Metadata = {
  title: "Submit your entry",
  description:
    "Official submission form for the Vanguard Open 2026. The work, the 300-word Rationale, and the AI Use Disclosure, due September 25, 2026.",
};

export default function PortalSubmitPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container size="narrow" className="py-12 md:py-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
            Official submission form · 2026
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-ink">
            Submit <span className="serif-italic">your entry.</span>
          </h1>
          <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-xl">
            Three things make a complete entry: the work, the 300-word
            Rationale, and the AI Use Disclosure. Check the{" "}
            <a
              href="/competition#requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
            >
              submission requirements ↗
            </a>{" "}
            one last time before you hit send.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="max-w-xl">
            <SubmitForm />
          </div>
        </Container>
      </section>
    </>
  );
}
