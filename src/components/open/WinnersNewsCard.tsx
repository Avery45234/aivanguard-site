import Link from "next/link";
import { Container } from "@/components/Container";
import { results } from "@/lib/competition";

/** Lead story card for the News page: the Vanguard Open results article. */
export function WinnersNewsCard() {
  return (
    <section className="border-b border-border" data-rail-section="Latest">
      <Container size="wide" className="py-10 md:py-14">
        <Link
          href={results.article}
          className="group grid gap-8 rounded-2xl border border-border-strong bg-surface/50 p-6 md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-10 hover:bg-surface transition-colors"
        >
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.22em]">
              <span className="text-accent">Latest</span>
              <span className="text-ink-muted">{results.announced}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink group-hover:text-accent transition-colors">
              AI Vanguard names the winners of{" "}
              <span className="serif-italic">the first Vanguard Open.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-dim">
              Three prizes, one question: what would you automate, and what would you refuse to
              automate?
            </p>
            <span className="mt-6 inline-block text-sm text-ink underline underline-offset-[6px] decoration-accent/50">
              Read the announcement →
            </span>
          </div>
          <dl className="flex flex-col justify-center divide-y divide-border border-y border-border">
            {results.winners.map((w) => (
              <div key={w.name} className="py-4">
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-highlight">
                  {w.label}
                </dt>
                <dd className="mt-1 font-display text-2xl md:text-[28px] leading-tight tracking-tight text-ink">
                  {w.name}
                </dd>
              </div>
            ))}
          </dl>
        </Link>
      </Container>
    </section>
  );
}
