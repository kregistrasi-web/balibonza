#!/usr/bin/env node
/**
 * Automated WhatsApp link check.
 *
 * Scans the build output (and src/ as a fallback) to confirm:
 *  1. Zero occurrences of api.whatsapp.com
 *  2. Every wa.me / whatsapp.com link points to https://wa.me/6281999986009
 *
 * Usage: node scripts/check-whatsapp-links.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const EXPECTED_NUMBER = "6281999986009";
const SCAN_DIRS = [".output", "dist", "src", "public"].filter((d) => existsSync(d));
const TEXT_EXT = new Set([
  ".js",
  ".mjs",
  ".cjs",
  ".ts",
  ".tsx",
  ".jsx",
  ".html",
  ".json",
  ".css",
  ".txt",
  ".xml",
  ".map",
]);
const SKIP_DIRS = new Set(["node_modules", ".git", ".cache"]);

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full);
    else if (TEXT_EXT.has(extname(entry))) yield full;
  }
}

const errors = [];
let scanned = 0;
let matches = 0;

const API_RE = /api\.whatsapp\.com/gi;
const LINK_RE = /https?:\/\/(?:www\.)?wa\.me\/([0-9]*)/gi;
const OTHER_RE = /https?:\/\/(?:[a-z0-9.-]*\.)?whatsapp\.com[^\s"'`)]*/gi;

for (const dir of SCAN_DIRS) {
  for (const file of walk(dir)) {
    scanned++;
    const text = readFileSync(file, "utf8");

    for (const m of text.matchAll(API_RE)) {
      errors.push(`${file}: forbidden api.whatsapp.com at index ${m.index}`);
    }
    for (const m of text.matchAll(LINK_RE)) {
      matches++;
      if (m[1] !== EXPECTED_NUMBER) {
        errors.push(`${file}: wa.me link with wrong number -> ${m[0]}`);
      }
    }
    for (const m of text.matchAll(OTHER_RE)) {
      errors.push(`${file}: non-wa.me WhatsApp URL -> ${m[0]}`);
    }
  }
}

console.log(`Scanned ${scanned} files in: ${SCAN_DIRS.join(", ") || "(nothing)"}`);
console.log(`Found ${matches} wa.me link(s).`);

if (errors.length > 0) {
  console.error(`\nWhatsApp link check FAILED (${errors.length} issue(s)):`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}

console.log(`WhatsApp link check PASSED — all links use https://wa.me/${EXPECTED_NUMBER}.`);
