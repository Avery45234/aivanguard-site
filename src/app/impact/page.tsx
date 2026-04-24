import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { StatTile } from "@/components/StatTile";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { metrics, milestones, schools, site } from "@/lib/site";
import { survey2025, teacherSurvey2026, perceptionStudy } from "@/lib/research";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "AI Vanguard's reach so far — students represented, schools engaged, districts seen, and the milestones on the way.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title={
          <>
            Where student voice{" "}
            <span className="serif-italic">has already reached.</span>
          </>
        }
        blurb="A snapshot of AI Vanguard today — the campuses we're on, the districts we're engaging, and the milestones we've hit on the way."
        meta={
          <p className="max-w-sm text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed">
            Last updated · April 2026 <br />
            We only publish numbers we can stand behind.
          </p>
        }
      />

      {/* METRICS */}
      <section className="py-12 md:py-16" data-rail-section="Numbers">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12">
            {metrics.map((m) => (
              <Reveal key={m.label}>
                <StatTile value={m.value} label={m.label} hint={m.hint} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SCHOOLS — editorial index */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Schools"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Schools represented"
              title={
                <>
                  Active on {schools.length} campuses{" "}
                  <span className="serif-italic">
                    across Southern California.
                  </span>
                </>
              }
              blurb="Our representatives run research and policy conversations at the schools below — with more campuses onboarding each cycle."
            />
          </Reveal>

          <Reveal>
            <ul className="mt-14 divide-y divide-border border-y border-border">
              {schools.map((s, i) => (
                <li
                  key={s}
                  className="py-5 md:py-6 grid grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-baseline"
                >
                  <span className="fig text-sm text-ink-muted w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl md:text-3xl text-ink tracking-tight">
                    {s}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    High School
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* RESEARCH FINDINGS — 2025 policy survey */}
      <section
        className="py-14 md:py-20 border-t border-border surface-panel"
        data-rail-section="Research"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Research · 2025 policy survey"
                title={
                  <>
                    {survey2025.meta.totalResponses} students.{" "}
                    {survey2025.meta.schoolCount} schools.{" "}
                    <span className="serif-italic">One clear message.</span>
                  </>
                }
                blurb="Our first student-voice research cycle. Run through campus reps at partner schools — the raw data behind the policy conversations we bring to districts."
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed text-right">
                <div>{survey2025.meta.cycle}</div>
                <div className="mt-1">{survey2025.meta.window}</div>
              </div>
            </div>
          </Reveal>

          {/* Headline stat grid */}
          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10">
            {survey2025.headline.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <StatTile value={s.value} label={s.label} hint={s.hint} />
              </Reveal>
            ))}
          </div>

          {/* What students want schools to do — horizontal bar list */}
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
                  be involved in shaping the policies themselves — the core
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
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${p.pct}%` }}
                        />
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

          {/* Methodology note */}
          <Reveal>
            <div className="mt-20 pt-8 border-t border-border grid gap-4 md:grid-cols-[auto_1fr] md:gap-12 text-[12.5px] text-ink-muted leading-relaxed">
              <div className="uppercase tracking-[0.22em] text-[11px]">
                Methodology
              </div>
              <p className="max-w-3xl">
                {survey2025.meta.totalResponses} responses collected via Google
                Form,{" "}
                {survey2025.schoolDistribution
                  .filter((s) => s.n > 1)
                  .map((s) => `${s.school} (${s.pct}%)`)
                  .join(", ")}{" "}
                representing the bulk of responses. Multi-select questions total
                more than 100%. Raw data retained by AI Vanguard; percentages
                above are computed from every submitted response, not a sample.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TEACHER SURVEY — the other side of the desk */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Teachers"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Research · Teacher pilot"
                title={
                  <>
                    The other side{" "}
                    <span className="serif-italic">of the desk.</span>
                  </>
                }
                blurb={`A companion pilot survey of ${teacherSurvey2026.meta.totalResponses} educators in January 2026. Small sample by design — a read on where teachers sit before we broaden distribution. The findings hang together with the 447-student data.`}
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
                  The survey asked teachers to classify three unlabeled
                  paragraphs as student-written, AI-assisted, or AI-generated.
                  Teachers averaged 30% accuracy — below the 33% you&apos;d
                  expect from guessing. Most striking: every single teacher
                  misidentified the paragraph that was actually written by a
                  student, calling it AI or AI-assisted.
                </p>
              </div>

              <div className="border-y border-border divide-y divide-border">
                {teacherSurvey2026.detectionQuiz.perParagraph.map((p) => (
                  <div
                    key={p.id}
                    className="py-5 md:py-6 grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center"
                  >
                    <span className="fig text-sm md:text-base text-ink-muted w-7">
                      {p.id}
                    </span>
                    <div>
                      <div className="font-display text-[17px] md:text-xl tracking-tight text-ink">
                        Actually: {p.truth}
                      </div>
                      <div className="mt-2 h-[3px] w-full bg-border/50 overflow-hidden">
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${p.pct}%` }}
                        />
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

          {/* Attitudes breakdown — moved below the detection quiz */}
          <Reveal>
            <div className="mt-16 pt-8 border-t border-border grid gap-6 md:grid-cols-3">
              {teacherSurvey2026.viewBreakdown.map((v) => (
                <div key={v.label}>
                  <div className="fig text-3xl md:text-4xl text-ink tabular-nums">
                    {v.pct}%
                  </div>
                  <div className="mt-2 text-[13px] text-ink-dim leading-snug">
                    {v.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PERCEPTION STUDY — separate qualitative rep-led research */}
      <section
        className="py-14 md:py-20 border-t border-border surface-panel"
        data-rail-section="Perception"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
              <div className="md:sticky md:top-28">
                <SectionHeading
                  eyebrow="Separate study · rep-led field research"
                  title={
                    <>
                      Can teachers{" "}
                      <span className="serif-italic">actually tell?</span>
                    </>
                  }
                  blurb="A distinct qualitative study — not part of the teacher survey above. An AI Vanguard representative asked five teachers to compare an AI-assisted paper against a student's original work, first blind, then with the source revealed, and measured how their grading shifted."
                />
                <div className="mt-8 divide-y divide-border border-y border-border">
                  {perceptionStudy.findings.map((f) => (
                    <div
                      key={f.label}
                      className="py-4 flex items-baseline justify-between gap-6"
                    >
                      <span className="text-[12.5px] uppercase tracking-[0.18em] text-ink-muted leading-snug max-w-[260px]">
                        {f.label}
                      </span>
                      <span className="fig text-xl md:text-2xl text-accent tabular-nums">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  — {perceptionStudy.by}
                </div>
              </div>

              <Reveal>
                <article className="font-display text-[17px] md:text-[19px] leading-[1.62] text-ink-dim max-w-none">
                  <h3 className="font-display text-2xl md:text-[32px] leading-[1.1] tracking-tight text-ink mb-6">
                    {perceptionStudy.title}
                  </h3>
                  <p>{perceptionStudy.report}</p>
                </article>
              </Reveal>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* MILESTONES — timeline with imagery */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Milestones"
      >
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-28">
              <Reveal>
                <SectionHeading
                  eyebrow="Milestones"
                  title={
                    <>
                      The arc of the organization{" "}
                      <span className="serif-italic">so far.</span>
                    </>
                  }
                  blurb="AI Vanguard is young — founded, organized, and run by students. Here's how we've grown."
                />
                <div className="mt-10">
                  <figure className="photo-frame photo-duotone aspect-[4/5]">
                    <Image
                      src="/img/feature/library.jpg"
                      alt="A student reading in library stacks — the quiet work behind the numbers."
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </figure>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ol className="relative border-l border-border pl-8 space-y-12">
                  {milestones.map((m) => (
                    <li key={m.title} className="relative">
                      <span
                        className="absolute -left-[37px] top-1.5 h-3 w-3 bg-accent"
                        aria-hidden
                      />
                      <div className="flex items-baseline gap-3">
                        <span className="fig text-sm text-accent">
                          {m.year}
                        </span>
                        {m.current && (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-accent px-2 py-0.5 border border-accent">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="mt-3 font-display text-2xl md:text-[32px] tracking-tight text-ink">
                        {m.title}
                      </h4>
                      <p className="mt-3 text-[15.5px] text-ink-dim leading-relaxed max-w-xl">
                        {m.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* VOICES — real student quotes pulled from the 2025 survey */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Voices"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="In their own words"
              title={
                <>
                  What students actually{" "}
                  <span className="serif-italic">wrote back.</span>
                </>
              }
              blurb="Verbatim responses from the 2025 policy survey comments field. Attribution by grade and campus only — the students who wrote them are protected."
            />
          </Reveal>

          <div className="mt-14 space-y-12 md:space-y-16">
            {survey2025.quotes.map((v, i) => (
              <Reveal key={v.attribution + i}>
                <figure
                  className={`max-w-4xl ${
                    i % 2 === 1 ? "md:ml-auto md:text-right" : ""
                  }`}
                >
                  <p className="font-display text-2xl md:text-3xl lg:text-[40px] leading-[1.18] tracking-tight text-ink">
                    <span className="serif-italic text-accent">&ldquo;</span>
                    {v.text}
                    <span className="serif-italic text-accent">&rdquo;</span>
                  </p>
                  <figcaption className="mt-6 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    — {v.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Help us grow"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink max-w-3xl">
                Help us grow{" "}
                <span className="serif-italic text-ink-dim">
                  the next set of numbers on this page.
                </span>
              </h3>
              <div className="flex gap-3 flex-wrap">
                <Button href="/policy-brief" size="lg">
                  Read the policy brief
                </Button>
                <Button href={site.applyUrl} external variant="secondary" size="lg">
                  Apply as a rep
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
