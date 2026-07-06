import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { rubric, judgingRounds } from "@/lib/competition";

export const metadata: Metadata = {
  title: "Open Competition",
  description:
    "The AI Vanguard Open Competition: design an AI-era classroom you'd actually want to learn in — and defend one thing you'd refuse to automate. Any format. $1,000 in prizes. Deadline September 25, 2026.",
};

const keyDates = [
  { date: "Open now", label: "Registration", note: "Free, a few minutes, in the Entrant Portal." },
  { date: "September 25, 2026", label: "Submission deadline", note: "Entries close 11:59 PM Pacific. Registered entrants receive submission instructions by email." },
  { date: "October 3, 2026", label: "Results announced", note: "Winners published and featured on aivanguard.org." },
];

const quickFacts = [
  { k: "Prize pool", v: "$1,000" },
  { k: "Format", v: "Open" },
  { k: "Team size", v: "1–4" },
  { k: "Deadline", v: "Sept 25" },
];

const requirements = [
  {
    tag: "A · The work",
    title: "The work itself",
    body: "An app, essay, video, prototype, design file — the format is your choice; the thinking is what we judge.",
    items: [
      "Code / apps — a public repository link or hosted demo, plus a 2–3 minute walkthrough video (a screen recording is fine).",
      "Essays / written work — PDF, max 2,500 words.",
      "Video / film — max 6 minutes, hosted link (unlisted YouTube is fine).",
      "Design / visual work — PDF or hosted link, max 15 pages or frames.",
      "Something else entirely — email us before the deadline and we'll tell you how to submit it.",
    ],
  },
  {
    tag: "B · Required",
    title: "The Rationale — max 300 words",
    body: "A short written statement answering three questions. The Rationale is judged with equal weight for every entrant — it's how we fairly compare an app against an essay against a film. Everyone thinks on the same 300-word playing field.",
    items: [
      "What problem does your classroom design solve, and for whom?",
      "What can be improved in classrooms through AI?",
      "What is the one thing you refuse to automate, and why?",
    ],
  },
  {
    tag: "C · Required",
    title: "AI Use Disclosure",
    body: "Tell us how you used AI tools in creating your submission. Using AI is not just allowed — for a competition about AI, it's encouraged. But undisclosed AI use is grounds for disqualification. There's no penalty for heavy AI use; there's a penalty for hiding it. Judges may weigh how thoughtfully you used AI as part of Execution & Craft.",
  },
  {
    tag: "D · Required",
    title: "Entrant information",
    body: "Name(s), age category, school or organization (if any), and a contact email. We encourage individual entries; teams of up to 4 are permitted, and prizes are split equally among team members.",
  },
];

const rules = [
  {
    title: "Who can enter",
    body: "Anyone. Two divisions: Under 18 and Open (all ages). Students, educators, parents — everyone is a learner.",
  },
  {
    title: "Free to enter",
    body: "No purchase, payment, or donation is ever required to enter or to win.",
  },
  {
    title: "One entry per person or team",
    body: "Enter solo or as a team of up to 4. A person may not appear on multiple teams, and prizes are split equally among team members.",
  },
  {
    title: "Original work",
    body: "Created for this competition, or substantially developed during it. Building on prior work is fine — just disclose it.",
  },
  {
    title: "AI use",
    body: "Allowed and encouraged anywhere in your process, on one condition: full disclosure. Undisclosed AI use is grounds for disqualification.",
  },
  {
    title: "You keep your work",
    body: "Entrants retain full ownership. Entering grants AI Vanguard a non-exclusive license to display, publish, and promote your work — always with credit.",
  },
  {
    title: "Privacy & consent",
    body: "If your entry shows real students, classrooms, or identifiable people, you must have their consent to include them.",
  },
  {
    title: "Content standards",
    body: "No hateful, obscene, harassing, or unlawful content. Entries that cross the line are removed from consideration.",
  },
  {
    title: "Disqualification",
    body: "Plagiarism, undisclosed AI use, or fabricated data or testimonials will disqualify an entry.",
  },
  {
    title: "Decisions are final",
    body: "Judges' scores and decisions are final; there are no appeals.",
  },
];

