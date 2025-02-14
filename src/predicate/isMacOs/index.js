import { globProcess } from "../../object/process";
export function isMacOS() {
    return /^darwin/i.test(globProcess.platform || "");
}
