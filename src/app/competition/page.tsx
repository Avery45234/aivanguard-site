import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Laurel, Medal, Portrait, METAL } from "@/components/open/Awards";
import { rubric, results, type Winner, type WinnerWork } from "@/lib/competition";
import { winnerPhoto } from "@/lib/open-photos";

const [first, second, third] = results.winners;
const featured = results.winners.filter((w) => w.work);
const allFeatured = featured.length === results.winners.length;

export const metadata: Metadata = {
  alternates: { canonical: "/competition" },
  title: "Vanguard Open 2026 Prize Winners",
  description: `Results of the 2026 Vanguard Open, AI Vanguard's competition to design an AI-era classroom worth learning in and defend one thing you'd refuse to automate. Grand Prize: ${first.name}. Second Prize: ${second.name}. Third Prize: ${third.name}. $1,000 in prizes.`,
};

// Participation figures come first once they are on the record; the rest
// are fixed facts about the competition.
const quickFacts = [
  ...results.stats,
  { k: "In prizes", v: "$1,000" },
  { k: "Prize winners", v: "3" },
  { k: "Point rubric", v: "100" },
  { k: "Divisions", v: "2" },
];

const timeline = [
  { when: "July 2026", what: "The Open launches", note: "Brief, rubric, and rules published together." },
  { when: "September 25", what: "Entries close", note: "11:59 PM Pacific." },
  { when: "Sept 26 to Oct 2", what: "Grading", note: "Entries scored on the 100-point rubric." },
  { when: "October 3", what: "Winners announced", note: "Three prizes awarded." },
];

const process = [
  { n: "01", title: "Screening", body: "Each entry is checked for completeness and rules compliance: the work, the Rationale, and the AI Use Disclosure." },
  { n: "02", title: "Scoring", body: "Each eligible entry is scored on the five criteria, 100 points in all. The format never changes the scale." },
  { n: "03", title: "Decision", body: "The highest-scoring entries are reviewed again and the three prizes are awarded. Decisions are final." },
];

const requirements = [
  {
    tag: "A · The work",
    title: "The work itself",
    body: "An app, an essay, a film, a design. The format was the entrant's choice. The thinking is what gets judged.",
  },
  {
    tag: "B · Required",
    title: "The Rationale, 300 words",
    body: "What problem the design solves and for whom, what AI can improve, and the one thing the entrant refuses to automate.",
  },
  {
    tag: "C · Required",
    title: "AI Use Disclosure",
    body: "Using AI was encouraged. Hiding it was grounds for disqualification. No penalty for heavy use, only for undisclosed use.",
  },
  {
    tag: "D · Required",
    title: "Entrant information",
    body: "Name, age category, school or organization, and a contact email. Solo entries or teams of up to four.",
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
    a: `${first.name} won the Grand Prize (${first.award}). ${second.name} won Second Prize (${second.award}) and ${third.name} won Third Prize (${third.award}).`,
  },
  {
    q: "I am a winner. What happens now?",
    a: `${results.winnerNotice} AI Vanguard will never ask a winner for payment.`,
  },
  {
    q: "Can I see the winning work?",
    a: allFeatured
      ? "Yes. Each winner's entry is featured on this page."
      : "A feature on each winning entry is being prepared and will be published on this page.",
  },
  {
    q: "How were entries judged?",
    a: `On the published 100-point rubric: five criteria, the same for every format, so an essay and an app are scored on the thinking and not the medium. Entries were graded by ${results.judge.name}, a ${results.judge.credential}.`,
  },
  {
    q: "I entered. Can I appeal or see my entry?",
    a: "Scores and decisions are final and there are no appeals, as the rules state. Registered entrants can still sign in to the Entrant Portal to review the entry they submitted.",
  },
  {
    q: "Will there be another Open?",
    a: "The next Open will be announced on this page.",
  },
];

// Desktop podium order is second, first, third. On a phone the cards stack
// in finishing order.
const ORDER: Record<1 | 2 | 3, string> = {
  1: "order-1 md:order-2",
  2: "order-2 md:order-1",
  3: "order-3 md:order-3",
};
const PLINTH: Record<1 | 2 | 3, string> = {
  1: "md:h-36",
  2: "md:h-24",
  3: "md:h-16",
};

