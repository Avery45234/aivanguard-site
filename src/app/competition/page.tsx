import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  rubric,
  judgingRounds,
  results,
  type Winner,
  type WinnerWork,
} from "@/lib/competition";

const [first, ...runnersUp] = results.winners;
const allFeatured = results.winners.every((w) => w.work);

export const metadata: Metadata = {
  alternates: { canonical: "/competition" },
  title: "Vanguard Open 2026 Winners",
  description: `Results of the 2026 Vanguard Open, AI Vanguard's competition to design an AI-era classroom worth learning in and defend one thing you'd refuse to automate. Grand Prize: ${first.name}. Second: ${runnersUp[0].name}. Third: ${runnersUp[1].name}. $1,000 in prizes.`,
};

const keyDates = [
  { date: "September 25, 2026", label: "Entries closed", note: "Registration and submissions closed at 11:59 PM Pacific." },
  { date: "Complete", label: "Judging", note: "Entries were scored against the published 100-point rubric, the same five criteria for every format." },
  { date: results.announced, label: "Results announced", note: "The three winning entries are named on this page." },
];

// Participation figures come first once they are on the record; the rest
// are fixed facts about the competition.
const quickFacts = [
  ...results.stats,
  { k: "Prizes", v: "$1,000" },
  { k: "Winners", v: "3" },
  { k: "Rubric", v: "100 pts" },
  { k: "Announced", v: "Oct 3" },
];

const requirements = [
  {
    tag: "A · The work",
    title: "The work itself",
    body: "An app, an essay, a film, a design. The format was the entrant's choice. We judged the thinking.",
    items: [
      "Code / apps: a public repository link or hosted demo, plus a 2 to 3 minute walkthrough video.",
      "Essays / written work: PDF, max 2,500 words.",
      "Video / film: max 6 minutes, hosted link.",
      "Design / visual work: PDF or hosted link, max 15 pages or frames.",
    ],
  },
  {
    tag: "B · Required",
    title: "The Rationale (max 300 words)",
    body: "A short statement answering three questions, judged with equal weight for every entrant. It is how an app, an essay, and a film get compared fairly: everyone thinks on the same 300-word playing field.",
    items: [
      "What problem does your classroom design solve, and for whom?",
      "What can be improved in classrooms through AI?",
      "What is the one thing you refuse to automate, and why?",
    ],
  },
  {
    tag: "C · Required",
    title: "AI Use Disclosure",
    body: "How the entrant used AI tools. Using AI was encouraged. Hiding it was grounds for disqualification. No penalty for heavy use, only for undisclosed use.",
  },
  {
    tag: "D · Required",
    title: "Entrant information",
    body: "Name(s), age category, school or organization, and a contact email. Individual entries encouraged; teams of up to 4 permitted.",
  },
];

const rules = [
  { title: "Who can enter", body: "Anyone. Two divisions: 18 and under, and Open (all ages). Students, educators, parents: everyone is a learner." },
  { title: "Free to enter", body: "No purchase, payment, or donation is ever required to enter or to win." },
  { title: "One entry per person or team", body: "Solo or a team of up to 4. A person may not appear on multiple teams, and prizes are split equally among team members." },
  { title: "Original work", body: "Created for this competition, or substantially developed during it. Building on prior work is fine, just disclose it." },
  { title: "AI use", body: "Allowed and encouraged anywhere in the process, on one condition: full disclosure." },
  { title: "You keep your work", body: "Entrants retain full ownership. Entering grants AI Vanguard a non-exclusive license to display, publish, and promote the work, always with credit." },
  { title: "Privacy & consent", body: "An entry that shows real students, classrooms, or identifiable people must have their consent." },
  { title: "Content standards", body: "No hateful, obscene, harassing, or unlawful content." },
  { title: "Disqualification", body: "Plagiarism, undisclosed AI use, or fabricated data or testimonials disqualify an entry." },
  { title: "Decisions are final", body: "Judges' scores and decisions are final; there are no appeals." },
];

const faq = [
  {
    q: "Who won the 2026 Vanguard Open?",
    a: `${first.name} won the Grand Prize (${first.award}). ${runnersUp[0].name} placed second (${runnersUp[0].award}) and ${runnersUp[1].name} placed third (${runnersUp[1].award}).`,
  },
  {
    q: "Can I see the winning work?",
    a: allFeatured
      ? "Yes. Each winner's entry is featured at the top of this page."
      : "A feature on each winning entry will be published on this page.",
  },
  {
    q: "How were entries judged?",
    a: "Against the published 100-point rubric: five criteria, the same for every format, so an essay and an app are scored on the thinking and not the medium. The rubric, the three rounds, and the tiebreakers are all on this page.",
  },
  {
    q: "I entered. Can I appeal or see my entry?",
    a: "Judges' scores and decisions are final and there are no appeals, as the rules state. Registered entrants can still sign in to the Entrant Portal to review the entry they submitted.",
  },
  {
    q: "Can I still enter?",
    a: "No. Entries closed September 25, 2026 at 11:59 PM Pacific.",
  },
  {
    q: "Will there be another Open?",
    a: "The next Open will be announced on this page.",
  },
];

