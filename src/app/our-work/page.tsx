import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { districtWork, partnerships, pillars, site } from "@/lib/site";
import { speakUp } from "@/lib/study";

export const metadata: Metadata = {
  alternates: { canonical: "/our-work" },
  title: "Work",
  description:
    "Student voice research, AI governance, and student leadership — the three programs that make up AI Vanguard, and the district and national work underway right now.",
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
        blurb="Three programs that turn student experience with AI into evidence, carry that evidence into institutional decisions, and build structures that keep students in the room over time."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>03 programs</span>
            <span>1 loop · listen → synthesize → advocate → sustain</span>
          </div>
        }
      />

      {/* PILLAR SECTIONS */}
      {pillars.map((p, idx) => (
        <section
          key={p.slug}
          id={p.slug}
          className="py-14 md:py-20 border-t border-border scroll-mt-28"
          data-rail-section={p.title}
        >
          <Container size="wide">
            <div
              className={`grid gap-12 md:grid-cols-12 md:gap-16 items-start ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7">
                <Reveal>
                  <figure className="photo-frame photo-duotone aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </figure>
                  <figcaption className="mt-3 flex items-baseline justify-between text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    <span>Program {p.number} of 03</span>
                    <span>{p.slug}</span>
                  </figcaption>
                </Reveal>
              </div>

              <div className="md:col-span-5 md:pt-4">
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <span className="fig text-3xl text-accent">{p.number}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.04] tracking-tight text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-4 font-display italic text-xl md:text-2xl text-ink-dim leading-snug max-w-md">
                    {p.subtitle}
                  </p>
                  <p className="mt-6 text-[16px] text-ink-dim leading-relaxed max-w-md">
                    {p.blurb}
                  </p>
                  <ul className="mt-8 divide-y divide-border border-y border-border max-w-md">
                    {p.bullets.map((b, i) => (
                      <li key={b} className="py-4 flex gap-4 text-[14.5px] text-ink">
                        <span className="font-mono text-xs text-ink-muted shrink-0 w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-[13px] text-ink-muted max-w-md italic font-display">
                    Current focus — {pillarFocus(p.slug)}
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* DISTRICT WORK — featured case study */}
      <section
        id="abcusd"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="District work"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="District work · Case study"
                title={
                  <>
                    {districtWork.district.replace(" School District", "")}{" "}
                    <span className="serif-italic">School District.</span>
                  </>
                }
                blurb={districtWork.intro}
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed text-right">
                {districtWork.where}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ol className="mt-14 md:mt-20 grid gap-px bg-border md:grid-cols-4">
              {districtWork.steps.map((s) => (
                <li key={s.n} className="bg-bg p-7 md:p-8 flex flex-col">
                  <div className="flex items-baseline justify-between">
                    <span className="fig text-2xl text-accent">{s.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      {s.n === "04" ? "In progress" : "Ongoing"}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-[28px] tracking-tight text-ink">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-ink-dim leading-relaxed">
                    {s.b}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <p className="mt-8 text-[13px] text-ink-muted leading-relaxed max-w-3xl">
              {districtWork.note} The standing student body described in step
              four is proposed, not established. We will describe it as
              established only when the district does.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PROJECT TOMORROW */}
      <section
        id="project-tomorrow"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Project Tomorrow"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
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
                />
                <p className="mt-8 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-2xl">
                  {projectTomorrow.body}
                </p>
                <p className="mt-6 text-[13px] text-ink-muted leading-relaxed max-w-2xl">
                  Status, plainly: a collaboration in development. We will call
                  it a partnership when Project Tomorrow does.
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
                  {speakUp.attribution} {projectTomorrow.disclaimer}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ALSO UNDERWAY */}
      <section
        className="py-14 md:py-20 border-t border-border surface-panel"
        data-rail-section="Also underway"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Also underway"
              title={
                <>
                  What else the cabinet and reps{" "}
                  <span className="serif-italic">are driving this cycle.</span>
                </>
              }
              blurb="Described at the stage each one is actually at."
            />
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {[
              {
                tag: "Research",
                status: "Underway",
                title: "When Does Student Voice Change AI Policy?",
                body: "A preregistered study of the twelve largest U.S. school districts, tracing whether student recommendations on generative AI received a documented response. Public-records requests are out to twenty large systems and coding has begun.",
                href: "/research#study",
                cta: "Read the protocol summary",
              },
              {
                tag: "Advocacy",
                status: "Proposal",
                title: "The Student AI Pulse",
                body: "A proposal to the Los Angeles County Office of Education for a short, voluntary measure of whether students understand AI expectations, can reach appropriate tools, and are building basic AI literacy, piloted with interested districts in 2026–27. Sent to superintendents across the county in August; being refined with the districts that responded.",
              },
              {
                tag: "Governance",
                status: "Early stage",
                title: "Tracking AI changes after approval",
                body: "How districts find out when an already-approved product adds student-facing AI or changes how student data is processed. Working from conversations with district technology and privacy leads toward a lightweight review standard for material AI changes.",
              },
              {
                tag: "Community",
                status: "Ongoing",
                title: "The national network",
                body: "Onboarding the 2026–27 cohort of representatives and State Directors, with structured onboarding and shared resources, and running the first Vanguard Open.",
                href: "/get-involved",
                cta: "Join the next cohort",
              },
            ].map((x) => (
              <li
                key={x.title}
                className="py-8 md:py-10 grid gap-6 md:grid-cols-[140px_1fr] md:gap-14 items-baseline"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  <div>{x.tag}</div>
                  <div className="mt-1 text-accent">{x.status}</div>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-[32px] tracking-tight text-ink">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] text-ink-dim leading-relaxed max-w-2xl">
                    {x.body}
                  </p>
                  {x.href && (
                    <Link
                      href={x.href}
                      className="mt-4 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
                    >
                      {x.cta} →
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Work with us"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink max-w-3xl">
                Want structured student input{" "}
                <span className="serif-italic text-ink-dim">
                  in your district&apos;s AI decisions?
                </span>
              </h3>
              <div className="flex gap-3">
                <Button href="/get-involved#districts" size="lg">
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

function pillarFocus(slug: string): string {
  if (slug === "research")
    return "a preregistered study of the twelve largest U.S. districts, alongside the Student AI Pulse pilot proposal in Los Angeles County.";
  if (slug === "governance")
    return "a proposed standing student AI body in ABC Unified, now under district review.";
  return "onboarding the 2026–27 cohort of representatives and State Directors, and running the first Vanguard Open.";
}
