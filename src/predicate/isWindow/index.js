import { globProcess } from "../../object/process";
export function isWindows() {
    return /^win/i.test(globProcess.platform || "");
}
