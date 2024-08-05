import { execSync } from "node:child_process";

export async function getLastGitCommitHash() {
  const commitHash = execSync("git rev-parse --short HEAD").toString();
  return commitHash;
}
