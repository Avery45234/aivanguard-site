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
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-highlight">
              The Vanguard Open · {results.year}
            </div>
            <div className="mt-2 font-display text-2xl md:text-3xl tracking-tight text-ink">
              Prize <span className="serif-italic">winners.</span>
            </div>
          </div>
          <dl className="grid gap-y-4 sm:grid-cols-3 sm:divide-x sm:divide-border">
            {results.winners.map((w) => (
              <div key={w.name} className="sm:px-6 sm:first:pl-0">
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  {w.label}
                </dt>
                <dd className="mt-1 font-display text-xl md:text-2xl leading-tight tracking-tight text-ink group-hover:text-accent transition-colors">
                  {w.name}
                </dd>
              </div>
            ))}
          </dl>
          <span className="text-sm text-ink-dim group-hover:text-ink transition-colors whitespace-nowrap">
            See the results →
          </span>
        </Link>
      </Container>
    </section>
  );
}
