import fs from "node:fs";
export function isFileReadable(filename) {
    try {
        fs.accessSync(filename, fs.constants.R_OK);
        return true;
    }
    catch {
        return false;
    }
}
