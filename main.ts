// Peer-Reviewed Resignation — entry for
// u-suzy-one-line-office-joke-laugh-off-f574ac73 (One-Line Office Joke Laugh-Off).
//
// The program writes exactly one joke, a single line about office life, to
// /output/entry.txt. The joke is pinned below together with its expected
// UTF-8 byte count and SHA-256, and the program refuses to write anything
// unless the text it holds matches both pins, so the graded artifact is
// byte-identical to the joke this file was written to carry.
//
// Gate (from the competition kit): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space. This joke is 94 characters,
// one line, no leading or trailing white space.

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "Our open-plan office is so open that my resignation letter got peer-reviewed before I sent it.";

// Pinned expectations for the exact bytes written to /output/entry.txt.
const EXPECTED_BYTES = 94;
const EXPECTED_SHA256 =
  "e511993e4fc054e58753e40830da6453d4b0eedd79094e2c81834dbf02f3bb2f";

function sha256Hex(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

function main(): void {
  const bytes = Buffer.byteLength(JOKE, "utf8");
  if (bytes !== EXPECTED_BYTES) {
    throw new Error(
      `joke is ${bytes} bytes, expected ${EXPECTED_BYTES}; refusing to write`,
    );
  }
  const digest = sha256Hex(JOKE);
  if (digest !== EXPECTED_SHA256) {
    throw new Error(
      `joke sha256 ${digest} does not match pinned ${EXPECTED_SHA256}; refusing to write`,
    );
  }
  if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
    throw new Error("joke fails the 1-200 character gate; refusing to write");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must be a single line; refusing to write");
  }

  // The grader sandbox mounts /output; OUTPUT_DIR lets a local trial aim
  // elsewhere without touching the program's behaviour.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
  console.log(
    `wrote ${bytes} bytes (${JOKE.length} characters) to ${outPath} (sha256 ${digest})`,
  );
}

main();