function winnerLinks(w: Winner) {
  return [
    ...(w.work?.href ? [{ label: "View the winning entry", href: w.work.href }] : []),
    ...(w.links ?? []),
  ];
}

function PodiumPlace({ w }: { w: Winner }) {
  const m = METAL[w.place];
  const top = w.place === 1;
  const links = winnerLinks(w);
  return (
    <li className={`flex flex-col ${ORDER[w.place]}`}>
      <article
        className={`relative flex-1 rounded-2xl border border-border bg-bg text-center shadow-[0_14px_44px_rgba(60,34,116,0.10)] ${
          top ? "px-7 pb-10 pt-16 md:pt-20" : "px-6 pb-8 pt-16"
        }`}
        style={{ borderTop: `4px solid ${m.base}` }}
      >
        <Medal
          place={w.place}
          size={top ? 68 : 56}
          className="absolute left-1/2 -translate-x-1/2 -top-8"
        />
        <Portrait
          name={w.name}
          image={winnerPhoto(w.slug)}
          place={w.place}
          size={top ? "lg" : "md"}
          className="mx-auto"
        />
        <div className="mt-5 text-[11px] uppercase tracking-[0.26em]" style={{ color: m.deep }}>
          {w.label}
        </div>
        <h3
          className={`mt-2 font-display tracking-tight text-ink leading-[1.05] ${
            top ? "text-4xl md:text-[44px]" : "text-3xl md:text-[34px]"
          }`}
        >
          {w.name}
        </h3>
        {(w.affiliation || w.location) && (
          <p className="mt-2 text-[14px] text-ink-dim">
            {[w.affiliation, w.location].filter(Boolean).join(" · ")}
          </p>
        )}
        <div className="mt-4 fig text-2xl text-ink">{w.award}</div>
        {w.work && (
          <p className="mt-4 font-display italic text-lg text-ink-dim leading-snug">
            &ldquo;{w.work.title}&rdquo;
            <span className="mt-1 block not-italic text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              {w.work.format}
            </span>
          </p>
        )}
        {links.length > 0 && (
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center rounded-full border border-border-strong px-4 text-[13px] text-ink hover:bg-surface transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </article>
      <div
        className={`mt-3 hidden md:flex items-center justify-center rounded-xl border border-border bg-surface-2 ${PLINTH[w.place]}`}
        aria-hidden
      >
        <span className="fig text-5xl" style={{ color: m.deep }}>
          {w.place}
        </span>
      </div>
    </li>
  );
}

// A winner's entry in full, shown once it is on the record.
function WorkFeature({ w, work }: { w: Winner; work: WinnerWork }) {
  return (
    <article className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-3 flex items-start gap-4">
        <Medal place={w.place} size={40} />
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">{w.label}</div>
          <div className="mt-1 font-display text-xl tracking-tight text-ink">{w.name}</div>
        </div>
      </div>
      <div className={work.refusal ? "md:col-span-5" : "md:col-span-9"}>
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">{work.format}</div>
        <h3 className="mt-2 font-display italic text-2xl md:text-3xl leading-[1.12] tracking-tight text-ink">
          {work.title}
        </h3>
        <p className="mt-3 text-[15.5px] text-ink-dim leading-relaxed">{work.summary}</p>
        {work.href && (
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-ink underline underline-offset-[6px] decoration-accent/60 hover:text-accent"
          >
            View the winning entry ↗
          </a>
        )}
      </div>
      {work.refusal && (
        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-accent">The refusal</div>
          <p className="mt-2 font-display text-xl md:text-2xl leading-[1.25] tracking-tight text-ink">
            {work.refusal}
          </p>
        </div>
      )}
    </article>
  );
}

function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="fig text-2xl text-accent">{n}</span>
      <div className="h-px flex-1 bg-border" />
      <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">{label}</span>
    </div>
  );
}

const GOLD = "#e2c477";
const PLUM = "#1a0f3d";

