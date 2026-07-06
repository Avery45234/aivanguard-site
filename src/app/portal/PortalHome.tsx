"use client";

import { useState, useSyncExternalStore } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import {
  createAdminAccount,
  daysUntilDeadline,
  getChecklistSnapshot,
  getProfileSnapshot,
  getServerChecklistSnapshot,
  getServerProfileSnapshot,
  saveChecklist,
  signIn,
  signOut,
  subscribeEntrant,
  type EntrantProfile,
  type SignInResult,
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

type DashboardTab = "competitions" | "entry" | "profile" | "organizer";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "On file"
    : d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
}

export function PortalHome() {
  // The server (and first client render) always sees the signed-out
  // auth gate; a profile stored on this device swaps in the dashboard
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
  const [tab, setTab] = useState<DashboardTab>("competitions");

  const toggle = (key: string) => {
    saveChecklist({ ...checklist, [key]: !checklist[key] });
  };

  if (!profile) {
    return <AuthGate />;
  }

  const daysLeft = daysUntilDeadline(DEADLINE);
  const done = checklistItems.filter((i) => checklist[i.key]).length;
  const firstName = profile.name?.split(" ")[0];

  return (
    <>
      {/* Dashboard header */}
      <section className="border-b border-border">
        <Container size="wide" className="py-8 md:py-10 flex items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl tracking-tight text-ink">
              Dashboard
            </h1>
            <p className="mt-1.5 text-[14px] text-ink-dim">
              Welcome back, {firstName ?? profile.email}!
              {profile.isAdmin && (
                <span className="ml-2 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-accent-deep align-middle">
                  Organizer
                </span>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={signOut}
            className="flex items-center gap-2 text-[13.5px] text-ink-dim hover:text-ink transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path
                d="M9.5 2H4a1 1 0 00-1 1v9a1 1 0 001 1h5.5M7 7.5h6m0 0L10.5 5M13 7.5L10.5 10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Logout
          </button>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container size="wide">
          {/* Tab bar */}
          <div
            className={`rounded-full bg-surface-2 p-1 grid ${
              profile.isAdmin ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"
            } max-w-3xl mx-auto`}
            role="tablist"
            aria-label="Dashboard sections"
          >
            {(
              [
                ["competitions", "Competitions"],
                ["entry", "My Submissions"],
                ["profile", "Profile"],
                ...(profile.isAdmin
                  ? ([["organizer", "Organizer"]] as [DashboardTab, string][])
                  : []),
              ] as [DashboardTab, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key ? "true" : "false"}
                onClick={() => setTab(key)}
                className={`h-10 rounded-full text-[13px] tracking-tight transition-all ${
                  tab === key
                    ? "bg-bg text-ink font-medium shadow-[0_1px_6px_rgba(60,34,116,0.15)]"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "competitions" && (
            <CompetitionsTab profile={profile} daysLeft={daysLeft} />
          )}
          {tab === "entry" && (
            <EntryTab
              profile={profile}
              checklist={checklist}
              done={done}
              toggle={toggle}
            />
          )}
          {tab === "profile" && (
            <ProfileTab profile={profile} done={done} />
          )}
          {tab === "organizer" && profile.isAdmin && <OrganizerTab />}
        </Container>
      </section>
    </>
  );
}

/* ---------- Competitions ---------- */

function CompetitionsTab({
  profile,
  daysLeft,
}: {
  profile: EntrantProfile;
  daysLeft: number;
}) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
        Available Competitions
      </h2>

      <div className="mt-5 rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-9">
        <h3 className="font-display text-2xl md:text-[26px] tracking-tight text-ink">
          Open Competition 2026
        </h3>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { k: "Registration period", v: "Open now" },
            {
              k: "Submission deadline",
              v: `September 25, 2026 · ${daysLeft} days left`,
            },
            { k: "Results released", v: "October 3, 2026" },
          ].map((x) => (
            <div key={x.k}>
              <div className="text-[12px] font-medium text-ink">{x.k}:</div>
              <div className="mt-1 text-[13.5px] text-ink-dim">{x.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button disabled className="opacity-50 cursor-not-allowed">
            Submit entry
          </Button>
          <span className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3.5 h-9 text-[13px] text-accent-deep">
            Submission window opens ahead of the deadline
          </span>
        </div>

        <div className="mt-8 rounded-xl border border-accent/25 bg-accent/5 px-6 py-9 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M4 10.5l4 4 8-9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="mt-4 font-display text-lg md:text-xl text-ink">
            You&apos;re registered for the Open Competition 2026.
          </p>
          <p className="mt-2 text-[13.5px] text-ink-dim">
            Submission instructions will arrive at{" "}
            <span className="text-ink">{profile.email}</span> before the window
            opens.
          </p>
        </div>
      </div>

      {/* Brief banner */}
      <div className="mt-8 rounded-2xl bg-ink px-8 py-9 md:px-10 flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-md">
          <div className="font-display text-2xl md:text-[26px] tracking-tight text-bg">
            The 2026 brief
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-bg/75">
            Design an AI-era classroom you&apos;d actually want to learn in —
            and defend one thing you&apos;d refuse to automate.
          </p>
        </div>
        <Button href="/competition" external size="lg">
          Read the brief ↗
        </Button>
      </div>
    </div>
  );
}

/* ---------- My Submissions ---------- */

function EntryTab({
  profile,
  checklist,
  done,
  toggle,
}: {
  profile: EntrantProfile;
  checklist: Record<string, boolean>;
  done: number;
  toggle: (key: string) => void;
}) {
  const steps = [
    {
      label: "Registered",
      sub: profile.registeredAt ? formatDate(profile.registeredAt) : "On file",
      state: "done" as const,
    },
    {
      label: "Entry submitted",
      sub: "Due September 25, 2026",
      state: "current" as const,
    },
    { label: "Screening", sub: "Completeness check", state: "todo" as const },
    { label: "Judging", sub: "Two judges per entry", state: "todo" as const },
    { label: "Results", sub: "October 3, 2026", state: "todo" as const },
  ];

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
          My Submissions
        </h2>
        <Button disabled variant="secondary" className="opacity-50 cursor-not-allowed">
          + New submission
        </Button>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-9">
        <span className="inline-flex items-center rounded-full bg-surface-2 px-3.5 h-7 text-[12px] text-ink-dim">
          Open Competition 2026
        </span>
        <h3 className="mt-4 font-display text-xl md:text-2xl tracking-tight text-ink">
          Your entry
        </h3>

        {/* Progress stepper */}
        <div className="mt-8 overflow-x-auto pb-2">
          <ol className="flex items-start min-w-[640px]">
            {steps.map((s, i) => (
              <li key={s.label} className="flex-1 flex items-start">
                <div className="flex flex-col items-center text-center min-w-[110px]">
                  <StepCircle state={s.state} n={i + 1} />
                  <div
                    className={`mt-3 text-[13px] font-medium ${
                      s.state === "todo" ? "text-ink-muted" : "text-ink"
                    }`}
                  >
                    {s.label}
                  </div>
                  <div className="mt-1 text-[11.5px] text-ink-muted leading-snug">
                    {s.sub}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`mt-4 h-px flex-1 min-w-[24px] ${
                      s.state === "done" ? "bg-accent" : "bg-border-strong"
                    }`}
                    aria-hidden
                  />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
          <span className="text-[13.5px] text-ink-dim">Result status:</span>
          <span className="inline-flex items-center rounded-full bg-surface-2 px-3.5 h-7 text-[12px] font-medium text-ink">
            In progress
          </span>
        </div>
      </div>

      {/* Checklist */}
      <div className="mt-8 rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-9">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink">
            Entry checklist
          </h3>
          <span className="fig text-sm text-ink-muted">
            {done}/{checklistItems.length} ready
          </span>
        </div>
        <p className="mt-1.5 text-[12.5px] text-ink-muted">
          Progress is saved on this device.
        </p>

        <ul className="mt-5 divide-y divide-border border-y border-border">
          {checklistItems.map((item) => {
            const checked = !!checklist[item.key];
            return (
              <li key={item.key}>
                <label className="flex items-start gap-4 py-4.5 md:py-5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(item.key)}
                    className="mt-1 h-4 w-4 shrink-0 accent-accent"
                  />
                  <span>
                    <span
                      className={`block text-[15px] font-medium transition-colors ${
                        checked
                          ? "text-ink-muted line-through"
                          : "text-ink group-hover:text-accent"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[13px] text-ink-dim leading-relaxed">
                      {item.hint}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/competition/rubric" external variant="secondary">
            Official judging rubric ↗
          </Button>
          <Button href="/competition#requirements" external variant="secondary">
            Submission requirements ↗
          </Button>
        </div>
      </div>
    </div>
  );
}

function StepCircle({ state, n }: { state: "done" | "current" | "todo"; n: number }) {
  if (state === "done") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-ink">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M2.5 7.5l3 3 6-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (state === "current") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent text-accent fig text-[13px]">
        {n}
      </span>
    );
  }
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-ink-muted fig text-[13px]">
      {n}
    </span>
  );
}

/* ---------- Profile ---------- */

function ProfileTab({
  profile,
  done,
}: {
  profile: EntrantProfile;
  done: number;
}) {
  const initials = profile.name
    ? profile.name
        .split(" ")
        .map((w) => w[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : profile.email[0]?.toUpperCase() ?? "?";

  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
        Entrant Profile
      </h2>

      <div className="mt-5 grid gap-6 md:grid-cols-2 items-start">
        {/* Profile information */}
        <div className="rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-8">
          <h3 className="font-display text-xl tracking-tight text-ink">
            Profile Information
          </h3>
          <div className="mt-6 flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-ink font-display text-xl">
              {initials}
            </span>
            <div className="mt-3 font-display text-2xl tracking-tight text-ink">
              {profile.name ?? "Entrant"}
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <ProfileRow k="Email" v={profile.email} />
            <ProfileRow k="Division" v={profile.division ?? "—"} />
            <ProfileRow k="Entry type" v={profile.entryType ?? "—"} />
            <ProfileRow
              k="Registered"
              v={profile.registeredAt ? formatDate(profile.registeredAt) : "On file"}
            />
          </div>
          <button
            type="button"
            onClick={signOut}
            className="mt-7 w-full rounded-full border border-border-strong h-11 text-[14px] text-ink hover:bg-surface transition-colors"
          >
            Sign out
          </button>
          <p className="mt-4 text-[12px] text-ink-muted text-center leading-relaxed">
            Need to correct your details?{" "}
            <a
              href="/portal/help"
              className="text-accent underline underline-offset-4"
            >
              Send us a request
            </a>
            .
          </p>
        </div>

        {/* Entry information */}
        <div className="rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-8">
          <h3 className="font-display text-xl tracking-tight text-ink">
            Entry Information
          </h3>
          <div className="mt-6 text-center">
            <div className="fig text-4xl text-accent">0</div>
            <div className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              Entries submitted
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <ProfileRow k="Competition" v="Open Competition 2026" />
            <ProfileRow k="Status" v="Registered ✓" />
            <ProfileRow k="Checklist" v={`${done}/${checklistItems.length} ready`} />
            <ProfileRow k="Submission deadline" v="September 25, 2026" />
            <ProfileRow k="Results released" v="October 3, 2026" />
          </div>
          <p className="mt-6 text-[12px] text-ink-muted leading-relaxed">
            Full entrant accounts — with password sign-in and entries stored
            across devices — arrive with the submission window.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Organizer ---------- */

function OrganizerTab() {
  return (
    <div className="mt-10">
      <div className="flex items-baseline gap-3">
        <h2 className="font-display text-2xl md:text-[28px] tracking-tight text-ink">
          Organizer
        </h2>
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
          Admin · this device
        </span>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-2 items-start">
        <div className="rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-8">
          <h3 className="font-display text-xl tracking-tight text-ink">
            Registrations &amp; inbox
          </h3>
          <p className="mt-3 text-[14px] text-ink-dim leading-relaxed">
            Every registration, help request, and contact message lands in the
            Formspree inbox. View sign-ups, delete participants, and export
            everything to CSV there — protected by your Formspree login.
          </p>
          <div className="mt-5">
            <Button
              href="https://formspree.io/forms/xpqgnpva/submissions"
              external
            >
              Open the Formspree inbox ↗
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-7 md:p-8">
          <h3 className="font-display text-xl tracking-tight text-ink">
            Judging documents
          </h3>
          <p className="mt-3 text-[14px] text-ink-dim leading-relaxed">
            The official rubric as published on the site, and your private
            Google Doc master for the judging panel.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/competition/rubric" external variant="secondary">
              Rubric document ↗
            </Button>
            <Button
              href="https://docs.google.com/document/d/1oerrzGc_gEt8e3eFfr4SbBrxBNr1ZNyUuH_WF_Pp3f4/edit"
              external
              variant="secondary"
            >
              Rubric Google Doc ↗
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-surface/60 px-6 py-5 text-[13px] text-ink-dim leading-relaxed">
        <strong className="text-ink">Coming with the entrant database:</strong>{" "}
        in-portal participant management — every entrant and submission listed
        right here, with delete and executive controls. Until then this tab
        holds your organizer links; the data itself stays behind your
        Formspree and Google logins.
      </div>
    </div>
  );
}

function ProfileRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 text-[13.5px]">
      <span className="text-ink-dim shrink-0">{k}:</span>
      <span className="text-ink text-right break-all">{v}</span>
    </div>
  );
}

/* ---------- Auth gate ---------- */

function AuthGate() {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<SignInResult | null>(null);
  const [adminSetup, setAdminSetup] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminPw2, setAdminPw2] = useState("");
  const [adminErr, setAdminErr] = useState<string | null>(null);

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const result = await signIn(email, password);
    if (result === "admin-setup") {
      setAdminSetup(true);
      setBusy(false);
      return;
    }
    if (result !== "ok") setError(result);
    setBusy(false);
  };

  const onCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPw.length < 8) {
      setAdminErr("Your password needs at least 8 characters.");
      return;
    }
    if (adminPw !== adminPw2) {
      setAdminErr("The passwords don't match.");
      return;
    }
    setAdminErr(null);
    setBusy(true);
    await createAdminAccount(email, adminPw);
    // The store emits on success, so the dashboard renders on its own.
  };

  return (
    <section className="py-14 md:py-24">
      <Container size="narrow">
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl border border-border bg-bg shadow-[0_8px_40px_rgba(60,34,116,0.10)] px-7 py-9 md:px-9 md:py-10">
            <div className="text-center">
              <div className="font-display text-[24px] tracking-tight text-ink">
                AI Vanguard
              </div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.26em] text-ink-muted">
                Entrant Portal
              </div>
              <h1 className="mt-6 font-display text-3xl md:text-[32px] tracking-tight text-ink">
                Open Competition 2026
              </h1>
              <p className="mt-4 text-[13.5px] text-ink-dim leading-relaxed">
                Registration for the 2026 AI Vanguard Open Competition is now
                open. Sign in to your entrant dashboard — or sign up first if
                you haven&apos;t entered yet.
              </p>
            </div>

            <div
              className="mt-7 rounded-full bg-surface-2 p-1 grid grid-cols-2"
              role="tablist"
              aria-label="Sign in or sign up"
            >
              <button
                type="button"
                role="tab"
                aria-selected={tab === "signin" ? "true" : "false"}
                onClick={() => setTab("signin")}
                className={`h-10 rounded-full text-[13px] tracking-tight transition-all ${
                  tab === "signin"
                    ? "bg-bg text-ink font-medium shadow-[0_1px_6px_rgba(60,34,116,0.15)]"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                Sign in
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "signup" ? "true" : "false"}
                onClick={() => setTab("signup")}
                className={`h-10 rounded-full text-[13px] tracking-tight transition-all ${
                  tab === "signup"
                    ? "bg-bg text-ink font-medium shadow-[0_1px_6px_rgba(60,34,116,0.15)]"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                Sign up
              </button>
            </div>

            {adminSetup ? (
              <form onSubmit={onCreateAdmin} className="mt-7 space-y-5">
                <div className="rounded-lg border border-accent/40 bg-accent/5 px-4 py-3 text-[13px] text-ink-dim leading-relaxed">
                  <span className="text-accent-deep font-medium">
                    Organizer email recognized.
                  </span>{" "}
                  Create your admin password to set up your organizer account
                  on this device.
                </div>
                <label className="block">
                  <span className="block text-[13px] font-medium text-ink mb-2">
                    Create admin password
                  </span>
                  <input
                    type="password"
                    value={adminPw}
                    onChange={(e) => setAdminPw(e.target.value)}
                    placeholder="At least 8 characters"
                    required
                    minLength={8}
                    autoFocus
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="block text-[13px] font-medium text-ink mb-2">
                    Confirm admin password
                  </span>
                  <input
                    type="password"
                    value={adminPw2}
                    onChange={(e) => setAdminPw2(e.target.value)}
                    placeholder="Type it again"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none"
                  />
                </label>
                {adminErr && (
                  <p className="text-[13px] text-accent">{adminErr}</p>
                )}
                <Button type="submit" size="lg" className="w-full" disabled={busy}>
                  {busy ? "Creating account…" : "Create organizer account"}
                </Button>
                <p className="text-[12.5px] text-ink-muted leading-relaxed text-center">
                  Stored only on this device as a salted hash — never sent
                  anywhere. You&apos;ll repeat this once per device until cloud
                  accounts launch.
                </p>
              </form>
            ) : tab === "signin" ? (
              <form onSubmit={onSignIn} className="mt-7 space-y-5">
                <label className="block">
                  <span className="block text-[13px] font-medium text-ink mb-2">
                    Email
                  </span>
                  <span className="relative block">
                    <span
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect
                          x="1.5"
                          y="3.25"
                          width="13"
                          height="9.5"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M2.5 4.5L8 9l5.5-4.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@school.edu"
                      required
                      autoFocus
                      autoComplete="email"
                      className="w-full rounded-lg border border-border bg-surface pl-11 pr-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="block text-[13px] font-medium text-ink mb-2">
                    Password
                  </span>
                  <span className="relative block">
                    <span
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect
                          x="3"
                          y="7"
                          width="10"
                          height="6.5"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M5.5 7V5a2.5 2.5 0 015 0v2"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </span>
                    <input
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      required
                      autoComplete="current-password"
                      className="w-full rounded-lg border border-border bg-surface pl-11 pr-12 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-bg focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-ink-muted hover:text-ink transition-colors"
                    >
                      {showPw ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path
                            d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M3 13L13 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path
                            d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      )}
                    </button>
                  </span>
                </label>

                {error === "no-account" && (
                  <div className="rounded-lg border border-accent/40 bg-accent/5 px-4 py-3 text-[13px] text-ink-dim leading-relaxed">
                    We couldn&apos;t find an account with that email on this
                    device — you need to{" "}
                    <button
                      type="button"
                      onClick={() => setTab("signup")}
                      className="text-accent underline underline-offset-4"
                    >
                      sign up first
                    </button>
                    . Registered on a different device? Your dashboard stays on
                    the device where you registered until full accounts launch.
                  </div>
                )}
                {error === "wrong-password" && (
                  <div className="rounded-lg border border-accent/40 bg-accent/5 px-4 py-3 text-[13px] text-ink-dim">
                    Incorrect password for that email. Try again.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={busy}>
                  {busy ? "Signing in…" : "Sign in"}
                </Button>
                <p className="text-[12.5px] text-ink-muted leading-relaxed text-center">
                  Your password unlocks your dashboard on this device. It&apos;s
                  stored only on this device as a salted hash — never sent to
                  us.
                </p>
                <p className="text-[13px] text-ink-dim text-center">
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
              <div className="mt-7">
                <p className="text-[14px] text-ink-dim leading-relaxed text-center">
                  Registration is your sign-up — free, a few minutes, one entry
                  per person or team. You&apos;ll create your password as part
                  of it and get your dashboard the moment you finish.
                </p>
                <Button href="/portal/register" size="lg" className="mt-6 w-full">
                  Start registration
                </Button>
                <p className="mt-5 text-[13px] text-ink-dim text-center">
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

          <div className="mt-6 rounded-xl border border-border bg-surface/70 px-6 py-4 text-center text-[13px] text-ink-dim">
            Questions or technical issues?{" "}
            <a
              href="/portal/help"
              className="text-accent underline underline-offset-4"
            >
              Open the help form
            </a>
            .
          </div>
          <p className="mt-5 text-center text-[12.5px] text-ink-muted">
            Submissions due September 25, 2026 · Results October 3, 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
