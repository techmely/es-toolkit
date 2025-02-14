import fs from "node:fs";
import path from "node:path";
export function emptyDir(dir, skip) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (skip?.includes(entry.name)) {
            continue;
        }
        const abs = path.resolve(dir, entry.name);
        if (entry.isDirectory()) {
            emptyDir(abs, skip);
            fs.rmdirSync(abs);
        }
        else {
            fs.unlinkSync(abs);
        }
    }
}
