import { envShims } from "../../object";
import { toBoolean } from "../../parser";

// @__NO_SIDE_EFFECTS__
export function isCI() {
  return toBoolean(envShims().CI);
}
