/**
 * Debugging:
 *   https://eslint.org/docs/latest/use/configure/debug
 *  ----------------------------------------------------
 *
 *   Print a file's calculated configuration
 *
 *     npx eslint --print-config path/to/file.js
 *
 *   Inspecting the config
 *
 *     npx eslint --inspect-config
 *
 */
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import ember from "eslint-plugin-ember/recommended";
import n from "eslint-plugin-n";
import prettier from "eslint-plugin-prettier/recommended";
import qunit from "eslint-plugin-qunit";
import globals from "globals";

import adfinisConfig from "./index.mjs";

const esmParserOptions = {
  ecmaFeatures: { modules: true },
  ecmaVersion: "latest",
  requireConfigFile: false,
  babelOptions: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
    ],
  },
};

export default [
  js.configs.recommended,
  prettier,
  ember.configs.base,
  ember.configs.gjs,
  ...adfinisConfig,
  /**
   * Ignores must be in their own object
   * https://eslint.org/docs/latest/use/configure/ignore
   */
  {
    ignores: ["dist/", "node_modules/", "coverage/", "!**/.*"],
  },
  /**
   * https://eslint.org/docs/latest/use/configure/configuration-files#configuring-linter-options
   */
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      parser: babelParser,
    },
  },
  {
    files: ["**/*.{js,gjs}"],
    languageOptions: {
      parserOptions: esmParserOptions,
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["tests/**/*-test.{js,gjs}"],
    plugins: {
      qunit,
    },
  },
  /**
   * CJS node files
   */
  {
    files: [
      "**/*.cjs",
      "config/**/*.js",
      "blueprints/**/*.js",
      "testem.js",
      "testem*.js",
      ".prettierrc.js",
      ".stylelintrc.js",
      ".template-lintrc.js",
      "ember-cli-build.js",
      // Missing in ember-addon-output
      "**/config/**/*.js",
      "blueprints/**/*.js",
      "index.js",
    ],
    plugins: {
      n,
    },

    languageOptions: {
      sourceType: "script",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
    },
  },
  /**
   * ESM node files
   */
  {
    files: ["**/*.mjs"],
    plugins: {
      n,
    },

    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: esmParserOptions,
      globals: {
        ...globals.node,
      },
    },
  },
];
