/**
 * One-shot image pipeline for the officer headshots.
 * Reads 250×250 originals, Lanczos-upscales to 600×600, applies a real
 * unsharp mask at the pixel level, bumps micro-contrast + saturation, and
 * outputs both high-quality JPG (fallback) and WebP (what the browser uses).
 *
 * Run: node scripts/enhance-team.mjs
 */
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";

const SRC = "public/img/team";
const OUT = "public/img/team-hq";
const TARGET = 600; // 2.4× upscale from 250

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  if (files.length === 0) {
    console.error("No source images in", SRC);
    process.exit(1);
  }

  for (const f of files) {
    const src = join(SRC, f);
    const { name } = parse(f);

    const input = sharp(src, { failOn: "none" });
    const meta = await input.metadata();
    console.log(`→ ${f}  ${meta.width}×${meta.height}`);

    // Build pipeline: Lanczos3 upscale → unsharp mask → slight modulate (contrast/sat)
    const pipeline = sharp(src)
      .resize(TARGET, TARGET, {
        kernel: sharp.kernel.lanczos3,
        fit: "cover",
        position: "attention", // auto face/saliency crop
      })
      .sharpen({
        // Tuned for upscaled portraits. sigma = blur radius of the mask,
        // m1 = flat area strength, m2 = jagged area strength.
        sigma: 1.0,
        m1: 0.6,
        m2: 2.4,
        x1: 2.0,
        y2: 10,
        y3: 20,
      })
      .modulate({
        brightness: 1.02,
        saturation: 1.06,
      })
      .linear(1.08, -6); // local contrast: slope × input + intercept

    const jpgPath = join(OUT, `${name}.jpg`);
    const webpPath = join(OUT, `${name}.webp`);

    await pipeline
      .clone()
      .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(jpgPath);

    await pipeline
      .clone()
      .webp({ quality: 90, effort: 5, smartSubsample: true })
      .toFile(webpPath);

    const sj = (await stat(jpgPath)).size;
    const sw = (await stat(webpPath)).size;
    console.log(`   ✓ ${name}.jpg ${Math.round(sj / 1024)}KB · ${name}.webp ${Math.round(sw / 1024)}KB`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
