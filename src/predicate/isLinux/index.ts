import { globProcess } from "../../object/process";

/** Detect if process.platform is Linux */
export function isLinux() {
  return /^linux/i.test(globProcess.platform || "");
}
