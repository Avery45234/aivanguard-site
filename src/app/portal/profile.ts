export type EntrantProfile = {
  name?: string;
  email: string;
  division?: string;
  entryType?: string;
  registeredAt?: string;
};

const PROFILE_KEY = "aiv-competition-profile";
const CHECKLIST_KEY = "aiv-competition-checklist";

/**
 * Tiny external store over localStorage so components can read entrant
 * state via useSyncExternalStore: server renders always see "signed out"
 * (null profile), and the stored profile swaps in after hydration.
 */
let profileCache: EntrantProfile | null | undefined;
let checklistCache: Record<string, boolean> | undefined;
const listeners = new Set<() => void>();

function emit() {
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

function readChecklist(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getProfileSnapshot(): EntrantProfile | null {
  if (profileCache === undefined) profileCache = readProfile();
  return profileCache;
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

export function saveProfile(profile: EntrantProfile) {
  profileCache = profile;
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // Storage unavailable (private mode) — the session just won't persist.
  }
  emit();
}

export function clearProfile() {
  profileCache = null;
  checklistCache = EMPTY_CHECKLIST;
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
