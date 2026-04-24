"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Sticky editorial side-rail.
 * Pinned to the left edge on desktop. Shows:
 *   - rotated brand text
 *   - scroll progress line
 *   - current section label (from data-rail-section attribute on <section>s)
 *   - total section counter
 */
export function ScrollRail() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [sectionTotal, setSectionTotal] = useState(0);
  const [sectionLabel, setSectionLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reset on route change
    setProgress(0);
    setSectionIdx(0);
    setSectionLabel(null);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rail-section]"),
    );
    setSectionTotal(sections.length);
    if (sections.length === 0) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, h.scrollTop / total)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most-visible section entry and update state
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best) {
          const el = best.target as HTMLElement;
          const label = el.dataset.railSection || "";
          const idx = sections.indexOf(el);
          if (idx >= 0) {
            setSectionIdx(idx);
            setSectionLabel(label);
          }
        }
      },
      {
        // Fire when a section is near center of the viewport
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    for (const s of sections) io.observe(s);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <aside
      className="pointer-events-none fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col justify-between items-center py-8 w-10 select-none"
      aria-hidden
    >
      {/* Rotated brand wordmark — top */}
      <div className="flex-none flex items-center justify-center h-32">
        <span
          className="vertical-rl font-sans text-[10px] uppercase tracking-[0.32em] text-ink-muted whitespace-nowrap"
          style={{ writingMode: "vertical-rl" }}
        >
          AI Vanguard · Student voice
        </span>
      </div>

      {/* Center: progress line + current section counter */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5 min-h-0 w-full">
        <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">
          {String(sectionIdx + 1).padStart(2, "0")} / {String(sectionTotal).padStart(2, "0")}
        </div>
        <div className="relative h-40 w-px bg-border overflow-hidden">
          <div
            className="absolute left-0 top-0 w-px bg-accent transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
        <div
          className="min-h-[80px] flex items-center justify-center"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="vertical-rl font-display italic text-[13px] text-ink whitespace-nowrap tracking-tight">
            {sectionLabel || ""}
          </span>
        </div>
      </div>

      {/* Bottom: percentage */}
      <div className="flex-none font-mono text-[10px] tracking-[0.2em] text-ink-muted h-10 flex items-center">
        {Math.round(progress * 100)}%
      </div>
    </aside>
  );
}
