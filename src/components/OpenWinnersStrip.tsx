import Link from "next/link";
import { Container } from "@/components/Container";
import { Medal, Portrait } from "@/components/open/Awards";
import { results } from "@/lib/competition";
import { winnerPhoto } from "@/lib/open-photos";

/**
 * Home-page band naming the Vanguard Open winners. Reads from the same
 * results record as /competition so the two can't disagree.
 */
export function OpenWinnersStrip() {
  return (
    <section className="border-b border-border" data-rail-section="Open winners">
      <Container size="wide" className="py-8 md:py-10">
        <Link
          href="/competition#winners"
          className="group grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:gap-12 items-center"
        >
          <div>
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-highlight">
              The Vanguard Open · {results.year} results
            </div>
            <div className="mt-2 font-display text-2xl md:text-3xl tracking-tight text-ink">
              Meet the <span className="serif-italic">prize winners.</span>
            </div>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {results.winners.map((w) => (
              <li key={w.name} className="bg-bg px-4 py-4 flex items-center gap-3">
                <Portrait name={w.name} image={winnerPhoto(w.slug)} place={w.place} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-ink-muted whitespace-nowrap">
                    <Medal place={w.place} size={13} />
                    {w.label}
                  </div>
                  <div className="mt-0.5 font-display text-[17px] leading-tight tracking-tight text-ink group-hover:text-accent transition-colors">
                    {w.name}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <span className="text-sm text-ink-dim group-hover:text-ink transition-colors whitespace-nowrap">
            See the results →
          </span>
        </Link>
      </Container>
    </section>
  );
}
