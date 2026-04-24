"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (el as HTMLElement).style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <As ref={ref as never} className={cn("reveal", className)}>
      {children}
    </As>
  );
}
