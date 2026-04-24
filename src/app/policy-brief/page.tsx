import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { survey2025, teacherSurvey2026 } from "@/lib/research";

export const metadata: Metadata = {
  title: "Policy Brief",
  description:
    "AI Vanguard's position on AI in K-12 education — six asks for schools and districts, grounded in student-voice research across Southern California.",
};

export default function PolicyBriefPage() {
  return (
    <>
      {/* Masthead */}
      <section
        className="border-b border-border banner-wash"
        data-rail-section="Policy brief"
      >
        <Container size="wide" className="pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="flex items-center justify-between gap-6 flex-wrap text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-6">
            <span>AI Vanguard · Policy Brief 01</span>
            <span>Spring 2026 edition</span>
            <span>aivanguard.org</span>
          </div>
          <div className="flex justify-end mb-10">
            <Button href="/policy-brief/pdf" variant="secondary" size="md">
              Open document view (PDF-ready)
            </Button>
          </div>

          <Reveal>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-accent mb-6">
              <span className="h-px w-8 bg-accent" aria-hidden />
              <span>A position from students</span>
            </div>
            <h1 className="font-display tracking-tight leading-[0.98] text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px] text-ink max-w-5xl">
              Student voice on AI{" "}
              <span className="serif-italic text-ink-dim">
                in education.
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-[17px] md:text-[19px] leading-[1.55] text-ink-dim">
              A policy brief from AI Vanguard — the youth-led nonprofit
              organizing students around how AI is used in their classrooms.
              Six asks of schools and districts, each grounded in primary
              research run by our representatives across Southern California.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-4xl">
              {[
                { k: "Students surveyed", v: `${survey2025.meta.totalResponses}` },
                { k: "Campuses", v: `${survey2025.meta.schoolCount}` },
                { k: "Teachers surveyed", v: `${teacherSurvey2026.meta.totalResponses}` },
                { k: "Brief date", v: "Apr 2026" },
              ].map((x) => (
                <div key={x.k} className="bg-bg px-5 py-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    {x.k}
                  </div>
                  <div className="mt-1 fig text-2xl text-ink">{x.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Preamble */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                § 01 · Preamble
              </div>
            </div>
            <div className="md:col-span-8 max-w-3xl">
              <Reveal>
                <p className="font-display italic text-2xl md:text-[32px] leading-[1.2] tracking-tight text-ink">
                  The decisions being made right now about AI in classrooms
                  will shape the next decade of education.{" "}
                  <span className="not-italic text-ink-dim">
                    The students most affected are almost never in the room.
                  </span>
                </p>
                <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-ink-dim">
                  <p>
                    AI Vanguard exists to change that. We are a student-led
                    501(c)(3) nonprofit working across Southern California
                    campuses to ensure that school, district, and policy
                    conversations about AI include the people whose learning
                    they define.
                  </p>
                  <p>
                    This brief summarizes what we are hearing. Our 2025 policy
                    survey collected {survey2025.meta.totalResponses} responses
                    across {survey2025.meta.schoolCount} schools; our 2026
                    teacher pilot surveyed {teacherSurvey2026.meta.totalResponses}{" "}
                    educators; our representatives have run qualitative field
                    studies comparing AI-generated and student-written work.
                    The patterns are consistent enough to act on.
                  </p>
                  <p>
                    The asks that follow are what students are telling us a
                    good policy looks like. We invite schools, districts, and
                    policymakers to adopt them — and to bring student
                    representatives to the table when they do.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Core asks */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container size="wide">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-10">
              § 02 · Our six asks
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-[72px] leading-[1.02] tracking-tight text-ink max-w-4xl">
              What a good AI policy{" "}
              <span className="serif-italic text-ink-dim">
                looks like, from where students sit.
              </span>
            </h2>
          </Reveal>

          <ol className="mt-16 md:mt-20 divide-y divide-border border-y border-border">
            {asks.map((a) => (
              <Reveal key={a.n}>
                <li className="py-12 md:py-16 grid gap-8 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="fig text-3xl md:text-4xl text-accent">
                      {a.n}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-2xl md:text-[34px] leading-[1.08] tracking-tight text-ink">
                      {a.title}
                    </h3>
                    <p className="mt-4 font-display italic text-ink-dim text-lg md:text-xl leading-snug">
                      {a.tagline}
                    </p>
                  </div>
                  <div className="md:col-span-6 space-y-4 text-[15.5px] leading-[1.7] text-ink-dim">
                    <p>{a.body}</p>
                    <div className="pt-4 border-t border-border/60">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-ink-muted mb-2">
                        Evidence
                      </div>
                      <p className="text-[14px] text-ink-muted italic leading-snug">
                        {a.evidence}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* The ask of us */}
      <section className="py-14 md:py-20 border-b border-border surface-panel">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                § 03 · What we offer
              </div>
            </div>
            <div className="md:col-span-8 max-w-3xl">
              <Reveal>
                <h3 className="font-display text-2xl md:text-[36px] leading-[1.1] tracking-tight text-ink">
                  We don&apos;t just have asks.{" "}
                  <span className="serif-italic text-ink-dim">
                    We bring the student half of the room.
                  </span>
                </h3>
                <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-ink-dim">
                  <p>
                    Any school or district willing to consider these policy
                    positions should know what AI Vanguard provides in return:
                  </p>
                  <ul className="space-y-3 border-y border-border py-6">
                    {[
                      "A standing student representative on your campus, trained to run research and convene peer feedback.",
                      "Access to our ongoing survey instruments — policy, teacher, and creative-work perception — rerun each cycle.",
                      "Structured student forums your administration can attend or observe, not just read about.",
                      "Drafting help on AI-use guidelines, honor-code language, and detection-policy language, co-authored with students.",
                    ].map((b) => (
                      <li key={b} className="flex gap-4">
                        <span className="font-mono text-xs text-accent shrink-0 w-6 pt-1">
                          —
                        </span>
                        <span className="text-[15.5px]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Signature + CTA */}
      <section className="py-14 md:py-20">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.2fr_auto] md:gap-16 items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-6">
                  § 04 · In closing
                </div>
                <p className="font-display text-2xl md:text-[36px] leading-[1.16] tracking-tight text-ink max-w-3xl">
                  A policy students helped write{" "}
                  <span className="serif-italic text-ink-dim">
                    is a policy students can live with.
                  </span>
                </p>
                <p className="mt-6 text-[15.5px] md:text-[16px] text-ink-dim max-w-xl leading-relaxed">
                  To bring AI Vanguard to your school or district, or to receive
                  the full research dataset behind this brief, write to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink underline underline-offset-[6px] decoration-accent/50 hover:text-accent transition-colors"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button href="/policy-brief/pdf" size="lg">
                  Download as PDF
                </Button>
                <Button href="/impact" variant="secondary" size="lg">
                  See the data
                </Button>
                <Button href={site.applyUrl} external variant="ghost" size="lg">
                  Apply as a rep
                </Button>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex flex-wrap justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              <span>AI Vanguard · 501(c)(3) nonprofit · Student-led</span>
              <span>
                <Link
                  href="/about"
                  className="hover:text-ink transition-colors"
                >
                  About →
                </Link>
              </span>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

// Six asks — each grounded in a specific finding from the underlying data.
const asks = [
  {
    n: "01",
    title: "Teach responsible use — don't default to bans.",
    tagline: "Guidance beats prohibition. Students are already asking for it.",
    body:
      "Prohibition policies produce compliance-by-hiding, not compliance. The students most familiar with AI are the ones most insistent that schools teach — not ban — its use. Schools should adopt explicit curricula on responsible AI use: when to ask for help, how to verify outputs, when to cite, what counts as original work.",
    evidence:
      "74% of 447 surveyed students named \"teach students how to use AI responsibly\" as what schools should do — the single most-selected response. Only 4% called AI use outright cheating. Teachers report 3.3/5 confidence in detecting AI writing; detection-first policy is structurally brittle.",
  },
  {
    n: "02",
    title: "Give students a seat at the policy table.",
    tagline: "If students aren't in the room, the policy is incomplete.",
    body:
      "Student representatives should participate in drafting, reviewing, and revising any school- or district-level AI policy. Not as a formality — as a standing voice with the ability to flag implementation problems before they become enforcement problems.",
    evidence:
      "35% of students explicitly asked to be involved in shaping AI rules and policies — the second-most common policy preference in our survey. This is the clearest mandate we have seen for direct student input on any technology policy.",
  },
  {
    n: "03",
    title: "Differentiate by task, not by tool.",
    tagline: "Tutoring is not cheating. Submission-writing is.",
    body:
      "Policies should distinguish categories of academic work. AI assistance on studying, brainstorming, concept explanation, and work-checking should be broadly permitted. AI assistance on graded written submissions, creative work, and assessments should have clear, task-specific rules with labelling conventions.",
    evidence:
      "41% of students say AI is \"acceptable only for certain tasks\" — the most common qualified stance. 50% say \"acceptable if used responsibly.\" Only 4% reject all AI use. A binary allow/ban policy contradicts the actual student distribution of views.",
  },
  {
    n: "04",
    title: "Protect creative and identity-bearing work.",
    tagline: "Art, writing, and original voice are human by design.",
    body:
      "Creative-work policies deserve stricter protection. Student voice, artistic expression, and identity-bearing writing should be explicitly scoped as human-only work — both to preserve what makes the work educational and to prevent the erosion of creative skill-building.",
    evidence:
      "Multiple student comments surfaced unprompted concern about AI replacing creative work — one Cerritos sophomore wrote that AI art \"directly harms artists and takes away the purpose of art itself.\" Our qualitative perception study further found that teachers' grades on AI-generated work drop sharply once the AI source is revealed — subjective assessment of creative work is unstable in the presence of AI.",
  },
  {
    n: "05",
    title: "Close the access gap.",
    tagline: "If AI is essential to academic success, access is an equity issue.",
    body:
      "Schools that permit AI use should ensure equal access to AI tools across the student body. Reliance on personal devices and paid tools creates an invisible divide that tracks existing socioeconomic divides. District-sanctioned tools with equal access are the floor.",
    evidence:
      "18% of students say not all peers have the same access to AI tools at their school — with another 15% unsure. Unequal access in a setting where AI shapes academic outcomes is a straightforward equity failure to address.",
  },
  {
    n: "06",
    title: "Invest in teacher development, not just detection tools.",
    tagline: "Teachers need support as much as students need guidance.",
    body:
      "Schools should fund professional development on AI-present pedagogy — designing assignments that are AI-resilient, grading in an AI-present world, teaching critical evaluation of AI output. Detection software is a secondary tool, not the primary strategy.",
    evidence:
      "80% of teachers in our pilot feel pressure to integrate AI; 80% suspect frequent unauthorized student use. But when the same pilot gave teachers three unlabeled paragraphs to classify, they scored 30% accuracy — below the 33% you'd expect from guessing. Zero of ten teachers correctly identified the paragraph that was actually written by a student. Our separate perception study further showed that teachers' subjective grading shifts depending on whether AI source is revealed. Detection is neither high-confidence nor stable — and investing in it over pedagogy is structurally a losing strategy.",
  },
];
