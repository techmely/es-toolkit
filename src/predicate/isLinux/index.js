import { globProcess } from "../../object/process";
export function isLinux() {
    return /^linux/i.test(globProcess.platform || "");
}