export default function CompetitionPage() {
  return (
    // The competition page adopts the portal's white-paper/purple-ink
    // theme so it stands out from the rest of the (dark) site.
    <div className="portal-theme">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: `radial-gradient(55% 70% at 85% 15%, rgba(226,196,119,0.18), transparent 62%), radial-gradient(70% 80% at 0% 100%, rgba(149,113,219,0.38), transparent 60%), ${PLUM}`,
        }}
        data-rail-section="Results"
      >
        <Container size="wide" className="pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="grid gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.26em]"
                style={{ color: GOLD }}
              >
                <span className="h-px w-8" style={{ background: GOLD }} aria-hidden />
                The Vanguard Open · {results.year}
              </div>
              <h1 className="mt-6 font-display tracking-tight leading-[0.98] text-[52px] sm:text-7xl lg:text-[104px]">
                Prize{" "}
                <span className="serif-italic" style={{ color: GOLD }}>
                  Winners
                </span>
              </h1>
              <p className="mt-5 font-display italic text-xl md:text-2xl text-[#cfc3ee]">
                Announced {results.announced}
              </p>
              <p className="mt-6 max-w-xl text-[16px] md:text-[17px] leading-relaxed text-[#ddd4f3]">
                We asked for an AI-era classroom you&apos;d actually want to learn in, and one
                thing you&apos;d refuse to automate. Congratulations to the three entrants whose
                work answered best, and thank you to everyone who took part.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#winners"
                  className="inline-flex h-12 items-center rounded-full px-7 text-[15px] font-medium tracking-tight transition-colors hover:bg-white"
                  style={{ background: GOLD, color: PLUM }}
                >
                  See the winners ↓
                </a>
                <Link
                  href={results.article}
                  className="inline-flex h-12 items-center rounded-full border border-white/35 px-7 text-[15px] font-medium tracking-tight text-white hover:bg-white/10 transition-colors"
                >
                  Read the announcement →
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Laurel className="h-[240px] w-[240px] md:h-[340px] md:w-[340px]" color={GOLD}>
                <span
                  className="text-[8px] tracking-[0.22em] md:text-[11px] md:tracking-[0.3em] uppercase"
                  style={{ color: GOLD }}
                >
                  The Vanguard Open
                </span>
                <span className="mt-1 fig text-6xl md:text-[92px] leading-none text-white">
                  {results.year}
                </span>
                <span className="mt-2 font-display italic text-base md:text-xl text-[#cfc3ee]">
                  Prize Winners
                </span>
              </Laurel>
            </div>
          </div>

          <dl
            className={`mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/15 ${
              quickFacts.length > 4 ? "md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-4"
            }`}
          >
            {quickFacts.map((x) => (
              <div key={x.k} className="px-5 py-4" style={{ background: "rgba(26,15,61,0.82)" }}>
                <dd className="fig text-3xl md:text-4xl text-white">{x.v}</dd>
                <dt className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#b9abdf]">{x.k}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* PODIUM */}
      <section
        id="winners"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="Winners"
      >
        <Container size="wide">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-[11px] uppercase tracking-[0.26em] text-accent">
                Roll of honour · {results.year}
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ink">
                The prize <span className="serif-italic">winners.</span>
              </h2>
              <p className="mt-4 text-[15.5px] text-ink-dim leading-relaxed">
                Three entries, chosen on the published 100-point rubric.
              </p>
            </div>
          </Reveal>

          <ol className="mt-16 md:mt-20 grid gap-14 md:grid-cols-3 md:gap-6 md:items-end">
            {results.winners.map((w) => (
              <PodiumPlace key={w.name} w={w} />
            ))}
          </ol>

          {/* TO OUR WINNERS */}
          <Reveal>
            <div className="mx-auto mt-14 md:mt-16 max-w-3xl rounded-2xl border border-border-strong bg-surface p-6 md:p-8 flex gap-5 items-start">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="shrink-0 text-accent"
                aria-hidden
              >
                <rect x="4" y="9" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
                <path d="M5 11l15 12 15-12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <div>
                <h3 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
                  To our winners
                </h3>
                <p className="mt-2 text-[15.5px] text-ink-dim leading-relaxed">
                  {results.winnerNotice}
                </p>
                <p className="mt-3 text-[13px] text-ink-muted leading-relaxed">
                  AI Vanguard will never ask a winner for payment. If you have a question in the
                  meantime,{" "}
                  <a
                    href="/contact"
                    className="underline underline-offset-4 decoration-accent/60 hover:decoration-accent text-ink-dim hover:text-ink"
                  >
                    use the contact form
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>

          {/* WINNING ENTRIES */}
          {featured.length > 0 ? (
            <div className="mt-14 md:mt-20">
              <div className="text-[11px] uppercase tracking-[0.26em] text-accent">
                The winning entries
              </div>
              <div className="mt-4 border-b border-border">
                {featured.map((w) => (
                  <WorkFeature key={w.name} w={w} work={w.work!} />
                ))}
              </div>
            </div>
          ) : (
            <p className="mx-auto mt-8 max-w-3xl text-center text-[14px] text-ink-muted">
              A feature on each winning entry is being prepared and will be published here.
            </p>
          )}
        </Container>
      </section>

      {/* THE COMPETITION */}
      <section
        id="brief"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="The competition"
      >
        <Container size="wide">
          <Reveal>
            <SectionMark n="01" label="The 2026 competition" />
          </Reveal>

          <Reveal>
            <figure
              className="relative overflow-hidden rounded-2xl p-8 md:p-14 text-white"
              style={{
                background: `radial-gradient(60% 90% at 100% 0%, rgba(226,196,119,0.16), transparent 60%), ${PLUM}`,
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.26em]" style={{ color: GOLD }}>
                The question
              </div>
              <blockquote className="mt-4 font-display text-3xl md:text-5xl lg:text-[60px] leading-[1.06] tracking-tight max-w-4xl">
                What would you automate, and{" "}
                <span className="serif-italic" style={{ color: GOLD }}>
                  what would you refuse to automate?
                </span>
              </blockquote>
              <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12 max-w-4xl">
                <div className="border-t border-white/20 pt-5">
                  <h3 className="font-display text-2xl tracking-tight">Design the classroom.</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#ddd4f3]">
                    The AI-era classroom or learning experience you would genuinely want to learn
                    in. Any format: an app, an essay, a film, a design.
                  </p>
                </div>
                <div className="border-t border-white/20 pt-5">
                  <h3 className="font-display text-2xl tracking-tight">Defend one refusal.</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#ddd4f3]">
                    Name one thing you&apos;d refuse to automate, and defend it with reasoning, not
                    sentiment.
                  </p>
                </div>
              </div>
            </figure>
          </Reveal>

          {/* TIMELINE */}
          <Reveal>
            <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
              <span
                className="absolute left-[11px] top-2 bottom-2 w-px bg-border-strong md:left-0 md:right-0 md:top-[11px] md:bottom-auto md:h-px md:w-auto"
                aria-hidden
              />
              {timeline.map((t, i) => {
                const last = i === timeline.length - 1;
                return (
                  <li key={t.what} className="relative pl-10 md:pl-0 md:pt-10">
                    <span
                      className="absolute left-0 top-0 flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 bg-bg"
                      style={{ borderColor: last ? METAL[1].base : "var(--color-accent)" }}
                      aria-hidden
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: last ? METAL[1].base : "var(--color-accent)" }}
                      />
                    </span>
                    <div className="fig text-xl md:text-2xl text-ink">{t.when}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-accent">
                      {t.what}
                    </div>
                    <p className="mt-2 text-[13.5px] text-ink-muted leading-relaxed">{t.note}</p>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* JUDGING */}
      <section
        id="rubric"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="Judging"
      >
        <Container size="wide">
          <Reveal>
            <SectionMark n="02" label="Judging · 100 points" />
          </Reveal>

          <div className="grid gap-10 md:grid-cols-12 md:gap-14 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <SectionHeading
                  title={
                    <>
                      Every format, scored on{" "}
                      <span className="serif-italic">the same five criteria.</span>
                    </>
                  }
                  blurb="The thinking is scored, not the medium. A brilliant essay beats a mediocre app, and vice versa."
                />
                <div className="mt-8 flex items-center gap-5 rounded-2xl border border-border bg-surface p-5 md:p-6">
                  <Portrait
                    name={results.judge.name}
                    initials={results.judge.initials}
                    size="md"
                    className="!h-20 !w-20 !text-2xl"
                  />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-accent">Grader</div>
                    <div className="mt-1 font-display text-2xl tracking-tight text-ink">
                      {results.judge.name}
                    </div>
                    <div className="mt-1 text-[14px] text-ink-dim">
                      {results.judge.credential.charAt(0).toUpperCase() +
                        results.judge.credential.slice(1)}
                    </div>
                    {results.judge.detail && (
                      <div className="mt-1 text-[13px] text-ink-muted">{results.judge.detail}</div>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <Button href="/competition/rubric" variant="secondary" size="md">
                    Official rubric, full score bands →
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                {/* Weight of each criterion, drawn to scale out of 100 points. */}
                <div
                  className="flex h-14 w-full gap-[2px] overflow-hidden rounded-lg"
                  role="img"
                  aria-label={`Rubric weights out of 100 points: ${rubric
                    .map((c) => `${c.title} ${c.points}`)
                    .join(", ")}.`}
                >
                  {rubric.map((c) => (
                    <div
                      key={c.n}
                      className="flex items-center justify-center bg-accent text-white"
                      style={{ width: `${c.points}%` }}
                    >
                      <span className="fig text-lg">{c.points}</span>
                    </div>
                  ))}
                </div>
                <ol className="mt-2 divide-y divide-border border-b border-border">
                  {rubric.map((c) => (
                    <li
                      key={c.n}
                      className="grid grid-cols-[40px_1fr_auto] gap-4 py-4 items-baseline"
                    >
                      <span className="fig text-sm text-accent">{c.n}</span>
                      <div>
                        <h3 className="font-display text-xl md:text-[22px] leading-[1.15] tracking-tight text-ink">
                          {c.title}
                        </h3>
                        <p className="mt-1 font-display italic text-[15px] text-ink-dim leading-snug">
                          {c.question}
                        </p>
                      </div>
                      <span className="fig text-lg text-ink">{c.points} pts</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-[13.5px] text-ink-muted leading-relaxed">
                  <span className="uppercase tracking-[0.18em] text-[11px]">Tiebreaker</span>: the
                  higher score on Insight &amp; Originality.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {process.map((p) => (
                <li key={p.n} className="bg-bg p-6 md:p-8">
                  <span className="fig text-2xl text-accent">{p.n}</span>
                  <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] text-ink-dim leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* WHAT ENTRIES INCLUDED + RULES */}
      <section
        id="requirements"
        className="py-14 md:py-20 scroll-mt-28 border-b border-border"
        data-rail-section="Entries and rules"
      >
        <Container size="wide">
          <Reveal>
            <SectionMark n="03" label="Entries and rules" />
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

          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((r) => (
              <li key={r.title} className="bg-bg p-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">{r.tag}</span>
                <h3 className="mt-3 font-display text-xl md:text-[22px] leading-[1.15] tracking-tight text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-ink-dim leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ul>

          <details id="rules" className="group mt-10 scroll-mt-28 rounded-2xl border border-border">
            <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 md:px-8 list-none">
              <span className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
                The ten rules, in plain language
              </span>
              <span className="shrink-0 text-ink-dim transition-transform duration-200 group-open:rotate-45">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <ol className="grid gap-x-14 gap-y-6 border-t border-border px-6 py-8 md:grid-cols-2 md:px-8">
              {rules.map((r, i) => (
                <li key={r.title} className="grid grid-cols-[40px_1fr] gap-3 items-baseline">
                  <span className="fig text-sm text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-display text-lg md:text-xl tracking-tight text-ink">{r.title}</h4>
                    <p className="mt-1 text-[14.5px] text-ink-dim leading-relaxed">{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </details>
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
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
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
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-3">
                <Medal place={2} size={40} />
                <Medal place={1} size={52} />
                <Medal place={3} size={40} />
              </div>
              <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ink">
                Congratulations to{" "}
                <span className="serif-italic">the 2026 winners.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[16px] md:text-[17px] text-ink-dim leading-relaxed">
                And thank you to everyone who entered. The next Open will be announced on this
                page.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href={results.article} size="lg">
                  Read the announcement
                </Button>
                <Button href="/get-involved" variant="secondary" size="lg">
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
