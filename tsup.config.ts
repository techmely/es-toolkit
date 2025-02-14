import { execSync } from "node:child_process";
import { defineConfig } from "tsup";

console.log("Removing dist folder...");
execSync("rm -rf dist");
console.log("Removed dist folder!\n");

export default [
  defineConfig({
    format: ["cjs", "esm"],
    entry: [
      "src/index.ts",
      "src/file/**/*.ts",
      "src/git/*.ts",
      "src/date/**/*.ts",
      "src/promise/**/*.ts",
      "src/stream/**/*.ts",
      "!**/*.test.ts",
    ],
    outDir: "dist/src",
    treeshake: true,
    target: "es2022",
    external: ["dayjs", "base-x"],
    tsconfig: "tsconfig.json",
    onSuccess: async () => {
      console.log("Generating declaration files...");
      execSync("bun run tsc --emitDeclarationOnly --outDir dist");
      console.log("Generated declaration files!");
      execSync("mv dist/src/* dist");
      console.log("Moved declaration files!");
      execSync("rm -rf dist/src");
      execSync("rm -rf dist/tsconfig.tsbuildinfo");
    },
  }),
];
