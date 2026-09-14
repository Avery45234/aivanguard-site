import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Student voice research, policy advocacy, and community building — the three programs that make up AI Vanguard.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Research. Advocacy.{" "}
            <span className="serif-italic">Community.</span>
          </>
        }
        blurb="The three programs that turn student experience with AI into evidence, recommendations, and real policy conversations with schools."
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
                    <span className="fig text-3xl text-accent">
                      {p.number}
                    </span>
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
                      <li
                        key={b}
                        className="py-4 flex gap-4 text-[14.5px] text-ink"
                      >
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

      {/* INITIATIVES — editorial list */}
      <section
        className="py-24 md:py-32 border-t border-border"
        data-rail-section="Initiatives"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Active initiatives"
              title={
                <>
                  What we&apos;re working on{" "}
                  <span className="serif-italic">right now.</span>
                </>
              }
              blurb="Concrete projects the cabinet and rep network are driving this cycle, described at the stage they are actually at."
            />
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {[
              {
                tag: "Advocacy",
                title: "District policy work",
                body: "Two live proposals with district leaders in Los Angeles County. The Student AI Pulse is a small, voluntary, LACOE-supported pilot that would measure how students actually experience AI at school; it has been circulated to superintendents across the county and is being refined with the districts that responded. Alongside it, a proposal for a standing student AI leadership body in ABC Unified, built around mentorship and year-to-year continuity, is in review with district administrators.",
              },
              {
                tag: "Research",
                title: "AI governance research",
                body: "An early-stage study of how districts govern AI after adoption: how changes to already-approved AI tools and vendor terms get tracked, and whether students hold any formal role in generative-AI policy development. We are working from conversations with district technology and privacy leads, and from public-records requests to districts outside California.",
              },
              {
                tag: "Partnership",
                title: "Project Tomorrow collaboration (in development)",
                body: "Project Tomorrow runs Speak Up, one of the longest-running national surveys of students on education and technology. Together with the Youth Civics Think Tank, we are in active conversation with their research team about adding a student-led qualitative dimension to the survey instruments: the why behind students' answers. A proposal is with their leadership, and the next step under discussion is a student focus group on the survey questions.",
              },
              {
                tag: "Community",
                title: "National rep network",
                body: "Expanding the student-representative cohort to more schools and more states, with State Directors now in six states and structured onboarding and shared resources for every new rep.",
              },
            ].map((x) => (
              <li
                key={x.title}
                className="py-8 md:py-10 grid gap-6 md:grid-cols-[140px_1fr] md:gap-14 items-baseline"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {x.tag}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-[32px] tracking-tight text-ink">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] text-ink-dim leading-relaxed max-w-2xl">
                    {x.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 border-t border-border"
        data-rail-section="Work with us"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink max-w-3xl">
                Want this work{" "}
                <span className="serif-italic text-ink-dim">
                  happening at your school?
                </span>
              </h3>
              <div className="flex gap-3">
                <Button href="/get-involved#partner" size="lg">
                  Partner with us
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

function pillarFocus(slug: string): string {
  if (slug === "research")
    return "an early-stage study of how districts govern AI after adoption, alongside a proposed district pilot measuring how students experience AI at school.";
  if (slug === "advocacy")
    return "bringing student-authored proposals to district leaders in Los Angeles County, and building the State Director network nationally.";
  return "onboarding a new cohort of student representatives and connecting them into a working network.";
}
