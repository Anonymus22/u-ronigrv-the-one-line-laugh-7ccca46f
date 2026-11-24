// The One-Line Laugh — make.fun micro entry
// Writes a single original funny line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt). Node 22, standard library only,
// fully deterministic: the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original sentence: an everyday truth with a twist.
// (At most 200 characters, as the competition requires.)
const LINE =
  "Every morning my five alarms hold a vote on whether I get up, and I lose five to one every single time.";

function writeEntry(line: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(LINE);
