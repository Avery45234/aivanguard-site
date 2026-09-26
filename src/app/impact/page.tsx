import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { StatTile } from "@/components/StatTile";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ChipGrid, SourceLine } from "@/components/Blocks";
import { leadership, milestones, reach, representatives, schools, site } from "@/lib/site";
import { press } from "@/lib/highlights";
import { survey2025, teacherSurvey2026 } from "@/lib/research";
import { study } from "@/lib/study";

export const metadata: Metadata = {
  alternates: { canonical: "/impact" },
  title: "Impact",
  description:
    "AI Vanguard's impact in four parts: research, policy, reach, and public engagement. Specific, sourced numbers, updated September 2026.",
};

// Impact in four kinds, not one pile of numbers. Every figure here is
// either on this site's research pages or backed by district
// correspondence; if a number can't be sourced, it doesn't go here.
const categories = [
  {
    n: "01", tone: "research", title: "Research",
    items: [
      { value: `${survey2025.meta.totalResponses}`, label: "Student responses", hint: "2025 policy survey", href: "/research/student-ai-survey" },
      { value: `${survey2025.meta.schoolCount}`, label: "Schools in the first survey", hint: "96% from two of them", href: "/research/student-ai-survey#sample" },
      { value: `${teacherSurvey2026.meta.totalResponses}`, label: "Educators in the 2026 pilot", hint: "Companion survey", href: "/research#teachers-2026" },
      { value: `${study.sample.count}`, label: "Districts in the current study", hint: `Preregistered · ${study.records.count} records requests`, href: "/research#study" },
    ],
    source: { text: "Research page and survey methods", href: "/research" },
  },
  {
    n: "02", tone: "governance", title: "Policy",
    items: [
      { value: "3", label: "District AI roundtables addressed", hint: "ABC Unified · as of June 2026", href: "/our-work#abcusd" },
      { value: "2", label: "Proposals with district leaders", hint: "Student AI body · Student AI Pulse", href: "/our-work#underway" },
      { value: "12+", label: "L.A. County districts briefed", hint: "Student AI Pulse pilot, Aug 2026", href: "/our-work#underway" },
      { value: "6", label: "Asks in the policy brief", hint: "For schools and districts", href: "/policy-brief" },
    ],
    source: { text: "District correspondence, 2025–26; ABC Unified case study", href: "/our-work#abcusd" },
  },
  {
    n: "03", tone: "community", title: "Reach",
    items: [
      { value: `${new Set(representatives.map((r) => r.school)).size}`, label: "Campuses with representatives", hint: "Southern California", href: "/about#representatives" },
      { value: `${representatives.length}`, label: "Student representatives", hint: "2026–27 roster", href: "/about#representatives" },
      { value: `${reach.states.length}`, label: "States with student leadership", hint: reach.stateCodes.join(" · "), href: "/about#cabinet" },
      { value: `${leadership.length}`, label: "Leadership cabinet", hint: "Students, coast to coast", href: "/about#cabinet" },
    ],
    source: { text: "Every person is named on the About page", href: "/about" },
  },
  {
    n: "04", tone: "community", title: "Public engagement",
    items: [
      { value: "400+", label: "Educators addressed", hint: "ABC IGNITE Ed Tech Symposium", href: "/our-work#abcusd" },
      { value: "4", label: "Student senators", hint: "America's Youth AI Festival, 2026", href: "/highlights" },
      { value: `${press.length}`, label: "News stories in 2026", hint: "NPR, MPR News, WDIV, more", href: "/highlights#press" },
      { value: "1", label: "National collaboration in development", hint: "Project Tomorrow · Speak Up", href: "/our-work#project-tomorrow" },
    ],
    source: { text: "Coverage list, each item linked", href: "/highlights#press" },
  },
];

