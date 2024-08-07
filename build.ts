import { execSync } from "node:child_process";

execSync("rm -rf dist");
execSync("bun run build.tsup");
execSync("bun run tsc --emitDeclarationOnly --outDir dist");
execSync("mv dist/src/* dist");
execSync("rm -rf dist/src");
execSync("rm -rf dist/tsconfig.tsbuildinfo");
