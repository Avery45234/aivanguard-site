import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FactCard, SourceLine, Steps } from "@/components/Blocks";
import { districtWork, partnerships, pillars, site } from "@/lib/site";
import { speakUp } from "@/lib/study";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: { canonical: "/our-work" },
  title: "Work",
  description:
    "AI Vanguard's work: the ABC Unified district case study, three programs, a Project Tomorrow collaboration in development, and what else is underway.",
};

export default function OurWorkPage() {
  const projectTomorrow = partnerships.find((p) => p.id === "project-tomorrow")!;

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Research. Governance.{" "}
            <span className="serif-italic">Leadership.</span>
          </>
        }
        blurb="Evidence from students, carried into district decisions, by structures that outlast any one student."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>03 programs · 1 district case study</span>
            <span>1 national collaboration in development</span>
          </div>
        }
      />

      {/* DISTRICT — the strongest proof goes first */}
      <section
        id="abcusd"
        className="tone-governance py-14 md:py-20 scroll-mt-28"
        data-rail-section="ABC Unified"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="District case study"
              title={
                <>
                  ABC Unified{" "}
                  <span className="serif-italic">School District.</span>
                </>
              }
              blurb={districtWork.intro}
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-12 items-start">
            <div className="md:col-span-8">
              <Reveal>
                <figure className="photo-frame photo-duotone aspect-[4/3]">
                  <Image
                    src="/img/pillars/advocacy.jpg"
                    alt="Avery Updike and four students in a school library holding YES and NO cards during an ABC Unified AI Community Roundtable, name placards on the floor in front of them."
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </figure>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  AI Community Roundtable · ABC Unified, Cerritos · students vote on real guidance scenarios
                </figcaption>
              </Reveal>
            </div>
            <div className="md:col-span-4">
              <Reveal>
                <FactCard
                  title="At a glance"
                  facts={[
                    { k: "District", v: "ABC Unified, Cerritos CA" },
                    { k: "Our role", v: "Student liaison to technology leadership" },
                    { k: "Since", v: "Spring 2025" },
                    { k: "Educators addressed", v: "400+ at ABC IGNITE" },
                    { k: "Status", v: "Student AI body proposed, under review" },
                  ]}
                />
                <div className="mt-4 space-y-2">
                  <SourceLine href={links.edsourceCaliforniaDistricts} external>
                    EdSource on how California districts approach AI, 2026
                  </SourceLine>
                  <SourceLine href={links.abcEdTechHub} external>
                    ABC Unified EdTech Hub
                  </SourceLine>
                  <SourceLine href={links.brookingsCouncils} external>
                    Brookings on school AI councils, 2026
                  </SourceLine>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-12">
              <Steps steps={districtWork.steps.map((s) => ({ label: s.t, caption: s.short }))} />
              <p className="mt-4 text-[12.5px] text-ink-muted leading-relaxed max-w-3xl">
                {districtWork.note} Step four is a proposal, not an established body; we will say so until
                the district says otherwise.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PROGRAMS — compact, linked */}
      <section className="py-14 md:py-20 border-t border-border surface-panel" data-rail-section="Programs">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Three programs"
              title={
                <>
                  Each one feeds{" "}
                  <span className="serif-italic">the next.</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((p) => (
              <Reveal key={p.slug}>
                <article id={p.slug} className={`tone-${p.tone} scroll-mt-28`}>
                  <figure className="photo-frame photo-duotone aspect-[4/3]">
                    <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </figure>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="fig text-lg text-accent">{p.number}</span>
                    <h3 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">{p.title}</h3>
                  </div>
                  <p className="mt-2 font-display italic text-lg text-ink-dim">{p.subtitle}</p>
                  <ul className="mt-4 space-y-2 text-[14px] text-ink-dim">
                    {p.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="underline underline-offset-4 decoration-accent/40 hover:text-ink transition-colors">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PROJECT TOMORROW — short, with their numbers, their link */}
      <section
        id="project-tomorrow"
        className="tone-community py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Project Tomorrow"
      >
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow={`National student voice · ${projectTomorrow.status}`}
                  title={
                    <>
                      Project Tomorrow{" "}
                      <span className="serif-italic">and Speak Up.</span>
                    </>
                  }
                  blurb={projectTomorrow.short}
                />
                <div className="mt-6 flex flex-col gap-2 text-[13.5px]">
                  <a href={links.speakUp} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent w-fit">
                    Speak Up at Project Tomorrow ↗
                  </a>
                  <span className="text-ink-muted">
                    Status: a proposal is with their leadership. A student focus group on the survey questions is the next step under discussion.
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="grid grid-cols-2 gap-x-8">
                  <StatTile value={speakUp.cycle.value} label="Speak Up, 2023–24" hint="students, educators, parents" />
                  <StatTile value={speakUp.cumulative.value} label="Since 2003" hint="participants" />
                </div>
                <p className="mt-3 text-[12px] text-ink-muted">{speakUp.attribution} Their reach, not ours.</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ALSO UNDERWAY — four cards, one sentence each */}
      <section id="underway" className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel" data-rail-section="Also underway">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Also underway"
              title={
                <>
                  Four more things,{" "}
                  <span className="serif-italic">at their real stage.</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-px bg-border border border-border sm:grid-cols-2">
            {[
              {
                tag: "Research", tone: "research", status: "Underway",
                title: "When Does Student Voice Change AI Policy?",
                body: "Preregistered records study of the twelve largest U.S. districts; requests out to twenty systems.",
                href: "/research#study", cta: "Protocol summary",
              },
              {
                tag: "Advocacy", tone: "governance", status: "Proposal",
                title: "The Student AI Pulse",
                body: "A short, voluntary measure of how students experience AI at school, proposed to Los Angeles County districts.",
              },
              {
                tag: "Governance", tone: "governance", status: "Early stage",
                title: "Tracking AI changes after approval",
                body: "How a district learns when an already-approved product adds student-facing AI.",
              },
              {
                tag: "Community", tone: "community", status: "Ongoing",
                title: "The national network",
                body: "Onboarding the 2026–27 representatives and State Directors; judging the first Vanguard Open.",
                href: "/get-involved", cta: "Join the next cohort",
              },
            ].map((x) => (
              <article key={x.title} className={`tone-${x.tone} bg-bg p-6 md:p-7`}>
                <div className="flex items-baseline justify-between gap-4 text-[10.5px] uppercase tracking-[0.22em]">
                  <span className="text-ink-muted">{x.tag}</span>
                  <span className="text-accent">{x.status}</span>
                </div>
                <h3 className="mt-3 font-display text-xl md:text-2xl tracking-tight text-ink">{x.title}</h3>
                <p className="mt-2 text-[14px] text-ink-dim leading-relaxed">{x.body}</p>
                {x.href && (
                  <Link href={x.href} className="mt-3 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                    {x.cta} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Work with us">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                Want structured student input{" "}
                <span className="serif-italic text-ink-dim">in your district&apos;s AI decisions?</span>
              </h3>
              <div className="flex gap-3 flex-wrap">
                <Button href="/get-involved#districts" size="lg">Work with us</Button>
                <Button href={site.applyUrl} external variant="secondary" size="lg">Apply as a student</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
