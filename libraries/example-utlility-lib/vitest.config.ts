import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: {
    target: ["es2022"],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: ["es2022"],
    },
  },
  test: {
    include: ["**/*.spec.ts"],
    coverage: { enabled: false },
  },
});
