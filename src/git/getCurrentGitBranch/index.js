import { execSync } from "node:child_process";
export async function getCurrentGitBranch() {
    return execSync("git rev-parse --abbrev-ref HEAD").toString();
}
