module.exports = {
  root: true,
  ignorePatterns: ["*.d.ts", "*.mjs", "*.js", "vitest.config.ts"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
};
