"use client";

import { useEffect, useRef } from "react";

/**
 * Minimal scroll progress indicator — a thin purple line fixed to the very
 * top of the viewport. Fills left-to-right as the user scrolls the page.
 * Medium.com / GitHub-PR-style: universally understood, never competes with
 * content, works the same on every page.
 *
 * (Named ScrollSeal for historical reasons — it used to render the big A·V
 * brand seal. Keeping the name so existing imports still work.)
 */
export function ScrollSeal() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, h.scrollTop / total)) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[2px] bg-border/30 pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-accent will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
