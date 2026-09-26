import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { reach, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/get-involved" },
  title: "Get Involved",
  description:
    "Four ways in: become a student representative or researcher, bring structured student AI input into your district, collaborate on research, or support the work.",
};

const paths = [
  {
    id: "students",
    n: "01",
    tag: "Students",
    title: "Represent your campus, or research.",
    body: "Reps run the surveys and conversations at their school. Student researchers work on the studies. State and Chapter Directors build the model where they live.",
    points: ["High school students anywhere in the U.S.", "A few hours a week, more around research pushes", "Real work that districts actually read"],
    cta: { label: "Apply", href: site.applyUrl, external: true },
  },
  {
    id: "districts",
    n: "02",
    tag: "Schools & districts",
    title: "Bring structured student input into your AI decisions.",
    body: "Not a one-time panel. A repeatable way to hear from students before guidance is written and after tools roll out.",
    points: ["A student-voice study on your campuses", "A standing student liaison or council, modeled on ABC Unified", "Students in front of your staff, board, or families"],
    cta: { label: "Email us about your district", href: `mailto:${site.email}?subject=Student%20AI%20input%20for%20our%20district` },
    more: { label: "See the ABC Unified case study →", href: "/our-work#abcusd" },
  },
  {
    id: "researchers",
    n: "03",
    tag: "Researchers & organizations",
    title: "Collaborate on student-centered research.",
    body: "Students who can review instruments, sit on focus groups, and explain the why behind survey answers.",
    points: ["Student review of survey wording", "Focus groups that add context to your numbers", "Our public-records method, shared openly"],
    cta: { label: "Propose a collaboration", href: `mailto:${site.email}?subject=Research%20collaboration%20with%20AI%20Vanguard` },
    more: { label: "Our research →", href: "/research" },
  },
  {
    id: "supporters",
    n: "04",
    tag: "Supporters",
    title: "Mentor, sponsor, invite, or connect.",
    body: "Student voice on AI in education needs adult allies.",
    points: ["Advise the cabinet on methods or district process", "Fund a research cycle, the Vanguard Open prize pool, or a new state", "Introduce a district leader, researcher, or reporter"],
    cta: { label: "Get in touch", href: "/contact" },
    more: { label: "Press kit →", href: "/press" },
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title={
          <>
            Four doors.{" "}
            <span className="serif-italic">One has your name on it.</span>
          </>
        }
        blurb="Pick the path that fits, and start."
        meta={
          <ol className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            {paths.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="hover:text-ink transition-colors">{p.n} · {p.tag}</a>
              </li>
            ))}
          </ol>
        }
      />

      {/* PHOTO STRIP — real */}
      <section className="border-b border-border" data-rail-section="In the room">
        <div className="grid grid-cols-3 gap-px bg-border">
          {[
            { src: "/img/pillars/advocacy.jpg", alt: "Students holding YES and NO cards at an ABC Unified AI Community Roundtable." },
            { src: "/img/highlights/day-of-ai-01.jpg", alt: "Tristan Tjetjep speaking into a microphone at the Day of AI festival." },
            { src: "/img/pillars/community.jpg", alt: "Student senators beneath the vote board after the Students First Act passed in Boston." },
          ].map((p) => (
            <figure key={p.src} className="photo-frame photo-duotone aspect-[4/3] md:aspect-[16/7] bg-surface">
              <Image src={p.src} alt={p.alt} fill sizes="33vw" className="object-cover" />
            </figure>
          ))}
        </div>
      </section>

      {/* FOUR PATHS */}
      {paths.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-14 md:py-20 scroll-mt-28 ${idx > 0 ? "border-t border-border" : ""} ${idx % 2 === 1 ? "surface-panel" : ""}`}
          data-rail-section={p.tag}
        >
          <Container size="wide">
            <div className="grid gap-8 md:grid-cols-12 md:gap-16 items-start">
              <div className="md:col-span-7">
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <span className="fig text-2xl text-accent">{p.n}</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">{p.tag}</span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink">{p.title}</h2>
                  <p className="mt-5 text-[16px] text-ink-dim leading-relaxed max-w-lg">{p.body}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button href={p.cta.href} external={p.cta.external} size="lg">{p.cta.label}</Button>
                    {p.more && (
                      <a href={p.more.href} className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                        {p.more.label}
                      </a>
                    )}
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-5">
                <Reveal>
                  <ul className="border-y border-border divide-y divide-border">
                    {p.points.map((pt) => (
                      <li key={pt} className="py-3.5 flex gap-4 text-[15px] text-ink">
                        <span className="text-accent shrink-0">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* FAQ — short */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="FAQ">
        <Container size="wide">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title={<>Things <span className="serif-italic">people ask.</span></>} />
          </Reveal>
          <div className="mt-8 max-w-3xl">
            {[
              { q: "Do I need to be in California?", a: `No. Student roles are open nationwide. We have student leadership in ${reach.states.join(", ")}, and State and Chapter Director roles exist to bring the model to more.` },
              { q: "Is there a fee to join or partner?", a: "No. Participation as a student leader or district partner is free." },
              { q: "How do you handle student data?", a: "Participation is voluntary, nothing that identifies an individual student is published, and the records study uses only public or legally obtained documents." },
              { q: "Something else?", a: "The contact page has the right channels for general questions, press, and district inquiries." },
            ].map((f) => (
              <details key={f.q} className="group border-t border-border py-5 last:border-b">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 font-display text-ink text-xl md:text-2xl leading-snug tracking-tight list-none">
                  <span>{f.q}</span>
                  <span className="shrink-0 text-ink-dim transition-transform duration-200 group-open:rotate-45 mt-1">+</span>
                </summary>
                <p className="mt-3 text-[15px] text-ink-dim leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
