import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { study } from "@/lib/study";
import { survey2025 as surveyMeta } from "@/lib/research";
import { survey2025, teacherSurvey2026, perceptionStudy } from "@/lib/research";

export const metadata: Metadata = {
  alternates: { canonical: "/research" },
  title: "Research",
  description:
    "AI Vanguard's evidence: a preregistered study of student influence on AI policy in the twelve largest U.S. districts, the 2025 policy survey of 447 students, and a companion teacher pilot.",
};

export default function ResearchPage() {
  return (
    <div className="tone-research">
      <PageHeader
        eyebrow="Research"
        title={
          <>
            Evidence first.{" "}
            <span className="serif-italic text-ink-dim">
              Then the argument.
            </span>
          </>
        }
        blurb="Everything AI Vanguard asks of schools and districts rests on primary research: what students told us, what teachers told us, and now a preregistered look at whether student voice changes policy at all."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Current study · Underway</span>
            <span>Policy survey · 447 students · 2025</span>
            <span>Teacher pilot · 10 educators · 2026</span>
          </div>
        }
      />

      {/* CURRENT STUDY */}
      <section
        id="study"
        className="py-14 md:py-20 scroll-mt-28 surface-panel"
        data-rail-section="Current study"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Current study · Preregistered"
                title={
                  <>
                    {study.title.replace(/\?$/, "")}
                    <span className="serif-italic">?</span>
                  </>
                }
                blurb={study.lead}
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed text-right">
                <div className="text-accent">{study.status}</div>
                <div className="mt-1">Protocol fixed · September 2026</div>
              </div>
            </div>
          </Reveal>

          {/* Research question */}
          <Reveal>
            <div className="mt-14 md:mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Research question
              </div>
              <div>
                <p className="font-display text-2xl md:text-[34px] leading-[1.15] tracking-tight text-ink max-w-3xl">
                  {study.question}
                </p>
                <ol className="mt-8 divide-y divide-border border-y border-border">
                  {study.secondary.map((q, i) => (
                    <li
                      key={q}
                      className="py-4 grid grid-cols-[auto_1fr] gap-5 text-[15px] text-ink-dim leading-relaxed"
                    >
                      <span className="fig text-sm text-ink-muted w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          {/* Scope tiles */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10">
            {[
              {
                value: `${study.sample.count}`,
                label: "Districts in the fixed sample",
                hint: "Largest U.S. systems, set before coding",
              },
              {
                value: `${study.records.count}`,
                label: "Public-records requests filed",
                hint: "Sept 3 – 18, 2026",
              },
              {
                value: "2",
                label: "Independent coders",
                hint: "Agreement reported as Cohen's kappa",
              },
              {
                value: "0–4",
                label: "Disposition scale",
                hint: "Unknown through substantially adopted",
              },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <StatTile value={s.value} label={s.label} hint={s.hint} />
              </Reveal>
            ))}
          </div>

          {/* Sample */}
          <Reveal>
            <div className="mt-20 md:mt-28 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                  The sample
                </div>
                <h3 className="font-display text-2xl md:text-[34px] leading-[1.08] tracking-tight text-ink">
                  Twelve districts,{" "}
                  <span className="serif-italic text-ink-dim">
                    chosen by someone else.
                  </span>
                </h3>
                <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  {study.sample.basis}
                </p>
                <p className="mt-4 text-[13.5px] text-ink-muted leading-relaxed max-w-md">
                  {study.sample.caveat} {study.records.note}
                </p>
              </div>
              <ol className="grid sm:grid-cols-2 gap-x-10 divide-y divide-border border-y border-border sm:divide-y-0 sm:border-0">
                {study.sample.districts.map((d, i) => (
                  <li
                    key={d}
                    className="py-3.5 grid grid-cols-[auto_1fr] gap-4 items-baseline sm:border-t sm:border-border"
                  >
                    <span className="fig text-xs text-ink-muted w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[17px] md:text-lg tracking-tight text-ink">
                      {d}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Evidence criteria */}
          <Reveal>
            <div className="mt-20 md:mt-28 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                  What counts as evidence
                </div>
                <h3 className="font-display text-2xl md:text-[34px] leading-[1.08] tracking-tight text-ink">
                  A press release{" "}
                  <span className="serif-italic text-ink-dim">
                    is not a consequence.
                  </span>
                </h3>
                <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  {study.unit}
                </p>
                <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  {study.dispositionNote}
                </p>
              </div>
              <div className="space-y-10">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                    Disposition of each student recommendation
                  </div>
                  <ol className="divide-y divide-border border-y border-border">
                    {study.dispositions.map((d) => (
                      <li
                        key={d.code}
                        className="py-3.5 grid grid-cols-[auto_1fr] gap-5 items-baseline"
                      >
                        <span className="fig text-lg text-accent w-6">{d.code}</span>
                        <span className="text-[15px] text-ink">{d.label}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                    Strength of the evidence behind it
                  </div>
                  <ol className="divide-y divide-border border-y border-border">
                    {study.evidence.map((e) => (
                      <li
                        key={e.level}
                        className="py-3.5 grid grid-cols-[auto_1fr] gap-5 items-baseline"
                      >
                        <span className="fig text-lg text-accent w-6">{e.level}</span>
                        <span className="text-[15px] text-ink-dim leading-relaxed">
                          {e.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Method notes */}
          <Reveal>
            <div className="mt-20 pt-8 border-t border-border grid gap-8 md:grid-cols-3 md:gap-12 text-[14px] text-ink-dim leading-relaxed">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                  Preregistration
                </div>
                <p>{study.preregistration}</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                  Reliability
                </div>
                <p>{study.reliability}</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                  Researcher position
                </div>
                <p>{study.position}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-[1fr_auto] md:gap-12 items-baseline border-t border-border pt-8">
              <p className="text-[15px] text-ink leading-relaxed max-w-2xl">
                <span className="text-accent">What happens next.</span>{" "}
                {study.timeline}
              </p>
              <p className="text-[12px] text-ink-muted leading-relaxed max-w-sm">
                Sample source: {study.source.citation}{" "}
                <a
                  href={study.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-accent/50 hover:text-ink"
                >
                  DOI ↗
                </a>
              </p>
            </div>
          </Reveal>

          {/* Public records behind the study. The registration link appears
              once the protocol's public registry URL is set in study.ts. */}
          <Reveal>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-ink-dim">
              {study.registration.href ? (
                <li>
                  <a
                    href={study.registration.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                  >
                    Preregistration on {study.registration.registry} ↗
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={study.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                >
                  Sample source, Liang et al. (2026) ↗
                </a>
              </li>
              <li>
                <a
                  href={surveyMeta.meta.analysisScript}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                >
                  Survey analysis script on GitHub ↗
                </a>
              </li>
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* 2025 STUDENT SURVEY */}
      <section
        id="survey-2025"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="2025 survey"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="2025 Student AI Policy Survey"
                title={
                  <>
                    {survey2025.meta.totalResponses} students.{" "}
                    {survey2025.meta.schoolCount} schools.{" "}
                    <span className="serif-italic">One clear message.</span>
                  </>
                }
                blurb={
                  <>
                    Our first research cycle, run through campus representatives
                    at partner schools. The raw data behind the policy
                    conversations we bring to districts, and the evidence base
                    for the 2026 policy brief.{" "}
                    <Link
                      href="/research/student-ai-survey"
                      className="text-accent underline underline-offset-4"
                    >
                      Full methods, exact question wording, and counts →
                    </Link>
                  </>
                }
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed text-right">
                <div>{survey2025.meta.cycle}</div>
                <div className="mt-1">{survey2025.meta.window}</div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10">
            {survey2025.headline.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <StatTile value={s.value} label={s.label} hint={s.hint} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 md:mt-28 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                  What students want schools to do
                </div>
                <h3 className="font-display text-2xl md:text-[34px] leading-[1.08] tracking-tight text-ink">
                  The dominant preference isn&apos;t a ban.{" "}
                  <span className="serif-italic text-ink-dim">
                    It&apos;s guidance.
                  </span>
                </h3>
                <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  Only 4% of students called AI use outright cheating. 74% asked
                  schools to teach responsible use, and 35% explicitly asked to
                  be involved in shaping the policies themselves, the core
                  justification for our representative model.
                </p>
              </div>
              <ol className="divide-y divide-border border-y border-border">
                {survey2025.policyPreferences.map((p, i) => (
                  <li
                    key={p.label}
                    className="py-5 md:py-6 grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center"
                  >
                    <span className="fig text-xs md:text-sm text-ink-muted w-7">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display text-[17px] md:text-xl tracking-tight text-ink">
                        {p.label}
                      </div>
                      <div className="mt-2 h-[3px] w-full bg-border/50 overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                    <span className="fig text-sm md:text-base text-accent tabular-nums">
                      {p.pct}%
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-20 pt-8 border-t border-border grid gap-4 md:grid-cols-[auto_1fr] md:gap-12 text-[12.5px] text-ink-muted leading-relaxed">
              <div className="uppercase tracking-[0.22em] text-[11px]">Methodology</div>
              <p className="max-w-3xl">
                {survey2025.meta.totalResponses} responses collected via Google Form,{" "}
                {survey2025.schoolDistribution
                  .filter((s) => s.n > 1)
                  .map((s) => `${s.school} (${s.pct}%)`)
                  .join(", ")}{" "}
                representing the bulk of responses. Multi-select questions total
                more than 100%. Raw data retained by AI Vanguard; percentages are
                computed from every submitted response, not a sample.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TEACHER PILOT */}
      <section
        id="teachers-2026"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="Teacher pilot"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="2026 Teacher pilot"
                title={
                  <>
                    The other side{" "}
                    <span className="serif-italic">of the desk.</span>
                  </>
                }
                blurb={`A companion pilot survey of ${teacherSurvey2026.meta.totalResponses} educators in January 2026. Small sample by design: a read on where teachers sit before we broaden distribution. The findings hang together with the 447-student data.`}
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed text-right">
                <div>{teacherSurvey2026.meta.cycle}</div>
                <div className="mt-1">{teacherSurvey2026.meta.window}</div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10">
            {teacherSurvey2026.headline.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <StatTile value={s.value} label={s.label} hint={s.hint} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16 items-start">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                  The gap this exposes
                </div>
                <h3 className="font-display text-2xl md:text-[34px] leading-[1.08] tracking-tight text-ink">
                  Pressure to adopt.{" "}
                  <span className="serif-italic text-ink-dim">
                    Confident detection. Wrong answers.
                  </span>
                </h3>
                <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  The survey asked teachers to classify three unlabeled paragraphs
                  as student-written, AI-assisted, or AI-generated. Teachers
                  averaged 30% accuracy, below the 33% you&apos;d expect from
                  guessing. Every teacher misidentified the paragraph that was
                  actually written by a student.
                </p>
              </div>
              <div className="border-y border-border divide-y divide-border">
                {teacherSurvey2026.detectionQuiz.perParagraph.map((p) => (
                  <div
                    key={p.id}
                    className="py-5 md:py-6 grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center"
                  >
                    <span className="fig text-sm md:text-base text-ink-muted w-7">{p.id}</span>
                    <div>
                      <div className="font-display text-[17px] md:text-xl tracking-tight text-ink">
                        Actually: {p.truth}
                      </div>
                      <div className="mt-2 h-[3px] w-full bg-border/50 overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${p.pct}%` }} />
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        {p.correct} of {p.total} teachers correctly identified
                      </div>
                    </div>
                    <span className="fig text-sm md:text-base text-accent tabular-nums">
                      {p.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PERCEPTION STUDY */}
      <section
        id="perception"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Field study"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
              <div className="md:sticky md:top-28">
                <SectionHeading
                  eyebrow="Rep-led field study"
                  title={
                    <>
                      Can teachers{" "}
                      <span className="serif-italic">actually tell?</span>
                    </>
                  }
                  blurb="A separate qualitative study, distinct from the teacher pilot. An AI Vanguard representative asked five teachers to compare an AI-assisted paper against a student's original work, first blind, then with the source revealed, and recorded how their grading shifted."
                />
                <div className="mt-8 divide-y divide-border border-y border-border">
                  {perceptionStudy.findings.map((f) => (
                    <div key={f.label} className="py-4 flex items-baseline justify-between gap-6">
                      <span className="text-[12.5px] uppercase tracking-[0.18em] text-ink-muted leading-snug max-w-[260px]">
                        {f.label}
                      </span>
                      <span className="fig text-xl md:text-2xl text-accent tabular-nums">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <article className="font-display text-[17px] md:text-[19px] leading-[1.62] text-ink-dim">
                <h3 className="font-display text-2xl md:text-[32px] leading-[1.1] tracking-tight text-ink mb-6">
                  {perceptionStudy.title}
                </h3>
                <p>{perceptionStudy.report}</p>
                <p className="mt-8 text-[13.5px] tracking-wide text-ink-dim">
                  Written by {perceptionStudy.by}
                </p>
              </article>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* POLICY BRIEF + CTA */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Policy brief"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <div>
                <h3 className="font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink max-w-3xl">
                  The research became{" "}
                  <span className="serif-italic text-ink-dim">six asks.</span>
                </h3>
                <p className="mt-4 text-ink-dim max-w-lg">
                  Our 2026 policy brief translates the student and teacher
                  findings into six concrete recommendations for schools and
                  districts. Districts, researchers, and reporters who want the
                  underlying data can{" "}
                  <Link
                    href="/contact"
                    className="text-accent underline underline-offset-4"
                  >
                    ask for it
                  </Link>
                  .
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button href="/policy-brief" size="lg">
                  Read the policy brief
                </Button>
                <Button href={site.applyUrl} external variant="secondary" size="lg">
                  Join as a student researcher
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
