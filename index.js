import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  prettier,
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      "no-await-in-loop": "error",
      "array-callback-return": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "no-alert": "error",
      "no-else-return": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-floating-decimal": "error",
      "one-var": ["error", "never"],
      curly: ["error", "multi-line"],
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-debugger": "error",
    },
  },
];
