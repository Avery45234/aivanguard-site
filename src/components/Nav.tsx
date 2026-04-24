"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      className={cn(
        "backdrop-blur-md border-b transition-colors duration-300",
        scrolled
          ? "bg-bg/90 border-border shadow-[0_1px_0_rgba(0,0,0,0.25)]"
          : "bg-bg/80 border-border/60",
      )}
    >
      <Container size="wide" className="flex h-[60px] md:h-[64px] items-center justify-between">
        <Link href="/" aria-label="AI Vanguard home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-[13.5px] tracking-tight transition-colors",
                  active ? "text-ink" : "text-ink-dim hover:text-ink",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href={site.applyUrl} external size="md">
            Apply
            <Arrow />
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-border-strong text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <Container size="wide" className="py-5 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base text-ink-dim hover:text-ink border-b border-border last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-5">
              <Button href={site.applyUrl} external className="w-full">
                Apply as a student rep
                <Arrow />
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
