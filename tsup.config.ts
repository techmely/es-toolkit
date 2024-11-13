import { defineConfig } from "tsup";

export default [
  defineConfig({
    format: ["cjs", "esm"],
    entry: ["src/*.ts", "src/**/*.ts", "!**/*.test.ts"],
    outDir: "dist/src",
    clean: true,
    treeshake: true,
    target: "es2022",
    external: ["dayjs", "base-x"],
  }),
];