function Perks({ items, align }: { items: string[]; align?: "end" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${align === "end" ? "md:justify-end" : ""}`}>
      {items.map((p) => (
        <li
          key={p}
          className="inline-flex items-center rounded-full border border-border px-3 h-7 text-[12px] text-ink-dim bg-bg"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

// A winner's entry, shown once it is on the record in src/lib/competition.ts.
function WorkFeature({ work }: { work: WinnerWork }) {
  return (
    <div className="mt-8 border-t border-border pt-6 grid gap-6 md:grid-cols-12 md:gap-12">
      <div className={work.refusal ? "md:col-span-7" : "md:col-span-12 max-w-3xl"}>
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          Winning entry · {work.format}
        </div>
        <h4 className="mt-2 font-display italic text-2xl md:text-3xl leading-[1.12] tracking-tight text-ink">
          {work.title}
        </h4>
        <p className="mt-3 text-[15.5px] text-ink-dim leading-relaxed">{work.summary}</p>
        {work.href && (
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-ink underline underline-offset-[6px] decoration-accent/60 hover:text-accent"
          >
            See the work ↗
          </a>
        )}
      </div>
      {work.refusal && (
        <div className="md:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-accent">The refusal</div>
          <p className="mt-2 font-display text-xl md:text-2xl leading-[1.25] tracking-tight text-ink">
            {work.refusal}
          </p>
        </div>
      )}
    </div>
  );
}

function RunnerUp({ w }: { w: Winner }) {
  return (
    <article className="bg-bg p-7 md:p-10 flex flex-col">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3 text-[11px] uppercase tracking-[0.22em]">
          <span className="text-accent">{w.label}</span>
          <span className="text-ink-muted">{w.ordinal}</span>
        </div>
        <span className="fig text-3xl md:text-4xl text-ink leading-none">{w.award}</span>
      </div>
      <h3 className="mt-5 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-ink">
        {w.name}
      </h3>
      <div className="mt-5">
        <Perks items={w.perks} />
      </div>
      {w.work && <WorkFeature work={w.work} />}
    </article>
  );
}

export default function CompetitionPage() {
  return (
    // The competition page adopts the portal's white-paper/purple-ink
    // theme so it stands out from the rest of the (dark) site.
    <div className="portal-theme">
      <PageHeader
        eyebrow="The Vanguard Open · 2026 results"
        title={
          <>
            Meet the{" "}
            <span className="serif-italic">2026 winners.</span>
          </>
        }
        blurb="We asked for an AI-era classroom you'd actually want to learn in, and one thing you'd refuse to automate. These three entries answered best."
        meta={
          <div className="flex flex-wrap gap-3">
            <Button href="#winners" size="md">
              The winners ↓
            </Button>
            <Button href="#brief" variant="secondary" size="md">
              Read the brief ↓
            </Button>
          </div>
        }
      />

      {/* WINNERS */}
      <section
        id="winners"
        className="py-12 md:py-16 scroll-mt-28 border-b border-border"
        data-rail-section="Winners"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-[11px] uppercase tracking-[0.22em] text-accent">Results</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Announced {results.announced}
              </span>
            </div>
          </Reveal>

          <Reveal>
            <article className="relative border border-border-strong bg-surface p-7 md:p-12">
              <span className="absolute left-0 top-0 h-1 w-full bg-accent" aria-hidden />
              <div className="grid gap-8 md:grid-cols-12 md:gap-12 items-end">
                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-3 text-[11px] uppercase tracking-[0.22em]">
                    <span className="text-accent">{first.label}</span>
                    <span className="text-ink-muted">{first.ordinal}</span>
                  </div>
                  <h2 className="mt-4 font-display text-5xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-tight text-ink">
                    {first.name}
                  </h2>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <div className="fig text-5xl md:text-6xl text-accent leading-none">{first.award}</div>
                  <div className="mt-5">
                    <Perks items={first.perks} align="end" />
                  </div>
                </div>
              </div>
              {first.work && <WorkFeature work={first.work} />}
            </article>
          </Reveal>

          <Reveal>
            <div className="mt-6 grid gap-px bg-border border border-border md:grid-cols-2">
              {runnersUp.map((w) => (
                <RunnerUp key={w.name} w={w} />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-6 text-[14px] text-ink-muted leading-relaxed max-w-3xl">
              Scored on the published 100-point rubric: five criteria, every format on the same scale.{" "}
              {!allFeatured && "A feature on each winning entry will be published on this page. "}
              <a
                href="#rubric"
                className="underline underline-offset-4 decoration-accent/60 hover:decoration-accent text-ink-dim hover:text-ink"
              >
                See how entries were scored
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* AT A GLANCE */}
      <section className="border-b border-border" data-rail-section="At a glance">
        <Container size="wide" className="py-8 md:py-10">
          <div
            className={`grid grid-cols-2 gap-px bg-border ${
              quickFacts.length > 4 ? "md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-4"
            }`}
          >
            {quickFacts.map((x) => (
              <div key={x.k} className="bg-bg px-5 py-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">{x.k}</div>
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
                <span className="text-[11px] uppercase tracking-[0.22em] text-accent">{d.label}</span>
                <span className="text-[13.5px] text-ink-muted">{d.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-ink-muted">
            Questions about the results?{" "}
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
                The 2026 brief
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink max-w-4xl">
              Two things,{" "}
              <span className="serif-italic">one submission.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
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
                  The refusal can live inside the design (a deliberate absence,
                  a protected space, a human-only feature) or stand beside it
                  as an argument.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-12 font-display italic text-2xl md:text-[32px] leading-[1.2] tracking-tight text-ink max-w-4xl">
              The strongest entries contain an actual opinion.{" "}
              <span className="not-italic text-ink-dim">
                Not &ldquo;AI is good&rdquo; or &ldquo;AI is bad,&rdquo; but a
                specific, defensible position on where the line between human
                and machine belongs in learning.
              </span>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* SUBMISSION REQUIREMENTS */}
      <section
        id="requirements"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="What entries included"
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
                  Every entry had{" "}
                  <span className="serif-italic">four parts.</span>
                </>
              }
              blurb="Whatever the format, a completed submission had to include all four."
            />
          </Reveal>

          <ul className="mt-12 grid gap-px bg-border border border-border md:grid-cols-2">
            {requirements.map((r) => (
              <li key={r.title} className="bg-bg p-6 md:p-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">{r.tag}</span>
                <h3 className="mt-3 font-display text-2xl md:text-[28px] tracking-tight text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-dim leading-relaxed">{r.body}</p>
                {r.items && (
                  <ul className="mt-4 space-y-2">
                    {r.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[14.5px] text-ink-dim leading-relaxed">
                        <span className="text-accent mt-[2px]" aria-hidden>
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <SectionHeading
                title={
                  <>
                    Every format, scored on{" "}
                    <span className="serif-italic">the same five criteria.</span>
                  </>
                }
                blurb="Judges score the thinking, not the medium. A brilliant essay beats a mediocre app, and vice versa."
              />
              <Button href="/competition/rubric" variant="secondary" size="md">
                Official rubric, full score bands →
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <ol className="mt-12 grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-5">
              {rubric.map((c) => (
                <li key={c.n} className="bg-bg p-5 md:p-6">
                  <div className="flex items-baseline justify-between">
                    <span className="fig text-lg text-accent">{c.n}</span>
                    <span className="fig text-sm text-ink-muted">{c.points} pts</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl md:text-[22px] leading-[1.12] tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 font-display italic text-ink-dim text-[15px] leading-snug">
                    {c.question}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[14px] text-ink-muted leading-relaxed">
              <span className="uppercase tracking-[0.18em] text-[11px]">Tiebreakers</span>, in
              order: the higher score on Insight &amp; Originality, then a judges&apos; panel
              discussion and vote.
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
                  blurb="Entries are judged by a panel of 5 to 7 professionals from the AI and education fields. Judges recuse themselves from scoring any entrant they know personally or professionally."
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ol className="divide-y divide-border border-y border-border">
                  {judgingRounds.map((r) => (
                    <li key={r.n} className="py-7 grid grid-cols-[64px_1fr] gap-6 items-baseline">
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
              blurb="Ten rules, no legalese."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Official judging rubric", href: "/competition/rubric" },
                { label: "Submission requirements", href: "#requirements" },
                { label: "Entrant Portal", href: "/portal" },
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

          <ol className="mt-12 grid gap-x-14 gap-y-7 md:grid-cols-2">
            {rules.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 60}>
                <li className="border-t border-border pt-5 grid grid-cols-[44px_1fr] gap-4 items-baseline">
                  <span className="fig text-sm text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-display text-xl md:text-[22px] tracking-tight text-ink">
                      {r.title}
                    </h4>
                    <p className="mt-2 text-[15px] text-ink-dim leading-relaxed max-w-md">{r.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 border-b border-border" data-rail-section="FAQ">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  About the{" "}
                  <span className="serif-italic">2026 results.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-10 max-w-3xl">
            {faq.map((f) => (
              <details key={f.q} className="group border-t border-border py-6 last:border-b">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 font-display text-ink text-xl md:text-2xl leading-snug tracking-tight list-none">
                  <span>{f.q}</span>
                  <span className="shrink-0 text-ink-dim transition-transform duration-200 group-open:rotate-45 mt-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSE */}
      <section className="py-16 md:py-24" data-rail-section="Thank you">
        <Container size="wide">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ink">
                Congratulations to{" "}
                <span className="serif-italic">the 2026 winners.</span>
              </h2>
              <p className="mt-6 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-xl">
                And thank you to everyone who entered. The next Open will be
                announced on this page. Registered entrants can still sign in to
                the Entrant Portal to review the entry they submitted.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/get-involved" size="lg">
                  Get involved with AI Vanguard
                </Button>
                <Button href="/portal" external variant="secondary" size="lg">
                  Entrant Portal ↗
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