// Real photographs for the milestones that have them. Stock is not proof.
const milestoneImages: Record<string, { src: string; alt: string }> = {
  "First research cycle": { src: "/img/pillars/research.jpg", alt: "Rows of the 2025 policy survey responses in a spreadsheet." },
  "Going national": { src: "/img/feature/chamber.jpg", alt: "Student senators seated in a Senate-style chamber in Boston, July 2026." },
  "From surveys to governance": { src: "/img/pillars/advocacy.jpg", alt: "Students holding YES and NO cards at an ABC Unified AI Community Roundtable." },
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
        blurb="Four kinds of impact. Every number links to the page that shows where it comes from."
        meta={
          <p className="max-w-sm text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed">
            Last updated · September 2026 <br />
            We only publish numbers we can stand behind.
          </p>
        }
      />

      {categories.map((c, idx) => (
        <section
          key={c.title}
          id={c.title.toLowerCase().replace(/\s+/g, "-")}
          className={`tone-${c.tone} py-12 md:py-16 scroll-mt-28 ${idx > 0 ? "border-t border-border" : ""} ${idx % 2 === 1 ? "surface-panel" : ""}`}
          data-rail-section={c.title}
        >
          <Container size="wide">
            <div className="grid gap-8 md:grid-cols-12 md:gap-16 items-start">
              <div className="md:col-span-3">
                <Reveal>
                  <div className="flex items-baseline gap-3">
                    <span className="fig text-xl text-accent">{c.n}</span>
                    <h2 className="font-display text-3xl md:text-[40px] leading-[1.04] tracking-tight text-ink">{c.title}</h2>
                  </div>
                  <SourceLine href={c.source.href} className="mt-4">{c.source.text}</SourceLine>
                </Reveal>
              </div>
              <div className="md:col-span-9">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {c.items.map((m, i) => (
                    <Reveal key={m.label} delay={i * 50}>
                      <StatTile value={m.value} label={m.label} hint={m.hint} href={m.href} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* WHERE — campuses and states as chips */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Where">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Campuses with representatives"
                title={<>{schools.length} in <span className="serif-italic">Southern California.</span></>}
              />
              <ChipGrid className="mt-6" items={schools.map((s) => ({ label: s, tag: "HS", href: "/about#representatives" }))} />
            </Reveal>
            <Reveal>
              <SectionHeading
                eyebrow="Student leadership"
                title={<>{reach.states.length} <span className="serif-italic">states.</span></>}
              />
              <ChipGrid className="mt-6" items={reach.states.map((s, i) => ({ label: s, tag: reach.stateCodes[i], href: "/about#cabinet" }))} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MILESTONES — with real photos where we have them */}
      <section className="py-14 md:py-20 border-t border-border surface-panel" data-rail-section="Milestones">
        <Container size="wide">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title={<>The arc <span className="serif-italic">so far.</span></>} />
          </Reveal>
          <ol className="mt-10 grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => {
              const img = milestoneImages[m.title];
              return (
                <li key={m.title} className="bg-bg p-5 md:p-6 flex flex-col">
                  {img && (
                    <figure className="photo-frame photo-duotone aspect-[16/9] mb-4">
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </figure>
                  )}
                  <div className="flex items-baseline gap-3">
                    <span className="fig text-sm text-accent">{m.year}</span>
                    {"current" in m && m.current && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-accent px-2 py-0.5 border border-accent">Current</span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-xl md:text-2xl tracking-tight text-ink">{m.title}</h3>
                  <p className="mt-2 text-[14px] text-ink-dim leading-relaxed">{m.body}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* TWO VOICES */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Voices">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="In their own words"
              title={<>What students <span className="serif-italic">wrote back.</span></>}
              blurb="Verbatim, from the survey's comment field. Attributed by grade and campus only."
            />
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            {survey2025.quotes.slice(2, 4).map((v) => (
              <Reveal key={v.attribution + v.text.slice(0, 12)}>
                <figure>
                  <p className="font-display text-xl md:text-2xl leading-[1.25] tracking-tight text-ink">
                    <span className="serif-italic text-accent">&ldquo;</span>{v.text}<span className="serif-italic text-accent">&rdquo;</span>
                  </p>
                  <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-muted">{v.attribution}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/research/student-ai-survey" className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
              All findings and methods →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Help us grow">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                Help us grow{" "}
                <span className="serif-italic text-ink-dim">the next number on this page.</span>
              </h3>
              <div className="flex gap-3 flex-wrap">
                <Button href="/research" size="lg">See the research</Button>
                <Button href={site.applyUrl} external variant="secondary" size="lg">Apply as a rep</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
