import path from "node:path";
import type { StringEnum } from "@techmely/types";
import esbuild from "esbuild";

// @__NO_SIDE_EFFECTS__
export async function getBundleSize(pkg: StringEnum<"@techmely/es-toolkit">, funcName: string) {
  const script = `import { ${funcName} } from "${pkg}"; console.log(${funcName})`;

  const bundled = await esbuild.build({
    stdin: {
      contents: script,
      resolveDir: import.meta.dirname,
      sourcefile: path.resolve(import.meta.dirname, "test.js"),
      loader: "js",
    },
    write: false,
    minify: true,
    bundle: true,
  });
  if (bundled.outputFiles.length > 0) {
    return Buffer.from(bundled.outputFiles[0].contents).byteLength;
  }

  throw new Error(`Failed to get bundle size of the function ${funcName} in ${pkg}`);
}
