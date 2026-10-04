import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PORTAL_OPEN, results } from "@/lib/competition";

export const metadata: Metadata = {
  title: {
    default: "Entrant Portal · The Vanguard Open",
    template: "%s · Entrant Portal · AI Vanguard",
  },
  description: PORTAL_OPEN
    ? "The official entrant portal for the Vanguard Open. Register, track your entry, and submit your work."
    : "The Vanguard Open Entrant Portal is closed. The 2026 competition has ended and the winners have been announced.",
  // A closed portal has nothing to find; keep it out of search results.
  ...(PORTAL_OPEN ? {} : { robots: { index: false, follow: true } }),
};

// Shown on every /portal route while the portal is closed. Nothing behind
// it renders: no sign-in, no registration, no submission, no help form.
function PortalClosed() {
  return (
    <Container size="wide" className="py-16 md:py-24">
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-bg p-8 md:p-12 text-center shadow-[0_2px_16px_rgba(60,34,116,0.05)]">
        <span className="inline-flex items-center rounded-full bg-surface-2 px-3.5 h-7 text-[12px] text-ink-dim">
          Vanguard Open {results.year}
        </span>
        <h1 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
          The Entrant Portal is <span className="serif-italic">closed.</span>
        </h1>
        <p className="mt-5 text-[16px] text-ink-dim leading-relaxed">
          The {results.year} Vanguard Open has ended and the winners have been announced. Sign-in,
          registration, and submissions are closed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/competition#winners" size="lg">
            See the {results.year} winners
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact AI Vanguard
          </Button>
        </div>
        <p className="mt-6 text-[13px] text-ink-muted">
          The next Open will be announced on the competition page.
        </p>
      </div>
    </Container>
  );
}

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
            {PORTAL_OPEN ? (
              <>
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
              </>
            ) : (
              <Link
                href="/competition#winners"
                className="text-ink-dim hover:text-ink transition-colors whitespace-nowrap"
              >
                {results.year} results →
              </Link>
            )}
          </nav>
        </Container>
      </header>

      {/* While the portal is closed the page behind the layout is never
          rendered, so there is nothing to sign in to or submit. */}
      <main className="flex-1">{PORTAL_OPEN ? children : <PortalClosed />}</main>

      <footer className="border-t border-border">
        <Container
          size="wide"
          className="py-6 flex flex-col sm:flex-row gap-2 sm:items-baseline sm:justify-between text-xs text-ink-muted"
        >
          <span>© 2026 AI Vanguard · Vanguard Open Entrant Portal</span>
          {PORTAL_OPEN ? (
            <span>
              Submissions due September 25, 2026 · Results October 3, 2026 ·{" "}
              <Link href="/portal/help" className="hover:text-ink transition-colors underline underline-offset-4">
                Help
              </Link>
            </span>
          ) : (
            <span>
              Portal closed · Winners announced {results.announced} ·{" "}
              <Link href="/contact" className="hover:text-ink transition-colors underline underline-offset-4">
                Contact
              </Link>
            </span>
          )}
        </Container>
      </footer>
    </div>
  );
}
