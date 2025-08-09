import nextConfig from "@repo/eslint-config/next.js";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1. This replaces `extends`. We assume the imported config is an array.
  ...nextConfig,

  // 2. This replaces the top-level `parser` and `parserOptions`.
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
  },
];
