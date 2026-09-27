import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

const OUT_DIR = "./build/web";

// Clean output directory
rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

// Copy game files
const include = [
  "assets",
  "engine/core",
  "engine/LICENSE",
  "js",
  "style",
  "manifest.json",
  "service-worker.js",
  "index.html",
  "game.html",
  "ending.html",
  "login.html",
  "signup.html",
  "reset.html",
  "dashboard.html",
  "student-dashboard.html",
  "report.html",
  "AI-ATTRIBUTION.html",
];

for (const entry of include) {
  cpSync(entry, join(OUT_DIR, entry), { recursive: true });
}

// Copy game.html with debug script removed
const html = readFileSync("game.html", "utf-8");
const cleanedHtml = html
  .replace(/\s*<!-- Debug Library\..*?-->\s*\n/s, "\n")
  .replace(/\s*<script src="\.\/engine\/debug\/debug\.js"><\/script>\s*\n/, "\n");
writeFileSync(join(OUT_DIR, "game.html"), cleanedHtml);

// Phase 2 PoC: Supabase config for the built bundle.
// Priority: Vercel env vars win when present (so rotated keys take effect
// without editing source); otherwise the hardcoded public values in
// js/supabase-config.js ship as-is. Empty/missing everywhere ->
// CLOUD_DISABLED guest mode (AC10). Secrets never appear here.
const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? "";
const configPath = join(OUT_DIR, "js", "supabase-config.js");
try {
  let configSrc = readFileSync(configPath, "utf-8")
    .replaceAll("__SUPABASE_URL__", supabaseUrl)
    .replaceAll("__SUPABASE_PUBLISHABLE_KEY__", supabasePublishableKey);
  if (supabaseUrl && supabasePublishableKey) {
    configSrc = configSrc
      .replace(/SUPABASE_URL:\s*'[^']*'/, `SUPABASE_URL: '${supabaseUrl}'`)
      .replace(
        /SUPABASE_PUBLISHABLE_KEY:\s*'[^']*'/,
        `SUPABASE_PUBLISHABLE_KEY: '${supabasePublishableKey}'`
      );
  }
  writeFileSync(configPath, configSrc);
  console.log(
    `Supabase config: ${supabaseUrl && supabasePublishableKey ? "env override applied" : "source values kept"}`
  );
} catch (error) {
  console.log(`Supabase config: skipped (${error})`);
}

console.log(`Web build output: ${OUT_DIR}`);
