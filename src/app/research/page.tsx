import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ChipGrid, DocCard, Levels, Scale, SourceLine } from "@/components/Blocks";
import { site } from "@/lib/site";
import { study } from "@/lib/study";
import { links } from "@/lib/links";
import { survey2025, teacherSurvey2026, perceptionStudy } from "@/lib/research";

export const metadata: Metadata = {
  alternates: { canonical: "/research" },
  title: "Research",
  description:
    "AI Vanguard's evidence: a preregistered study of student influence on AI policy in the twelve largest U.S. districts, the 2025 policy survey of 447 students, and a teacher pilot.",
};

// State codes for the fixed sample, shown on the chips.
const districtStates: Record<string, string> = {
  "New York City Public Schools": "NY",
  "Los Angeles Unified School District": "CA",
  "Miami-Dade County Public Schools": "FL",
  "Chicago Public Schools": "IL",
  "Clark County School District": "NV",
  "Broward County Public Schools": "FL",
  "Hillsborough County Public Schools": "FL",
  "Orange County Public Schools": "FL",
  "Palm Beach County School District": "FL",
  "Houston Independent School District": "TX",
  "Gwinnett County Public Schools": "GA",
  "Fairfax County Public Schools": "VA",
};

const shortDistrict = (d: string) => d.replace(" School District", "").replace(" Public Schools", "");

