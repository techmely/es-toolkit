import fs from "node:fs";

// @__NO_SIDE_EFFECTS__
export function readFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
