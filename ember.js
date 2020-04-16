module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["ember"],
  extends: ["plugin:ember/recommended", "./index.js"],
  env: {
    browser: true,
  },
  rules: { "import/no-unresolved": "off" },
  overrides: [
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
      ],
      parserOptions: {
        sourceType: "script",
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ["node"],
      rules: require("eslint-plugin-node").configs.recommended.rules,
    },
  ],
};
