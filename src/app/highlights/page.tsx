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
    "Work worth following from AI Vanguard: developments in research and district governance, student highlights, and press coverage of AI Vanguard students.",
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
        blurb="Developments at their real stage, students on the record, and the coverage they have earned."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Updated · September 2026</span>
            <a href="#press" className="hover:text-ink transition-colors">{press.length} news stories ↓</a>
          </div>
        }
      />

      {/* DEVELOPMENTS — three toned cards, one line each */}
      <section className="py-12 md:py-16 border-b border-border surface-panel" data-rail-section="Developments">
        <Container size="wide">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {developments.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <Link href={d.href} className={`tone-${d.tone} group flex h-full flex-col bg-bg p-6 md:p-7 hover:bg-surface/60 transition-colors`}>
                  <span className="text-[10.5px] uppercase tracking-[0.22em] text-accent">{d.tag}</span>
                  <h3 className="mt-4 font-display text-[22px] md:text-2xl leading-[1.12] tracking-tight text-ink group-hover:text-accent transition-colors">{d.title}</h3>
                  <p className="mt-3 text-[14px] text-ink-dim leading-relaxed flex-1">{d.short}</p>
                  <span className="mt-5 text-sm text-ink-dim group-hover:text-ink transition-colors">More →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS — photo-led */}
      {highlights.map((h, idx) => (
        <section key={h.slug} id={h.slug} className="py-14 md:py-20 border-t border-border scroll-mt-28" data-rail-section={h.event}>
          <Container size="wide">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-start">
              <div className={`md:col-span-7 grid gap-5 items-start ${h.photos.length > 1 ? "sm:grid-cols-[1.4fr_1fr]" : ""} ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                {h.photos.map((photo, i) => (
                  <Reveal key={photo.src} delay={i * 60}>
                    <figure className={`photo-frame photo-duotone ${photo.aspect} bg-surface`}>
                      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw" quality={95} className="object-cover" />
                    </figure>
                  </Reveal>
                ))}
              </div>
              <div className="md:col-span-5">
                <Reveal>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-accent">{h.event}</div>
                  <h2 className="mt-3 font-display text-3xl md:text-[40px] leading-[1.06] tracking-tight text-ink">{h.headline}</h2>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="font-display text-xl tracking-tight text-ink">{h.student}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">{h.role}</div>
                  </div>
                  <p className="mt-5 text-[15px] text-ink-dim leading-relaxed">{h.body[1]}</p>
                  <a href={h.link?.href ?? site.social.instagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50">
                    {h.link?.label ?? "More on Instagram ↗"}
                  </a>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* IN THE NEWS — headshots and headlines */}
      <section id="press" className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel" data-rail-section="In the news">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="In the news"
              title={<>Students, <span className="serif-italic">on the record.</span></>}
              blurb="Coverage of our founder and State Directors, mostly as student senators on the Students First Act. Each line says only what the piece says."
            />
          </Reveal>
          <ul className="mt-10 grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-3">
            {press.map((p) => (
              <li key={p.href + p.who}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex h-full gap-4 bg-bg p-5 hover:bg-surface/60 transition-colors">
                  <div className="photo-frame photo-crisp photo-duotone aspect-[4/5] w-[64px] shrink-0 bg-surface relative">
                    <Image src={p.image} alt={p.who} fill sizes="64px" quality={90} className="object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10.5px] uppercase tracking-[0.2em] text-ink-muted">{p.outlet} · {p.date}</div>
                    <h3 className="mt-2 font-display text-[17px] leading-[1.2] tracking-tight text-ink group-hover:text-accent transition-colors">{p.title}</h3>
                    <div className="mt-2 text-[12.5px] text-ink-dim">{p.who} · {p.role}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* UPDATES — compact dated list */}
      <section className="py-14 md:py-20 border-t border-border" data-rail-section="Updates">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <SectionHeading eyebrow="Updates" title={<>Dated, <span className="serif-italic">newest first.</span></>} />
                <p className="mt-6 text-[14px] text-ink-dim">
                  Know a student who should be up here?{" "}
                  <a href={`mailto:${site.email}?subject=Student%20highlight%20nomination`} className="text-accent underline underline-offset-4">Nominate them</a>.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <ol className="divide-y divide-border border-y border-border">
                {updates.map((u) => (
                  <li key={u.title} className="py-4 grid gap-1 md:grid-cols-[170px_1fr] md:gap-8 items-baseline">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">{u.date}</span>
                    <div>
                      <h3 className="font-display text-lg md:text-xl tracking-tight text-ink">{u.title}</h3>
                      {u.href && (
                        <a href={u.href} {...(u.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="mt-1 inline-block text-[13px] text-ink-dim hover:text-accent transition-colors underline underline-offset-4 decoration-accent/40">
                          {u.external ? "Read ↗" : "See more →"}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
