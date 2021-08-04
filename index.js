module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["prettier", "import"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
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
    "prefer-destructuring": [
      "error",
      { AssignmentExpression: { array: false, object: false } },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",

    // import
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // tooling
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": "error",
  },
};
