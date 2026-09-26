import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/lib/site";
import CopyButton from "@/app/press/CopyButtonClient";

// Public profile for AI Vanguard's founder. Everything here is either
// already published on this site, in press coverage, or in district
// correspondence the district itself asked to publish. Update the
// "Updated" date whenever the page changes.

const PROFILE_URL = "https://aivanguard.org/people/avery-updike";
const LINKEDIN = "https://www.linkedin.com/in/avery-updike-4587b2376/";
const UPDATED = "September 26, 2026";
const HEADSHOT = "/img/team/avery.png";

const bio25 =
  "Avery Updike founded AI Vanguard, a student-led nonprofit advancing student participation in AI education policy. She is a senior at Cerritos High School in California.";

const bio50 =
  "Avery Updike is the founder and president of AI Vanguard, a student-led nonprofit advancing student participation in AI education policy. She leads a preregistered study of student influence on AI policy in the twelve largest U.S. districts and served as a California student senator on the 2026 Students First Act.";

const bio100 =
  "Avery Updike is the founder and president of AI Vanguard, a student-led nonprofit advancing student participation in AI education policy. She leads a preregistered study of whether student recommendations changed AI policy in the twelve largest U.S. school districts, built on public records. In her home district, ABC Unified, she serves as a student liaison to district technology leadership, has addressed more than 400 educators at ABC IGNITE, and is working with district leaders on a proposed standing student AI body. In 2026 she served as a California student senator on the Students First Act. She is a Cerritos High School senior.";

const work = [
  {
    title: "When Does Student Voice Change AI Policy?",
    kind: "Preregistered records study · Lead researcher · 2026, underway",
    body: "Traces whether student recommendations on generative AI received a documented response in the twelve largest U.S. school districts, using district records and public-records requests to twenty systems. Fixed sample, coded outcomes, two independent coders.",
    href: "/research#study",
  },
  {
    title: "2025 Student AI Policy Survey",
    kind: "AI Vanguard · 447 students · Aug–Dec 2025",
    body: "Designed and distributed through AI Vanguard's student representatives. Four in five respondents already used AI for schoolwork; 74% wanted schools to teach responsible use; 35% asked to help write the rules.",
    href: "/research/student-ai-survey",
  },
  {
    title: "Student voice on AI in education: six asks",
    kind: "AI Vanguard policy brief · 2026",
    body: "Translates the student and teacher findings into six concrete recommendations for schools and districts.",
    href: "/policy-brief",
  },
];

