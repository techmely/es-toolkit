import { execSync } from "node:child_process";
import { glob } from "glob";

const tsFiles = await glob("src/**/*.ts");

execSync("rm -rf dist");
execSync("bun run build.tsup");

// await Bun.build({
//   entrypoints: tsFiles,
//   outdir: "dist",
//   target: "node",
//   format: "esm",
//   splitting: true,
//   naming: "[dir]/[name].mjs",
//   sourcemap: "inline",
//   external: ["*"],
// });

execSync("bun run tsc --emitDeclarationOnly --outDir dist");
execSync("mv dist/src/* dist");
execSync("rm -rf dist/src");
execSync("rm -rf dist/tsconfig.tsbuildinfo");
