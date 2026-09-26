import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { developments, highlights, press, updates } from "@/lib/highlights";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/highlights" },
  title: "News",
  description:
    "Work worth following from AI Vanguard: student highlights, developments in research and district governance, and press coverage of AI Vanguard students.",
};

export default function HighlightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & highlights"
        title={
          <>
            Work worth{" "}
            <span className="serif-italic text-ink-dim">following.</span>
          </>
        }
        blurb="Student highlights, developments in our research and district work, and the coverage AI Vanguard students are earning in their own states. Updated as things actually happen."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Series · Ongoing</span>
            <span>Last added · September 2026</span>
          </div>
        }
      />

      {/* DEVELOPMENTS */}
      <section
        className="py-14 md:py-20 border-b border-border surface-panel"
        data-rail-section="Developments"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Developments"
              title={
                <>
                  Three things moving{" "}
                  <span className="serif-italic">right now.</span>
                </>
              }
              blurb="Each carries its real stage. Nothing here is called finished, launched, or a partnership until it is."
            />
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {developments.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <Link
                  href={d.href}
                  className={`tone-${d.tone} group flex h-full flex-col bg-bg p-7 md:p-8 hover:bg-surface/60 transition-colors`}
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-accent">
                    {d.tag}
                  </span>
                  <h3 className="mt-5 font-display text-2xl md:text-[28px] leading-[1.1] tracking-tight text-ink group-hover:text-accent transition-colors">
                    {d.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] text-ink-dim leading-relaxed flex-1">
                    {d.body}
                  </p>
                  <span className="mt-6 text-sm text-ink-dim group-hover:text-ink transition-colors">
                    More →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* STUDENT HIGHLIGHTS */}
      {highlights.map((h, idx) => (
        <section
          key={h.slug}
          id={h.slug}
          className="py-14 md:py-20 border-t border-border scroll-mt-28"
          data-rail-section={h.event}
        >
          <Container size="wide">
            <Reveal>
              <div className="flex items-baseline justify-between gap-6 flex-wrap">
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  Highlight · No. {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                  {h.event}
                </div>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16 items-start">
              <div className="md:col-span-5 md:sticky md:top-28">
                <Reveal>
                  <h2 className="font-display text-4xl md:text-[52px] leading-[1.05] tracking-tight text-ink">
                    {h.headline}
                  </h2>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-display text-2xl tracking-tight text-ink">
                      {h.student}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {h.role}
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 text-[16px] text-ink-dim leading-relaxed">
                    {h.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <a
                    href={h.link?.href ?? site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
                  >
                    {h.link?.label ?? "More from this day on Instagram →"}
                  </a>
                </Reveal>
              </div>

              <div
                className={`md:col-span-7 grid gap-5 items-start ${
                  h.photos.length > 1 ? "sm:grid-cols-[1.4fr_1fr]" : ""
                }`}
              >
                {h.photos.map((photo, i) => (
                  <Reveal key={photo.src} delay={i * 60}>
                    <figure className={`photo-frame photo-duotone ${photo.aspect} bg-surface`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
                        quality={95}
                        className="object-cover"
                      />
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* IN THE NEWS */}
      <section
        id="press"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="In the news"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="In the news"
              title={
                <>
                  AI Vanguard students,{" "}
                  <span className="serif-italic">on the record.</span>
                </>
              }
              blurb="Coverage of our founder and State Directors in their own states, most of it around their work as student senators on the Students First Act. Each note says only what the piece says."
            />
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {press.map((p) => (
              <li key={p.href + p.who}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-7 md:py-8 grid gap-6 md:grid-cols-[72px_180px_1fr] md:gap-10 items-start"
                >
                  <div className="photo-frame photo-crisp photo-duotone aspect-[4/5] w-[72px] bg-surface relative">
                    <Image
                      src={p.image}
                      alt={p.who}
                      fill
                      sizes="72px"
                      quality={90}
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted leading-relaxed">
                    <div className="text-ink">{p.outlet}</div>
                    <div className="mt-1">{p.date}</div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-[26px] leading-[1.15] tracking-tight text-ink group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-3 text-[13px] text-ink">
                      {p.who}
                      <span className="text-ink-muted"> · {p.role}</span>
                    </div>
                    <p className="mt-2 text-[14.5px] text-ink-dim leading-relaxed max-w-2xl">
                      {p.note}
                    </p>
                    <span className="mt-3 inline-block text-sm text-ink-dim group-hover:text-ink transition-colors">
                      Read the piece ↗
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* RECENT UPDATES */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="Updates"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="font-display text-3xl md:text-[40px] tracking-tight text-ink">
                Recent updates
              </h2>
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                Newest first
              </div>
            </div>
          </Reveal>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {updates.map((u, i) => (
              <Reveal key={u.title} delay={i * 30}>
                <li className="py-7 md:py-8 grid gap-3 md:grid-cols-[190px_1fr] md:gap-12 items-baseline">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                    {u.date}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink">
                      {u.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-2xl">
                      {u.body}
                    </p>
                    {u.href && (
                      <a
                        href={u.href}
                        {...(u.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-3 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
                      >
                        {u.external ? "Read the story →" : "See more →"}
                      </a>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* NOMINATE */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Nominate">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:gap-12 items-end">
              <div>
                <h3 className="font-display text-3xl md:text-5xl leading-[1.04] tracking-tight text-ink max-w-3xl">
                  Know a student who should be{" "}
                  <span className="serif-italic text-ink-dim">up here?</span>
                </h3>
                <p className="mt-4 text-ink-dim max-w-lg">
                  Reps, cabinet members, and students in our network doing
                  standout work — tell us about them. Reporters: the press kit
                  has boilerplate, facts, and a contact.
                </p>
              </div>
              <div className="flex gap-6 flex-wrap items-baseline">
                <a
                  href={`mailto:${site.email}?subject=Student%20highlight%20nomination`}
                  className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
                >
                  Nominate a student →
                </a>
                <Link
                  href="/press"
                  className="text-sm text-ink-dim hover:text-ink transition-colors underline underline-offset-[6px] decoration-accent/50"
                >
                  Press kit →
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
