// Bcs the old folder structure not includes testing + right folder
// We need to migrate all of that folder to correct format

import * as fs from "node:fs";
import * as path from "node:path";

const srcDir = path.join(process.cwd(), "src");
console.log("srcDir:", srcDir);

function migrateFolderStructure(dir: string) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      const nestedDir = path.join(dir, item.name);
      const nestedItems = fs.readdirSync(nestedDir, { withFileTypes: true });

      for (const nestedItem of nestedItems) {
        if (nestedItem.isFile()) {
          const filePath = path.join(nestedDir, nestedItem.name);
          const fileName = path.parse(nestedItem.name).name;
          const newFolderPath = path.join(nestedDir, fileName);

          // Create new folder with the same name as the file
          fs.mkdirSync(newFolderPath, { recursive: true });

          // Copy file contents to index.ts in the new folder
          const fileContents = fs.readFileSync(filePath, "utf-8");
          fs.writeFileSync(path.join(newFolderPath, "index.ts"), fileContents);

          // Create a test file with the convention `${filename}.test.mts`
          fs.writeFileSync(path.join(newFolderPath, `${fileName}.test.mts`), "");

          // Optionally, delete the original file
          // fs.unlinkSync(filePath);
        }
      }
    }
  }
}

// Start the migration from the src directory
migrateFolderStructure(srcDir);
