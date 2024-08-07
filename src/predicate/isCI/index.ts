import { envShims } from "../../object";
import { toBoolean } from "../../parser";

export function isCI() {
  return toBoolean(envShims().CI);
}
