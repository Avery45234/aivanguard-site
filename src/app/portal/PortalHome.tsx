"use client";

import { useState, useSyncExternalStore } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import {
  clearProfile,
  daysUntilDeadline,
  getChecklistSnapshot,
  getProfileSnapshot,
  getServerChecklistSnapshot,
  getServerProfileSnapshot,
  saveChecklist,
  saveProfile,
  subscribeEntrant,
  type EntrantProfile,
} from "./profile";

const DEADLINE = new Date("2026-09-25T23:59:59");
const checklistItems = [
  {
    key: "work",
    title: "The work itself",
    hint: "App, essay, film, design — built, written, or made.",
  },
  {
    key: "rationale",
    title: "The Rationale",
    hint: "Max 300 words: the problem, the improvement, and your refusal.",
  },
  {
    key: "disclosure",
    title: "AI Use Disclosure",
    hint: "How you used AI tools. Undisclosed use is grounds for disqualification.",
  },
  {
    key: "links",
    title: "Hosted links ready",
    hint: "Repo, unlisted YouTube, or PDF link — whatever your format needs.",
  },
] as const;

export function PortalHome() {
  // The server (and first client render) always sees the signed-out
  // Welcome view; a profile stored on this device swaps in the dashboard
  // after hydration.
  const profile = useSyncExternalStore(
    subscribeEntrant,
    getProfileSnapshot,
    getServerProfileSnapshot,
  );
  const checklist = useSyncExternalStore(
    subscribeEntrant,
    getChecklistSnapshot,
    getServerChecklistSnapshot,
  );
  const [lookupEmail, setLookupEmail] = useState("");

  const openDashboard = (e: React.FormEvent) => {
    e.preventDefault();
    const p: EntrantProfile = { email: lookupEmail };
    saveProfile(p);
  };

  const toggle = (key: string) => {
    saveChecklist({ ...checklist, [key]: !checklist[key] });
  };

  if (!profile) {
    return <AuthGate lookupEmail={lookupEmail} setLookupEmail={setLookupEmail} onOpen={openDashboard} />;
  }

  const daysLeft = daysUntilDeadline(DEADLINE);
  const done = checklistItems.filter((i) => checklist[i.key]).length;
  const firstName = profile.name?.split(" ")[0];

  return (
    <>
      {/* Dashboard header */}
      <section className="border-b border-border bg-surface/60">
        <Container size="wide" className="py-10 md:py-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
                Entrant Dashboard
              </div>
              <h1 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-ink">
                {firstName ? (
                  <>
                    Welcome back,{" "}
                    <span className="serif-italic">{firstName}.</span>
                  </>
                ) : (
                  <>
                    Welcome <span className="serif-italic">back.</span>
                  </>
                )}
              </h1>
              <p className="mt-3 text-[14px] text-ink-dim max-w-md">
                {profile.division
                  ? `${profile.division} division · ${profile.entryType ?? "Individual"} entry`
                  : `Signed in as ${profile.email}`}
              </p>
            </div>
            <div className="text-right">
              <div className="fig text-5xl md:text-6xl text-accent leading-none">
                {daysLeft}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                Days until the deadline
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14 items-start">
            {/* Status rail */}
            <div className="md:col-span-4 space-y-8">
              <div className="border border-border">
                <div className="px-5 py-4 border-b border-border text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  Entry status
                </div>
                <ol>
                  {[
                    {
                      label: "Registration",
                      state: profile.registeredAt
                        ? "Complete"
                        : "Confirm by email",
                      done: true,
                    },
                    {
                      label: "Submission",
                      state: "Due September 25, 2026",
                      done: false,
                      active: true,
                    },
                    {
                      label: "Results",
                      state: "October 3, 2026",
                      done: false,
                    },
                  ].map((s) => (
                    <li
                      key={s.label}
                      className="px-5 py-4 border-b border-border last:border-b-0 flex items-baseline justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] ${s.active ? "text-ink font-medium" : "text-ink-dim"}`}
                      >
                        {s.done ? "✓ " : ""}
                        {s.label}
                      </span>
                      <span className="text-[12px] text-ink-muted text-right">
                        {s.state}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border border-accent/40 bg-surface/50 p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent">
                  Submitting your entry
                </div>
                <p className="mt-3 text-[13.5px] text-ink-dim leading-relaxed">
                  The submission window opens here in the portal ahead of the
                  deadline. Registered entrants also receive instructions at
                  their contact email. Anything unclear before then?{" "}
                  <a
                    href={`mailto:${site.email}?subject=Competition%20Question`}
                    className="text-accent underline underline-offset-4"
                  >
                    Email us
                  </a>
                  .
                </p>
              </div>

              <button
                type="button"
                onClick={clearProfile}
                className="text-[12px] text-ink-muted hover:text-ink underline underline-offset-4 transition-colors"
              >
                Sign out of this device
              </button>
            </div>

            {/* Checklist */}
            <div className="md:col-span-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
                  Your entry checklist
                </h2>
                <span className="fig text-sm text-ink-muted">
                  {done}/{checklistItems.length} ready
                </span>
              </div>
              <p className="mt-2 text-[13px] text-ink-muted">
                Progress is saved on this device.
              </p>

              <ul className="mt-6 divide-y divide-border border-y border-border">
                {checklistItems.map((item) => {
                  const checked = !!checklist[item.key];
                  return (
                    <li key={item.key}>
                      <label className="flex items-start gap-4 py-5 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(item.key)}
                          className="mt-1 h-4 w-4 shrink-0 accent-accent"
                        />
                        <span>
                          <span
                            className={`block text-[16px] font-medium transition-colors ${
                              checked
                                ? "text-ink-muted line-through"
                                : "text-ink group-hover:text-accent"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[13.5px] text-ink-dim leading-relaxed">
                            {item.hint}
                          </span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/competition#rubric" external variant="secondary">
                  Review the rubric ↗
                </Button>
                <Button href="/competition#requirements" external variant="secondary">
                  Submission requirements ↗
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function AuthGate({
  lookupEmail,
  setLookupEmail,
  onOpen,
}: {
  lookupEmail: string;
  setLookupEmail: (v: string) => void;
  onOpen: (e: React.FormEvent) => void;
}) {
  const [tab, setTab] = useState<"signin" | "signup">("signup");

  return (
    <section className="py-14 md:py-24">
      <Container size="narrow">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
              AI Vanguard Open Competition · 2026
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight leading-[1.02] text-ink">
              Entrant <span className="serif-italic">Portal.</span>
            </h1>
          </div>

          <div className="mt-8 border border-border bg-bg shadow-[0_2px_24px_rgba(60,34,116,0.06)]">
            <div className="grid grid-cols-2" role="tablist" aria-label="Sign up or sign in">
              <button
                type="button"
                role="tab"
                aria-selected={tab === "signup" ? "true" : "false"}
                onClick={() => setTab("signup")}
                className={`h-12 text-[13px] uppercase tracking-[0.14em] transition-colors border-b ${
                  tab === "signup"
                    ? "border-accent text-ink font-medium"
                    : "border-border text-ink-muted hover:text-ink"
                }`}
              >
                Sign up
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "signin" ? "true" : "false"}
                onClick={() => setTab("signin")}
                className={`h-12 text-[13px] uppercase tracking-[0.14em] transition-colors border-b ${
                  tab === "signin"
                    ? "border-accent text-ink font-medium"
                    : "border-border text-ink-muted hover:text-ink"
                }`}
              >
                Sign in
              </button>
            </div>

            {tab === "signin" ? (
              <form onSubmit={onOpen} className="p-7 md:p-8">
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                    The email you registered with
                  </span>
                  <input
                    type="email"
                    value={lookupEmail}
                    onChange={(e) => setLookupEmail(e.target.value)}
                    placeholder="you@school.edu"
                    required
                    autoFocus
                    className="w-full border border-border bg-transparent px-4 py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
                  />
                </label>
                <Button type="submit" size="lg" className="mt-6 w-full">
                  Sign in to your dashboard
                </Button>
                <p className="mt-5 text-[12.5px] text-ink-muted leading-relaxed">
                  No password needed yet — signing in restores your dashboard
                  on this device. Full entrant accounts arrive with the
                  submission window.
                </p>
                <p className="mt-4 text-[13px] text-ink-dim">
                  New here?{" "}
                  <button
                    type="button"
                    onClick={() => setTab("signup")}
                    className="text-accent underline underline-offset-4 hover:text-accent-deep"
                  >
                    Sign up as an entrant
                  </button>
                </p>
              </form>
            ) : (
              <div className="p-7 md:p-8">
                <h2 className="font-display text-2xl tracking-tight text-ink">
                  Register your entry.
                </h2>
                <p className="mt-3 text-[14.5px] text-ink-dim leading-relaxed">
                  Registration is your sign-up — free, a few minutes, one entry
                  per person or team. You&apos;ll get your dashboard the moment
                  you finish.
                </p>
                <Button href="/portal/register" size="lg" className="mt-6 w-full">
                  Start registration
                </Button>
                <p className="mt-5 text-[13px] text-ink-dim">
                  Already registered?{" "}
                  <button
                    type="button"
                    onClick={() => setTab("signin")}
                    className="text-accent underline underline-offset-4 hover:text-accent-deep"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-[12.5px] text-ink-muted">
            Submissions due September 25, 2026 · Results October 3, 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
