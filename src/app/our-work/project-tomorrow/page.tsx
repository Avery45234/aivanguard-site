import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { partnerships, site } from "@/lib/site";
import { survey2025 } from "@/lib/research";
import { speakUp } from "@/lib/study";

export const metadata: Metadata = {
  alternates: { canonical: "/our-work/project-tomorrow" },
  title: "Our Partnership with Project Tomorrow",
  description:
    "AI Vanguard works with Project Tomorrow to bring student perspectives into Speak Up, its national education research initiative, including feedback on the AI questions in the 2026–27 surveys.",
};

const linkClass =
  "inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50";

export default function ProjectTomorrowPage() {
  const pt = partnerships.find((p) => p.id === "project-tomorrow")!;

  return (
    <>
      <PageHeader
        eyebrow="Partnership · Project Tomorrow"
        title={
          <>
            Our partnership with{" "}
            <span className="serif-italic">Project Tomorrow.</span>
          </>
        }
        blurb={pt.lede}
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Speak Up · national research since 2003</span>
            <span>Student feedback on the 2026–27 surveys</span>
            <span>Updated October 2026</span>
          </div>
        }
      />

      {/* OUR WORK TOGETHER */}
      <section
        id="work"
        className="py-14 md:py-20 scroll-mt-28"
        data-rail-section="Our work together"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Our work together"
                  title={
                    <>
                      Student perspectives,{" "}
                      <span className="serif-italic">built into the research.</span>
                    </>
                  }
                />
                <p className="mt-8 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-2xl">
                  {pt.body}
                </p>

                <ol className="mt-10 divide-y divide-border border-y border-border max-w-2xl">
                  {pt.contributions.map((c, i) => (
                    <li
                      key={c.t}
                      className="py-6 grid gap-3 sm:grid-cols-[48px_1fr] sm:gap-6 items-baseline"
                    >
                      <span className="fig text-xl text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl md:text-[26px] tracking-tight text-ink">
                          {c.t}
                        </h3>
                        <p className="mt-2 text-[15px] text-ink-dim leading-relaxed">
                          {c.b}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="mt-10 font-display italic text-2xl md:text-3xl leading-snug text-ink max-w-2xl">
                  {pt.goal}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:pt-4">
              <Reveal>
                <div className="grid gap-x-8">
                  <StatTile
                    value={speakUp.cycle.value}
                    label="Speak Up participants"
                    hint={speakUp.cycle.label}
                  />
                  <StatTile
                    value={speakUp.cumulative.value}
                    label="Since 2003"
                    hint={speakUp.cumulative.label}
                  />
                </div>
                <p className="mt-4 text-[12px] text-ink-muted leading-relaxed">
                  {speakUp.attribution} {pt.disclaimer}
                </p>

                <div className="mt-10 flex flex-col items-start gap-3">
                  <a
                    href={pt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Speak Up at Project Tomorrow ↗
                  </a>
                  <Link href="/research/student-ai-survey" className={linkClass}>
                    What {survey2025.meta.totalResponses} students told us →
                  </Link>
                  <Link href="/our-work#abcusd" className={linkClass}>
                    How student input works in a district →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-14 md:py-20 border-t border-border surface-panel"
        data-rail-section="Work with us"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink max-w-3xl">
                Running research about students?{" "}
                <span className="serif-italic text-ink-dim">
                  We can help it hear them.
                </span>
              </h3>
              <div className="flex gap-3 flex-wrap">
                <Button href="/get-involved#researchers" size="lg">
                  Work with us
                </Button>
                <Button href={site.applyUrl} external variant="secondary" size="lg">
                  Apply as a student
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
