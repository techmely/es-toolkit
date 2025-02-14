import fs from "node:fs";
import path from "node:path";
export function writeFile(filename, content) {
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filename, content);
}
