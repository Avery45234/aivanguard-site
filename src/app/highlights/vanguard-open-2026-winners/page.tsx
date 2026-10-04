import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Laurel } from "@/components/open/Awards";
import { results, rubric } from "@/lib/competition";
import { site } from "@/lib/site";

const [first, second, third] = results.winners;
const PATH = "/highlights/vanguard-open-2026-winners";
const HEADLINE = "AI Vanguard names the winners of the first Vanguard Open";
const STANDFIRST = `${first.name} takes the Grand Prize. ${second.name} and ${third.name} win Second and Third Prize.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: "Vanguard Open 2026 winners announced",
  description: `${STANDFIRST} The competition asked entrants to design an AI-era classroom worth learning in and to defend one thing they would refuse to automate.`,
  openGraph: {
    type: "article",
    title: HEADLINE,
    description: STANDFIRST,
    publishedTime: "2026-10-03T00:00:00-07:00",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: HEADLINE,
  description: STANDFIRST,
  datePublished: "2026-10-03T00:00:00-07:00",
  dateModified: "2026-10-03T00:00:00-07:00",
  mainEntityOfPage: `https://aivanguard.org${PATH}`,
  author: { "@type": "Organization", name: site.name, url: "https://aivanguard.org" },
  publisher: { "@type": "Organization", name: site.name, url: "https://aivanguard.org" },
};

