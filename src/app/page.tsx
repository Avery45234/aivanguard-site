import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { StatTile } from "@/components/StatTile";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Eyebrow } from "@/components/Eyebrow";
import { ScrollSeal } from "@/components/ScrollSeal";
import { Mascot } from "@/components/Mascot";
import { Sparkles, Swoosh } from "@/components/Doodle";
import { ProofStrip, Steps } from "@/components/Blocks";
import { press } from "@/lib/highlights";
import { metrics, pillars, site, schools, pullQuote, leadership, initiatives } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const outlets = Array.from(new Set(press.map((p) => p.outlet.split(" · ")[0])));

export default function HomePage() {
  return (
    <>
      <ScrollSeal />
      <Hero />

      {/* PROOF — who has covered the students */}
      <section className="border-b border-border" data-rail-section="Coverage">
        <Container size="wide" className="py-2">
          <ProofStrip outlets={outlets} />
        </Container>
      </section>

      {/* NOW — three things, three colors, one line each */}
      <section className="border-b border-border surface-panel" data-rail-section="Now">
        <Container size="wide" className="py-12 md:py-16">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Right now"
                title={
                  <>
                    What we&apos;re doing{" "}
                    <span className="serif-italic text-ink-dim">this month.</span>
                  </>
                }
              />
              <Link href="/highlights" className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                All developments →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {initiatives.map((x, i) => (
              <Reveal key={x.title} delay={i * 60}>
                <Link
                  href={x.href}
                  className={`tone-${x.tone} group flex h-full flex-col bg-bg p-6 md:p-7 hover:bg-surface/60 transition-colors`}
                >
                  <div className="flex items-baseline justify-between gap-4 text-[10.5px] uppercase tracking-[0.22em]">
                    <span className="text-ink-muted">{x.tag}</span>
                    <span className="text-accent">{x.status}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[22px] md:text-2xl leading-[1.12] tracking-tight text-ink group-hover:text-accent transition-colors">
                    {x.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-dim leading-relaxed flex-1">{x.short}</p>
                  <span className="mt-5 text-sm text-ink-dim group-hover:text-ink transition-colors">More →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* MARQUEE — schools */}
      <section className="border-b border-border py-7" data-rail-section="Schools">
        <div className="flex items-center gap-10">
          <span className="shrink-0 pl-6 md:pl-10 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            Representatives at
          </span>
          <Marquee items={schools} />
        </div>
      </section>

      {/* REAL PHOTO — the district roundtable */}
      <section className="relative border-b border-border" data-rail-section="Roundtable">
        <figure className="photo-frame photo-duotone aspect-[21/9] md:aspect-[21/7] w-full">
          <Image
            src="/img/pillars/advocacy.jpg"
            alt="Avery Updike and four students seated in a school library holding YES and NO cards during an ABC Unified AI Community Roundtable."
            fill
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <figcaption className="absolute left-0 right-0 bottom-0 p-6 md:p-10">
            <Container size="wide" className="p-0">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <p className="font-display italic text-2xl md:text-4xl text-ink max-w-2xl leading-[1.12]">
                  Students voting on their district&apos;s AI guidance, in the room where it gets written.
                </p>
                <Link href="/our-work#abcusd" className="text-[11px] uppercase tracking-[0.22em] text-ink-dim hover:text-ink transition-colors">
                  ABC Unified AI Community Roundtable · Cerritos, CA →
                </Link>
              </div>
            </Container>
          </figcaption>
        </figure>
      </section>

      {/* MISSION — one big line */}
      <section className="py-12 md:py-16" data-rail-section="Mission">
        <Container size="wide">
          <Reveal>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-8 ornament">
              <span className="text-accent fig">01</span>
              <span>On mission</span>
              <Sparkles size={40} className="ml-2 opacity-80" />
            </div>
            <blockquote className="max-w-5xl">
              <p className="font-display text-[28px] sm:text-4xl md:text-[48px] leading-[1.1] tracking-tight text-ink">
                <span className="serif-italic text-accent">&ldquo;</span>
                {pullQuote.text.replace(/"/g, "")}
                <span className="serif-italic text-accent">&rdquo;</span>
              </p>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* PROGRAMS — three columns, image, title, three links */}
      <section className="border-t border-border py-14 md:py-20" data-rail-section="Programs">
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="What we do"
                title={
                  <>
                    Three programs.{" "}
                    <span className="serif-italic text-ink-dim">One loop.</span>
                  </>
                }
              />
              <Link href="/our-work" className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                See the work →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((p) => (
              <Reveal key={p.slug}>
                <article className={`tone-${p.tone}`}>
                  <Link href={`/our-work#${p.slug}`} className="group block">
                    <figure className="photo-frame photo-duotone aspect-[4/3]">
                      <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </figure>
                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="fig text-lg text-accent">{p.number}</span>
                      <h3 className="font-display text-2xl md:text-[28px] tracking-tight text-ink group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2 font-display italic text-lg text-ink-dim">{p.subtitle}</p>
                  </Link>
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
          <Reveal>
            <div className="mt-14">
              <Steps
                steps={[
                  { label: "Listen", caption: "Reps run surveys and conversations on their campuses." },
                  { label: "Synthesize", caption: "Findings become briefs a district can use." },
                  { label: "Advocate", caption: "Students bring the evidence into district decisions." },
                  { label: "Sustain", caption: "Structures keep students in the room next year too." },
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* NUMBERS — each links to its source */}
      <section className="border-t border-border py-14 md:py-20 surface-panel" data-rail-section="Numbers">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
            <div className="md:col-span-4">
              <Reveal>
                <SectionHeading
                  eyebrow="In numbers"
                  title={
                    <>
                      Every figure{" "}
                      <span className="serif-italic">links to its source.</span>
                    </>
                  }
                />
                <div className="mt-8">
                  <Button href="/impact" variant="secondary" size="lg">Full impact page</Button>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <div className="grid grid-cols-2 gap-x-8 md:gap-x-12">
                  {metrics.map((m) => (
                    <StatTile key={m.label} value={m.value} label={m.label} hint={m.hint} href={m.href} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* LEADERSHIP — faces */}
      <section className="border-t border-border py-14 md:py-20" data-rail-section="Leadership">
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Leadership"
                title={
                  <>
                    Run by students,{" "}
                    <span className="serif-italic">not for them.</span>
                  </>
                }
              />
              <Link href="/about" className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                All {leadership.length} →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {leadership.slice(0, 5).map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <figure>
                  <div className="photo-frame photo-crisp photo-duotone aspect-[4/5] bg-surface max-w-[220px] mx-auto">
                    <Image src={p.image} alt={`${p.name}, ${p.role}`} fill sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 220px" quality={95} className="object-cover object-top" />
                  </div>
                  <figcaption className="mt-3 max-w-[220px] mx-auto">
                    <div className="font-display text-[17px] tracking-tight text-ink">{p.name}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-ink-muted">{p.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WAYS IN — four doors */}
      <section className="border-t border-border py-14 md:py-20" data-rail-section="Ways in">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Ways in"
              title={
                <>
                  Four doors.{" "}
                  <span className="serif-italic">One has your name on it.</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { tag: "Students", title: "Represent or research", href: site.applyUrl, external: true },
              { tag: "Schools & districts", title: "Structured student input", href: "/get-involved#districts" },
              { tag: "Researchers", title: "Collaborate on studies", href: "/get-involved#researchers" },
              { tag: "Supporters", title: "Mentor, sponsor, connect", href: "/get-involved#supporters" },
            ].map((a) => (
              <Link
                key={a.title}
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group bg-bg p-6 md:p-7 hover:bg-surface/60 transition-colors"
              >
                <span className="text-[10.5px] uppercase tracking-[0.22em] text-ink-muted group-hover:text-accent transition-colors">{a.tag}</span>
                <h3 className="mt-3 font-display text-xl md:text-2xl tracking-tight text-ink">{a.title}</h3>
                <span className="mt-4 block text-sm text-ink-dim group-hover:text-ink transition-colors">{a.external ? "Apply ↗" : "How →"}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA — real photo */}
      <section className="relative border-t border-border" data-rail-section="The ask">
        <Container size="wide" className="py-14 md:py-20">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-center">
              <div className="md:col-span-7">
                <Eyebrow>The ask</Eyebrow>
                <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink">
                  Your district&apos;s next AI decision{" "}
                  <span className="serif-italic text-ink-dim">should have students in the room.</span>
                </h2>
                <Swoosh size={280} className="mt-3 opacity-80" />
                <div className="mt-10 flex flex-wrap items-center gap-3 relative">
                  <Mascot size={80} className="absolute -top-12 left-4 rotate-[18deg] hidden sm:inline-block" />
                  <Button href={site.applyUrl} external size="lg">Apply as a student</Button>
                  <Button href="/get-involved#districts" variant="secondary" size="lg">Work with us</Button>
                </div>
              </div>
              <div className="md:col-span-5">
                <figure className="photo-frame photo-duotone aspect-[4/3]">
                  <Image
                    src="/img/pillars/community.jpg"
                    alt="Student senators gathered beneath the final vote board after the Students First Act passed at America's Youth AI Festival in Boston."
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-4 bottom-4 text-[11px] uppercase tracking-[0.2em] text-ink bg-bg/70 backdrop-blur-sm px-3 py-1.5">
                    Boston · July 2026 · Students First Act · final vote board
                  </figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
