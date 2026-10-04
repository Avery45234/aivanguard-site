import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { statesAtHome } from "@/lib/states";

/**
 * District work outside California: what State Directors have done with
 * their own districts, each line linked to its source. Sits under the ABC
 * Unified case study on the Work page.
 */
export function StatesAtHome() {
  return (
    <section
      id="states"
      className="py-14 md:py-20 border-t border-border scroll-mt-28"
      data-rail-section="Beyond California"
    >
      <Container size="wide">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond California"
            title={
              <>
                Three more districts,{" "}
                <span className="serif-italic">three State Directors.</span>
              </>
            }
            blurb="ABC Unified began with one student working with one district. In three more states, a State Director is already working with theirs."
          />
        </Reveal>

        <div className="mt-12 grid gap-px bg-border border border-border lg:grid-cols-3">
          {statesAtHome.map((s, i) => (
            <Reveal key={s.code} delay={i * 60}>
              <article className="h-full bg-bg p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="photo-frame photo-crisp photo-duotone relative h-[92px] w-[74px] shrink-0 bg-surface">
                    <Image
                      src={s.image}
                      alt={s.director}
                      fill
                      sizes="74px"
                      quality={90}
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="fig text-3xl text-accent leading-none">{s.code}</span>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                        {s.state}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl leading-[1.1] tracking-tight text-ink">
                      {s.director}
                    </h3>
                    <div className="mt-1 text-[12.5px] text-ink-dim leading-snug">{s.school}</div>
                  </div>
                </div>

                <ul className="mt-6 divide-y divide-border border-t border-border">
                  {s.items.map((it) => (
                    <li key={it.href} className="py-4">
                      <p className="text-[14.5px] text-ink leading-relaxed">{it.text}</p>
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-[12.5px] text-ink-dim hover:text-accent transition-colors underline underline-offset-4 decoration-accent/40"
                      >
                        {it.source} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-[13px] text-ink-muted leading-relaxed max-w-3xl">
            Reported by local press and the districts themselves; every line links to its source.
            Much of this work was done as student senators and district representatives. It is
            the ground each state chapter builds on.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
