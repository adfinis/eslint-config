module.exports = {
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    // possible errors
    "no-await-in-loop": "error",

    // best practices
    "array-callback-return": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "no-alert": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",

    // ES6
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error"
  }
};
