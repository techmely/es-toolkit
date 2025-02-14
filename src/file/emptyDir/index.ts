import fs from "node:fs";
import path from "node:path";

/**
 * Delete every file and subdirectory. **The given directory must exist.**
 * Pass an optional `skip` array to preserve files in the root directory.
 */
// @__NO_SIDE_EFFECTS__
export function emptyDir(dir: string, skip?: string[]): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (skip?.includes(entry.name)) {
      continue;
    }
    const abs = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      emptyDir(abs, skip);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  }
}
