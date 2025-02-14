import { envShims } from "../../object/env";
import { globProcess } from "../../object/process";
import { toBoolean } from "../../parser/toBoolean";

/** Detect if `NODE_ENV` environment variable is `production` */
// @__NO_SIDE_EFFECTS__
export function isNodeProd() {
  return globProcess.env.NODE_ENV === "production" || toBoolean(envShims().PRODUCTION);
}
