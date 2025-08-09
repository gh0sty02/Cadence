// @ts-check

import { resolve } from "node:path";
import globals from "globals";
import pluginJs from "@eslint/js";
import turbo from "eslint-config-turbo";
import onlyWarn from "eslint-plugin-only-warn";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Global ignores
  {
    ignores: [".*.js", "node_modules/", "dist/"],
  },

  // Spread extended configs
  pluginJs.configs.recommended,
  ...turbo,

  // Main configuration object
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        React: "readonly",
        JSX: "readonly",
      },
    },

    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },

  // Override-like behavior
  {
    files: ["*.js?(x)", "*.ts?(x)"],
  },
];
