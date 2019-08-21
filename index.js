module.exports = {
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    // best practices
    "array-callback-return": 2,
    "dot-notation": 2,
    eqeqeq: 2,
    "no-alert": 2,
    "no-else-return": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 2,

    // Comma
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
  }
};
