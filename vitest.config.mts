import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ["lcovonly"],
    },
    include: ["**/*.test.?(m)ts?(x)"],
    exclude: ["node_modules", "dist"],
  },
});