export default function ResearchPage() {
  const m = survey2025.meta;
  return (
    <div className="tone-research">
      <PageHeader
        eyebrow="Research"
        title={
          <>
            Evidence first.{" "}
            <span className="serif-italic text-ink-dim">Then the argument.</span>
          </>
        }
        blurb="What students told us, what teachers told us, and a preregistered test of whether student voice changes policy at all."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Current study · Underway</span>
            <span>Policy survey · 447 students · 2025</span>
            <span>Teacher pilot · 10 educators · 2026</span>
          </div>
        }
      />

      {/* DOCUMENTS — things you can open */}
      <section className="py-12 md:py-16" data-rail-section="Documents">
        <Container size="wide">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            <DocCard
              kind="Preregistered protocol"
              status="Underway"
              title={study.title}
              meta={["12 districts, fixed before coding", "20 public-records requests", "Protocol fixed September 2026"]}
              actions={[
                { label: "Summary", href: "#study" },
                ...(study.registration.href
                  ? [{ label: `Registration on ${study.registration.registry}`, href: study.registration.href, external: true }]
                  : []),
              ]}
            />
            <DocCard
              kind="Survey methods"
              status="Published"
              title="2025 Student AI Policy Survey"
              meta={[`${m.totalResponses} responses · ${m.schoolCount} schools`, m.window, "Every figure with its count"]}
              actions={[
                { label: "Methods and findings", href: "/research/student-ai-survey" },
                { label: "Chart (SVG)", href: links.chartSvg, external: true },
                { label: "Table (CSV)", href: links.tableCsv, external: true },
                ...(m.publication.href
                  ? [{ label: m.publication.venue, href: m.publication.href, external: true }]
                  : []),
              ]}
            />
            <DocCard
              kind="Policy brief"
              status="2026"
              title="Student voice on AI in education: six asks"
              meta={["For schools and districts", "Built on the 2025 survey", "Print-ready view available"]}
              actions={[
                { label: "Read", href: "/policy-brief" },
                { label: "Document view", href: "/policy-brief/pdf" },
              ]}
            />
            <DocCard
              kind="Teacher pilot"
              status="January 2026"
              title="AI in Education: the other side of the desk"
              meta={[`${teacherSurvey2026.meta.totalResponses} educators`, teacherSurvey2026.meta.window, "Three-paragraph detection quiz"]}
              actions={[{ label: "Findings", href: "#teachers-2026" }]}
            />
          </div>
        </Container>
      </section>

      {/* CURRENT STUDY */}
      <section id="study" className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel" data-rail-section="Current study">
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
                blurb={study.question}
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed md:text-right max-w-xs">
                <div className="text-accent">{study.status}</div>
                <div className="mt-1">{study.lead}</div>
              </div>
            </div>
          </Reveal>

          {/* Sample as a grid */}
          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-12 items-start">
              <div className="md:col-span-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">The sample</div>
                <p className="mt-2 font-display text-2xl md:text-[28px] leading-[1.12] tracking-tight text-ink">
                  Twelve districts,{" "}
                  <span className="serif-italic text-ink-dim">chosen by someone else.</span>
                </p>
                <p className="mt-3 text-[14px] text-ink-dim leading-relaxed">
                  The twelve largest U.S. districts in Liang et al. (2026), fixed before any outcome coding.
                  Records requests also went to eight more large systems.
                </p>
                <SourceLine href={study.source.href} external className="mt-3">
                  Liang, Hu, Ren &amp; Trinidad, Educational Policy
                </SourceLine>
              </div>
              <div className="md:col-span-8">
                <ChipGrid items={study.sample.districts.map((d) => ({ label: shortDistrict(d), tag: districtStates[d] }))} />
                <p className="mt-3 text-[12.5px] text-ink-muted">{study.sample.caveat}</p>
              </div>
            </div>
          </Reveal>

          {/* What counts */}
          <Reveal>
            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">What happened to each student recommendation</div>
                <Scale points={study.dispositions} note={study.dispositionNote} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">How strong the evidence is</div>
                <Levels levels={study.evidence} />
              </div>
            </div>
          </Reveal>

          {/* Method, folded */}
          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { t: "Two coders", b: "Independent, same codebook; agreement reported as Cohen's kappa. Below 80% agreement or 0.60 kappa, coding stops and the rule is fixed." },
                { t: "Reasoned rejection counts", b: "A district that considered a student proposal and said no, with reasons, still counts as a response. Being ignored does not." },
                { t: "Bias, named", b: "The lead founded AI Vanguard. Fixed sample, unknowns kept unknown, our own materials held to the same standard. Null findings will be published." },
              ].map((x) => (
                <div key={x.t} className="border-t border-border pt-4">
                  <h3 className="font-display text-xl tracking-tight text-ink">{x.t}</h3>
                  <p className="mt-2 text-[14px] text-ink-dim leading-relaxed">{x.b}</p>
                </div>
              ))}
            </div>
            <details className="mt-8 group">
              <summary className="cursor-pointer list-none text-sm text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent w-fit">
                Read the full protocol summary
                <span className="ml-2 text-ink-muted group-open:hidden">+</span>
                <span className="ml-2 text-ink-muted hidden group-open:inline">−</span>
              </summary>
              <div className="mt-6 grid gap-6 md:grid-cols-2 text-[14.5px] text-ink-dim leading-relaxed max-w-5xl">
                <p><strong className="text-ink font-medium">Secondary questions.</strong> {study.secondary.join(" ")}</p>
                <p><strong className="text-ink font-medium">Unit of analysis.</strong> {study.unit}</p>
                <p><strong className="text-ink font-medium">Preregistration.</strong> {study.preregistration}</p>
                <p><strong className="text-ink font-medium">Reliability.</strong> {study.reliability}</p>
                <p><strong className="text-ink font-medium">Researcher position.</strong> {study.position}</p>
                <p><strong className="text-ink font-medium">What happens next.</strong> {study.timeline} {study.records.note}</p>
              </div>
            </details>
          </Reveal>
        </Container>
      </section>

      {/* 2025 SURVEY — numbers, chart, link */}
      <section id="survey-2025" className="py-14 md:py-20 border-t border-border scroll-mt-28" data-rail-section="2025 survey">
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="2025 Student AI Policy Survey"
                title={
                  <>
                    {m.totalResponses} students.{" "}
                    <span className="serif-italic">Not asking for a ban.</span>
                  </>
                }
              />
              <Button href="/research/student-ai-survey" variant="secondary" size="md">
                Full methods, every count
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-8">
            {survey2025.headline.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <StatTile value={s.value} label={s.label} hint={`${s.n} of ${m.totalResponses}`} href="/research/student-ai-survey#findings" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-12 items-start">
              <div className="md:col-span-8">
                <figure className="border border-border bg-[#fcfcfb] p-2">
                  <Image
                    src={links.chartSvg}
                    alt="Bar chart: what 447 students want schools to do about AI. Teach responsible use 74%, involve students in the rules 35%, stricter rules 26%, free use 24%, do nothing 14%, let AI do most of the work 5%."
                    width={1200}
                    height={720}
                    className="w-full h-auto"
                  />
                </figure>
              </div>
              <div className="md:col-span-4">
                <p className="font-display text-2xl md:text-[28px] leading-[1.12] tracking-tight text-ink">
                  The most common request is{" "}
                  <span className="serif-italic text-ink-dim">to be taught.</span>
                </p>
                <p className="mt-3 text-[14px] text-ink-dim leading-relaxed">
                  Select all that apply, so bars total more than 100%. Convenience sample; 96% of responses came from two schools.
                </p>
                <div className="mt-4 space-y-2">
                  <SourceLine href="/research/student-ai-survey#methods">Methods, exact wording, duplicates</SourceLine>
                  <SourceLine href={links.tableCsv} external>Table (CSV)</SourceLine>
                  <SourceLine href={links.analysisScript} external>Analysis script on GitHub</SourceLine>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TEACHER PILOT — numbers and the quiz */}
      <section id="teachers-2026" className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel" data-rail-section="Teacher pilot">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="2026 teacher pilot · 10 educators"
              title={
                <>
                  Confident detection.{" "}
                  <span className="serif-italic">Wrong answers.</span>
                </>
              }
              blurb="A small pilot by design. Teachers classified three unlabeled paragraphs; every one of them called the student-written paragraph AI."
            />
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12 items-start">
            <div className="md:col-span-5 grid grid-cols-2 gap-x-8">
              {teacherSurvey2026.headline.map((s) => (
                <StatTile key={s.label} value={s.value} label={s.label} hint={s.hint} />
              ))}
            </div>
            <div className="md:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-3">Detection quiz · share of teachers who got each paragraph right</div>
              <div className="border-y border-border divide-y divide-border">
                {teacherSurvey2026.detectionQuiz.perParagraph.map((p) => (
                  <div key={p.id} className="py-4 grid grid-cols-[auto_1fr_auto] gap-5 items-center">
                    <span className="fig text-sm text-ink-muted w-7">{p.id}</span>
                    <div>
                      <div className="font-display text-[16px] md:text-lg tracking-tight text-ink">Actually: {p.truth}</div>
                      <div className="mt-2 h-[6px] w-full bg-border/40 overflow-hidden rounded-r-[4px]">
                        <div className="h-full bg-accent rounded-r-[4px]" style={{ width: `${Math.max(p.pct, 1)}%` }} />
                      </div>
                    </div>
                    <span className="text-right">
                      <span className="fig text-base text-ink tabular-nums">{p.pct}%</span>
                      <span className="block text-[11px] text-ink-muted">{p.correct} of {p.total} correct</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[12.5px] text-ink-muted">
                Random guessing scores {teacherSurvey2026.detectionQuiz.randomBaseline}. The group scored {teacherSurvey2026.detectionQuiz.overallAccuracy}.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FIELD STUDY — three numbers, folded write-up */}
      <section id="perception" className="py-14 md:py-20 border-t border-border scroll-mt-28" data-rail-section="Field study">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Rep-led field study · 5 teachers"
                  title={
                    <>
                      Can teachers{" "}
                      <span className="serif-italic">actually tell?</span>
                    </>
                  }
                  blurb="Five teachers compared an AI-assisted paper with a student's original, first blind, then with the source revealed."
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <div className="grid grid-cols-3 gap-x-6">
                  {perceptionStudy.findings.map((f) => (
                    <StatTile key={f.label} value={f.value} label={f.label} />
                  ))}
                </div>
                <details className="mt-6 group">
                  <summary className="cursor-pointer list-none text-sm text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent w-fit">
                    Read the representative&apos;s write-up
                    <span className="ml-2 text-ink-muted group-open:hidden">+</span>
                    <span className="ml-2 text-ink-muted hidden group-open:inline">−</span>
                  </summary>
                  <article className="mt-5 font-display text-[16px] md:text-[17px] leading-[1.62] text-ink-dim">
                    <p>{perceptionStudy.report}</p>
                    <p className="mt-4 text-[13px] tracking-wide">Written by {perceptionStudy.by}</p>
                  </article>
                </details>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Use it">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <div>
                <h3 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                  Cite it, reuse it,{" "}
                  <span className="serif-italic text-ink-dim">or ask for the data.</span>
                </h3>
                <p className="mt-3 text-ink-dim max-w-lg text-[15px]">
                  Attribution and a link is all we ask. For aggregate counts, a student source, or a founder interview,{" "}
                  <Link href="/contact" className="text-accent underline underline-offset-4">contact us</Link>.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button href="/policy-brief" size="lg">Read the policy brief</Button>
                <Button href={site.applyUrl} external variant="secondary" size="lg">Join as a student researcher</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
