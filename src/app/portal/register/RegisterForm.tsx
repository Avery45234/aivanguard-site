"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { hashPassword, makeSalt, saveProfile } from "../profile";

const divisions = ["18 and under", "Open (all ages)"];
const entryTypes = ["Individual", "Team (2–4)"];
const roles = ["Student", "Educator", "Parent", "Other"];
const formats = [
  "App / prototype",
  "Essay / written work",
  "Video / film",
  "Design / visual work",
  "Other / undecided",
];
const referralSources = [
  "Friend / classmate",
  "My school or a teacher",
  "A school club",
  "Instagram",
  "TikTok / YouTube",
  "Somewhere else",
];

export function RegisterForm() {
  const [state, handleSubmit] = useForm("xpqgnpva");
  const [division, setDivision] = useState(divisions[0]);
  const [entryType, setEntryType] = useState(entryTypes[0]);
  const [role, setRole] = useState(roles[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwError, setPwError] = useState<string | null>(null);
  const [agreedRules, setAgreedRules] = useState(false);
  const [agreedOriginal, setAgreedOriginal] = useState(false);
  const [agreedOneEntry, setAgreedOneEntry] = useState(false);

  const isTeam = entryType !== entryTypes[0];
  const isUnder18 = division === divisions[0];
  const allAgreed = agreedRules && agreedOriginal && agreedOneEntry;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password.length < 8) {
      e.preventDefault();
      setPwError("Your password needs at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      e.preventDefault();
      setPwError("The passwords don't match.");
      return;
    }
    setPwError(null);
    handleSubmit(e);
  };

  useEffect(() => {
    if (!state.succeeded) return;
    let cancelled = false;
    (async () => {
      // The password is hashed and stored on this device only — it is
      // never part of the Formspree submission (see the unnamed inputs
      // below) and never leaves the browser.
      const salt = makeSalt();
      const hash = await hashPassword(password, salt);
      if (cancelled) return;
      saveProfile({
        name,
        email,
        division,
        entryType,
        registeredAt: new Date().toISOString(),
        passwordSalt: salt,
        passwordHash: hash,
      });
    })();
    return () => {
      cancelled = true;
    };
    // Snapshot the entrant's details at the moment of success only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="border border-accent/50 bg-surface/40 p-8 md:p-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
          Registration received
        </div>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink tracking-tight">
          You&apos;re registered{name ? `, ${name.split(" ")[0]}` : ""}. Now go
          build something with an opinion.
        </h3>
        <div className="mt-6 space-y-4 text-[15px] text-ink-dim leading-relaxed max-w-xl">
          <p>
            You&apos;ll receive confirmation and submission instructions from
            AI Vanguard by email. Your completed entry — the work, the
            300-word Rationale, and the AI Use Disclosure — is due{" "}
            <strong className="text-ink">September 25, 2026</strong>. Results
            are announced October 3, 2026.
          </p>
          <p>
            You can sign back in to your dashboard on this device anytime with
            your email and password.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/portal" size="lg">
            Open your dashboard →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <input type="hidden" name="division" value={division} />
      <input type="hidden" name="entryType" value={entryType} />
      <input type="hidden" name="role" value={role} />
      <input
        type="hidden"
        name="_subject"
        value={`Competition Registration — ${name || "New entrant"}`}
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {/* 01 · ENTRANT */}
      <fieldset className="space-y-9">
        <SectionTitle n="01" title="Entrant" />

        <Field label="Division">
          <Chips options={divisions} value={division} onChange={setDivision} />
        </Field>
        <Field label="Entry type">
          <Chips options={entryTypes} value={entryType} onChange={setEntryType} />
        </Field>

        <Field label="I am entering as a">
          <Chips options={roles} value={role} onChange={setRole} />
        </Field>

        <Field label={isTeam ? "Team lead — full name" : "Full name"}>
          <Input
            name="name"
            value={name}
            onChange={setName}
            placeholder="Alex Rivera"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="mt-2 block text-[13px] text-accent"
          />
        </Field>
        <Field label="Contact email">
          <Input
            name="email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@school.edu"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-[13px] text-accent"
          />
        </Field>

        {/* Account password — deliberately has NO `name` attribute so it is
            never serialized into the Formspree submission. It is hashed and
            stored on the entrant's device only (see ../profile.ts). */}
        <Field label="Create a password — for your entrant dashboard">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            required
            minLength={8}
            autoComplete="new-password"
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
          />
        </Field>
        <Field label="Confirm password">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Type it again"
            required
            minLength={8}
            autoComplete="new-password"
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
          />
          {pwError && (
            <span className="mt-2 block text-[13px] text-accent">{pwError}</span>
          )}
          <span className="mt-2 block text-[12px] text-ink-muted leading-relaxed">
            You&apos;ll use this to sign in to your dashboard. It&apos;s stored
            only on this device as a salted hash — never sent to us.
          </span>
        </Field>

        {isUnder18 && (
          <>
            <Field label="Age on September 25, 2026">
              <Input
                name="age"
                type="number"
                placeholder="16"
                required
                min={5}
                max={18}
              />
            </Field>
            <Field label="Parent / guardian email (optional)">
              <Input
                name="parentEmail"
                type="email"
                placeholder="parent@example.com"
              />
            </Field>
          </>
        )}

        <Field label="School / organization (optional)">
          <Input name="school" placeholder="Cypress High School" />
        </Field>
        <Field label="City & state (or country)">
          <Input name="location" placeholder="Cerritos, CA" required />
        </Field>
      </fieldset>

      {/* 02 · PLANNED ENTRY */}
      <fieldset className="space-y-9">
        <SectionTitle n="02" title="Planned entry" />

        {isTeam && (
          <>
            <Field label="Team name (optional)">
              <Input name="teamName" placeholder="The Unautomatables" />
            </Field>
            <Field label="Team members — full names (up to 3 more)">
              <Input
                name="teamMembers"
                placeholder="Jordan Kim, Sam Patel, …"
                required
              />
            </Field>
          </>
        )}

        <Field label="Planned format">
          <Select name="format" ariaLabel="Planned format" options={formats} />
        </Field>
        <Field label="Working title (optional)">
          <Input name="workingTitle" placeholder="You can change this later" />
        </Field>

        <Field label="What are you planning to make? (optional)">
          <textarea
            name="pitch"
            rows={3}
            maxLength={500}
            placeholder="A sentence or two is plenty — you're free to change direction before the deadline."
            className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none resize-y"
          />
        </Field>

        <Field label="Gut check — name one thing about school you'd refuse to automate (optional)">
          <Input
            name="refusalInstinct"
            placeholder="First instinct, no commitment — your real answer comes with your entry."
          />
        </Field>

        <Field label="How did you hear about the competition? (optional)">
          <Select
            name="referral"
            ariaLabel="How did you hear about the competition?"
            options={referralSources}
            placeholder="Select one…"
          />
        </Field>
      </fieldset>

      {/* 03 · DECLARATIONS */}
      <fieldset className="space-y-5">
        <SectionTitle n="03" title="Declarations" />

        <Declaration
          name="declarationRules"
          checked={agreedRules}
          onChange={setAgreedRules}
        >
          I have read and agree to the{" "}
          <a
            href="/competition#rules"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
          >
            competition rules ↗
          </a>
          , and I understand that judges&apos; decisions are final.
        </Declaration>

        <Declaration
          name="declarationOriginalWork"
          checked={agreedOriginal}
          onChange={setAgreedOriginal}
        >
          The submitted work will be my own (or my team&apos;s own), created
          for this competition, and all AI use will be disclosed in the AI Use
          Disclosure. I understand that undisclosed AI use is grounds for
          disqualification.
        </Declaration>

        <Declaration
          name="declarationOneEntry"
          checked={agreedOneEntry}
          onChange={setAgreedOneEntry}
        >
          This is my only entry — I understand that one entry per person or
          team is permitted, and that no person may appear on multiple teams.
        </Declaration>
      </fieldset>

      <ValidationError
        errors={state.errors}
        className="block text-[14px] text-accent"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
        <p className="text-xs text-ink-muted max-w-xs">
          Registration is free. You&apos;ll receive confirmation and submission
          instructions from AI Vanguard by email.
        </p>
        <Button type="submit" size="lg" disabled={!allAgreed || state.submitting}>
          {state.submitting ? "Registering…" : "Submit registration"}
        </Button>
      </div>
    </form>
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

function Select({
  name,
  options,
  ariaLabel,
  placeholder,
}: {
  name: string;
  options: string[];
  ariaLabel: string;
  placeholder?: string;
}) {
  return (
    <select
      name={name}
      aria-label={ariaLabel}
      defaultValue={placeholder ? "" : options[options.length - 1]}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink transition-colors focus:border-accent focus:outline-none"
    >
      {placeholder && (
        <option value="" className="bg-bg text-ink-muted">
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o} value={o} className="bg-bg text-ink">
          {o}
        </option>
      ))}
    </select>
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
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  min,
  max,
}: {
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
}) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      type={type}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
    />
  );
}
