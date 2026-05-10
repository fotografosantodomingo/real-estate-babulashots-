import sharp from "sharp";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const src = resolve(root, "public/images/real-estate-media-dominican-republic.webp");
const dst = resolve(root, "public/images/social-card-1200x630.webp");

await sharp(src)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .webp({ quality: 78 })
  .toFile(dst);

const meta = await sharp(dst).metadata();
const s = await stat(dst);
console.log(`Wrote ${dst}`);
console.log(`Dimensions: ${meta.width}x${meta.height}`);
console.log(`Size: ${s.size} bytes (${(s.size / 1024).toFixed(1)} KB)`);
