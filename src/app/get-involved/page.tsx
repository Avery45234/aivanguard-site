import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PortraitPlate } from "@/components/PortraitPlate";
import { reach, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Four ways in: become a student representative or researcher, bring structured student AI input into your district's policymaking, collaborate on student-centered research, or support the work.",
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
        blurb="Students, schools and districts, researchers, and supporters each have a way to plug in. Pick the path that fits — and start."
        meta={
          <ol className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <li><a href="#students" className="hover:text-ink">01 · Students</a></li>
            <li><a href="#districts" className="hover:text-ink">02 · Schools &amp; districts</a></li>
            <li><a href="#researchers" className="hover:text-ink">03 · Researchers &amp; organizations</a></li>
            <li><a href="#supporters" className="hover:text-ink">04 · Supporters</a></li>
          </ol>
        }
      />

      {/* 01 STUDENTS */}
      <section
        id="students"
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
                    Students
                  </span>
                </div>
                <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink">
                  Become a student representative{" "}
                  <span className="serif-italic">or researcher.</span>
                </h2>
                <p className="mt-8 text-[16px] md:text-[17px] text-ink-dim leading-relaxed max-w-lg">
                  Representatives are the bridge between their campus and AI
                  Vanguard: they run the surveys and conversations, and carry
                  what students say into the rooms where AI decisions get made.
                  Student researchers work on the studies themselves, from
                  coding public records to designing survey questions. State
                  and Chapter Director roles are open for students who want to
                  build the model where they live.
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
                  chapter="Founder"
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
                b: "High school students anywhere in the U.S. who care about how AI lands in their school. You don't need to be a 'tech person,' just someone willing to listen carefully and speak up.",
              },
              {
                t: "The roles",
                b: "Campus Representative: run research and conversations at your school. Student Researcher: work on our studies. State or Chapter Director: bring AI Vanguard to your state or school, with support from the national cabinet.",
              },
              {
                t: "Time commitment",
                b: "A few hours a week, including evening virtual meetings, with more around major research or advocacy pushes.",
              },
              {
                t: "What you get",
                b: "Real research and governance experience, a cross-state network of student leaders, and ownership over work that districts actually look at.",
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

      {/* 02 SCHOOLS & DISTRICTS */}
      <section
        id="districts"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="Schools & districts"
      >
        <Container size="wide">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="fig text-2xl text-accent">02</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Schools &amp; districts
              </span>
            </div>
            <SectionHeading
              title={
                <>
                  Bring structured student AI input{" "}
                  <span className="serif-italic">into your policymaking.</span>
                </>
              }
              blurb="Not a one-time student panel. A repeatable way to hear from students before AI guidance is written, while tools are being chosen, and after they roll out. We have done this inside a district; we can help you do it in yours."
            />
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {[
              {
                tag: "Research",
                title: "Run a student-voice study",
                body: "We design and run a survey or focus group on your campuses and deliver findings your leadership can use, with student privacy protected throughout.",
              },
              {
                tag: "Advisory",
                title: "Stand up a student AI advisory structure",
                body: "A standing student liaison, an advisory group, or a council with a mentorship pipeline, built to survive graduation. Modeled on the structure we are developing with ABC Unified.",
              },
              {
                tag: "Presentation",
                title: "Put students in front of your staff or board",
                body: "Student-led sessions for professional-learning days, board meetings, or family events, grounded in what students actually report about AI.",
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
                href={`mailto:${site.email}?subject=Student%20AI%20input%20for%20our%20district`}
                size="lg"
              >
                Email us about your district
              </Button>
              <Button href="/our-work#abcusd" variant="secondary" size="lg">
                See the ABC Unified case study
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 03 RESEARCHERS & ORGANIZATIONS */}
      <section
        id="researchers"
        className="py-14 md:py-20 border-t border-border scroll-mt-28"
        data-rail-section="Researchers"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="fig text-2xl text-accent">03</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    Researchers &amp; education organizations
                  </span>
                </div>
                <SectionHeading
                  title={
                    <>
                      Collaborate on{" "}
                      <span className="serif-italic">student-centered research.</span>
                    </>
                  }
                  blurb="We bring students who can help design instruments, sit on focus groups, and explain the why behind survey answers. We are in conversation with Project Tomorrow's Speak Up program about exactly this, and open to more."
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ul className="divide-y divide-border border-y border-border">
                  {[
                    {
                      t: "Instruments",
                      b: "Student review of survey questions before they go to the field, so the wording matches how students actually experience AI at school.",
                    },
                    {
                      t: "Qualitative depth",
                      b: "Student focus groups and interviews that add context to quantitative findings.",
                    },
                    {
                      t: "Methods",
                      b: "Our preregistered public-records approach to studying student influence on district policy, shared openly with anyone studying the same question.",
                    },
                  ].map((x) => (
                    <li
                      key={x.t}
                      className="py-8 grid grid-cols-[130px_1fr] gap-6 items-baseline"
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
                <div className="mt-8">
                  <Button
                    href={`mailto:${site.email}?subject=Research%20collaboration%20with%20AI%20Vanguard`}
                    variant="secondary"
                    size="lg"
                  >
                    Propose a collaboration
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 04 SUPPORTERS */}
      <section
        id="supporters"
        className="py-14 md:py-20 border-t border-border scroll-mt-28 surface-panel"
        data-rail-section="Supporters"
      >
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="fig text-2xl text-accent">04</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    Supporters
                  </span>
                </div>
                <SectionHeading
                  title={
                    <>
                      Mentor, sponsor,{" "}
                      <span className="serif-italic">invite, or connect.</span>
                    </>
                  }
                  blurb="Student voice on AI in education needs adult allies — educators, researchers, funders, and press."
                />
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ul className="divide-y divide-border border-y border-border">
                  {[
                    {
                      t: "Mentor",
                      b: "Advise the cabinet on research methods, district process, or organizational strategy.",
                    },
                    {
                      t: "Sponsor",
                      b: "Fund a research cycle, the Vanguard Open prize pool, or onboarding for a new state.",
                    },
                    {
                      t: "Invite",
                      b: "Put a student on your panel, in front of your staff, or at your board meeting.",
                    },
                    {
                      t: "Connect",
                      b: "Introduce us to a district leader, a researcher, or a reporter who should know this work exists.",
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
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" size="lg">
                    Get in touch
                  </Button>
                  <Button href="/press" variant="secondary" size="lg">
                    Press kit
                  </Button>
                </div>
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
                q: "Do I need to be in California to apply?",
                a: `No. Student roles are open nationwide. We currently have student leadership in ${reach.states.length} states: ${reach.states.join(", ")}. State and Chapter Director roles exist to bring the model to more.`,
              },
              {
                q: "Is there a fee to join or partner?",
                a: "No. AI Vanguard is a student-led nonprofit. Participation as a student leader or district partner is free.",
              },
              {
                q: "How do you handle student data in your research?",
                a: "Research participation is voluntary, and surveys and focus groups are designed to protect student privacy. We publish nothing that identifies an individual student, and our records study uses only public or legally obtained documents.",
              },
              {
                q: "Can I get in touch about something that isn't listed here?",
                a: "Yes. The contact page has the right channels for general questions, press, and district inquiries.",
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
