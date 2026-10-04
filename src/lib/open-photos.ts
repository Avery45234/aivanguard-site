import fs from "node:fs";
import path from "node:path";

// Server-only. Looks for a winner's portrait in the public folder at build
// time, so adding a file is all it takes to put a face on the results:
//
//   public/img/open/2026/first.jpg    (or .jpeg, .png, .webp)
//   public/img/open/2026/second.jpg
//   public/img/open/2026/third.jpg
//
// Returns the public path, or null when there is no file. Do not import
// this from a client component.
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function winnerPhoto(slug: string, year = "2026"): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `/img/open/${year}/${slug}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}
