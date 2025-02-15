import { readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

async function removeIndexFiles(directory: string) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(directory, entry.name);

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        await removeIndexFiles(fullPath);
      } else if (entry.isFile() && (entry.name === "index.js" || entry.name === "index.d.ts")) {
        // Remove matching files
        await unlink(fullPath);
        console.log(`Removed: ${fullPath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${directory}:`, error);
  }
}

// Start the removal process from the src directory
const srcPath = join(process.cwd(), "src");
removeIndexFiles(srcPath)
  .then(() => console.log("Cleanup complete!"))
  .catch(console.error);
