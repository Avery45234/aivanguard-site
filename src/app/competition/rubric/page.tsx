import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PrintButton } from "@/components/PrintButton";
import { rubric, judgingRounds } from "@/lib/competition";

export const metadata: Metadata = {
  title: "Official Judging Rubric",
  description:
    "The official 100-point judging rubric for the Vanguard Open 2026: five criteria with full score bands, tiebreakers, and the judging process.",
};

export default function RubricPage() {
  return (
    <div className="portal-theme">
      {/* Toolbar: visible on screen, hidden when printed */}
      <section className="border-b border-border print:hidden">
        <Container size="narrow" className="py-4 flex items-center justify-between gap-4">
          <Link
            href="/competition"
            className="text-[13.5px] text-ink-dim hover:text-ink transition-colors"
          >
            ← Back to the competition
          </Link>
          <PrintButton label="Print / Save as PDF" />
        </Container>
      </section>

      {/* Title + weighting overview */}
      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
            The Vanguard Open · 2026
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink">
            Official Judging <span className="serif-italic">Rubric.</span>
          </h1>
          <p className="mt-5 text-[15px] text-ink-dim leading-relaxed max-w-xl">
            100 points across five criteria. Every format (app, essay, film,
            design, or otherwise) is scored on the same scale, and judges are
            instructed to score the thinking, not the medium. The 300-word
            Rationale carries equal weight for every entrant.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="py-3 pr-4 text-[11px] uppercase tracking-[0.18em] text-ink-muted font-medium">
                    Criterion
                  </th>
                  <th className="py-3 pr-4 text-[11px] uppercase tracking-[0.18em] text-ink-muted font-medium">
                    Points
                  </th>
                  <th className="py-3 text-[11px] uppercase tracking-[0.18em] text-ink-muted font-medium">
                    Core question
                  </th>
                </tr>
              </thead>
              <tbody>
                {rubric.map((c) => (
                  <tr key={c.n} className="border-b border-border align-baseline">
                    <td className="py-3 pr-4 text-[14px] text-ink font-medium whitespace-nowrap">
                      {c.n} · {c.title}
                    </td>
                    <td className="py-3 pr-4 fig text-[15px] text-accent">
                      {c.points}
                    </td>
                    <td className="py-3 text-[13.5px] text-ink-dim">
                      {c.question}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 text-[14px] text-ink font-semibold">
                    Total
                  </td>
                  <td className="py-3 pr-4 fig text-[15px] text-ink">100</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Criteria in detail */}
      <section className="border-t border-border py-12 md:py-16">
        <Container size="narrow">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
            Score bands, criterion by criterion.
          </h2>
          <div className="mt-8 space-y-12">
            {rubric.map((c) => (
              <div key={c.n}>
                <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink">
                    {c.n} · {c.title}
                  </h3>
                  <span className="fig text-sm text-ink-muted whitespace-nowrap">
                    {c.points} points
                  </span>
                </div>
                <p className="mt-3 font-display italic text-[17px] text-ink-dim">
                  {c.question}
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border-strong">
                        <th className="py-2 pr-4 w-[90px] text-[11px] uppercase tracking-[0.18em] text-ink-muted font-medium">
                          Score
                        </th>
                        <th className="py-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted font-medium">
                          Descriptor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.bands.map((b) => (
                        <tr key={b.range} className="border-b border-border align-baseline">
                          <td className="py-3 pr-4 fig text-[14px] text-ink whitespace-nowrap">
                            {b.range}
                          </td>
                          <td className="py-3 text-[14px] text-ink-dim leading-relaxed">
                            {b.text}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {c.note && (
                  <p className="mt-4 text-[13px] text-ink-muted leading-relaxed border-l-2 border-accent/50 pl-4">
                    Judge&apos;s note: {c.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-surface/60 p-6">
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Tiebreakers, in order
            </div>
            <ol className="mt-3 space-y-1.5 text-[14px] text-ink-dim list-decimal list-inside">
              <li>The higher score on Insight &amp; Originality.</li>
              <li>Judges&apos; panel discussion and vote.</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border py-12 md:py-16">
        <Container size="narrow">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
            How scoring runs.
          </h2>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {judgingRounds.map((r) => (
              <li key={r.n} className="py-6 grid grid-cols-[56px_1fr] gap-5 items-baseline">
                <span className="fig text-xl text-accent">{r.n}</span>
                <div>
                  <h3 className="font-display text-lg md:text-xl tracking-tight text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-ink-dim leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 text-[13.5px] text-ink-dim leading-relaxed">
            <p>
              <strong className="text-ink">Conflicts of interest.</strong>{" "}
              Judges recuse themselves from scoring any entrant they know
              personally or professionally.
            </p>
            <p>
              <strong className="text-ink">The panel.</strong> 5 to 7
              professionals from the AI and education fields.
            </p>
          </div>
          <p className="mt-10 text-[12.5px] text-ink-muted">
            Submissions due September 25, 2026 (11:59 PM Pacific) · Results
            October 3, 2026 · aivanguard.org/competition
          </p>
        </Container>
      </section>
    </div>
  );
}
