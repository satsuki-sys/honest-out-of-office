// The Painfully Honest Out-of-Office — make.fun entry
// Writes one brutally honest but still polite out-of-office auto-reply
// (a single sentence, at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Thank you for your email — I'm away this week, and honestly I was already behind on my inbox before I left, so yours will wait in a very long queue, but I will read it properly when I'm back.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
