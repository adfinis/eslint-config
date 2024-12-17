import babelParser from "@babel/eslint-parser";
import globals from "globals";

import adfinis from "./index.mjs";

export default [
  ...adfinis,
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
