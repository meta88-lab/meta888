/**
 * remove-bg.mjs
 * Removes white/near-white background from logo and saves a transparent PNG.
 * Run with: node scripts/remove-bg.mjs
 */
import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const INPUT  = resolve(ROOT, "public/logo.svg.png");
const OUTPUT = resolve(ROOT, "public/logo-transparent.png");

// Pixels with R,G,B all >= this value are treated as "white background"
const WHITE_THRESHOLD = 230;
// How many pixels inward to also feather (0 = hard edge, 1-2 = soft edge)
const FEATHER = 2;

async function removeBg() {
  console.log("📷  Reading:", INPUT);

  const { data, info } = await sharp(INPUT)
    .ensureAlpha()        // adds alpha channel if missing
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const px = new Uint8ClampedArray(data);

  // ── Pass 1: mark white pixels fully transparent ───────────────────────────
  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const r = px[o], g = px[o + 1], b = px[o + 2];

    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      px[o + 3] = 0; // transparent
    }
  }

  // ── Pass 2: feather edges — blend semi-transparent pixels on the border ───
  if (FEATHER > 0) {
    // Simple box-blur on alpha for edge pixels
    const alpha = new Uint8ClampedArray(width * height);
    for (let i = 0; i < width * height; i++) alpha[i] = px[i * channels + 3];

    const blurred = new Uint8ClampedArray(alpha);
    for (let y = FEATHER; y < height - FEATHER; y++) {
      for (let x = FEATHER; x < width - FEATHER; x++) {
        const idx = y * width + x;
        if (alpha[idx] === 0) continue; // already transparent, skip

        // Check if any neighbour within FEATHER distance is transparent
        let hasTransparentNeighbour = false;
        for (let dy = -FEATHER; dy <= FEATHER && !hasTransparentNeighbour; dy++) {
          for (let dx = -FEATHER; dx <= FEATHER && !hasTransparentNeighbour; dx++) {
            if (alpha[(y + dy) * width + (x + dx)] === 0) {
              hasTransparentNeighbour = true;
            }
          }
        }

        if (hasTransparentNeighbour) {
          // Partially reduce opacity for smoother edge
          blurred[idx] = Math.round(alpha[idx] * 0.7);
        }
      }
    }

    // Write blurred alpha back
    for (let i = 0; i < width * height; i++) {
      px[i * channels + 3] = blurred[i];
    }
  }

  // ── Save ─────────────────────────────────────────────────────────────────
  await sharp(Buffer.from(px), { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT);

  console.log("✅  Transparent logo saved to:", OUTPUT);
  console.log("   Update LOGO_SRC in components/LogoImage.tsx to \"/logo-transparent.png\"");
}

removeBg().catch((err) => {
  console.error("❌  Error:", err.message);
  process.exit(1);
});
