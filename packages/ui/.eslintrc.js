import reactConfig from "@repo/eslint-config/react-internal.js";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1. This replaces `extends`. We assume the imported config is an array.
  ...reactConfig,

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
