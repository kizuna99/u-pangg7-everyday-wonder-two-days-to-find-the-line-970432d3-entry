// SPDX-License-Identifier: MIT
// Everyday Wonder, Two Days to Find the Line — writes the one-sentence entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const SENTENCE =
  "Coming home in the dark, my key finds the lock a second before I do, my hand remembering the door my eyes have forgotten.";

function entryText(): string {
  // Exactly one sentence; the sealed gate accepts UTF-8 text of 1 to 200 characters.
  const text = `${SENTENCE}\n`;
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry text out of gate range: ${text.length} characters`);
  }
  return text;
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entryText(), "utf8");
