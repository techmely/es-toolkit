import { globProcess } from "../../object/process";

/** Detect if process.platform is Windows */
export function isWindows() {
  return /^win/i.test(globProcess.platform || "");
}
