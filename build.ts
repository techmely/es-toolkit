import { execSync } from "node:child_process";
import json from "./package.json";

execSync("rm -rf dist");
await Bun.build({
  entrypoints: [
    "src/index.ts",
    "src/id.ts",
    "src/copyDir.ts",
    "src/emptyDir.ts",
    "src/findNearestFile.ts",
    "src/getDataPath.ts",
    "src/isFileReadable.ts",
    "src/isStream/index.ts",
    "src/readFile.ts",
    "src/getAppVersion.ts",
    "src/getCurrentGitBranch.ts",
    "src/getGitLastCommitHash.ts",
    "src/getGitTags.ts",
    "src/getLastGitTag.ts",
    "src/mergeStreams.ts",
    "src/writeFile.ts",
  ],
  outdir: "dist",
  target: "bun",
  sourcemap: "inline",
  external: [...Object.keys(json.peerDependencies)],
});

execSync("bun run tsc --emitDeclarationOnly --outDir dist");
execSync("mv dist/src/* dist");
execSync("rm -rf dist/src");
execSync("rm -rf dist/tsconfig.tsbuildinfo");