const appearances = [
  {
    date: "September 2026",
    title: "El Estoque, on the Students First Act",
    body: "Interviewed as one of California's two student senators on the committee that wrote the act's student provisions.",
    href: "https://elestoque.org/2026/09/02/news/students-advocate-for-changes-in-educational-ai-policies-through-the-students-first-act/",
    external: true,
  },
  {
    date: "September 2026",
    title: "ABC Unified Parent Symposium",
    body: "Student perspective on AI in the classroom, for families across the district.",
  },
  {
    date: "July 2026",
    title: "America's Youth AI Festival, Boston",
    body: "California student senator. Served on the committee for student provisions, helped develop and pass several measures, and presented one on the Senate floor. The Students First Act passed 82 to 16.",
    href: "/highlights#avery-students-first-act",
  },
  {
    date: "2025 – 2026",
    title: "ABC Unified AI Community Roundtables",
    body: "Recurring student voice at the district's community roundtables on AI guidance, and a standing student-liaison role with the district's technology leadership.",
    href: "/our-work#abcusd",
  },
  {
    date: "January 2025",
    title: "ABC IGNITE Ed Tech Symposium",
    body: "Addressed more than 400 educators on AI literacy and including student voices in district AI decisions.",
    href: "/our-work#abcusd",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/people/avery-updike" },
  title: "Avery Updike | Student AI Policy Researcher and AI Vanguard Founder",
  description:
    "Avery Updike studies how students influence school AI policy. Explore AI Vanguard research, speaking, and ways to get in touch.",
  openGraph: {
    title: "Avery Updike | Student AI Policy Researcher and AI Vanguard Founder",
    description:
      "Avery Updike studies how students influence school AI policy. Explore AI Vanguard research, speaking, and ways to get in touch.",
    url: PROFILE_URL,
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-09-26",
  mainEntity: {
    "@type": "Person",
    name: "Avery Updike",
    url: PROFILE_URL,
    image: `https://aivanguard.org${HEADSHOT}`,
    description:
      "Student researcher of AI in education and student participation in school policy; founder and president of AI Vanguard.",
    jobTitle: "Founder & President, AI Vanguard",
    affiliation: {
      "@type": "Organization",
      name: "AI Vanguard",
      url: "https://aivanguard.org",
    },
    sameAs: [LINKEDIN],
  },
};

export default function AveryProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* IDENTITY */}
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 border-b border-border" data-rail-section="Avery Updike">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-end">
            <div className="md:col-span-8">
              <Eyebrow>People · Founder</Eyebrow>
              <h1 className="mt-5 md:mt-6 font-display tracking-tight text-ink leading-[1.02] text-[40px] sm:text-5xl md:text-6xl lg:text-[76px] max-w-4xl">
                Avery Updike
              </h1>
              <p className="mt-5 font-display italic text-xl md:text-2xl text-ink-dim leading-snug max-w-2xl">
                Student AI policy researcher. Founder and president of AI Vanguard.
              </p>
              <div className="mt-8 space-y-4 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-2xl">
                <p>
                  I study how students can influence the decisions schools make
                  about AI. I founded AI Vanguard to gather student perspectives,
                  bring them into district conversations, and test whether that
                  input changes policy.
                </p>
                <p>
                  Right now that means a preregistered study of the twelve largest
                  U.S. school districts, a proposal for a standing student AI body
                  in my own district, and a conversation with Project Tomorrow
                  about the student side of its national Speak Up research. I am a
                  senior at Cerritos High School in Southern California.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  Contact for media or speaking
                </Button>
                <Button href={LINKEDIN} external variant="secondary" size="lg">
                  LinkedIn ↗
                </Button>
              </div>
            </div>
            <div className="md:col-span-4">
              <figure className="photo-frame photo-crisp photo-duotone aspect-[4/5] bg-surface relative max-w-[320px] md:ml-auto">
                <Image
                  src={HEADSHOT}
                  alt="Avery Updike, founder and president of AI Vanguard."
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  quality={95}
                  priority
                  className="object-cover object-top"
                />
              </figure>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ink-muted md:text-right">
                Headshot ·{" "}
                <a href={HEADSHOT} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent underline underline-offset-4">
                  download ↗
                </a>
              </figcaption>
            </div>
          </div>
        </Container>
      </section>

      {/* WORK */}
      <section className="py-14 md:py-20" data-rail-section="Research">
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="font-display text-3xl md:text-[40px] tracking-tight text-ink">
                Research
              </h2>
              <Link href="/research" className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                All AI Vanguard research →
              </Link>
            </div>
          </Reveal>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {work.map((w) => (
              <Reveal key={w.title}>
                <li>
                  <Link href={w.href} className="group py-7 md:py-8 grid gap-3 md:grid-cols-[1fr_auto] md:gap-12 items-baseline">
                    <div>
                      <h3 className="font-display text-2xl md:text-[28px] tracking-tight text-ink group-hover:text-accent transition-colors">
                        {w.title}
                      </h3>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted">{w.kind}</div>
                      <p className="mt-3 text-[15px] text-ink-dim leading-relaxed max-w-2xl">{w.body}</p>
                    </div>
                    <span className="text-sm text-ink-dim group-hover:text-ink transition-colors whitespace-nowrap">Read →</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* APPEARANCES */}
      <section className="py-14 md:py-20 border-t border-border surface-panel" data-rail-section="Talks & coverage">
        <Container size="wide">
          <Reveal>
            <h2 className="font-display text-3xl md:text-[40px] tracking-tight text-ink">
              Talks, district work, and coverage
            </h2>
            <p className="mt-3 text-[15px] text-ink-dim max-w-2xl">
              Described at the stage each one is at. The student AI body in ABC
              Unified is proposed and under review, not established.
            </p>
          </Reveal>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {appearances.map((a) => (
              <Reveal key={a.title}>
                <li className="py-6 md:py-7 grid gap-2 md:grid-cols-[170px_1fr] md:gap-12 items-baseline">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">{a.date}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink">{a.title}</h3>
                    <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-2xl">{a.body}</p>
                    {a.href && (
                      a.external ? (
                        <a href={a.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                          Read the piece ↗
                        </a>
                      ) : (
                        <Link href={a.href} className="mt-2 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                          More →
                        </Link>
                      )
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* BIOS */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Bios">
        <Container size="wide">
          <Reveal>
            <h2 className="font-display text-3xl md:text-[40px] tracking-tight text-ink">
              Bios for programs and press
            </h2>
            <p className="mt-3 text-[15px] text-ink-dim max-w-2xl">
              Use any of these verbatim. Headshot above may be reproduced for
              editorial and event use with credit to AI Vanguard.
            </p>
          </Reveal>
          <div className="mt-10 space-y-10">
            {[
              { label: "25 words", text: bio25 },
              { label: "50 words", text: bio50 },
              { label: "100 words", text: bio100 },
            ].map((b) => (
              <Reveal key={b.label}>
                <article className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-12 items-baseline border-t border-border pt-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-accent">{b.label}</div>
                  <div>
                    <p className="text-[16px] md:text-[17px] leading-relaxed text-ink">{b.text}</p>
                    <CopyButton text={b.text} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section className="py-14 md:py-20 border-t border-border surface-panel" data-rail-section="Contact">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <div>
                <h2 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                  Working on student voice in AI policy?{" "}
                  <span className="serif-italic text-ink-dim">Get in touch.</span>
                </h2>
                <p className="mt-4 text-ink-dim max-w-lg">
                  Media, researchers, districts, and event organizers reach me
                  through AI Vanguard&apos;s contact form or{" "}
                  <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-4">{site.email}</a>.
                  Messages land with me directly.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button href="/contact" size="lg">Contact</Button>
                <Button href="/press" variant="secondary" size="lg">Press kit</Button>
              </div>
            </div>
          </Reveal>
          <p className="mt-12 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            Updated {UPDATED} · aivanguard.org/people/avery-updike
          </p>
        </Container>
      </section>
    </>
  );
}
