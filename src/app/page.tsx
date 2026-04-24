import Image from "next/image";
import Link from "next/link";
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
import { Sparkles, Swoosh, TrendLine } from "@/components/Doodle";
import {
  metrics,
  pillars,
  site,
  schools,
  pullQuote,
  leadership,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <ScrollSeal />
      <Hero />

      {/* MARQUEE — schools we work with */}
      <section
        className="border-b border-border py-8"
        data-rail-section="Schools"
      >
        <div className="flex items-center gap-10">
          <span className="shrink-0 pl-6 md:pl-10 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            Representing students at
          </span>
          <Marquee items={schools} />
        </div>
      </section>

      {/* PULL QUOTE / MISSION */}
      <section
        className="py-28 md:py-40 surface-panel"
        data-rail-section="Mission"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-10 ornament">
              <span className="text-accent">§ 01</span>
              <span>On mission</span>
              <Sparkles size={40} className="ml-2 opacity-80" />
            </div>
            <blockquote className="max-w-5xl">
              <p className="font-display text-[30px] sm:text-4xl md:text-[52px] lg:text-[60px] leading-[1.08] tracking-tight text-ink">
                <span className="serif-italic text-accent">&ldquo;</span>
                {pullQuote.text.replace(/"/g, "")}
                <span className="serif-italic text-accent">&rdquo;</span>
              </p>
              <footer className="mt-10 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                — {pullQuote.attribution}
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* FEATURE IMAGE — wide documentary banner */}
      <section
        className="relative border-t border-border"
        data-rail-section="Classroom"
      >
        <figure className="photo-frame photo-duotone aspect-[21/9] md:aspect-[21/7] w-full">
          <Image
            src="/img/feature/classroom.jpg"
            alt="A classroom in session — students at desks, teacher presenting at the whiteboard."
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <figcaption className="absolute left-0 right-0 bottom-0 p-6 md:p-10">
            <Container size="wide" className="p-0">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <p className="font-display italic text-2xl md:text-4xl text-ink max-w-2xl leading-[1.12]">
                  The room where AI policy gets decided — and the students whose
                  learning it defines.
                </p>
                <span className="text-[10px] uppercase tracking-[0.24em] text-ink-dim">
                  Fig. 01 · A classroom in Southern California
                </span>
              </div>
            </Container>
          </figcaption>
        </figure>
      </section>

      {/* PILLARS */}
      <section
        className="border-t border-border"
        data-rail-section="Programs"
      >
        <Container size="wide" className="pt-20 md:pt-28">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="What we do"
                title={
                  <>
                    Three programs.
                    <br />
                    <span className="serif-italic text-ink-dim">
                      One loop from student voice to policy.
                    </span>
                  </>
                }
              />
              <Link
                href="/our-work"
                className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
              >
                See all our work →
              </Link>
            </div>
          </Reveal>
        </Container>

        <div className="mt-16 md:mt-24">
          {pillars.map((p, i) => (
            <Reveal key={p.slug}>
              <article
                className="border-t border-border py-14 md:py-20"
                id={p.slug}
              >
                <Container size="wide">
                  <div
                    className={`grid gap-10 md:grid-cols-12 md:gap-16 items-center ${
                      i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="md:col-span-6">
                      <figure className="photo-frame photo-duotone aspect-[4/3] md:aspect-[5/4] w-full">
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </figure>
                      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        Program {p.number} /{" "}
                        {pillars.length < 10
                          ? `0${pillars.length}`
                          : pillars.length}
                      </figcaption>
                    </div>
                    <div className="md:col-span-6 md:pl-4 lg:pl-8">
                      <div className="flex items-baseline gap-4">
                        <span className="fig text-2xl text-accent">
                          {p.number}
                        </span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="mt-6 font-display text-3xl md:text-[44px] leading-[1.06] tracking-tight text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-3 font-display italic text-xl md:text-2xl text-ink-dim">
                        {p.subtitle}
                      </p>
                      <p className="mt-6 text-[16px] text-ink-dim leading-relaxed max-w-lg">
                        {p.blurb}
                      </p>
                      <ul className="mt-8 space-y-3 border-t border-border pt-6 max-w-lg">
                        {p.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-4 text-[14.5px] text-ink"
                          >
                            <span className="font-mono text-xs text-ink-muted shrink-0 w-6">
                              —
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Container>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="py-28 md:py-40 border-t border-border"
        data-rail-section="The loop"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-24">
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title={
                  <>
                    A repeatable loop,
                    <br />
                    <span className="serif-italic">not a one-off club.</span>
                  </>
                }
                blurb="The system that turns student experience into evidence, and evidence into policy conversations."
              />
              <Swoosh size={220} className="mt-4 opacity-70" />
            </Reveal>
            <Reveal>
              <ol className="divide-y divide-border border-y border-border">
                {[
                  {
                    n: "01",
                    t: "Listen",
                    b: "Student reps run surveys, interviews, and focus groups on their campuses.",
                  },
                  {
                    n: "02",
                    t: "Synthesize",
                    b: "Findings are compiled into briefs school leaders and districts can actually use.",
                  },
                  {
                    n: "03",
                    t: "Advocate",
                    b: "We meet with schools, districts, and local events to turn evidence into policy.",
                  },
                  {
                    n: "04",
                    t: "Sustain",
                    b: "The representative network keeps the loop open — student voice, year over year.",
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    className="py-8 md:py-10 grid grid-cols-[auto_1fr] gap-8 md:gap-14"
                  >
                    <span className="fig text-3xl md:text-4xl text-ink-muted">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
                        {s.t}
                      </h4>
                      <p className="mt-2 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                        {s.b}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* LEADERSHIP PREVIEW */}
      <section
        className="py-28 md:py-40 border-t border-border"
        data-rail-section="Leadership"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Leadership"
                title={
                  <>
                    Run by students —
                    <br />
                    <span className="serif-italic">not for them.</span>
                  </>
                }
                blurb="A nine-person cabinet of student leaders across Southern California, steering research, operations, and outreach."
              />
              <Link
                href="/about"
                className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
              >
                Meet the team →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {leadership.slice(0, 5).map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <figure>
                  <div className="photo-frame photo-crisp photo-duotone aspect-[4/5] bg-surface max-w-[220px] mx-auto">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.name}, ${p.role}`}
                        fill
                        sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 220px"
                        quality={95}
                        className="object-cover object-top"
                      />
                    ) : (
                      <InitialsFallback name={p.name} />
                    )}
                  </div>
                  <figcaption className="mt-3 text-center md:text-left max-w-[220px] mx-auto">
                    <div className="font-display text-[17px] tracking-tight text-ink">
                      {p.name}
                    </div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                      {p.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* IMPACT PREVIEW */}
      <section
        className="py-28 md:py-40 border-t border-border"
        data-rail-section="Impact"
      >
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-end">
            <div className="md:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Impact · At a glance"
                  title={
                    <>
                      Real schools.
                      <br />
                      <span className="serif-italic">Real reach.</span>
                    </>
                  }
                  blurb="Still early — and already in rooms across Southern California. The numbers reflect where we are today, not where we&apos;re stopping."
                />
                <div className="mt-10">
                  <Button href="/impact" variant="secondary" size="lg">
                    See the full picture
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7 relative">
              <TrendLine
                size={110}
                className="absolute -top-10 right-0 opacity-70 hidden md:block"
              />
              <Reveal>
                <div className="grid grid-cols-2 gap-x-8 md:gap-x-12">
                  {metrics.map((m) => (
                    <StatTile
                      key={m.label}
                      value={m.value}
                      label={m.label}
                      hint={m.hint}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* AUDIENCE PATHS */}
      <section
        className="py-28 md:py-36 border-t border-border"
        data-rail-section="Ways in"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Ways in"
              title={
                <>
                  There&apos;s a door with{" "}
                  <span className="serif-italic">your name on it.</span>
                </>
              }
            />
          </Reveal>
          <ul className="mt-16 divide-y divide-border border-y border-border">
            {[
              {
                tag: "For students",
                title: "Become a representative",
                body: "Bring AI Vanguard to your campus. Lead research, run events, shape how AI lands in your school.",
                href: site.applyUrl,
                external: true,
                cta: "Apply to join",
              },
              {
                tag: "For schools",
                title: "Partner with us",
                body: "Work with us on student-voice research at your school, or host a policy conversation.",
                href: "/get-involved#partner",
                cta: "Start a partnership",
              },
              {
                tag: "For supporters",
                title: "Back the movement",
                body: "Mentor students, sponsor research, amplify the work. Student voice on AI needs adult allies.",
                href: "/contact",
                cta: "Get in touch",
              },
            ].map((a) => (
              <li key={a.title}>
                <Link
                  href={a.href}
                  {...(a.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group py-10 md:py-12 grid gap-6 md:grid-cols-[220px_1fr_auto] md:gap-12 items-baseline"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted group-hover:text-accent transition-colors">
                    {a.tag}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-[34px] tracking-tight text-ink group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-xl">
                      {a.body}
                    </p>
                  </div>
                  <span className="text-sm text-ink-dim group-hover:text-ink transition-colors whitespace-nowrap">
                    {a.cta} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative border-t border-border"
        data-rail-section="The ask"
      >
        <Container size="wide" className="py-28 md:py-40">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-center">
              <div className="md:col-span-7">
                <Eyebrow>The ask</Eyebrow>
                <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-[80px] leading-[1.02] tracking-tight text-ink">
                  Your school&apos;s next AI policy{" "}
                  <span className="serif-italic text-ink-dim">
                    should have students in the room.
                  </span>
                </h2>
                <Swoosh size={280} className="mt-3 opacity-80" />
                <p className="mt-8 text-[16px] md:text-[17px] text-ink-dim max-w-xl leading-relaxed">
                  Join the next cohort of student representatives — or bring
                  AI Vanguard to your school or district.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3 relative">
                  <Mascot
                    size={80}
                    className="absolute -top-12 left-4 rotate-[18deg] hidden sm:inline-block"
                  />
                  <Button href={site.applyUrl} external size="lg">
                    Apply as a student rep
                  </Button>
                  <Button
                    href="/get-involved#partner"
                    variant="secondary"
                    size="lg"
                  >
                    Partner with us
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5">
                <figure className="photo-frame photo-duotone aspect-[4/5]">
                  <Image
                    src="/img/feature/group.jpg"
                    alt="Four students gathered around a tablet, working together."
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-4 bottom-4 text-[11px] uppercase tracking-[0.2em] text-ink bg-bg/70 backdrop-blur-sm px-3 py-1.5">
                    Fig. 02 · The next cohort
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

function InitialsFallback({ name }: { name: string }) {
  const parts = name.split(" ");
  const inits = (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
  return (
    <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-ink-muted bg-surface">
      {inits}
    </div>
  );
}
