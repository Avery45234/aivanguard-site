import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Official registration form for the AI Vanguard Open Competition. Free, takes a few minutes. Submissions due September 25, 2026.",
};

const steps = [
  {
    n: "01",
    title: "Register",
    body: "Tell us who you are and how you plan to enter. Free, a few minutes, and it doesn't commit you to a format.",
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
    body: "The submission window opens here in the portal. Results are announced October 3, 2026.",
  },
];

export default function PortalRegisterPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container size="wide" className="py-12 md:py-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
            Official entry form · 2026
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-ink">
            Register <span className="serif-italic">to enter.</span>
          </h1>
          <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-xl">
            One registration per person or team. Haven&apos;t read the brief
            yet?{" "}
            <a
              href="/competition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
            >
              Start there ↗
            </a>
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-4">
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
              <p className="mt-6 text-[13px] text-ink-muted leading-relaxed">
                Already registered?{" "}
                <Link
                  href="/portal"
                  className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
                >
                  Sign in to your dashboard
                </Link>
                .
              </p>
            </div>
            <div className="md:col-span-8 max-w-2xl">
              <RegisterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
