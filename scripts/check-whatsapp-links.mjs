#!/usr/bin/env node
/**
 * Automated WhatsApp link check.
 *
 * 1. Static scan of build output (dist/), src/ and public/:
 *      - zero occurrences of api.whatsapp.com
 *      - zero non-wa.me whatsapp.com URLs
 *      - every literal wa.me/<digits> link uses the expected number
 * 2. Rendered scan: fetches every route from the running server and checks
 *    every real WhatsApp href in the HTML is https://wa.me/<expected>?text=...
 *
 * Usage:
 *   node scripts/check-whatsapp-links.mjs            # static + rendered (if server up)
 *   BASE_URL=http://localhost:8080 node scripts/check-whatsapp-links.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const EXPECTED_NUMBER = "6281999986009";
const EXPECTED_PREFIX = `https://wa.me/${EXPECTED_NUMBER}`;
const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";

const ROUTES = [
  "/",
  "/experiences",
  "/bali-atv-adventure",
  "/bali-buggy-adventure",
  "/bali-zoo",
  "/bali-safari-marine-park",
  "/bali-swing",
  "/bali-jeep-sunrise",
  "/bali-private-tours",
  "/nusa-penida-tours",
  "/about",
  "/contact",
];

const SCAN_DIRS = ["dist", "src", "public"].filter((d) => existsSync(d));
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

// ---- 1. static scan -------------------------------------------------------
const API_RE = /api\.whatsapp\.com/gi;
const LINK_RE = /https?:\/\/(?:www\.)?wa\.me\/([0-9]+)/gi;
const OTHER_RE = /https?:\/\/(?:[a-z0-9-]+\.)*whatsapp\.com[^\s"'`)]*/gi;

let scanned = 0;
let literalLinks = 0;

for (const dir of SCAN_DIRS) {
  for (const file of walk(dir)) {
    scanned++;
    const text = readFileSync(file, "utf8");
    for (const m of text.matchAll(API_RE))
      errors.push(`${file}: forbidden api.whatsapp.com at index ${m.index}`);
    for (const m of text.matchAll(LINK_RE)) {
      literalLinks++;
      if (m[1] !== EXPECTED_NUMBER) errors.push(`${file}: wrong number -> ${m[0]}`);
    }
    for (const m of text.matchAll(OTHER_RE))
      errors.push(`${file}: non-wa.me WhatsApp URL -> ${m[0]}`);
  }
}
console.log(
  `Static scan: ${scanned} files in ${SCAN_DIRS.join(", ")}, ${literalLinks} literal wa.me link(s).`,
);

// ---- 2. rendered scan -----------------------------------------------------
const HREF_RE = /href="([^"]*whatsapp[^"]*|[^"]*wa\.me[^"]*)"/gi;
let rendered = 0;
let reachable = true;

for (const route of ROUTES) {
  let html;
  try {
    const res = await fetch(BASE_URL + route);
    if (!res.ok) {
      errors.push(`${route}: HTTP ${res.status}`);
      continue;
    }
    html = await res.text();
  } catch {
    reachable = false;
    break;
  }
  for (const m of html.matchAll(HREF_RE)) {
    const href = m[1].replace(/&amp;/g, "&");
    rendered++;
    if (!href.startsWith(EXPECTED_PREFIX)) errors.push(`${route}: bad WhatsApp href -> ${href}`);
  }
}

if (reachable) {
  console.log(`Rendered scan: ${rendered} WhatsApp href(s) across ${ROUTES.length} route(s).`);
  if (rendered === 0)
    errors.push("Rendered scan found no WhatsApp links — check the server/routes.");
} else {
  console.log(`Rendered scan skipped — no server at ${BASE_URL}.`);
}

// ---- report ---------------------------------------------------------------
if (errors.length > 0) {
  console.error(`\nWhatsApp link check FAILED (${errors.length} issue(s)):`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}
console.log(`WhatsApp link check PASSED — all links use ${EXPECTED_PREFIX}.`);
