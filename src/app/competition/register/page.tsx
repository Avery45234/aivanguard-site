import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Competition Registration",
  description:
    "Register for the AI Vanguard Open Competition. Registration is free and takes two minutes. Submissions are due September 25, 2026.",
};

const steps = [
  {
    n: "01",
    title: "Register",
    body: "Tell us who you are and how you plan to enter. Registration is free, takes two minutes, and doesn't commit you to a format.",
    now: true,
  },
  {
    n: "02",
    title: "Build your entry",
    body: "Create the work, write the 300-word Rationale, and prepare your AI Use Disclosure. Any format is welcome.",
  },
  {
    n: "03",
    title: "Submit by September 25, 2026",
    body: "Registered entrants receive submission instructions by email. Results are announced October 3, 2026.",
  },
];

export default function CompetitionRegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Vanguard Open Competition · 2026"
        title={
          <>
            Register <span className="serif-italic">to enter.</span>
          </>
        }
        blurb={
          <>
            One registration per person or team. Haven&apos;t read the brief
            yet?{" "}
            <Link
              href="/competition"
              className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
            >
              Start there
            </Link>
            .
          </>
        }
      />

      <section className="py-14 md:py-20" data-rail-section="Register">
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-4">
              <Reveal>
                <ol className="divide-y divide-border border-y border-border">
                  {steps.map((s) => (
                    <li key={s.n} className="py-6 grid grid-cols-[44px_1fr] gap-4">
                      <span
                        className={`fig text-xl ${s.now ? "text-accent" : "text-ink-muted"}`}
                      >
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-tight text-ink flex items-baseline gap-3">
                          {s.title}
                          {s.now && (
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                              You are here
                            </span>
                          )}
                        </h3>
                        <p className="mt-2 text-[14px] text-ink-dim leading-relaxed">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
            <div className="md:col-span-8 max-w-2xl">
              <Reveal>
                <RegisterForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
