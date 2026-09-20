"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { RESULTS_DATE, SUBMISSION_DEADLINE } from "@/lib/competition";

/**
 * Thin site-wide strip for the Vanguard Open that changes with the
 * calendar so an expired "submissions open" state never lingers:
 *
 *   until the deadline  → submissions close September 25, enter now
 *   until results day   → judging underway, results October 3
 *   after results       → meet the winners
 *
 * Pages are prerendered, so the phase is computed on the client.
 * useSyncExternalStore renders the pre-deadline phase during
 * hydration (the build always happens before the deadline) and then
 * swaps in the live phase without a hydration mismatch.
 */
type Phase = "open" | "judging" | "results";

function phaseNow(): Phase {
  const now = Date.now();
  if (now <= SUBMISSION_DEADLINE.getTime()) return "open";
  if (now < RESULTS_DATE.getTime()) return "judging";
  return "results";
}

const noop = () => () => {};

const copy: Record<Phase, { text: string; cta: string; href: string }> = {
  open: {
    text: "Vanguard Open submissions close September 25",
    cta: "Enter now",
    href: "/competition",
  },
  judging: {
    text: "Vanguard Open judging underway · Results October 3",
    cta: "About the Open",
    href: "/competition",
  },
  results: {
    text: "Meet the 2026 Vanguard Open winners",
    cta: "See the results",
    href: "/competition",
  },
};

export function VanguardOpenBanner() {
  const phase = useSyncExternalStore(noop, phaseNow, () => "open" as Phase);
  const c = copy[phase];
  return (
    <div className="border-b border-border bg-accent/10">
      <Link
        href={c.href}
        className="group mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2 text-[12px] md:text-[12.5px] tracking-tight text-ink hover:text-accent-deep transition-colors"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        <span>{c.text}</span>
        <span className="text-ink-dim group-hover:text-accent-deep transition-colors">
          {c.cta} →
        </span>
      </Link>
    </div>
  );
}
