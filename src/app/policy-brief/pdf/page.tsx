import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { site } from "@/lib/site";
import { survey2025, teacherSurvey2026 } from "@/lib/research";
import "./document.css";

export const metadata: Metadata = {
  title: "Policy Brief — PDF version",
  description:
    "Document-form version of the AI Vanguard policy brief, optimized for printing and PDF export.",
  robots: { index: false, follow: true },
};

export default function PolicyBriefDocumentPage() {
  return (
    <div className="doc-page">
      {/* Print/download controls — visible on screen, hidden when printed */}
      <div className="doc-toolbar print:hidden">
        <div className="doc-toolbar-inner">
          <a href="/policy-brief" className="doc-toolbar-back">
            ← Back to web version
          </a>
          <PrintButton label="Print / Save as PDF" />
        </div>
      </div>

      <article className="doc-sheet">
        {/* Masthead — uses the real AI Vanguard logo PNG from
            /img/brand/aivanguard-mark.png. If the file is missing, the alt
            text renders instead. */}
        <header className="doc-masthead">
          <div className="doc-masthead-left">
            <img
              src="/img/brand/aivanguard-mark.png"
              alt="AI Vanguard"
              className="doc-mark"
              width={64}
              height={64}
            />
            <div>
              <div className="doc-org">AI Vanguard</div>
              <div className="doc-org-sub">
                Student voice on AI in education
              </div>
            </div>
          </div>
          <div className="doc-masthead-right">
            <div>
              <span className="doc-label">Brief no.</span>{" "}
              <span className="doc-value">01</span>
            </div>
            <div>
              <span className="doc-label">Date</span>{" "}
              <span className="doc-value">Spring 2026</span>
            </div>
            <div>
              <span className="doc-label">Site</span>{" "}
              <span className="doc-value">aivanguard.org</span>
            </div>
          </div>
        </header>

        <hr className="doc-rule" />

        {/* Title block */}
        <section className="doc-titleblock">
          <h1 className="doc-title">
            Student voice on AI <em>in education.</em>
          </h1>
          <p className="doc-subtitle">
            Six asks for schools and districts, grounded in primary research
            from AI Vanguard&apos;s student representatives across Southern
            California.
          </p>
          <dl className="doc-meta">
            <div>
              <dt>Students surveyed</dt>
              <dd>{survey2025.meta.totalResponses}</dd>
            </div>
            <div>
              <dt>Campuses</dt>
              <dd>{survey2025.meta.schoolCount}</dd>
            </div>
            <div>
              <dt>Teachers surveyed</dt>
              <dd>{teacherSurvey2026.meta.totalResponses}</dd>
            </div>
            <div>
              <dt>Brief date</dt>
              <dd>April 2026</dd>
            </div>
          </dl>
        </section>

        {/* Executive summary */}
        <section className="doc-section">
          <h2 className="doc-h2">Executive Summary</h2>
          <p>
            AI Vanguard is a student-led 501(c)(3) nonprofit founded in 2024 to
            ensure that students have a direct voice in how AI is used in their
            classrooms. This brief summarizes findings from three primary
            research projects — a {survey2025.meta.totalResponses}-response
            student policy survey, a{" "}
            {teacherSurvey2026.meta.totalResponses}-educator teacher pilot, and
            a qualitative perception study — and translates those findings into
            six concrete policy positions.
          </p>
          <p>
            The pattern across all three studies is consistent. Students want
            guidance over bans. Teachers feel pressure to adopt AI but lack the
            tools to evaluate it — in a blind detection test, educators
            averaged 30% accuracy, below the 33% expected from guessing, and
            zero of ten correctly identified the paragraph actually written by
            a student. Schools that build AI policy on detection alone are
            building on unstable ground.
          </p>
        </section>

        {/* Preamble */}
        <section className="doc-section">
          <h2 className="doc-h2">I. Preamble</h2>
          <p>
            The decisions being made right now about AI in classrooms will
            shape the next decade of education. The students most affected are
            almost never in the room when those decisions are made.
          </p>
          <p>
            AI Vanguard exists to change that. We organize students across
            Southern California into a serious policy voice — with research,
            with recommendations, and with standing relationships to the
            schools and districts we work with. This brief is our summary of
            what students are telling us a good AI policy looks like, and an
            invitation to bring those students to the policy table.
          </p>
        </section>

        {/* The asks */}
        <section className="doc-section">
          <h2 className="doc-h2">II. Six Asks</h2>
          <ol className="doc-asks">
            {asks.map((a) => (
              <li key={a.n} className="doc-ask">
                <div className="doc-ask-header">
                  <span className="doc-ask-num">{a.n}.</span>
                  <h3 className="doc-ask-title">{a.title}</h3>
                </div>
                <p className="doc-ask-body">{a.body}</p>
                <p className="doc-ask-evidence">
                  <span className="doc-evidence-label">Evidence —</span>{" "}
                  {a.evidence}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* What we offer */}
        <section className="doc-section">
          <h2 className="doc-h2">III. What AI Vanguard Offers</h2>
          <p>
            Any school or district considering these positions should know what
            AI Vanguard provides in return:
          </p>
          <ul className="doc-offer">
            <li>
              A standing student representative on your campus, trained to run
              research and convene peer feedback.
            </li>
            <li>
              Access to our ongoing survey instruments — policy, teacher, and
              creative-work perception — rerun each cycle.
            </li>
            <li>
              Structured student forums your administration can attend or
              observe, not just read about.
            </li>
            <li>
              Drafting help on AI-use guidelines, honor-code language, and
              detection-policy language, co-authored with students.
            </li>
          </ul>
        </section>

        {/* Closing */}
        <section className="doc-section">
          <h2 className="doc-h2">IV. In Closing</h2>
          <p>
            A policy students helped write is a policy students can live with.
            The asks above are what the evidence says a good policy looks like.
            The rest is a conversation we are ready to have.
          </p>
          <p>
            To bring AI Vanguard to your school or district, or to receive the
            full research dataset behind this brief, write to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </section>

        {/* Document footer */}
        <hr className="doc-rule" />
        <footer className="doc-footer">
          <div>AI Vanguard · 501(c)(3) nonprofit · Student-led</div>
          <div>aivanguard.org · info@aivanguard.org</div>
        </footer>
      </article>
    </div>
  );
}

const asks = [
  {
    n: "1",
    title: "Teach responsible use — don't default to bans.",
    body:
      "Prohibition policies produce compliance-by-hiding, not compliance. The students most familiar with AI are the ones most insistent that schools teach — not ban — its use. Schools should adopt explicit curricula on responsible AI use: when to ask for help, how to verify outputs, when to cite, what counts as original work.",
    evidence:
      "74% of 447 surveyed students named \"teach students how to use AI responsibly\" as what schools should do — the single most-selected response. Only 4% called AI use outright cheating.",
  },
  {
    n: "2",
    title: "Give students a seat at the policy table.",
    body:
      "Student representatives should participate in drafting, reviewing, and revising any school- or district-level AI policy — as a standing voice with the ability to flag implementation problems before they become enforcement problems.",
    evidence:
      "35% of students explicitly asked to be involved in shaping AI rules and policies — the second-most common policy preference in our survey and the clearest mandate we have seen for direct student input on any technology policy.",
  },
  {
    n: "3",
    title: "Differentiate by task, not by tool.",
    body:
      "Policies should distinguish categories of academic work. AI assistance on studying, brainstorming, concept explanation, and work-checking should be broadly permitted. AI assistance on graded written submissions and creative work should have clear, task-specific rules with labelling conventions.",
    evidence:
      "41% of students say AI is \"acceptable only for certain tasks\" — the most common qualified stance. 50% say \"acceptable if used responsibly.\" A binary allow/ban policy contradicts the actual student distribution of views.",
  },
  {
    n: "4",
    title: "Protect creative and identity-bearing work.",
    body:
      "Creative-work policies deserve stricter protection. Student voice, artistic expression, and identity-bearing writing should be explicitly scoped as human-only work — both to preserve what makes the work educational and to prevent the erosion of creative skill-building.",
    evidence:
      "Multiple student comments surfaced unprompted concern about AI replacing creative work. Our qualitative perception study further found that teachers' grades on AI-generated work drop once the AI source is revealed — subjective assessment of creative work is unstable in the presence of AI.",
  },
  {
    n: "5",
    title: "Close the access gap.",
    body:
      "Schools that permit AI use should ensure equal access to AI tools across the student body. Reliance on personal devices and paid tools creates an invisible divide that tracks existing socioeconomic divides. District-sanctioned tools with equal access are the floor.",
    evidence:
      "18% of students say not all peers have the same access to AI tools at their school, with another 15% unsure. Unequal access in a setting where AI shapes academic outcomes is a straightforward equity failure.",
  },
  {
    n: "6",
    title: "Invest in teacher development, not just detection tools.",
    body:
      "Schools should fund professional development on AI-present pedagogy — designing assignments that are AI-resilient, grading in an AI-present world, teaching critical evaluation of AI output. Detection software is a secondary tool, not the primary strategy.",
    evidence:
      "80% of teachers in our pilot feel pressure to integrate AI and 80% suspect frequent unauthorized use. But on a blind detection quiz, teachers averaged 30% accuracy (below the 33% chance baseline) and zero of ten correctly identified the paragraph actually written by a student. Detection is neither high-confidence nor stable.",
  },
];
