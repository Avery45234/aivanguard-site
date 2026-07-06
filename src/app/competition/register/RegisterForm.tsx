"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const divisions = ["Under 18", "Open (all ages)"];
const entryTypes = ["Individual", "Team (2–4)"];
const formats = [
  "App / prototype",
  "Essay / written work",
  "Video / film",
  "Design / visual work",
  "Other / undecided",
];

export function RegisterForm() {
  const [division, setDivision] = useState(divisions[0]);
  const [entryType, setEntryType] = useState(entryTypes[0]);
  const [format, setFormat] = useState(formats[4]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const isTeam = entryType !== entryTypes[0];

  const registrationText = [
    "AI Vanguard Open Competition — Registration",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Division: ${division}`,
    `Entry type: ${entryType}`,
    ...(isTeam ? [`Team members: ${teamMembers}`] : []),
    `School / organization: ${school || "—"}`,
    `Planned format: ${format}`,
    "",
    "I confirm that I have read and agree to the competition rules,",
    "including the AI Use Disclosure requirement.",
  ].join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[AI Vanguard Competition] Registration — ${name}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(registrationText)}`;
    window.location.href = href;
    setSent(true);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(registrationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the text is visible below for manual copying.
    }
  };

  if (sent) {
    return (
      <div className="border border-accent/50 p-8 md:p-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
          Registration prepared
        </div>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink tracking-tight">
          Your mail client should be open — press send to complete your
          registration.
        </h3>
        <div className="mt-6 space-y-4 text-[15px] text-ink-dim leading-relaxed max-w-xl">
          <p>
            Once we receive it, you&apos;ll get a confirmation from{" "}
            {site.email} with submission instructions. Your completed entry —
            the work, the 300-word Rationale, and the AI Use Disclosure — is
            due <strong className="text-ink">September 25, 2026</strong>.
            Results are announced October 3, 2026.
          </p>
          <p>
            If nothing opened, copy your registration below and email it to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            with the subject &ldquo;Competition Registration.&rdquo;
          </p>
        </div>
        <pre className="mt-6 border border-border bg-surface/50 p-5 text-[13px] leading-relaxed text-ink-dim whitespace-pre-wrap font-mono">
          {registrationText}
        </pre>
        <div className="mt-4">
          <Button variant="secondary" onClick={onCopy}>
            {copied ? "Copied ✓" : "Copy registration details"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="Division">
          <Chips options={divisions} value={division} onChange={setDivision} />
        </Field>
        <Field label="Entry type">
          <Chips options={entryTypes} value={entryType} onChange={setEntryType} />
        </Field>
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label={isTeam ? "Team lead — full name" : "Full name"}>
          <Input value={name} onChange={setName} placeholder="Alex Rivera" required />
        </Field>
        <Field label="Contact email">
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@school.edu"
            required
          />
        </Field>
      </div>

      {isTeam && (
        <Field label="Team members — full names (up to 3 more)">
          <Input
            value={teamMembers}
            onChange={setTeamMembers}
            placeholder="Jordan Kim, Sam Patel, …"
            required
          />
        </Field>
      )}

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="School / organization (optional)">
          <Input value={school} onChange={setSchool} placeholder="Cypress High School" />
        </Field>
        <Field label="Planned format">
          <select
            value={format}
            aria-label="Planned format"
            onChange={(e) => setFormat(e.target.value)}
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink transition-colors focus:border-accent focus:outline-none"
          >
            {formats.map((f) => (
              <option key={f} value={f} className="bg-bg text-ink">
                {f}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <label className="flex items-start gap-3 cursor-pointer max-w-xl">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-1 h-4 w-4 shrink-0 accent-accent"
        />
        <span className="text-[14px] text-ink-dim leading-relaxed">
          I have read and agree to the{" "}
          <Link
            href="/competition#rules"
            className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
          >
            competition rules
          </Link>
          , including the AI Use Disclosure requirement, and I confirm that one
          entry per person or team is permitted.
        </span>
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
        <p className="text-xs text-ink-muted max-w-xs">
          Registration is free. You&apos;ll receive confirmation and submission
          instructions from {site.email}.
        </p>
        <Button type="submit" size="lg" disabled={!agreed}>
          Register
        </Button>
      </div>
    </form>
  );
}

function Chips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          key={o}
          onClick={() => onChange(o)}
          className={cn(
            "border px-4 h-9 text-sm transition-colors",
            value === o
              ? "border-accent text-ink bg-accent/10"
              : "border-border text-ink-dim hover:text-ink hover:border-ink/40",
          )}
        >
          {o}
        </button>
      ))}
    </div>
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

function Input({
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
    />
  );
}
