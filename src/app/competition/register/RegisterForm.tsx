"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm("xpqgnpva");
  const [division, setDivision] = useState(divisions[0]);
  const [entryType, setEntryType] = useState(entryTypes[0]);
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isTeam = entryType !== entryTypes[0];

  if (state.succeeded) {
    return (
      <div className="border border-accent/50 p-8 md:p-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
          Registration received
        </div>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink tracking-tight">
          You&apos;re registered{name ? `, ${name.split(" ")[0]}` : ""}. Now go
          build something with an opinion.
        </h3>
        <div className="mt-6 space-y-4 text-[15px] text-ink-dim leading-relaxed max-w-xl">
          <p>
            You&apos;ll receive confirmation and submission instructions from{" "}
            {site.email}. Your completed entry — the work, the 300-word
            Rationale, and the AI Use Disclosure — is due{" "}
            <strong className="text-ink">September 25, 2026</strong>. Results
            are announced October 3, 2026.
          </p>
          <p>
            Questions in the meantime? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <input type="hidden" name="division" value={division} />
      <input type="hidden" name="entryType" value={entryType} />
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
          <Input name="email" type="email" placeholder="you@school.edu" required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-[13px] text-accent"
          />
        </Field>
      </div>

      {isTeam && (
        <Field label="Team members — full names (up to 3 more)">
          <Input
            name="teamMembers"
            placeholder="Jordan Kim, Sam Patel, …"
            required
          />
        </Field>
      )}

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="School / organization (optional)">
          <Input name="school" placeholder="Cypress High School" />
        </Field>
        <Field label="Planned format">
          <select
            name="format"
            defaultValue={formats[4]}
            aria-label="Planned format"
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
          name="agreedToRules"
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

      <ValidationError
        errors={state.errors}
        className="block text-[14px] text-accent"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
        <p className="text-xs text-ink-muted max-w-xs">
          Registration is free. You&apos;ll receive confirmation and submission
          instructions from {site.email}.
        </p>
        <Button type="submit" size="lg" disabled={!agreed || state.submitting}>
          {state.submitting ? "Registering…" : "Register"}
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
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full border-b border-border bg-transparent py-3 text-[16px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none"
    />
  );
}
