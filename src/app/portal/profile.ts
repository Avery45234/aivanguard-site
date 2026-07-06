export type EntrantProfile = {
  name?: string;
  email: string;
  division?: string;
  entryType?: string;
  registeredAt?: string;
  passwordSalt?: string;
  passwordHash?: string;
};

export type SignInResult = "ok" | "no-account" | "wrong-password";

const PROFILE_KEY = "aiv-competition-profile";
const CHECKLIST_KEY = "aiv-competition-checklist";
const SESSION_KEY = "aiv-competition-session";

/**
 * Tiny external store over localStorage so components can read entrant
 * state via useSyncExternalStore. The server (and first client render)
 * always sees "signed out"; the stored session swaps in after hydration.
 *
 * Passwords never leave the device: registration stores a salted
 * PBKDF2 hash in localStorage, and sign-in re-derives and compares.
 * Signing out only ends the session — the account (profile, password
 * hash, checklist) stays on the device so the entrant can sign back in.
 */
let profileCache: EntrantProfile | null | undefined;
let sessionCache: boolean | undefined;
let checklistCache: Record<string, boolean> | undefined;
let signedInCache: EntrantProfile | null | undefined;
const listeners = new Set<() => void>();

function emit() {
  signedInCache = undefined;
  listeners.forEach((l) => l());
}

export function subscribeEntrant(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readProfile(): EntrantProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed.email === "string" ? parsed : null;
  } catch {
    return null;
  }
}

function readSession(): boolean {
  try {
    return localStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function readChecklist(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function profileSnap(): EntrantProfile | null {
  if (profileCache === undefined) profileCache = readProfile();
  return profileCache;
}

function sessionSnap(): boolean {
  if (sessionCache === undefined) sessionCache = readSession();
  return sessionCache;
}

/** The signed-in entrant, or null when signed out (even if an account exists). */
export function getProfileSnapshot(): EntrantProfile | null {
  if (signedInCache === undefined) {
    signedInCache = sessionSnap() ? profileSnap() : null;
  }
  return signedInCache;
}

export function getServerProfileSnapshot(): EntrantProfile | null {
  return null;
}

const EMPTY_CHECKLIST: Record<string, boolean> = {};

export function getChecklistSnapshot(): Record<string, boolean> {
  if (checklistCache === undefined) checklistCache = readChecklist();
  return checklistCache;
}

export function getServerChecklistSnapshot(): Record<string, boolean> {
  return EMPTY_CHECKLIST;
}

function persistProfile(profile: EntrantProfile) {
  profileCache = profile;
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // Storage unavailable (private mode) — the session just won't persist.
  }
}

function setSession(on: boolean) {
  sessionCache = on;
  try {
    if (on) localStorage.setItem(SESSION_KEY, "1");
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

/** Registration: store the account and open a session. */
export function saveProfile(profile: EntrantProfile) {
  persistProfile(profile);
  setSession(true);
  emit();
}

/** End the session; the account stays on the device. */
export function signOut() {
  setSession(false);
  emit();
}

/** Full wipe — account, password hash, and checklist. */
export function clearProfile() {
  profileCache = null;
  checklistCache = EMPTY_CHECKLIST;
  setSession(false);
  try {
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(CHECKLIST_KEY);
  } catch {
    // ignore
  }
  emit();
}

export function saveChecklist(checklist: Record<string, boolean>) {
  checklistCache = checklist;
  try {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checklist));
  } catch {
    // ignore
  }
  emit();
}

/** Whole days from now to the deadline, clamped at zero. */
export function daysUntilDeadline(deadline: Date): number {
  return Math.max(0, Math.ceil((deadline.getTime() - Date.now()) / 86_400_000));
}

/* ---------- Password hashing (WebCrypto, device-local only) ---------- */

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function makeSalt(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

export async function hashPassword(
  password: string,
  saltHex: string,
): Promise<string> {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: hexToBytes(saltHex) as unknown as BufferSource,
      iterations: 150_000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );
  return bytesToHex(new Uint8Array(bits));
}

/**
 * Verify credentials against the account stored on this device.
 * Accounts registered before passwords existed set their password on
 * first successful email match.
 */
export async function signIn(
  email: string,
  password: string,
): Promise<SignInResult> {
  const p = profileSnap();
  if (!p || p.email.trim().toLowerCase() !== email.trim().toLowerCase()) {
    return "no-account";
  }
  if (!p.passwordHash || !p.passwordSalt) {
    const salt = makeSalt();
    const hash = await hashPassword(password, salt);
    persistProfile({ ...p, passwordSalt: salt, passwordHash: hash });
    setSession(true);
    emit();
    return "ok";
  }
  const hash = await hashPassword(password, p.passwordSalt);
  if (hash !== p.passwordHash) return "wrong-password";
  setSession(true);
  emit();
  return "ok";
}
