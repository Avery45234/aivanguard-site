import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: {
    default: "Entrant Portal · The Vanguard Open",
    template: "%s · Entrant Portal · AI Vanguard",
  },
  description:
    "The official entrant portal for the Vanguard Open. Register, track your entry, and find submission instructions.",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="portal-theme relative z-[2] min-h-screen w-full flex flex-col">
      <header className="border-b border-border bg-bg">
        <Container size="wide" className="h-16 flex items-center justify-between gap-4">
          <Link href="/portal" className="flex items-baseline gap-3 min-w-0">
            <span className="font-display text-[20px] leading-none tracking-tight text-ink whitespace-nowrap">
              AI Vanguard
            </span>
            <span className="hidden sm:inline h-3.5 w-px bg-border-strong self-center" aria-hidden />
            <span className="text-[10.5px] uppercase tracking-[0.22em] text-accent whitespace-nowrap">
              Entrant Portal
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-[13px]">
            <a
              href="/competition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-dim hover:text-ink transition-colors whitespace-nowrap"
            >
              Competition brief ↗
            </a>
            <Link
              href="/portal/help"
              className="text-ink-dim hover:text-ink transition-colors whitespace-nowrap"
            >
              Help
            </Link>
          </nav>
        </Container>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <Container
          size="wide"
          className="py-6 flex flex-col sm:flex-row gap-2 sm:items-baseline sm:justify-between text-xs text-ink-muted"
        >
          <span>© 2026 AI Vanguard · Vanguard Open Entrant Portal</span>
          <span>
            Submissions due September 25, 2026 · Results October 3, 2026 ·{" "}
            <Link href="/portal/help" className="hover:text-ink transition-colors underline underline-offset-4">
              Help
            </Link>
          </span>
        </Container>
      </footer>
    </div>
  );
}
