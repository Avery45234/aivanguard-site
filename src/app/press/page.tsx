import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { survey2025, teacherSurvey2026 } from "@/lib/research";
import { study } from "@/lib/study";
import { press } from "@/lib/highlights";
import CopyButton from "./CopyButtonClient";

export const metadata: Metadata = {
  title: "Press",
  description:
    "AI Vanguard press kit — boilerplate, logo, founder bio, research summary, and contact. For journalists, partners, and anyone writing about student-led AI education advocacy.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press kit"
        title={
          <>
            Everything a journalist needs{" "}
            <span className="serif-italic text-ink-dim">
              in one place.
            </span>
          </>
        }
        blurb="Boilerplate, logo assets, research stats, and a press contact — so you can write the story without chasing us for the details."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Press inquiries</span>
            <a
              href={`mailto:${site.email}`}
              className="normal-case tracking-normal text-ink hover:text-accent text-sm"
            >
              {site.email}
            </a>
          </div>
        }
      />

      {/* Boilerplate — 1/3/5 sentence versions */}
      <section className="py-12 md:py-16 border-t border-border" data-rail-section="Boilerplate">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Boilerplate"
              title={
                <>
                  Copy-paste descriptions,{" "}
                  <span className="serif-italic">pre-vetted for press.</span>
                </>
              }
              blurb="Use any of these verbatim. All numbers are current and verifiable through the research on this site."
            />
          </Reveal>

          <div className="mt-14 space-y-10">
            {boilerplate.map((b) => (
              <Reveal key={b.label}>
                <article className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-12 items-baseline">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
                    {b.label}
                  </div>
                  <div>
                    <p className="font-display text-xl md:text-[26px] leading-[1.35] tracking-tight text-ink">
                      {b.text}
                    </p>
                    <CopyButton text={b.text} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Key facts — at-a-glance for fact-checkers */}
      <section className="py-12 md:py-16 border-t border-border surface-panel" data-rail-section="Facts">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Key facts"
              title={
                <>
                  Every number on this page{" "}
                  <span className="serif-italic">is sourced.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
            {[
              { label: "Founded", value: "2024" },
              { label: "Legal status", value: "501(c)(3) nonprofit" },
              { label: "Based", value: "Southern California · six states" },
              { label: "Leadership", value: "15-person student cabinet" },
              { label: "Representatives", value: "14 reps · 8 campuses" },
              { label: "Students surveyed (2025)", value: `${survey2025.meta.totalResponses}` },
              { label: "Teachers surveyed (2026 pilot)", value: `${teacherSurvey2026.meta.totalResponses}` },
              { label: "Current study", value: `${study.sample.count} districts · preregistered` },
              { label: "Founder & President", value: "Avery Updike" },
            ].map((f) => (
              <Reveal key={f.label}>
                <div className="border-t border-border pt-4" role="listitem">
                  <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-muted">
                    {f.label}
                  </div>
                  <div className="mt-2 font-display text-xl md:text-2xl tracking-tight text-ink">
                    {f.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* In the news — coverage of AI Vanguard students */}
      <section className="py-12 md:py-16 border-t border-border" data-rail-section="Coverage">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Recent coverage"
              title={
                <>
                  Where AI Vanguard students{" "}
                  <span className="serif-italic">have appeared.</span>
                </>
              }
              blurb="Most of this coverage is of our founder and State Directors as student senators on the Students First Act, in their home states. Each line says only what the piece says."
            />
          </Reveal>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {press.map((p) => (
              <li key={p.href + p.who}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 md:py-6 grid gap-2 md:grid-cols-[200px_1fr_auto] md:gap-10 items-baseline"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                    {p.outlet} · {p.date}
                  </span>
                  <span>
                    <span className="font-display text-lg md:text-xl tracking-tight text-ink group-hover:text-accent transition-colors">
                      {p.title}
                    </span>
                    <span className="block mt-1 text-[13px] text-ink-dim">
                      {p.who} · {p.role}
                    </span>
                  </span>
                  <span className="text-sm text-ink-dim group-hover:text-ink transition-colors whitespace-nowrap">
                    Read ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Logo assets */}
      <section className="py-12 md:py-16 border-t border-border" data-rail-section="Logo">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Logo"
              title={
                <>
                  The mark.{" "}
                  <span className="serif-italic">Use it.</span>
                </>
              }
              blurb="Permission is granted for editorial use in coverage of AI Vanguard. Please don't alter the mark's proportions or recolor the wordmark."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <figure className="border border-border p-10 md:p-14 flex items-center justify-center bg-bg aspect-square">
                <Image
                  src="/img/brand/aivanguard-mark.png"
                  alt="AI Vanguard logo on dark background"
                  width={280}
                  height={280}
                  priority
                />
              </figure>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] text-ink-muted">
                <span className="uppercase tracking-[0.2em] text-[10px]">
                  Download
                </span>
                <a
                  href="/img/brand/aivanguard-mark.png"
                  download
                  className="text-ink hover:text-accent underline underline-offset-[4px] decoration-accent/40"
                >
                  PNG · 1024×1024
                </a>
              </div>
            </Reveal>

            <Reveal>
              <figure className="border border-border p-10 md:p-14 flex items-center justify-center bg-[#F3EEE0] aspect-square">
                <Image
                  src="/img/brand/aivanguard-mark.png"
                  alt="AI Vanguard logo on light background"
                  width={280}
                  height={280}
                />
              </figure>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] text-ink-muted">
                <span className="uppercase tracking-[0.2em] text-[10px]">
                  Usage
                </span>
                <span>Keep a clear margin of at least 10% around the mark.</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Talking points — prepared quotes */}
      <section className="py-12 md:py-16 border-t border-border" data-rail-section="Talking points">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Talking points"
              title={
                <>
                  What we&apos;re willing{" "}
                  <span className="serif-italic">to go on record saying.</span>
                </>
              }
              blurb="Pull quotes from AI Vanguard leadership, pre-approved for press use. Attribute to AI Vanguard or to Avery Updike as Founder and President."
            />
          </Reveal>

          <div className="mt-14 space-y-10 md:space-y-14">
            {talkingPoints.map((q, i) => (
              <Reveal key={i}>
                <figure className="max-w-4xl">
                  <p className="font-display text-2xl md:text-3xl lg:text-[40px] leading-[1.18] tracking-tight text-ink">
                    <span className="serif-italic text-accent">&ldquo;</span>
                    {q.text}
                    <span className="serif-italic text-accent">&rdquo;</span>
                  </p>
                  <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    — {q.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16 border-t border-border">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                  Press contact
                </div>
                <h3 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight text-ink max-w-2xl">
                  Writing about AI in schools?{" "}
                  <span className="serif-italic text-ink-dim">
                    We&apos;ll reply within 48 hours.
                  </span>
                </h3>
                <p className="mt-5 text-ink-dim">
                  For interviews, data requests, or campus visits, email{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button href="/research" variant="secondary" size="lg">
                  See the research
                </Button>
                <Button href="/policy-brief" size="lg">
                  Read the policy brief
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

const boilerplate = [
  {
    label: "1 sentence",
    text: site.description,
  },
  {
    label: "3 sentences",
    text: "AI Vanguard is a student-led 501(c)(3) nonprofit founded to give students a voice in how AI enters K–12 education. It runs student-voice research, works inside district processes on AI governance, and builds structures that keep students involved over time, through campus representatives in Southern California and State Directors in six states. Its first research cycle surveyed 447 students across six schools; its current work includes a preregistered study of student influence on AI policy in the twelve largest U.S. districts and a proposed standing student AI body in ABC Unified School District.",
  },
  {
    label: "5 sentences",
    text: "AI Vanguard is a youth-led 501(c)(3) nonprofit advancing student participation in AI education policy. Its leadership cabinet of fifteen students steers research, AI governance work, and community building from its Southern California base, with State Directors in California, Minnesota, Tennessee, Connecticut, New Jersey, and Michigan. Fourteen student representatives across eight campuses run ground-level research: the 2025 policy survey gathered 447 responses showing that 74% of students want schools to teach responsible AI use rather than ban it, and 35% explicitly asked to be involved in shaping school AI policy. In 2026 the organization moved from surveys to governance, with a preregistered public-records study of whether student recommendations changed AI policy in the twelve largest U.S. districts, a proposal for a standing student AI body in ABC Unified School District, and a collaboration in development with Project Tomorrow's Speak Up research program. Its policy brief translates the research into six concrete asks for schools and districts.",
  },
];


const talkingPoints = [
  {
    text: "The decisions being made right now about AI in classrooms will shape the next decade of education. The students most affected are almost never in the room. AI Vanguard exists to change that.",
    attribution: "Avery Updike, Founder & President",
  },
  {
    text: "74% of students told us they want schools to teach responsible AI use. Only 4% called it outright cheating. A policy built on prohibition contradicts what the students it governs are asking for.",
    attribution: "AI Vanguard · 2025 Policy Survey",
  },
  {
    text: "When 35% of students explicitly ask to be involved in shaping AI rules at their school, that's not a suggestion. That's a mandate. Any AI policy written without student input is incomplete.",
    attribution: "Avery Updike, Founder & President",
  },
];