const prizes = [
  {
    place: "Grand Prize",
    amount: "$500",
    perks: [
      "Cash award",
      "Published & highlighted feature on aivanguard.org",
      "Presentation opportunity",
      "Board opportunity",
    ],
    featured: true,
  },
  {
    place: "Silver · 2nd",
    amount: "$300",
    perks: ["Cash award", "Published feature", "Board opportunity"],
  },
  {
    place: "Bronze · 3rd",
    amount: "$200",
    perks: ["Cash award", "Published feature", "Board opportunity"],
  },
];

const faq = [
  {
    q: "How do I enter?",
    a: "Open the Entrant Portal (it opens in a new tab) and register — it's free and takes a few minutes. You'll receive confirmation and submission instructions by email, and your completed entry is due September 25, 2026.",
  },
  {
    q: "Can I use AI to build my submission?",
    a: "Yes — it's encouraged. Disclose how you used it. We judge your thinking and your choices.",
  },
  {
    q: "Does my classroom design have to be realistic or buildable today?",
    a: "No. Speculative designs are welcome, but Depth of Reasoning still applies: engage honestly with what your design would cost and where it could fail.",
  },
  {
    q: "Can my “refusal” be something unconventional?",
    a: "Please. “I'd refuse to automate grading” defended brilliantly beats “I'd refuse to automate teachers” defended vaguely. Surprising, specific refusals score highest.",
  },
  {
    q: "I'm a teacher or parent, not a student. Can I enter?",
    a: "Yes — the prompt is the classroom you'd want to learn in. Everyone is a learner.",
  },
  {
    q: "What if my format doesn't fit the categories?",
    a: "Email us before the deadline. We'll find a way to accept it.",
  },
  {
    q: "Do teams split the judging criteria?",
    a: "No — a submission is judged as one work, regardless of team size.",
  },
];

