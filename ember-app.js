const [emberOverrides] = require("./ember").overrides;

module.exports = {
  extends: ["./ember.js"],
  overrides: [
    {
      ...emberOverrides,
      files: [...emberOverrides.files, "lib/*/index.js", "server/**/*.js"],
      rules: {
        ...emberOverrides.rules,
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        "node/no-unpublished-require": "off",
      },
    },
  ],
};
