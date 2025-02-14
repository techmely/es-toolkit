import { globProcess } from "../../object/process";

/** Detect if process.platform is Linux */
// @__NO_SIDE_EFFECTS__
export function isLinux() {
  return /^linux/i.test(globProcess.platform || "");
}
