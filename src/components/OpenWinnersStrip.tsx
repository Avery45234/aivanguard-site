import Link from "next/link";
import { Container } from "@/components/Container";
import { results } from "@/lib/competition";

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
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-accent">
              The Vanguard Open · 2026 results
            </div>
            <div className="mt-2 font-display text-2xl md:text-3xl tracking-tight text-ink">
              Meet the <span className="serif-italic">winners.</span>
            </div>
          </div>
          <ol className="grid gap-px bg-border border border-border sm:grid-cols-3">
            {results.winners.map((w) => (
              <li key={w.name} className="bg-bg px-5 py-4">
                <div className="text-[10.5px] uppercase tracking-[0.2em] text-ink-muted">
                  {w.label} · {w.award}
                </div>
                <div className="mt-1 font-display text-lg md:text-xl tracking-tight text-ink group-hover:text-accent transition-colors">
                  {w.name}
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
