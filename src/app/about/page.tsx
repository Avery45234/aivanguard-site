import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Steps } from "@/components/Blocks";
import { objectives, leadership, reach, representatives, site } from "@/lib/site";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "AI Vanguard is a student-led nonprofit ensuring students have a voice in how AI enters the classroom.",
};

const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
const spell = (n: number) => words[n] ?? String(n);
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function AboutPage() {
  const bySchool = representatives.reduce<Record<string, string[]>>((acc, r) => {
    (acc[r.school] ??= []).push(r.name);
    return acc;
  }, {});
  const campuses = Object.keys(bySchool).length;

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A student-led answer to a question{" "}
            <span className="serif-italic text-ink-dim">adults keep deciding without us.</span>
          </>
        }
        blurb="Students are almost never in the room when school AI policy gets written. AI Vanguard exists to change that."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Est. 2024 · Founded in {reach.founded}</span>
            <span>501(c)(3) nonprofit · Student-led · {cap(reach.statesWord)} states</span>
          </div>
        }
      />

      {/* MISSION — photo and two lines */}
      <section className="py-14 md:py-20" data-rail-section="Mission">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <figure className="photo-frame photo-duotone aspect-[4/3]">
                  <Image
                    src="/img/feature/chamber.jpg"
                    alt="Student senators seated at desks in a Senate-style chamber in Boston, July 2026."
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-4 bottom-4 text-[11px] uppercase tracking-[0.2em] text-ink bg-bg/70 backdrop-blur-sm px-3 py-1.5">
                    Boston · July 2026 · the mock Senate that wrote the Students First Act
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Our mission"
                  title={<>Students in the room <span className="serif-italic">where AI policy gets decided.</span></>}
                />
                <p className="mt-6 text-[16px] text-ink-dim leading-relaxed">
                  We gather what students actually think, bring it into district decisions, and build
                  structures so the input keeps coming after any one student graduates. Right now:{" "}
                  <Link href="/research#study" className="text-accent underline underline-offset-4">a preregistered study</Link>,{" "}
                  <Link href="/our-work#abcusd" className="text-accent underline underline-offset-4">a proposed student AI body</Link>, and{" "}
                  <Link href="/our-work#project-tomorrow" className="text-accent underline underline-offset-4">a conversation with Project Tomorrow</Link>.
                </p>
                <p className="mt-5 font-display italic text-xl text-ink">Technology should empower every learner, not leave anyone behind.</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* COMMITMENTS — three compact cards */}
      <section className="py-14 md:py-20 border-t border-border surface-panel" data-rail-section="Commitments">
        <Container size="wide">
          <Reveal>
            <SectionHeading eyebrow="What we stand for" title={<>Three <span className="serif-italic">commitments.</span></>} />
          </Reveal>
          <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-3">
            {objectives.map((o) => (
              <div key={o.title} className="bg-bg p-6 md:p-7">
                <span className="fig text-2xl text-accent">{o.n}</span>
                <h3 className="mt-3 font-display text-2xl md:text-[28px] leading-[1.1] tracking-tight text-ink">{o.title}</h3>
                <p className="mt-3 text-[14px] text-ink-dim leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* REP MODEL — three steps */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Rep model">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="The rep model"
              title={<>Students on the ground, <span className="serif-italic">not just at the top.</span></>}
              blurb="Every campus we work with has a Student Representative: the bridge between their school and AI Vanguard."
            />
          </Reveal>
          <Reveal>
            <Steps
              className="mt-10"
              steps={[
                { label: "Raise", caption: "Campus conversations on how AI is actually used." },
                { label: "Gather", caption: "Surveys and focus groups that become our data." },
                { label: "Shape", caption: "Reps write into the briefs we bring districts." },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* CABINET */}
      <section id="cabinet" className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel" data-rail-section="Cabinet">
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Leadership cabinet"
                title={<>{cap(spell(leadership.length))} student leaders, <span className="serif-italic">{reach.statesWord} states.</span></>}
                blurb={
                  <>
                    Several State Directors first met as student senators at{" "}
                    <a href={links.dayOfAiUsa} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">America&apos;s Youth AI Festival</a>,
                    where 98 students wrote the{" "}
                    <a href={links.studentsFirstAct} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">Students First Act</a>.
                  </>
                }
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Cohort · 2024 – present</div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 30}>
                <figure>
                  <div className="photo-frame photo-crisp photo-duotone aspect-[4/5] bg-surface relative">
                    <Image src={p.image} alt={`${p.name}, ${p.role}`} fill sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 220px" quality={95} className="object-cover object-top" />
                    <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-ink/80 bg-bg/50 backdrop-blur-sm px-1.5 py-0.5">No. {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <figcaption className="mt-3">
                    <div className="font-display text-lg tracking-tight text-ink">{p.name}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">{p.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* REPRESENTATIVES — grouped by campus */}
      <section id="representatives" className="py-14 md:py-20 border-t border-border scroll-mt-28" data-rail-section="Representatives">
        <Container size="wide">
          <Reveal>
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                eyebrow="Student representatives"
                title={<>{cap(spell(representatives.length))} reps, <span className="serif-italic">{spell(campuses)} campuses.</span></>}
              />
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Roster · 2026 – 2027</div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(bySchool).map(([school, names]) => (
              <div key={school} className="bg-bg p-5">
                <div className="text-[10.5px] uppercase tracking-[0.2em] text-ink-muted">{school}</div>
                <ul className="mt-2 space-y-1">
                  {names.map((n) => (
                    <li key={n} className="font-display text-lg tracking-tight text-ink">{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Apply">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <h3 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                Want to be part of{" "}
                <span className="serif-italic text-ink-dim">the next cohort?</span>
              </h3>
              <div className="flex gap-3">
                <Button href={site.applyUrl} external size="lg">Apply</Button>
                <Button href="/get-involved" variant="secondary" size="lg">Other paths</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
