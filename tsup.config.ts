import { defineConfig } from "tsup";

export default [
  defineConfig({
    format: ["cjs", "esm"],
    entry: ["src/*.ts", "src/*/*.ts", "!**/*.test.,ts"],
    outDir: "dist/src",
    sourcemap: true,
    clean: true,
  }),
];
