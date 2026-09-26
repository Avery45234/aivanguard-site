import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { survey2025 } from "@/lib/research";

const CHART_SRC = "/img/research/policy-preferences-2025.svg";
const CHART_ALT =
  "Horizontal bar chart of what 447 students said schools should do about AI. Teach students to use AI responsibly, 74% (330). Involve students in shaping AI rules, 35% (158). Create stricter rules, 26% (116). Allow free use with minimal restrictions, 24% (106). Do nothing, 14% (63). AI should complete most of the work, 5% (22). Select-all-that-apply, so bars total more than 100%. AI Vanguard 2025 Student AI Policy Survey.";

export const metadata: Metadata = {
  alternates: { canonical: "/research/student-ai-survey" },
  title: "2025 Student AI Policy Survey · What 447 students said about AI at school",
  description:
    "Methods and findings from AI Vanguard's 2025 survey of 447 Southern California high school students: exact question wording, counts and denominators, sample limits, and a downloadable chart.",
};

export default function StudentSurveyPage() {
  const m = survey2025.meta;
  return (
    <>
      <PageHeader
        eyebrow="Research · 2025 Student AI Policy Survey"
        title={
          <>
            What did {m.totalResponses} students say{" "}
            <span className="serif-italic">about AI at school?</span>
          </>
        }
        blurb="Students are not asking for a ban. Four in five already use AI for schoolwork, nine in ten think it is acceptable with conditions, and the most common thing they want from their schools is to be taught how to use it well. Every figure on this page comes with its count, its denominator, and the exact question that produced it."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>{m.totalResponses} responses · {m.schoolCount} schools</span>
            <span>Fielded {m.window}</span>
            <span>Convenience sample · Southern California</span>
            <span>Methods updated September 2026</span>
          </div>
        }
      />

      {/* FINDINGS */}
      <section
        id="findings"
        className="py-14 md:py-20 scroll-mt-28"
        data-rail-section="Findings"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Findings"
              title={
                <>
                  Four numbers,{" "}
                  <span className="serif-italic">with their receipts.</span>
                </>
              }
              blurb={`All percentages are shares of all ${m.totalResponses} submitted responses, rounded to the nearest whole number. Each one lists the exact question and which response options were counted.`}
            />
          </Reveal>

          <ol className="mt-14 md:mt-20 divide-y divide-border border-y border-border">
            {survey2025.headline.map((h, i) => (
              <Reveal key={h.label} delay={i * 40}>
                <li className="py-10 md:py-12 grid gap-8 md:grid-cols-12 md:gap-14 items-start">
                  <div className="md:col-span-4">
                    <StatTile
                      value={h.value}
                      label={h.label}
                      hint={`${h.n} of ${m.totalResponses}`}
                      className="border-t-0 pt-0"
                    />
                  </div>
                  <dl className="md:col-span-8 grid gap-5 text-[15px] leading-relaxed">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                        The question, as asked
                      </dt>
                      <dd className="mt-1.5 font-display text-lg md:text-xl text-ink tracking-tight">
                        &ldquo;{h.question}&rdquo;
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                        Counted as yes
                      </dt>
                      <dd className="mt-1.5 text-ink-dim">{h.counted}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                        Everyone else
                      </dt>
                      <dd className="mt-1.5 text-ink-dim">{h.rest}</dd>
                    </div>
                  </dl>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* WHAT SCHOOLS SHOULD DO — chart */}
      <section
        id="school-role"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="Chart"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-28">
              <Reveal>
                <SectionHeading
                  eyebrow="What students want schools to do"
                  title={
                    <>
                      The dominant preference isn&apos;t a ban.{" "}
                      <span className="serif-italic">It&apos;s guidance.</span>
                    </>
                  }
                  blurb={
                    <>
                      &ldquo;{survey2025.questions[7]}&rdquo; was select-all-that-apply,
                      so the bars total more than 100%. Only{" "}
                      {survey2025.policyPreferences[5].n} students (
                      {survey2025.policyPreferences[5].pct}%) wanted AI to do
                      most of the work; {survey2025.policyPreferences[1].n} (
                      {survey2025.policyPreferences[1].pct}%) asked to help
                      write the rules themselves.
                    </>
                  }
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={CHART_SRC} external variant="secondary" size="md">
                    Download the chart (SVG) ↗
                  </Button>
                  <Button
                    href="/data/policy-preferences-2025.csv"
                    external
                    variant="secondary"
                    size="md"
                  >
                    Download the table (CSV) ↗
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                <figure className="border border-border bg-bg p-6 md:p-8">
                  <ol className="divide-y divide-border">
                    {survey2025.policyPreferences.map((p, i) => (
                      <li
                        key={p.label}
                        className="py-4 md:py-5 grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center"
                      >
                        <span className="fig text-xs md:text-sm text-ink-muted w-7">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="font-display text-[16px] md:text-lg tracking-tight text-ink">
                            {p.label}
                          </div>
                          <div
                            className="mt-2 h-[6px] w-full bg-border/40 overflow-hidden rounded-r-[4px]"
                            role="img"
                            aria-label={`${p.label}: ${p.pct} percent, ${p.n} of ${m.totalResponses}`}
                          >
                            <div
                              className="h-full bg-accent rounded-r-[4px]"
                              style={{ width: `${p.pct}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-right">
                          <span className="fig text-base md:text-lg text-ink tabular-nums">
                            {p.pct}%
                          </span>
                          <span className="block text-[11px] text-ink-muted tabular-nums">
                            n = {p.n}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  <figcaption className="mt-5 pt-4 border-t border-border text-[12px] text-ink-muted leading-relaxed">
                    Share of all {m.totalResponses} responses selecting each
                    option. Source: AI Vanguard 2025 Student AI Policy Survey,{" "}
                    {m.window}. Downloadable SVG and CSV above carry the same
                    values.
                  </figcaption>
                </figure>
                <p className="sr-only">{CHART_ALT}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ACCESS */}
      <section
        id="access"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Access"
      >
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                Equal access
              </div>
              <h3 className="font-display text-2xl md:text-[34px] leading-[1.08] tracking-tight text-ink">
                Two in three say access is equal.{" "}
                <span className="serif-italic text-ink-dim">One in five disagree.</span>
              </h3>
              <p className="mt-5 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                &ldquo;{survey2025.questions[6]}&rdquo; Single choice. The 18% who
                said some students lack access is the number our equity
                commitment is built on.
              </p>
            </Reveal>
            <Reveal>
              <ol className="divide-y divide-border border-y border-border">
                {survey2025.equalAccess.map((a) => (
                  <li
                    key={a.label}
                    className="py-4 grid grid-cols-[1fr_auto_auto] gap-6 items-baseline"
                  >
                    <span className="font-display text-[16px] md:text-lg tracking-tight text-ink">
                      {a.label}
                    </span>
                    <span className="fig text-sm text-ink-muted tabular-nums">n = {a.n}</span>
                    <span className="fig text-base md:text-lg text-ink tabular-nums w-14 text-right">
                      {a.pct}%
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WHO RESPONDED */}
      <section
        id="sample"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="Who responded"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Who responded"
              title={
                <>
                  Six schools,{" "}
                  <span className="serif-italic">two of them almost entirely.</span>
                </>
              }
              blurb="This is a convenience sample: students reached through AI Vanguard representatives at their own campuses, not a random draw. 96% of responses came from two schools. The findings describe these students, not all students."
            />
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                By school
              </div>
              <ol className="divide-y divide-border border-y border-border">
                {survey2025.schoolDistribution.map((s) => (
                  <li key={s.school} className="py-3.5 grid grid-cols-[1fr_auto_auto] gap-6 items-baseline">
                    <span className="font-display text-[16px] md:text-lg tracking-tight text-ink">
                      {s.school} High School
                    </span>
                    <span className="fig text-sm text-ink-muted tabular-nums">n = {s.n}</span>
                    <span className="fig text-base text-ink tabular-nums w-12 text-right">{s.pct}%</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">
                By grade
              </div>
              <ol className="divide-y divide-border border-y border-border">
                {survey2025.grades.map((g) => (
                  <li key={g.label} className="py-3.5 grid grid-cols-[1fr_auto_auto] gap-6 items-baseline">
                    <span className="font-display text-[16px] md:text-lg tracking-tight text-ink">
                      {g.label}
                    </span>
                    <span className="fig text-sm text-ink-muted tabular-nums">n = {g.n}</span>
                    <span className="fig text-base text-ink tabular-nums w-12 text-right">{g.pct}%</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* METHODS */}
      <section
        id="methods"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Methods"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Methods and limitations"
              title={
                <>
                  How the survey was run,{" "}
                  <span className="serif-italic">and what it can&apos;t tell you.</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12 text-[15px] text-ink-dim leading-relaxed">
            {[
              {
                t: "Instrument",
                b: `${m.instrument}. Nine items: eight structured questions and one optional comment field. The exact wording of every question is listed below.`,
              },
              {
                t: "Recruitment and field period",
                b: `Responses were collected from ${m.window}. Representatives shared the form at their own schools, so participation depended on where AI Vanguard had a representative and how actively the form circulated there.`,
              },
              {
                t: "Sample",
                b: "A convenience sample of high school students in Southern California. It is not representative of any school, district, or state. Two schools account for 96% of responses; seniors are under-represented (11%).",
              },
              {
                t: "Denominators and rounding",
                b: `Every percentage divides by all ${m.totalResponses} submitted responses, including write-in answers, and is rounded to the nearest whole number. The school-role question was select-all-that-apply, so its options total more than 100%.`,
              },
              {
                t: "Duplicates",
                b: `${m.duplicateRows} rows are exact duplicates of another response (same school, grade, and answers, different timestamp), most likely accidental double submissions. Removing them (n = ${m.uniqueResponses}) changes no headline figure by more than half a percentage point, so the published analysis keeps all ${m.totalResponses} and discloses this here.`,
              },
              {
                t: "Corrections",
                b: "In September 2026 the first headline figure was corrected from 84% to 80%. The earlier number was the count of frequent users (84) mistaken for a percentage. No other figure changed.",
              },
              {
                t: "Privacy",
                b: "No names or emails are published. Quotes from the comment field are attributed by grade and school only. Student-level records are not released.",
              },
              {
                t: "Analysis and authorship",
                b: "The survey was designed and distributed by AI Vanguard and analyzed by AI Vanguard. The analysis script is public in our site repository, so anyone can check the counts against the aggregate method.",
              },
            ].map((x) => (
              <Reveal key={x.t}>
                <div className="border-t border-border pt-5">
                  <h4 className="font-display text-xl md:text-2xl tracking-tight text-ink">{x.t}</h4>
                  <p className="mt-3 max-w-lg">{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 border-t border-border pt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                Every question, as worded on the form
              </div>
              <ol className="grid gap-x-12 gap-y-2 md:grid-cols-2 text-[14.5px] text-ink-dim">
                {survey2025.questions.map((q, i) => (
                  <li key={q} className="grid grid-cols-[auto_1fr] gap-4 py-1.5">
                    <span className="fig text-xs text-ink-muted w-5">{i + 1}</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[12.5px] text-ink-muted">
                Analysis script:{" "}
                <a
                  href={m.analysisScript}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-accent/50 hover:text-ink"
                >
                  scripts/analyze-survey.mjs on GitHub ↗
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FOR EDUCATORS AND JOURNALISTS */}
      <section
        id="cite"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="Cite"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="For educators and journalists"
                  title={
                    <>
                      Use it.{" "}
                      <span className="serif-italic">Cite it.</span>
                    </>
                  }
                  blurb="Findings, the chart, and the table may be reproduced with attribution to AI Vanguard and a link to this page. For the underlying aggregate counts, a student source, or a founder interview, use the contact form; we answer."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" size="md">
                    Contact AI Vanguard
                  </Button>
                  <Button href="/press" variant="secondary" size="md">
                    Press kit
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <dl className="divide-y divide-border border-y border-border text-[15px] leading-relaxed">
                  <div className="py-5 grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted pt-1">Suggested citation</dt>
                    <dd className="text-ink">{m.citation}</dd>
                  </div>
                  <div className="py-5 grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted pt-1">Quotable, organizational</dt>
                    <dd className="text-ink">
                      &ldquo;Students are not asking for a ban. They are asking to be taught, and to be consulted.&rdquo;
                      <span className="block mt-1 text-[13px] text-ink-muted">
                        AI Vanguard, on the 2025 Student AI Policy Survey. An organizational statement, not a recorded interview.
                      </span>
                    </dd>
                  </div>
                  <div className="py-5 grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted pt-1">Downloads</dt>
                    <dd className="text-ink">
                      <a href={CHART_SRC} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-accent/50 hover:text-accent">Chart (SVG)</a>
                      {" · "}
                      <a href="/data/policy-preferences-2025.csv" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-accent/50 hover:text-accent">Table (CSV)</a>
                      {" · "}
                      <Link href="/policy-brief" className="underline underline-offset-4 decoration-accent/50 hover:text-accent">Policy brief</Link>
                      <span className="block mt-1 text-[13px] text-ink-muted">Chart alt text: {CHART_ALT}</span>
                    </dd>
                  </div>
                  <div className="py-5 grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-muted pt-1">Permission</dt>
                    <dd className="text-ink">
                      Reproduce freely with attribution. Please do not describe the sample as national or representative; it is neither. Contact:{" "}
                      <a href={`mailto:${site.email}`} className="underline underline-offset-4 decoration-accent/50 hover:text-accent">{site.email}</a>.
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* BACK TO HUB */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="More research">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                This survey is why we now study{" "}
                <span className="serif-italic text-ink-dim">
                  whether student voice changes anything.
                </span>
              </h3>
              <div className="flex gap-3 flex-wrap">
                <Button href="/research#study" size="lg">
                  The 12-district study
                </Button>
                <Button href="/research" variant="secondary" size="lg">
                  All research
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
