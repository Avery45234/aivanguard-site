import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { objectives, leadership, representatives, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Vanguard is a student-led nonprofit ensuring students have a voice in how AI enters the classroom.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A student-led answer to a question{" "}
            <span className="serif-italic text-ink-dim">
              adults keep deciding without us.
            </span>
          </>
        }
        blurb="AI is moving faster than schools can keep up with, and the people most affected — students — are almost never in the room when policy gets written. AI Vanguard exists to change that."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Est. 2024 · Southern California</span>
            <span>501(c)(3) nonprofit · Student-led</span>
          </div>
        }
      />

      {/* MISSION — asymmetric split with image */}
      <section className="py-14 md:py-20" data-rail-section="Mission">
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-5 md:pt-4">
              <Reveal>
                <SectionHeading
                  eyebrow="Our mission"
                  title={
                    <>
                      Ensure students have a voice in shaping{" "}
                      <span className="serif-italic">
                        the future of AI in education.
                      </span>
                    </>
                  }
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <figure className="photo-frame photo-duotone aspect-[4/3]">
                  <Image
                    src="/img/feature/focus.jpg"
                    alt="A student focused on a laptop — quiet, deep work."
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </figure>
                <div className="mt-6 space-y-4 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-2xl">
                  <p>
                    AI is already changing how young people learn, how schools
                    teach, and how academic work is defined. The decisions being
                    made right now — about what&apos;s allowed, what&apos;s
                    banned, and how students are monitored — will shape the
                    next decade of education.
                  </p>
                  <p>
                    Those decisions are being made without us. AI Vanguard is a
                    student-led nonprofit that changes that, by organizing
                    students into a serious voice: with research, with policy
                    recommendations, and with real relationships across schools
                    and districts.
                  </p>
                  <p className="text-ink font-display italic text-2xl md:text-3xl leading-snug pt-4 border-t border-border">
                    Technology should empower every learner, not leave anyone
                    behind.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* OBJECTIVES — large numbered editorial list */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Commitments"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title={
                <>
                  Three commitments that shape{" "}
                  <span className="serif-italic">
                    every project we take on.
                  </span>
                </>
              }
            />
          </Reveal>
          <ol className="mt-14 md:mt-20 divide-y divide-border border-y border-border">
            {objectives.map((o) => (
              <Reveal key={o.title}>
                <li className="py-10 md:py-14 grid gap-6 md:grid-cols-[120px_1fr_1fr] md:gap-12 items-baseline">
                  <span className="fig text-3xl md:text-4xl text-accent">
                    {o.n}
                  </span>
                  <h3 className="font-display text-3xl md:text-[44px] leading-[1.06] tracking-tight text-ink max-w-sm">
                    {o.title}
                  </h3>
                  <p className="text-[16px] text-ink-dim leading-relaxed max-w-md">
                    {o.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* REPRESENTATIVE MODEL */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Rep model"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
            <Reveal>
              <div className="md:sticky md:top-28">
                <SectionHeading
                  eyebrow="The rep model"
                  title={
                    <>
                      Students on the ground,{" "}
                      <span className="serif-italic">not just at the top.</span>
                    </>
                  }
                  blurb="Every campus we work with has at least one Student Representative — the bridge between their school and AI Vanguard."
                />
              </div>
            </Reveal>
            <Reveal>
              <ol className="divide-y divide-border border-y border-border">
                {[
                  {
                    n: "01",
                    t: "Raise awareness on campus",
                    b: "Reps host conversations that surface how AI is actually being used at their school — by students and teachers.",
                  },
                  {
                    n: "02",
                    t: "Gather student perspectives",
                    b: "Through surveys, focus groups, and conversations, reps collect the real data that shapes our research.",
                  },
                  {
                    n: "03",
                    t: "Shape policy recommendations",
                    b: "Reps contribute directly to the briefs and positions AI Vanguard brings to school leaders and districts.",
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    className="py-8 md:py-10 grid grid-cols-[auto_1fr] gap-6 md:gap-12"
                  >
                    <span className="fig text-2xl md:text-3xl text-ink-muted">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="font-display text-xl md:text-2xl tracking-tight text-ink">
                        {s.t}
                      </h4>
                      <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-md">
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

      {/* LEADERSHIP — full grid with real photos */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Cabinet"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Leadership cabinet"
                title={
                  <>
                    Nine student leaders,{" "}
                    <span className="serif-italic">eight schools.</span>
                  </>
                }
                blurb="A cabinet of students across Southern California — steering research, operations, outreach, and strategy."
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                Cohort · 2024 – present
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 40}>
                <ProfileCard
                  name={p.name}
                  role={p.role}
                  image={p.image}
                  index={i + 1}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* STUDENT REPRESENTATIVES — campus-level network */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Representatives"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Student representatives"
                title={
                  <>
                    Fourteen reps,{" "}
                    <span className="serif-italic">nine campuses.</span>
                  </>
                }
                blurb="Each representative is the bridge between their school and AI Vanguard — running campus conversations, gathering student perspectives, and shaping the policy we bring to districts."
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                Roster · 2025 – 2026
              </div>
            </div>
          </Reveal>

          <ul className="mt-14 md:mt-20 divide-y divide-border border-y border-border">
            {representatives.map((rep, i) => (
              <Reveal key={rep.name} delay={i * 20}>
                <li className="py-5 md:py-6 grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-baseline">
                  <span className="fig text-sm md:text-base text-ink-muted w-8 md:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="font-display text-lg md:text-[22px] tracking-tight text-ink">
                    {rep.name}
                  </div>
                  <div className="text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-ink-muted text-right">
                    {rep.school}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Apply"
      >
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <div>
                <h3 className="font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink max-w-3xl">
                  Want to be part of{" "}
                  <span className="serif-italic text-ink-dim">
                    the next cohort?
                  </span>
                </h3>
                <p className="mt-4 text-ink-dim max-w-lg">
                  Student rep applications are open. Partners, mentors, and
                  supporters — we&apos;d also love to talk.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href={site.applyUrl} external size="lg">
                  Apply
                </Button>
                <Button href="/get-involved" variant="secondary" size="lg">
                  Other paths
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ProfileCard({
  name,
  role,
  image,
  index,
}: {
  name: string;
  role: string;
  image: string | null;
  index: number;
}) {
  const parts = name.split(" ");
  const inits = (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
  return (
    <figure className="group">
      <div className="photo-frame photo-crisp photo-duotone aspect-[4/5] bg-surface relative">
        {image ? (
          <Image
            src={image}
            alt={`${name}, ${role}`}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 260px"
            quality={95}
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-ink-muted">
            {inits}
          </div>
        )}
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-ink/80 bg-bg/50 backdrop-blur-sm px-1.5 py-0.5">
          No. {String(index).padStart(2, "0")}
        </span>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <div className="font-display text-xl tracking-tight text-ink">
            {name}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            {role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
