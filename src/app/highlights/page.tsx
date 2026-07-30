import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { highlights } from "@/lib/highlights";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Highlights",
  description:
    "Spotlighting the students of AI Vanguard — representing student voice at events, on campuses, and in the rooms where AI in education gets decided.",
};

export default function HighlightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student highlights"
        title={
          <>
            The students doing{" "}
            <span className="serif-italic text-ink-dim">the work.</span>
          </>
        }
        blurb="An ongoing series spotlighting individual AI Vanguard students — at events, on campuses, and in the rooms where AI in education gets decided."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Series · Ongoing</span>
          </div>
        }
      />

      {highlights.map((h, idx) => (
        <section
          key={h.slug}
          id={h.slug}
          className="py-14 md:py-20 border-t border-border"
          data-rail-section={h.event}
        >
          <Container size="wide">
            {/* Meta row */}
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
              {/* Story */}
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
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
                  >
                    More from this day on Instagram →
                  </a>
                </Reveal>
              </div>

              {/* Photos */}
              <div
                className={`md:col-span-7 grid gap-5 items-start ${
                  h.photos.length > 1 ? "sm:grid-cols-[1.4fr_1fr]" : ""
                }`}
              >
                {h.photos.map((photo, i) => (
                  <Reveal key={photo.src} delay={i * 60}>
                    <figure
                      className={`photo-frame photo-duotone ${photo.aspect} bg-surface`}
                    >
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
                  standout work — tell us about them.
                </p>
              </div>
              <a
                href={`mailto:${site.email}?subject=Student%20highlight%20nomination`}
                className="text-sm text-ink hover:text-accent transition-colors underline underline-offset-[6px] decoration-accent/50"
              >
                Nominate a student →
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