export default function WinnersArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <section className="border-b border-border" data-rail-section="Announcement">
        <Container size="wide" className="pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                <Link href="/highlights" className="text-accent hover:text-ink transition-colors">
                  News
                </Link>
                <span aria-hidden>·</span>
                <time dateTime="2026-10-03">{results.announced}</time>
                <span aria-hidden>·</span>
                <span>The Vanguard Open</span>
              </div>
              <h1 className="mt-6 font-display tracking-tight text-ink leading-[1.03] text-[38px] sm:text-5xl md:text-6xl lg:text-[68px]">
                AI Vanguard names the winners of{" "}
                <span className="serif-italic text-ink-dim">the first Vanguard Open.</span>
              </h1>
              <p className="mt-6 max-w-2xl font-display text-xl md:text-2xl leading-[1.3] text-ink-dim">
                {STANDFIRST}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Laurel className="h-[220px] w-[220px] md:h-[300px] md:w-[300px]">
                <span className="text-[8px] tracking-[0.22em] md:text-[10px] md:tracking-[0.3em] uppercase text-highlight">
                  The Vanguard Open
                </span>
                <span className="mt-1 fig text-6xl md:text-[80px] leading-none text-ink">
                  {results.year}
                </span>
                <span className="mt-2 font-display italic text-base md:text-lg text-ink-dim">
                  Prize Winners
                </span>
              </Laurel>
            </div>
          </div>
        </Container>
      </section>

      {/* PRIZE LIST */}
      <section className="border-b border-border surface-panel" data-rail-section="Winners">
        <Container size="wide" className="py-10 md:py-14">
          <dl className="grid gap-y-8 md:grid-cols-3 md:divide-x md:divide-border">
            {results.winners.map((w) => (
              <div key={w.name} className="md:px-10 md:first:pl-0 md:last:pr-0">
                <dt
                  className={`text-[11px] font-semibold uppercase tracking-[0.26em] ${
                    w.place === 1 ? "text-highlight" : "text-accent"
                  }`}
                >
                  {w.label}
                </dt>
                <dd className="mt-3">
                  <span className="block font-display text-3xl md:text-[40px] leading-[1.05] tracking-tight text-ink">
                    {w.name}
                  </span>
                  <span className="mt-2 block fig text-xl text-ink-dim">{w.award}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* BODY */}
      <section className="py-14 md:py-20" data-rail-section="Story">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <article className="md:col-span-8 max-w-3xl">
              <Reveal>
                <p className="font-display text-[22px] md:text-[26px] leading-[1.4] text-ink">
                  AI Vanguard today announced the winners of the {results.year} Vanguard Open, its
                  first competition. The Grand Prize of {first.award} goes to {first.name}.{" "}
                  {second.name} wins Second Prize and {second.award}, and {third.name} wins Third
                  Prize and {third.award}.
                </p>
              </Reveal>

              <Reveal>
                <h2 className="mt-12 font-display text-3xl md:text-4xl tracking-tight text-ink">
                  The question
                </h2>
                <p className="mt-4 text-[17px] leading-[1.75] text-ink-dim">
                  Entrants were asked to design an AI-era classroom they would genuinely want to
                  learn in, and to name and defend one thing they would refuse to automate. Any
                  format was welcome: a working app, an essay, a film, a design. The competition
                  was free to enter and open to everyone.
                </p>
                <blockquote className="mt-8 border-l-2 border-accent pl-6 font-display italic text-2xl md:text-[30px] leading-[1.25] text-ink">
                  What would you automate, and what would you refuse to automate?
                </blockquote>
              </Reveal>

              <Reveal>
                <h2 className="mt-12 font-display text-3xl md:text-4xl tracking-tight text-ink">
                  How entries were judged
                </h2>
                <p className="mt-4 text-[17px] leading-[1.75] text-ink-dim">
                  Entries in every format were scored on the same 100-point rubric, published
                  alongside the brief: {rubric.map((c) => `${c.title} (${c.points})`).join(", ")}.
                  Graders included {results.judge.name}, a {results.judge.credential}. The rubric
                  scores the thinking, not the medium, so an essay and an app are held to the same
                  standard.
                </p>
                <p className="mt-4">
                  <Link
                    href="/competition/rubric"
                    className="text-sm text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                  >
                    Read the official rubric →
                  </Link>
                </p>
              </Reveal>

              <Reveal>
                <h2 className="mt-12 font-display text-3xl md:text-4xl tracking-tight text-ink">
                  What happens next
                </h2>
                <p className="mt-4 text-[17px] leading-[1.75] text-ink-dim">
                  {results.winnerNotice} AI Vanguard will never ask a winner for payment. The next
                  Open will be announced on the results page.
                </p>
                {first.work?.href && (
                  <p className="mt-4 text-[17px] leading-[1.75] text-ink-dim">
                    The Grand Prize entry, &ldquo;{first.work.title}&rdquo; by {first.name}, is
                    published in full.{" "}
                    <Link
                      href={first.work.href}
                      className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                    >
                      Read the essay →
                    </Link>
                  </p>
                )}
                <p className="mt-4 text-[17px] leading-[1.75] text-ink-dim">
                  To everyone who entered: thank you. A competition is only as good as the people
                  who take the question seriously.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/competition#winners" size="lg">
                    See the full results
                  </Button>
                  <Button href="/highlights" variant="secondary" size="lg">
                    More news
                  </Button>
                </div>
              </Reveal>
            </article>

            <aside className="md:col-span-4">
              <Reveal>
                <div className="rounded-2xl border border-border bg-surface/50 p-6 md:p-7">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-accent">At a glance</div>
                  <dl className="mt-4 divide-y divide-border text-[14px]">
                    {[
                      { k: "Competition", v: `The Vanguard Open ${results.year}` },
                      { k: "Prizes", v: "$1,000: $500, $300, $200" },
                      { k: "Formats", v: "Any" },
                      { k: "Rubric", v: "100 points, five criteria" },
                      { k: "Entries closed", v: "September 25, 2026" },
                      { k: "Announced", v: results.announced },
                      { k: "Graders included", v: results.judge.name },
                    ].map((f) => (
                      <div key={f.k} className="flex items-baseline justify-between gap-6 py-3">
                        <dt className="text-ink-muted shrink-0">{f.k}</dt>
                        <dd className="text-ink text-right">{f.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-ink-muted">
                    {results.judge.detail}
                  </p>
                </div>
                <div className="mt-6 rounded-2xl border border-border p-6 md:p-7">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
                    About AI Vanguard
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-dim">{site.description}</p>
                  <p className="mt-4 text-[14px] text-ink-dim">
                    Press:{" "}
                    <Link href="/press" className="text-ink underline underline-offset-4 decoration-accent/50 hover:text-accent">
                      press kit
                    </Link>{" "}
                    ·{" "}
                    <Link href="/contact" className="text-ink underline underline-offset-4 decoration-accent/50 hover:text-accent">
                      contact
                    </Link>
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
