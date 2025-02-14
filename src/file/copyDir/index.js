import fs from "node:fs";
import path from "node:path";
export function copyDir(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
        const srcFile = path.resolve(srcDir, file);
        if (srcFile === destDir) {
            continue;
        }
        const destFile = path.resolve(destDir, file);
        const stat = fs.statSync(srcFile);
        if (stat.isDirectory()) {
            copyDir(srcFile, destFile);
        }
        else {
            fs.copyFileSync(srcFile, destFile);
        }
    }
}
