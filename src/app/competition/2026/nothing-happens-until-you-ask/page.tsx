import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { results } from "@/lib/competition";
import { site } from "@/lib/site";
import essay from "@/lib/open-entries/nothing-happens-until-you-ask.json";

// The Grand Prize entry of the 2026 Vanguard Open, published in full.
// The text in the JSON file is generated from the author's PDF and checked
// word for word against it; do not edit the wording here or there.

const winner = results.winners[0];
const work = winner.work!;
const PATH = "/competition/2026/nothing-happens-until-you-ask";
const WORDS = essay.sections.reduce(
  (n, s) => n + s.blocks.reduce((m, b) => m + (b === "---" ? 0 : b.split(/\s+/).length), 0),
  0,
);
const MINUTES = Math.round(WORDS / 230);

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: `${essay.title}, by ${essay.author}`,
  description: `The Grand Prize entry of the ${results.year} Vanguard Open, published in full. ${work.summary}`,
  authors: [{ name: essay.author }],
  openGraph: {
    type: "article",
    title: `${essay.title}: ${essay.subtitle}`,
    description: `By ${essay.author}. Grand Prize, the ${results.year} Vanguard Open.`,
    publishedTime: "2026-10-03T00:00:00-07:00",
    authors: [essay.author],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: essay.title,
  alternativeHeadline: essay.subtitle,
  author: { "@type": "Person", name: essay.author },
  datePublished: "2026-10-03T00:00:00-07:00",
  wordCount: WORDS,
  isAccessibleForFree: true,
  award: `Grand Prize, The Vanguard Open ${results.year} (AI Vanguard)`,
  mainEntityOfPage: `https://aivanguard.org${PATH}`,
  publisher: { "@type": "Organization", name: site.name, url: "https://aivanguard.org" },
};

const GOLD_INK = "#8a6514";
const PLUM = "#1a0f3d";
const GOLD = "#e2c477";

// The author's emphasis: **bold** and _italic_, as set in the original.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|(?<![\w])_[^_]+_(?![\w]))/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {p.slice(2, -2)}
            </strong>
          );
        }
        if (p.length > 2 && p.startsWith("_") && p.endsWith("_")) {
          return <em key={i}>{p.slice(1, -1)}</em>;
        }
        return p;
      })}
    </>
  );
}

export default function GrandPrizeEssay() {
  return (
    <div className="portal-theme">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TITLE */}
      <header className="border-b border-border">
        <Container size="wide" className="pt-12 pb-12 md:pt-16 md:pb-16">
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <Link href="/competition" className="hover:text-ink transition-colors">
              The Vanguard Open {results.year}
            </Link>
            <span aria-hidden>·</span>
            <Link href="/competition#winners" className="hover:text-ink transition-colors">
              Prize Winners
            </Link>
          </nav>
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <div
              className="text-[13px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: GOLD_INK }}
            >
              {winner.label}
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-[84px] leading-[1.0] tracking-tight text-ink">
              {essay.title}
            </h1>
            <p className="mt-5 font-display italic text-2xl md:text-3xl text-ink-dim">
              {essay.subtitle}
            </p>
            <p className="mt-8 font-display text-2xl md:text-[28px] tracking-tight text-ink">
              {essay.author}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-ink-muted">
              {work.format} · {MINUTES} minute read · Published {results.announced}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {work.pdf && (
                <a
                  href={work.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-medium tracking-tight text-accent-ink hover:bg-ink transition-colors"
                >
                  Open the original PDF ↗
                </a>
              )}
              <Link
                href="/competition#winners"
                className="inline-flex h-10 items-center rounded-full border border-border-strong px-5 text-sm font-medium tracking-tight text-ink hover:bg-surface transition-colors"
              >
                All {results.year} winners
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* THE REFUSAL, in the author's words */}
      <section className="border-b border-border">
        <Container size="wide" className="py-10 md:py-14">
          <figure
            className="mx-auto max-w-4xl rounded-2xl p-8 md:p-12 text-center text-white"
            style={{
              background: `radial-gradient(60% 90% at 100% 0%, rgba(226,196,119,0.16), transparent 60%), ${PLUM}`,
            }}
          >
            <figcaption className="text-[11px] uppercase tracking-[0.26em]" style={{ color: GOLD }}>
              The refusal
            </figcaption>
            <blockquote className="mt-4 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
              &ldquo;{work.refusal}&rdquo;
            </blockquote>
          </figure>
        </Container>
      </section>

      {/* ESSAY */}
      <section className="py-12 md:py-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <details className="group rounded-2xl border border-border lg:sticky lg:top-28" open>
                <summary className="cursor-pointer list-none px-5 py-4 text-[11px] uppercase tracking-[0.24em] text-accent">
                  Contents
                </summary>
                <ol className="border-t border-border px-5 py-4 space-y-2">
                  {essay.sections.map((s) => (
                    <li key={s.n} className="grid grid-cols-[28px_1fr] gap-2 text-[14px] leading-snug">
                      <span className="fig text-ink-muted">{s.n}</span>
                      <a href={`#s${s.n}`} className="text-ink-dim hover:text-accent transition-colors">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            </aside>

            <article className="lg:col-span-8 max-w-[68ch]">
              {essay.sections.map((s) => (
                <section key={s.n} id={`s${s.n}`} className="scroll-mt-28 mb-12 last:mb-0">
                  <h2 className="flex items-baseline gap-4 font-display text-3xl md:text-[40px] leading-[1.1] tracking-tight text-ink">
                    <span className="fig text-xl text-accent shrink-0">{s.n}</span>
                    <span>{s.title}</span>
                  </h2>
                  <div className="mt-5 space-y-5 text-[17px] md:text-[18px] leading-[1.8] text-ink-dim">
                    {s.blocks.map((b, i) =>
                      b === "---" ? (
                        <hr key={i} className="!my-9 border-border-strong" />
                      ) : (
                        <p key={i}>
                          <Rich text={b} />
                        </p>
                      ),
                    )}
                  </div>
                </section>
              ))}

              <footer className="mt-14 border-t border-border-strong pt-6 text-[13.5px] leading-relaxed text-ink-muted">
                <p>
                  © {results.year} {essay.author}. Published in full by AI Vanguard, with credit, as
                  the Vanguard Open rules provide. The author retains full ownership of this work.
                </p>
                <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
                  <Link
                    href="/competition#winners"
                    className="text-accent underline underline-offset-[6px] decoration-accent/50 hover:text-ink"
                  >
                    All {results.year} prize winners
                  </Link>
                  <Link
                    href="/competition#rubric"
                    className="text-accent underline underline-offset-[6px] decoration-accent/50 hover:text-ink"
                  >
                    How entries were judged
                  </Link>
                  {work.pdf && (
                    <a
                      href={work.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-[6px] decoration-accent/50 hover:text-ink"
                    >
                      Original PDF
                    </a>
                  )}
                </p>
              </footer>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
