import { glob } from "glob";
import { execSync } from "node:child_process";
import json from "./package.json";

const tsFiles = await glob("src/**/*.ts");

execSync("rm -rf dist");
await Bun.build({
  entrypoints: tsFiles,
  outdir: "dist",
  target: "node",
  format: "esm",
  splitting: true,
  sourcemap: "inline",
  external: ["*"],
});

execSync("bun run tsc --emitDeclarationOnly --outDir dist");
execSync("mv dist/src/* dist");
execSync("rm -rf dist/src");
execSync("rm -rf dist/tsconfig.tsbuildinfo");
