import Link from "next/link";
import { Container } from "./Container";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <Container size="wide" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-[22px] tracking-tight text-ink">
              AI Vanguard
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-dim leading-relaxed">
              A student-led nonprofit shaping how AI is used in education —
              through research, advocacy, and collaboration with schools across
              Southern California.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={site.social.instagram} label="Instagram">Instagram</SocialLink>
              <span className="text-ink-muted">·</span>
              <SocialLink href={site.social.linkedin} label="LinkedIn">LinkedIn</SocialLink>
              <span className="text-ink-muted">·</span>
              <SocialLink href={`mailto:${site.email}`} label="Email">Email</SocialLink>
            </div>
          </div>

          <FooterCol title="Pages">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-dim hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/press" className="text-sm text-ink-dim hover:text-ink transition-colors">
                Press kit
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Get involved">
            <li>
              <a
                href={site.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-dim hover:text-ink transition-colors"
              >
                Apply as a student rep
              </a>
            </li>
            <li>
              <Link href="/get-involved#partner" className="text-sm text-ink-dim hover:text-ink transition-colors">
                Partner with us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-ink-dim hover:text-ink transition-colors">
                General inquiries
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Contact">
            <li>
              <a href={`mailto:${site.email}`} className="text-sm text-ink-dim hover:text-ink transition-colors">
                {site.email}
              </a>
            </li>
            <li className="text-sm text-ink-muted">Southern California</li>
          </FooterCol>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:items-baseline md:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} AI Vanguard. A student-led nonprofit.
          </p>
          <p className="text-xs text-ink-muted font-display italic">
            Built by students, for students.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-5">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-ink-dim hover:text-ink transition-colors"
    >
      {children}
    </a>
  );
}
