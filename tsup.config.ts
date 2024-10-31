import { defineConfig } from "tsup";

export default [
  defineConfig({
    format: ["cjs", "esm", "iife"],
    entry: ["src/*.ts", "src/**/*.ts", "!**/*.test.ts"],
    outDir: "dist/src",
    clean: true,
    external: ["dayjs", "base-x"],
  }),
];
