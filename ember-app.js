"use strict";
module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
      ],
    },
  },
  plugins: ["ember"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:prettier/recommended",
    "./index.js",
  ],
  env: { browser: true },
  rules: {},
  overrides: [
    {
      files: [
        "./.eslintrc.js",
        "./.prettierrc.js",
        "./.template-lintrc.js",
        "./ember-cli-build.js",
        "./testem.js",
        "./blueprints/*/index.js",
        "./config/**/*.js",
        "./lib/*/index.js",
        "./server/**/*.js",
      ],
      parserOptions: { sourceType: "script" },
      env: { browser: false, node: true },
      extends: ["plugin:n/recommended"],
    },
    {
      files: ["tests/**/*-test.{js,ts}"],
      extends: ["plugin:qunit/recommended"],
    },
  ],
};
