import babelParser from "@babel/eslint-parser";
import globals from "globals";

import adfinisConfig from "./index.mjs";

export default [
  ...adfinisConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: babelParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },
];
