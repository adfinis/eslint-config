module.exports = {
  extends: ["./index.js"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    node: true,
  },
};
