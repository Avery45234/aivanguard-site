import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { StatTile } from "@/components/StatTile";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  leadership,
  milestones,
  reach,
  representatives,
  schools,
  site,
} from "@/lib/site";
import { press } from "@/lib/highlights";
import { survey2025, teacherSurvey2026 } from "@/lib/research";
import { study } from "@/lib/study";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "AI Vanguard's impact in four parts: research, policy, reach, and public engagement. Specific, sourced numbers, updated September 2026.",
};

// Impact in four kinds, not one pile of numbers. Every figure here is
// either on this site's research pages or backed by district
// correspondence; if a number can't be sourced, it doesn't go here.
const categories = [
  {
    n: "01",
    title: "Research",
    blurb: "Primary evidence, gathered and now analyzed by students.",
    href: "/research",
    cta: "All the research",
    items: [
      {
        value: `${survey2025.meta.totalResponses}`,
        label: "Student responses",
        hint: "2025 AI policy survey",
      },
      {
        value: `${survey2025.meta.schoolCount}`,
        label: "Schools in the first survey",
        hint: "Southern California, fall 2025",
      },
      {
        value: `${teacherSurvey2026.meta.totalResponses}`,
        label: "Educators in the 2026 pilot",
        hint: "Companion teacher survey",
      },
      {
        value: `${study.sample.count}`,
        label: "Districts in the current study",
        hint: `Preregistered · records requests to ${study.records.count}`,
      },
    ],
  },
  {
    n: "02",
    title: "Policy",
    blurb: "Evidence carried into rooms where AI decisions get made.",
    href: "/our-work#abcusd",
    cta: "The district work",
    items: [
      {
        value: "3",
        label: "District AI roundtables addressed",
        hint: "ABC Unified · as of June 2026",
      },
      {
        value: "2",
        label: "Proposals with district leaders",
        hint: "Student AI body · Student AI Pulse",
      },
      {
        value: "12+",
        label: "L.A. County districts briefed",
        hint: "Student AI Pulse pilot, Aug 2026",
      },
      {
        value: "6",
        label: "Asks in the policy brief",
        hint: "For schools and districts, 2026",
      },
    ],
  },
  {
    n: "03",
    title: "Reach",
    blurb: "A network built to outlast any one student.",
    href: "/about",
    cta: "Meet the network",
    items: [
      {
        value: `${new Set(representatives.map((r) => r.school)).size}`,
        label: "Campuses with representatives",
        hint: "Southern California",
      },
      {
        value: `${representatives.length}`,
        label: "Student representatives",
        hint: "2026–27 roster",
      },
      {
        value: `${reach.states.length}`,
        label: "States with student leadership",
        hint: reach.states.map((s) => s.slice(0, 2).toUpperCase()).join(" · "),
      },
      {
        value: `${leadership.length}`,
        label: "Leadership cabinet",
        hint: "Students, coast to coast",
      },
    ],
  },
  {
    n: "04",
    title: "Public engagement",
    blurb: "Students speaking for themselves, in public.",
    href: "/highlights",
    cta: "News and highlights",
    items: [
      {
        value: "400+",
        label: "Educators addressed",
        hint: "ABC IGNITE Ed Tech Symposium",
      },
      {
        value: "4",
        label: "Student senators",
        hint: "America's Youth AI Festival, July 2026",
      },
      {
        value: `${press.length}`,
        label: "News stories in 2026",
        hint: "NPR, MPR News, WDIV, El Estoque, more",
      },
      {
        value: "1",
        label: "National collaboration in development",
        hint: "Project Tomorrow · Speak Up",
      },
    ],
  },
];

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
        blurb="AI Vanguard's impact in four parts: the research we've produced, the policy rooms we've entered, the network we've built, and the public conversations students have led."
        meta={
          <p className="max-w-sm text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed">
            Last updated · September 2026 <br />
            We only publish numbers we can stand behind.
          </p>
        }
      />

      {/* FOUR KINDS OF IMPACT */}
      {categories.map((c, idx) => (
        <section
          key={c.title}
          id={c.title.toLowerCase().replace(/\s+/g, "-")}
          className={`py-14 md:py-20 scroll-mt-28 ${
            idx > 0 ? "border-t border-border" : ""
          } ${idx % 2 === 1 ? "surface-panel" : ""}`}
          data-rail-section={c.title}
        >
          <Container size="wide">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
              <div className="md:col-span-4 md:sticky md:top-28">
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <span className="fig text-2xl text-accent">{c.n}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="mt-6 font-display text-4xl md:text-[52px] leading-[1.04] tracking-tight text-ink">
                    {c.title}
                  </h2>
                  <p className="mt-4 font-display italic text-xl md:text-2xl text-ink-dim leading-snug">
                    {c.blurb}
                  </p>
                  <Link
                    href={c.href}
                    className="mt-8 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
                  >
                    {c.cta} →
                  </Link>
                </Reveal>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6">
                  {c.items.map((m, i) => (
                    <Reveal key={m.label} delay={i * 60}>
                      <StatTile value={m.value} label={m.label} hint={m.hint} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CAMPUSES — the evidence behind the "8" */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Campuses"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Campuses with representatives"
              title={
                <>
                  Active on {schools.length} campuses{" "}
                  <span className="serif-italic">across Southern California.</span>
                </>
              }
              blurb="Our representatives run research and policy conversations at the schools below. State Directors extend the model to five more states."
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

      {/* MILESTONES */}
      <section
        className="py-14 md:py-20 border-t border-border surface-panel"
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
                        <span className="fig text-sm text-accent">{m.year}</span>
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

      {/* VOICES */}
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
                  className={`max-w-4xl ${i % 2 === 1 ? "md:ml-auto md:text-right" : ""}`}
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
                <Button href="/research" size="lg">
                  See the research
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
