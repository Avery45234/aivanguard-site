#!/usr/bin/env node
// Analyze the 2025 student policy survey CSV.
// Usage: node c:/aivanguard/scripts/analyze-survey.mjs

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CSV_PATH = resolve(__dirname, 'data', 'policy-survey-2025.csv');

// ---------- CSV parser (handles quoted fields w/ commas + newlines) ----------
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        row.push(field); field = '';
      } else if (c === '\r') {
        // ignore; handled by \n
      } else if (c === '\n') {
        row.push(field); field = '';
        rows.push(row); row = [];
      } else {
        field += c;
      }
    }
  }
  // flush last field/row
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  // strip trailing empty rows
  while (rows.length && rows[rows.length - 1].every(v => v === '')) rows.pop();
  return rows;
}

// ---------- helpers ----------
function findColumnIndex(headers, substring) {
  const needle = substring.toLowerCase();
  for (let i = 0; i < headers.length; i++) {
    if ((headers[i] || '').toLowerCase().includes(needle)) return i;
  }
  return -1;
}

function pct(n, total) {
  if (!total) return '0.00%';
  return ((n / total) * 100).toFixed(2) + '%';
}

function printBreakdown(title, counter, total, { sortDesc = true } = {}) {
  console.log(`\n=== ${title} ===`);
  let entries = Object.entries(counter);
  if (sortDesc) entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  for (const [label, n] of entries) {
    console.log(`  ${label.padEnd(50)} ${String(n).padStart(5)}  (${pct(n, total)})`);
  }
}

// ---------- main ----------
let raw;
try {
  raw = readFileSync(CSV_PATH, 'utf8');
} catch (err) {
  console.error(`ERROR: could not read ${CSV_PATH}`);
  console.error(err.message);
  process.exit(1);
}

const rows = parseCSV(raw);
if (rows.length < 2) {
  console.error('ERROR: CSV has no data rows.');
  process.exit(1);
}

const headers = rows[0];
const dataRows = rows.slice(1).filter(r => r.some(v => (v || '').trim() !== ''));

console.log(`CSV: ${CSV_PATH}`);
console.log(`Headers (${headers.length}):`);
headers.forEach((h, i) => console.log(`  [${i}] ${h}`));

const TOTAL = dataRows.length;
console.log(`\nTotal response count: ${TOTAL}`);

// Resolve column indices
const idxSchool     = findColumnIndex(headers, 'what school do you attend');
const idxGrade      = findColumnIndex(headers, 'grade');
const idxUsage      = findColumnIndex(headers, 'have you used ai tools');
const idxHelpful    = findColumnIndex(headers, 'how helpful do you find ai tools');
const idxStance     = findColumnIndex(headers, 'using ai for schoolwork should be considered');
const idxEqual      = findColumnIndex(headers, 'equal access');
const idxRole       = findColumnIndex(headers, 'what role should schools play');
// Comments column = last column, unless otherwise detected
const idxComment    = headers.length - 1;

console.log(`\nResolved column indices:`);
console.log(`  school=${idxSchool}, grade=${idxGrade}, usage=${idxUsage}, helpful=${idxHelpful}, stance=${idxStance}, equal=${idxEqual}, role=${idxRole}, comment=${idxComment}`);

// Schools
const schools = {};
for (const r of dataRows) {
  const v = (r[idxSchool] || '').trim() || '(blank)';
  schools[v] = (schools[v] || 0) + 1;
}
printBreakdown('Schools', schools, TOTAL);

// Grade
const grades = {};
for (const r of dataRows) {
  const v = (r[idxGrade] || '').trim() || '(blank)';
  grades[v] = (grades[v] || 0) + 1;
}
printBreakdown('Grade level', grades, TOTAL);

// AI usage frequency
const usageBuckets = {
  'Frequent users (weekly+)': 0,
  'Occasional users': 0,
  'Aware, not used': 0,
  'Never used': 0,
  'Other (custom response)': 0,
};
for (const r of dataRows) {
  const v = (r[idxUsage] || '').trim();
  if (v.includes('Yes, frequently')) usageBuckets['Frequent users (weekly+)']++;
  else if (v.includes('Yes, occasionally')) usageBuckets['Occasional users']++;
  else if (v.toLowerCase().includes("heard of them but haven")) usageBuckets['Aware, not used']++;
  else if (v.toLowerCase().includes("haven't used ai tools") || v.startsWith('No, I haven')) usageBuckets['Never used']++;
  else usageBuckets['Other (custom response)']++;
}
printBreakdown('AI usage frequency', usageBuckets, TOTAL, { sortDesc: false });

