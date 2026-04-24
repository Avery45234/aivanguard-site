import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PortraitPlate } from "@/components/PortraitPlate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Apply as a student representative, bring AI Vanguard to your school, or partner with us on research and policy work.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title={
          <>
            There&apos;s a door in here{" "}
            <span className="serif-italic">with your name on it.</span>
          </>
        }
        blurb="Students, schools, and supporters each have a way to plug in. Pick the path that fits — and start."
      />

      {/* STUDENT PATH */}
      <section
        id="student"
        className="py-14 md:py-20 scroll-mt-28"
        data-rail-section="Students"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <span className="fig text-2xl text-accent">01</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    Primary path · Students
                  </span>
                </div>
                <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink">
                  Become a Student{" "}
                  <span className="serif-italic">Representative.</span>
                </h2>
                <p className="mt-8 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-lg">
                  Reps are the backbone of AI Vanguard. You&apos;ll lead
                  research, host conversations, shape policy briefs, and
                  represent your school inside a growing network of students
                  doing the same thing across Southern California.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href={site.applyUrl} external size="lg">
                    Apply now
                  </Button>
                  <a
                    href="#rep-details"
                    className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink px-5 h-12"
                  >
                    See the details ↓
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal>
                <PortraitPlate
                  src="/img/team/avery.png"
                  alt="Avery Updike, Founder and President of AI Vanguard."
                  name="Avery Updike"
                  role="Founder · President"
                  caption="Plate 01 · 2026"
                  chapter="§ Founder"
                  className="max-w-[360px] md:ml-auto"
                />
              </Reveal>
            </div>
          </div>
        </Container>

        <Container size="wide" className="mt-10 md:mt-14">
          <div id="rep-details" className="grid gap-8 md:gap-10 md:grid-cols-2 scroll-mt-28">
            {[
              {
                t: "Who should apply",
                b: "High school students in Southern California who care about how AI lands in their school — you don't need to be a 'tech person,' just someone willing to lead.",
              },
              {
                t: "What reps do",
                b: "Run campus surveys and focus groups, attend rep meetings, contribute to policy briefs, and host conversations at your school.",
              },
              {
                t: "Time commitment",
                b: "A few hours a month during normal cycles, with more around major research or advocacy pushes.",
              },
              {
                t: "What you get",
                b: "Real leadership experience, a cross-school network of student leaders, and ownership over work that schools actually look at.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 60}>
                <div className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="fig text-sm text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
                      {x.t}
                    </h4>
                  </div>
                  <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                    {x.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNER PATH */}
      <section
        id="partner"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Schools"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="fig text-2xl text-accent">02</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                For schools &amp; districts
              </span>
            </div>
            <SectionHeading
              eyebrow=""
              title={
                <>
                  Partner with{" "}
                  <span className="serif-italic">AI Vanguard.</span>
                </>
              }
              blurb="Bring student voice into your school's approach to AI — with research, presentations, or a standing rep on your campus."
            />
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {[
              {
                tag: "Research",
                title: "Run a student-voice study",
                body: "We'll design and execute a survey or focus group on your campus and deliver findings your leadership can use.",
              },
              {
                tag: "Presentation",
                title: "Host a student-led talk",
                body: "Bring AI Vanguard reps to speak to your staff, school board, or student body on AI in education.",
              },
              {
                tag: "Ongoing",
                title: "Place a rep on your campus",
                body: "Onboard one of our reps as a standing liaison between your school and the AI Vanguard network.",
              },
            ].map((x) => (
              <li
                key={x.title}
                className="py-8 md:py-10 grid gap-4 md:grid-cols-[160px_1fr] md:gap-14 items-baseline"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {x.tag}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-[32px] tracking-tight text-ink">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] text-ink-dim leading-relaxed max-w-2xl">
                    {x.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                href={`mailto:${site.email}?subject=Partnership%20with%20AI%20Vanguard`}
                size="lg"
              >
                Email us about a partnership
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                All contact options
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SUPPORTERS */}
      <section
        id="supporters"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Supporters"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="fig text-2xl text-accent">03</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    For supporters
                  </span>
                </div>
                <SectionHeading
                  eyebrow=""
                  title={
                    <>
                      Back the{" "}
                      <span className="serif-italic">movement.</span>
                    </>
                  }
                  blurb="Student voice on AI in education needs adult allies — educators, mentors, funders, and press."
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ul className="divide-y divide-border border-y border-border">
                  {[
                    {
                      t: "Mentor",
                      b: "Connect with our leadership cabinet to advise on research methodology, policy work, or organizational strategy.",
                    },
                    {
                      t: "Sponsor",
                      b: "Fund specific research cycles, events, or expansion to new districts.",
                    },
                    {
                      t: "Amplify",
                      b: "Cover our work, invite reps to speak, or help us reach new schools and audiences.",
                    },
                  ].map((x) => (
                    <li
                      key={x.t}
                      className="py-8 grid grid-cols-[120px_1fr] gap-6 items-baseline"
                    >
                      <h4 className="font-display text-xl md:text-2xl tracking-tight text-ink">
                        {x.t}
                      </h4>
                      <p className="text-[15px] text-ink-dim leading-relaxed max-w-md">
                        {x.b}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="py-14 md:py-20 border-t border-border"
        data-rail-section="FAQ"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Questions we get{" "}
                  <span className="serif-italic">asked a lot.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-14 max-w-3xl">
            {[
              {
                q: "Do I need to be in California to apply as a rep?",
                a: "Our current network is concentrated in Southern California, so reps in that region will have the most immediate in-person opportunities. That said, we welcome applications from students elsewhere — reach out if you're interested in helping us expand.",
              },
              {
                q: "Is there a fee to join or partner?",
                a: "No. AI Vanguard is a student-led nonprofit. Participation as a rep or school partner is free.",
              },
              {
                q: "How do you handle student data in your research?",
                a: "Research participation is voluntary, and surveys and focus groups are designed to protect student privacy. We don't publish anything that identifies individual students.",
              },
              {
                q: "Can I get in touch about something that isn't listed here?",
                a: "Yes — the contact page has the right channels for general questions, press, and school inquiries.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group border-t border-border py-6 last:border-b"
              >
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 font-display text-ink text-xl md:text-2xl leading-snug tracking-tight list-none">
                  <span>{f.q}</span>
                  <span className="shrink-0 text-ink-dim transition-transform duration-200 group-open:rotate-45 mt-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 3v12M3 9h12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
