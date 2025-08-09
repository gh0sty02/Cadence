import { resolve } from "path";
import { Linter } from "eslint";
import pluginJs from "@eslint/js";
import vercelNext from "@vercel/style-guide/eslint/next";
import turbo from "eslint-config-turbo";
import onlyWarn from "eslint-plugin-only-warn";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {Linter.FlatConfig[]} */
export default [
  // Global ignores
  {
    ignores: [".*.js", "node_modules/"],
  },

  // Spread array configs
  ...pluginJs.configs.recommended,

  // Use vercelNext and turbo as objects
  ...vercelNext,
  ...turbo,

  // Main configuration object
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
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
