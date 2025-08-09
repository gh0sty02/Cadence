// @ts-check

import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/parser";
import airbnb from "eslint-config-airbnb-base";
import * as tsEslint from "@typescript-eslint/eslint-plugin";
import * as importPlugin from "eslint-plugin-import";
import * as nodePlugin from "eslint-plugin-node";
import * as promisePlugin from "eslint-plugin-promise";
import * as securityPlugin from "eslint-plugin-security";
import * as jsdocPlugin from "eslint-plugin-jsdoc";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Spread all the extended configurations first.
  // Note: Ensure these packages support flat config.
  pluginJs.configs.recommended,
  ...airbnb,
  tsEslint.configs.recommended,
  importPlugin.configs.errors,
  importPlugin.configs.warnings,
  importPlugin.configs.typescript,
  nodePlugin.configs.recommended,
  promisePlugin.configs.recommended,
  securityPlugin.configs.recommended,
  jsdocPlugin.configs.recommended,

  // Your custom configuration object
  {
    plugins: {
      "@typescript-eslint": tsEslint,
      import: importPlugin,
      node: nodePlugin,
      promise: promisePlugin,
      security: securityPlugin,
      jsdoc: jsdocPlugin,
    },

    languageOptions: {
      parser: tsPlugin,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },

    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },

    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "node/no-unsupported-features/es-syntax": [
        "error",
        { ignores: ["modules"] },
      ],
      "no-console": "off",
      "no-underscore-dangle": "off",
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: ["**/*.test.ts", "**/*.spec.ts"] },
      ],
    },
  },
];
