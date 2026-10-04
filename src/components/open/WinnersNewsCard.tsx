import Link from "next/link";
import { Container } from "@/components/Container";
import { Medal, Portrait } from "@/components/open/Awards";
import { results } from "@/lib/competition";
import { winnerPhoto } from "@/lib/open-photos";

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
          <ol className="flex flex-col justify-center gap-4">
            {results.winners.map((w) => (
              <li key={w.name} className="flex items-center gap-4">
                <Portrait name={w.name} image={winnerPhoto(w.slug)} place={w.place} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10.5px] uppercase tracking-[0.2em] text-ink-muted">
                    {w.label} · {w.award}
                  </div>
                  <div className="font-display text-xl md:text-2xl tracking-tight text-ink">
                    {w.name}
                  </div>
                </div>
                <Medal place={w.place} size={26} />
              </li>
            ))}
          </ol>
        </Link>
      </Container>
    </section>
  );
}
