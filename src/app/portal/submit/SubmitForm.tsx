"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/Button";
import { SUBMISSION_DEADLINE } from "@/lib/competition";
import {
  getProfileSnapshot,
  getServerProfileSnapshot,
  getServerSubmissionSnapshot,
  getSubmissionSnapshot,
  isPastDeadline,
  saveSubmission,
  subscribeEntrant,
} from "../profile";

const formats = [
  "App / prototype",
  "Essay / written work",
  "Video / film",
  "Design / visual work",
  "Other",
];

const RATIONALE_LIMIT = 300;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

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

export function SubmitForm() {
  const profile = useSyncExternalStore(
    subscribeEntrant,
    getProfileSnapshot,
    getServerProfileSnapshot,
  );
  const existing = useSyncExternalStore(
    subscribeEntrant,
    getSubmissionSnapshot,
    getServerSubmissionSnapshot,
  );

  const [state, handleSubmit] = useForm("xpqgnpva");
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [format, setFormat] = useState("");
  const [workUrl, setWorkUrl] = useState("");
  const [extraUrl, setExtraUrl] = useState("");
  const [rationale, setRationale] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [agreedAccess, setAgreedAccess] = useState(false);
  const [agreedOriginal, setAgreedOriginal] = useState(false);
  const [agreedConsent, setAgreedConsent] = useState(false);

  // Prefill from the previous submission and switch into update mode.
  const beginUpdate = () => {
    if (existing) {
      setTitle(existing.title);
      setFormat(existing.format);
      setWorkUrl(existing.workUrl);
      setExtraUrl(existing.extraUrl ?? "");
    }
    setEditing(true);
  };

  const isUpdate = !!existing;
  const words = wordCount(rationale);
  const overLimit = words > RATIONALE_LIMIT;
  const allAgreed = agreedAccess && agreedOriginal && agreedConsent;
  const closed = isPastDeadline(SUBMISSION_DEADLINE);

  // Record the submission on this device the moment Formspree accepts it,
  // so the dashboard flips to submitted state.
  useEffect(() => {
    if (!state.succeeded) return;
    const now = new Date().toISOString();
    saveSubmission({
      title,
      format,
      workUrl,
      extraUrl: extraUrl || undefined,
      submittedAt: isUpdate && existing ? existing.submittedAt : now,
      updatedAt: isUpdate ? now : undefined,
    });
    // Snapshot the entry at the moment of success only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.succeeded]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (overLimit) {
      e.preventDefault();
      setFormError(
        `Your Rationale is ${words} words. The limit is ${RATIONALE_LIMIT}, and judges hold every entrant to it equally.`,
      );
      return;
    }
    setFormError(null);
    handleSubmit(e);
  };

  /* ---------- Gates, in order ---------- */

  if (!profile) {
    return (
      <GateCard
        eyebrow="Sign in required"
        title="Your entry needs an entrant behind it."
        body="Submissions are tied to your registration. Sign in to your dashboard on the device you registered with, or register first if you haven't yet."
      >
        <Button href="/portal" size="lg">
          Sign in to the portal
        </Button>
        <Button href="/portal/register" variant="secondary" size="lg">
          Register to enter
        </Button>
      </GateCard>
    );
  }

  if (state.succeeded) {
    return (
      <div className="border border-accent/50 bg-surface/40 p-8 md:p-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
          {isUpdate ? "Entry updated" : "Entry received"}
        </div>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink tracking-tight">
          {isUpdate
            ? "Your updated entry is in."
            : `That's a real entry${profile.name ? `, ${profile.name.split(" ")[0]}` : ""}. Well done.`}
        </h3>
        <div className="mt-6 space-y-4 text-[15px] text-ink-dim leading-relaxed max-w-xl">
          <p>
            <strong className="text-ink">{title}</strong> has been delivered to
            the organizers. Keep your links live and viewable through{" "}
            <strong className="text-ink">October 3, 2026</strong>: judges score
            what they can open.
          </p>
          <p>
            Need to change something? You can resubmit from your dashboard any
            time before September 25, 2026. The newest submission is the one
            judged.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/portal" size="lg">
            Back to your dashboard →
          </Button>
        </div>
      </div>
    );
  }

  if (closed) {
    return (
      <GateCard
        eyebrow="Submissions closed"
        title="The window closed September 25, 2026."
        body={
          existing
            ? `Your entry "${existing.title}" was submitted ${formatDate(
                existing.submittedAt,
              )} and is with the judges. Results are announced October 3, 2026.`
            : "The Vanguard Open 2026 is no longer accepting entries. Results are announced October 3, 2026, and the next Open will be announced on aivanguard.org."
        }
      >
        <Button href="/portal" variant="secondary" size="lg">
          Back to the portal
        </Button>
      </GateCard>
    );
  }

  if (existing && !editing) {
    return (
      <GateCard
        eyebrow="Entry on file"
        title={`"${existing.title}" is submitted.`}
        body={`Submitted ${formatDate(existing.submittedAt)}${
          existing.updatedAt ? `, last updated ${formatDate(existing.updatedAt)}` : ""
        }. You can replace it with a newer version any time before the deadline. Resubmitting sends a complete new entry, including the Rationale and AI Use Disclosure, and the newest submission is the one judged.`}
      >
        <Button size="lg" onClick={beginUpdate}>
          Update my entry
        </Button>
        <Button href="/portal" variant="secondary" size="lg">
          Back to the portal
        </Button>
      </GateCard>
    );
  }

  /* ---------- The form ---------- */

  const isTeam = (profile.entryType ?? "").toLowerCase().includes("team");

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <input type="hidden" name="division" value={profile.division ?? ""} />
      <input type="hidden" name="entryType" value={profile.entryType ?? ""} />
      <input
        type="hidden"
        name="submissionKind"
        value={isUpdate ? "update" : "initial"}
      />
      <input
        type="hidden"
        name="_subject"
        value={`${isUpdate ? "UPDATED Submission" : "Competition Submission"} — ${
          profile.name || profile.email
        }`}
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {isUpdate && (
        <div className="rounded-lg border border-accent/40 bg-accent/5 px-4 py-3 text-[13px] text-ink-dim leading-relaxed">
          <span className="text-accent-deep font-medium">
            You are replacing your submitted entry.
          </span>{" "}
          Send the complete entry again. The newest submission is the one
          judged.
        </div>
      )}

      {/* 01 · ENTRANT */}
      <fieldset className="space-y-9">
        <SectionTitle n="01" title="Entrant" />

        <Field label={isTeam ? "Team lead — full name" : "Full name"}>
          <Input
            name="name"
            value={profile.name}
            readOnly={!!profile.name}
            placeholder="Alex Rivera"
            required
          />
          <Hint>
            From your registration. Wrong?{" "}
            <Link
              href="/portal/help"
              className="text-accent underline underline-offset-4"
            >
              Send us a correction
            </Link>
            .
          </Hint>
        </Field>
        <Field label="Contact email">
          <Input name="email" type="email" value={profile.email} readOnly required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-[13px] text-accent"
          />
        </Field>

        {isTeam && (
          <Field label="Team members — full names">
            <Input
              name="teamMembers"
              placeholder="Jordan Kim, Sam Patel, …"
              required
            />
            <Hint>
              Everyone listed here shares the entry and splits any prize
              equally.
            </Hint>
          </Field>
        )}
      </fieldset>

      {/* 02 · THE WORK */}
      <fieldset className="space-y-9">
        <SectionTitle n="02" title="The work" />

        <Field label="Entry title">
          <Input
            name="entryTitle"
            value={title}
            onChange={setTitle}
            placeholder="The name of what you made"
            required
          />
        </Field>

        <Field label="Format">
          <select
            name="format"
            required
            aria-label="Format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink transition-colors focus:border-accent focus:outline-none"
          >
            <option value="" disabled className="bg-bg text-ink-muted">
              Select one…
            </option>
            {formats.map((o) => (
              <option key={o} value={o} className="bg-bg text-ink">
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Primary link — the work itself">
          <Input
            name="workUrl"
            type="url"
            value={workUrl}
            onChange={setWorkUrl}
            placeholder="https://…"
            required
          />
          <Hint>
            Public repo or hosted demo for apps, PDF link for written and
            visual work, unlisted YouTube for film. Judges must be able to open
            it without asking for access.
          </Hint>
        </Field>

        <Field label="Second link (optional)">
          <Input
            name="extraUrl"
            type="url"
            value={extraUrl}
            onChange={setExtraUrl}
            placeholder="https://…"
          />
          <Hint>
            Code and app entries: put your 2 to 3 minute walkthrough video
            here. A screen recording is fine.
          </Hint>
        </Field>
      </fieldset>

      {/* 03 · THE RATIONALE */}
      <fieldset className="space-y-9">
        <SectionTitle n="03" title="The Rationale" />

        <Field label={`Max ${RATIONALE_LIMIT} words · judged with equal weight for every entrant`}>
          <textarea
            name="rationale"
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            rows={10}
            required
            placeholder={
              "Three questions, one statement:\n" +
              "· What problem does your classroom design solve, and for whom?\n" +
              "· What can be improved in classrooms through AI?\n" +
              "· What is the one thing you refuse to automate, and why?"
            }
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none resize-y leading-relaxed"
          />
          <span
            className={`mt-2 block fig text-[13px] ${
              overLimit ? "text-accent font-medium" : "text-ink-muted"
            }`}
            aria-live="polite"
          >
            {words} / {RATIONALE_LIMIT} words
            {overLimit && " · over the limit"}
          </span>
        </Field>
      </fieldset>

      {/* 04 · AI USE DISCLOSURE */}
      <fieldset className="space-y-9">
        <SectionTitle n="04" title="AI Use Disclosure" />

        <Field label="How you used AI tools in creating this entry">
          <textarea
            name="aiDisclosure"
            rows={6}
            required
            placeholder="Which tools, for what, and how much. Heavy AI use is fine; hidden AI use is disqualifying. 'None' is also an acceptable answer, if it's true."
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none resize-y leading-relaxed"
          />
        </Field>
      </fieldset>

      {/* 05 · DECLARATIONS */}
      <fieldset className="space-y-5">
        <SectionTitle n="05" title="Declarations" />

        <Declaration
          name="declarationLinksWork"
          checked={agreedAccess}
          onChange={setAgreedAccess}
        >
          I have opened every link above in a private browsing window and it
          works without signing in. I understand judges score what they can
          open, and I&apos;ll keep the links live through October 3, 2026.
        </Declaration>

        <Declaration
          name="declarationOriginalWork"
          checked={agreedOriginal}
          onChange={setAgreedOriginal}
        >
          This entry is my own work (or my team&apos;s own), created for this
          competition, and every use of AI is disclosed above. I understand
          that undisclosed AI use, plagiarism, or fabricated data are grounds
          for disqualification.
        </Declaration>

        <Declaration
          name="declarationConsent"
          checked={agreedConsent}
          onChange={setAgreedConsent}
        >
          Any real, identifiable people shown in this entry have consented to
          appear in it, and the entry meets the{" "}
          <a
            href="/competition#rules"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
          >
            content standards ↗
          </a>
          .
        </Declaration>
      </fieldset>

      {formError && (
        <p className="text-[14px] text-accent leading-relaxed">{formError}</p>
      )}
      <ValidationError
        errors={state.errors}
        className="block text-[14px] text-accent"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
        <p className="text-xs text-ink-muted max-w-xs">
          Due September 25, 2026, 11:59 PM Pacific. You can resubmit until
          then; the newest submission is the one judged.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={!allAgreed || overLimit || state.submitting}
        >
          {state.submitting
            ? "Submitting…"
            : isUpdate
              ? "Replace my entry"
              : "Submit my entry"}
        </Button>
      </div>
    </form>
  );
}

/* ---------- Local pieces ---------- */

function GateCard({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-bg shadow-[0_2px_16px_rgba(60,34,116,0.05)] p-8 md:p-10">
      <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-2xl md:text-3xl tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-4 text-[15px] text-ink-dim leading-relaxed">{body}</p>
      <div className="mt-8 flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-4">
      <span className="fig text-sm text-accent">{n}</span>
      <legend className="font-display text-xl md:text-2xl tracking-tight text-ink">
        {title}
      </legend>
    </div>
  );
}

function Declaration({
  name,
  checked,
  onChange,
  children,
}: {
  name: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer max-w-xl">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required
        className="mt-1 h-4 w-4 shrink-0 accent-accent"
      />
      <span className="text-[14px] text-ink-dim leading-relaxed">{children}</span>
    </label>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-3">
        {label}
      </span>
      {children}
    </label>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-2 block text-[12px] text-ink-muted leading-relaxed">
      {children}
    </span>
  );
}

function Input({
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  readOnly,
}: {
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
}) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      type={type}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      className={`w-full border-b border-border bg-transparent py-3 text-[16px] placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none ${
        readOnly ? "text-ink-dim cursor-default" : "text-ink"
      }`}
    />
  );
}
