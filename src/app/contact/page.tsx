import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AI Vanguard — for students, school partnerships, press, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="serif-italic">talk.</span>
          </>
        }
        blurb="Whether you're a student with a question, a school exploring a partnership, or a journalist reaching out — here's how to find us."
        meta={
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Response · within ~1 week</span>
            <span>School partnerships prioritized</span>
          </div>
        }
      />

      <section className="py-12 md:py-16" data-rail-section="Message">
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ink">
                  Send us a <span className="serif-italic">message.</span>
                </h2>
                <p className="mt-3 text-ink-dim max-w-md">
                  Use the form below — or reach out directly.
                </p>
                <div className="mt-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal>
                <div className="md:sticky md:top-28 space-y-10">
                  <ContactBlock
                    label="Email"
                    value={site.email}
                    href={`mailto:${site.email}`}
                    hint="Best for general inquiries, school partnerships, and press."
                  />
                  <ContactBlock
                    label="Instagram"
                    value="@aivanguardorg"
                    href={site.social.instagram}
                    hint="Day-to-day updates and student-facing posts."
                  />
                  <ContactBlock
                    label="LinkedIn"
                    value="ai-vanguard-org"
                    href={site.social.linkedin}
                    hint="Organizational updates, press, and partnership notices."
                  />
                  <ContactBlock
                    label="Based in"
                    value="Southern California"
                    hint="Operating across 8 schools and 5 districts in the region."
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactBlock({
  label,
  value,
  href,
  hint,
}: {
  label: string;
  value: string;
  href?: string;
  hint: string;
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group block"
      >
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <Wrapper>
      <div className="border-t border-border pt-5">
        <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
          {label}
        </div>
        <div
          className={`mt-2 font-display text-2xl md:text-3xl tracking-tight text-ink ${
            href ? "group-hover:text-accent transition-colors" : ""
          }`}
        >
          {value}
        </div>
        <p className="mt-3 text-sm text-ink-dim max-w-xs">{hint}</p>
      </div>
    </Wrapper>
  );
}
