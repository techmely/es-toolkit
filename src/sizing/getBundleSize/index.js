import path from "node:path";
import esbuild from "esbuild";
export async function getBundleSize(pkg, funcName) {
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
