import { envShims } from "../object/env";
import { toBoolean } from "../parser/toBoolean";

export function isCI() {
  return toBoolean(envShims().CI);
}
