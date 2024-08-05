import { envShims } from "../object/env";
import { globProcess } from "../object/process";
import { toBoolean } from "../parser/toBoolean";

/** Detect if `NODE_ENV` environment variable is `test` */
export function isNodeTest() {
  return globProcess.env.NODE_ENV === "test" || toBoolean(envShims().TEST);
}