export default function CompetitionPage() {
  return (
    // The competition page adopts the portal's white-paper/purple-ink
    // theme so it stands out from the rest of the (dark) site.
    <div className="portal-theme">
      <PageHeader
        eyebrow="AI Vanguard Open Competition · 2026"
        title={
          <>
            Design a classroom{" "}
            <span className="serif-italic">
              you&apos;d actually want to learn in.
            </span>
          </>
        }
        blurb="AI is entering classrooms faster than anyone can evaluate it — and most of the conversation is happening about students, not with them. So here's the prompt: what would you automate, and what would you refuse to automate?"
        meta={
          <div className="flex flex-wrap gap-3">
            <Button href="/portal" external size="md">
              Open the Entrant Portal ↗
            </Button>
            <Button href="#brief" variant="secondary" size="md">
              Read the brief ↓
            </Button>
          </div>
        }
      />

      {/* QUICK FACTS */}
      <section className="border-b border-border" data-rail-section="At a glance">
        <Container size="wide" className="py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {quickFacts.map((x) => (
              <div key={x.k} className="bg-bg px-5 py-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  {x.k}
                </div>
                <div className="mt-1 fig text-2xl text-ink">{x.v}</div>
              </div>
            ))}
          </div>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {keyDates.map((d) => (
              <li
                key={d.label}
                className="py-4 grid gap-1 md:grid-cols-[220px_220px_1fr] md:gap-8 items-baseline"
              >
                <span className="fig text-[15px] text-ink">{d.date}</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-accent">
                  {d.label}
                </span>
                <span className="text-[13.5px] text-ink-muted">{d.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-ink-muted">
            Questions before you register?{" "}
            <a
              href="/contact"
              className="underline underline-offset-4 decoration-accent/60 hover:decoration-accent text-ink-dim hover:text-ink"
            >
              Use the contact form
            </a>
            .
          </p>
        </Container>
      </section>

      {/* THE BRIEF */}
      <section
        id="brief"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="The brief"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="fig text-2xl text-accent">01</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Competition brief
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink max-w-4xl">
              Two things,{" "}
              <span className="serif-italic">one submission.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="border-t border-border pt-6">
                <div className="flex items-baseline gap-3">
                  <span className="fig text-sm text-ink-muted">01</span>
                  <h3 className="font-display text-2xl md:text-[30px] tracking-tight text-ink">
                    Design the classroom.
                  </h3>
                </div>
                <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  Design the AI-era classroom or learning experience you would
                  genuinely want to learn in. How can we effectively integrate
                  AI without taking away human integrity?
                </p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="border-t border-border pt-6">
                <div className="flex items-baseline gap-3">
                  <span className="fig text-sm text-ink-muted">02</span>
                  <h3 className="font-display text-2xl md:text-[30px] tracking-tight text-ink">
                    Defend one refusal.
                  </h3>
                </div>
                <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed max-w-md">
                  Name one thing you&apos;d refuse to automate, and defend it.
                  Your refusal can live inside your design — a deliberate
                  absence, a protected space, a human-only feature — or stand
                  beside it as an argument.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 md:mt-16 grid gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  What makes a winning submission
                </div>
              </div>
              <div className="md:col-span-8 max-w-3xl">
                <p className="font-display italic text-2xl md:text-[32px] leading-[1.2] tracking-tight text-ink">
                  The strongest entries will contain an actual opinion.{" "}
                  <span className="not-italic text-ink-dim">
                    We&apos;re looking for a specific, defensible position on
                    where the line between human and machine belongs in
                    learning.
                  </span>
                </p>
                <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-ink-dim">
                  <p>
                    We are not looking for &ldquo;AI is good&rdquo; or
                    &ldquo;AI is bad.&rdquo; We&apos;re looking for the
                    interesting, uncomfortable, specific territory in between.
                    This competition is a thought experiment — but we want
                    well-thought-out submissions that would benefit school
                    districts and students if implemented.
                  </p>
                  <p>
                    Submissions in any format are welcome: working apps, code
                    prototypes, essays, films, design mockups, interactive
                    experiences, games, zines, policy proposals — or something
                    we haven&apos;t thought of. The format is your choice; the
                    thinking is what we judge.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SUBMISSION REQUIREMENTS */}
      <section
        id="requirements"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="What to submit"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="fig text-2xl text-accent">02</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Submission requirements
              </span>
            </div>
            <SectionHeading
              title={
                <>
                  Every entry needs{" "}
                  <span className="serif-italic">four things.</span>
                </>
              }
              blurb="Register in the Entrant Portal first — then, whatever format you choose, your completed submission must include all four parts below."
            />
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {requirements.map((r) => (
              <li
                key={r.title}
                className="py-8 md:py-10 grid gap-4 md:grid-cols-[160px_1fr] md:gap-14 items-baseline"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {r.tag}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-[32px] tracking-tight text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] text-ink-dim leading-relaxed max-w-2xl">
                    {r.body}
                  </p>
                  {r.items && (
                    <ul className="mt-5 space-y-2.5 max-w-2xl">
                      {r.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[15px] text-ink-dim leading-relaxed"
                        >
                          <span className="text-accent mt-[2px]" aria-hidden>
                            →
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* RUBRIC */}
      <section
        id="rubric"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="Judging rubric"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="fig text-2xl text-accent">03</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Judging rubric · 100 points
              </span>
            </div>
            <SectionHeading
              title={
                <>
                  Every format, scored on{" "}
                  <span className="serif-italic">the same five criteria.</span>
                </>
              }
              blurb="Judges are instructed to score the thinking, not the medium — a brilliant essay beats a mediocre app, and vice versa."
            />
            <div className="mt-8">
              <Button href="/competition/rubric" variant="secondary" size="md">
                Open the official rubric document →
              </Button>
            </div>
          </Reveal>

          <ol className="mt-14 divide-y divide-border border-y border-border">
            {rubric.map((c) => (
              <Reveal key={c.n}>
                <li className="py-10 md:py-14 grid gap-8 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="fig text-3xl md:text-4xl text-accent">
                      {c.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl md:text-[30px] leading-[1.08] tracking-tight text-ink">
                      {c.title}
                    </h3>
                    <div className="mt-3 fig text-sm text-ink-muted">
                      {c.points} points
                    </div>
                    <p className="mt-4 font-display italic text-ink-dim text-lg md:text-xl leading-snug max-w-xs">
                      {c.question}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <ul className="divide-y divide-border/70">
                      {c.bands.map((b) => (
                        <li
                          key={b.range}
                          className="py-3.5 grid grid-cols-[64px_1fr] gap-5 items-baseline"
                        >
                          <span className="fig text-sm text-ink">
                            {b.range}
                          </span>
                          <p className="text-[14.5px] text-ink-dim leading-relaxed">
                            {b.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                    {c.note && (
                      <p className="mt-5 text-[13.5px] text-ink-muted leading-relaxed border-l-2 border-accent/50 pl-4">
                        Judge&apos;s note: {c.note}
                      </p>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mt-8 text-[14px] text-ink-muted leading-relaxed">
              <span className="uppercase tracking-[0.18em] text-[11px]">
                Tiebreakers
              </span>{" "}
              — in order: the higher score on Insight &amp; Originality, then a
              judges&apos; panel discussion and vote.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* JUDGING PROCESS */}
      <section
        id="judging"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="How judging works"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="fig text-2xl text-accent">04</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    Judging process
                  </span>
                </div>
                <SectionHeading
                  title={
                    <>
                      Three rounds,{" "}
                      <span className="serif-italic">no shortcuts.</span>
                    </>
                  }
                  blurb="Entries are judged by a panel of 5–7 professionals from the AI and education fields. Judges recuse themselves from scoring any entrant they know personally or professionally."
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ol className="divide-y divide-border border-y border-border">
                  {judgingRounds.map((r) => (
                    <li
                      key={r.n}
                      className="py-8 grid grid-cols-[64px_1fr] gap-6 items-baseline"
                    >
                      <span className="fig text-2xl text-accent">{r.n}</span>
                      <div>
                        <h4 className="font-display text-xl md:text-2xl tracking-tight text-ink">
                          {r.title}
                        </h4>
                        <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-xl">
                          {r.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* RULES */}
      <section
        id="rules"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="Rules"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="fig text-2xl text-accent">05</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Rules &amp; eligibility
              </span>
            </div>
            <SectionHeading
              title={
                <>
                  The fine print,{" "}
                  <span className="serif-italic">in plain language.</span>
                </>
              }
              blurb="Ten rules, no legalese. Everything that governs entry and judging is on this page or linked right here."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Official judging rubric", href: "/competition/rubric" },
                { label: "Submission requirements", href: "#requirements" },
                { label: "Register in the Entrant Portal", href: "/portal" },
              ].map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 h-9 text-[13px] text-ink hover:bg-surface transition-colors"
                >
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                  {d.label}
                </a>
              ))}
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-x-14 gap-y-8 md:grid-cols-2">
            {rules.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 60}>
                <li className="border-t border-border pt-5 grid grid-cols-[44px_1fr] gap-4 items-baseline">
                  <span className="fig text-sm text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-xl md:text-[22px] tracking-tight text-ink">
                      {r.title}
                    </h4>
                    <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-md">
                      {r.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* PRIZES */}
      <section
        id="prizes"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="Prizes"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="fig text-2xl text-accent">06</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Prizes
              </span>
            </div>
            <SectionHeading
              title={
                <>
                  $1,000 in awards —{" "}
                  <span className="serif-italic">and a seat at the table.</span>
                </>
              }
              blurb="Winning work gets published on aivanguard.org, and winners are invited into the organization's orbit — not just handed a check."
            />
          </Reveal>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {prizes.map((p) => (
              <div key={p.place} className="bg-bg p-7 md:p-9 flex flex-col">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {p.place}
                </div>
                <div
                  className={`mt-4 fig leading-none ${
                    p.featured
                      ? "text-5xl md:text-6xl text-accent"
                      : "text-4xl md:text-5xl text-ink"
                  }`}
                >
                  {p.amount}
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex gap-3 text-[14.5px] text-ink-dim leading-relaxed"
                    >
                      <span className="text-accent mt-[1px]" aria-hidden>
                        →
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="py-14 md:py-20 border-b border-border"
        data-rail-section="FAQ"
      >
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Before you ask —{" "}
                  <span className="serif-italic">yes, you can use AI.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-14 max-w-3xl">
            {faq.map((f) => (
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

      {/* CTA */}
      <section className="py-16 md:py-24" data-rail-section="Enter">
        <Container size="wide">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ink">
                Got an opinion?{" "}
                <span className="serif-italic">Prove it.</span>
              </h2>
              <p className="mt-6 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-xl">
                Registration is open now in the Entrant Portal and takes a few
                minutes. Completed entries are due September 25, 2026, and
                results will be announced October 3, 2026.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/portal" external size="lg">
                  Open the Entrant Portal ↗
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Ask a question first
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
