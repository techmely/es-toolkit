import { globProcess } from "../../object/process";

/** Detect if process.platform is Windows */
// @__NO_SIDE_EFFECTS__
export function isWindows() {
  return /^win/i.test(globProcess.platform || "");
}