// Helpfulness
const helpBuckets = {
  'Very helpful': 0,
  'Somewhat helpful': 0,
  'Not helpful': 0,
  'Harmful': 0,
  'Other': 0,
};
for (const r of dataRows) {
  const v = (r[idxHelpful] || '').trim();
  if (v.includes('Very helpful')) helpBuckets['Very helpful']++;
  else if (v.includes('Somewhat helpful')) helpBuckets['Somewhat helpful']++;
  else if (v.includes('Not helpful')) helpBuckets['Not helpful']++;
  else if (v.includes('Harmful')) helpBuckets['Harmful']++;
  else helpBuckets['Other']++;
}
printBreakdown('Helpfulness', helpBuckets, TOTAL, { sortDesc: false });

// Stance
const stanceBuckets = {
  'Acceptable, as long as...': 0,
  'Acceptable only for certain...': 0,
  'Cheating': 0,
  "Not sure": 0,
  'Other': 0,
};
for (const r of dataRows) {
  const v = (r[idxStance] || '').trim();
  if (v.includes('Acceptable, as long as')) stanceBuckets['Acceptable, as long as...']++;
  else if (v.includes('Acceptable only for certain')) stanceBuckets['Acceptable only for certain...']++;
  else if (v.includes('Cheating')) stanceBuckets['Cheating']++;
  else if (v.toLowerCase().includes('not sure')) stanceBuckets['Not sure']++;
  else stanceBuckets['Other']++;
}
printBreakdown('Stance on AI for schoolwork', stanceBuckets, TOTAL, { sortDesc: false });

// Equal access
const equalBuckets = {
  'Yes, most students': 0,
  'No, some students': 0,
  "Don't know": 0,
  'Other': 0,
};
for (const r of dataRows) {
  const v = (r[idxEqual] || '').trim();
  if (v.includes('Yes, most students')) equalBuckets['Yes, most students']++;
  else if (v.includes('No, some students')) equalBuckets['No, some students']++;
  else if (v.toLowerCase().includes('don')) equalBuckets["Don't know"]++;
  else equalBuckets['Other']++;
}
printBreakdown('Equal access', equalBuckets, TOTAL, { sortDesc: false });

// School role preferences (multi-select)
const roleOptions = [
  'Teach students how to use AI responsibly',
  'Create stricter rules to limit misuse',
  'Allow free use with minimal restrictions',
  'Involve students in shaping AI rules and policies',
  'Do nothing; AI use should be up to individuals',
  'AI should help complete most of the work',
];
const roleCounts = Object.fromEntries(roleOptions.map(o => [o, 0]));
for (const r of dataRows) {
  const cell = (r[idxRole] || '').trim();
  if (!cell) continue;
  // Split on commas, but each option itself may contain commas or semicolons.
  // Strategy: substring match per option against the whole cell.
  for (const opt of roleOptions) {
    // Use a simple substring match (case-insensitive first 30 chars for resilience to punctuation)
    const key = opt.slice(0, 30).toLowerCase();
    if (cell.toLowerCase().includes(key)) roleCounts[opt]++;
  }
}
console.log(`\n=== School role preferences (multi-select; % of total responses) ===`);
for (const opt of roleOptions) {
  const n = roleCounts[opt];
  console.log(`  ${opt.padEnd(55)} ${String(n).padStart(5)}  (${pct(n, TOTAL)})`);
}

// Comments analysis
const trivialComments = new Set(
  ['no', 'none', 'n/a', 'nope', 'noo.', 'na', 'nah', 'nothing', '-', '.', 'no.', 'none.', 'n.a.', 'no comment', 'no thanks']
);
const substantive = [];
const nonEmptyComments = [];
const identifierPattern = /\b(aarav|avery|rohan|krish|arjun|aditya|ananya|sahana|siddharth|veer|priya|kavya|rahul|neha|sanya|ishaan|vihaan|arnav|advait|ayaan|reyansh|kabir|dhruv|aryan|akshay|ria|diya|saanvi|tara|myra|aanya|zara|jai|om|yash|vivaan|shaurya)\b/i;
const nameSignaturePattern = /(?:^|\s)[-—]\s*[A-Z][a-z]+\s*$/;

for (const r of dataRows) {
  const raw = (r[idxComment] || '').trim();
  if (!raw) continue;
  const lower = raw.toLowerCase();
  if (raw.length <= 2) continue;
  if (trivialComments.has(lower)) continue;
  nonEmptyComments.push(raw);
  if (raw.length > 100) {
    // skip if contains identifying first name or trailing signature
    if (identifierPattern.test(raw)) continue;
    if (nameSignaturePattern.test(raw)) continue;
    substantive.push(raw);
  }
}
console.log(`\n=== Comments ===`);
console.log(`  Non-empty, non-trivial comments: ${nonEmptyComments.length}  (${pct(nonEmptyComments.length, TOTAL)})`);
console.log(`  Substantive (>100 chars, anonymized): ${substantive.length}`);

// pick 6-10 of the most substantive, prefer longest-but-not-extreme
substantive.sort((a, b) => b.length - a.length);
const sample = substantive.slice(0, 10);
console.log(`\n--- Sample substantive comments (up to 10) ---`);
sample.forEach((c, i) => {
  console.log(`\n[${i + 1}] (${c.length} chars)`);
  console.log(c);
});
