const emberOverrides = require("./ember").overrides[0];

module.exports = {
  extends: ["./ember.js"],
  overrides: [
    Object.assign(emberOverrides, {
      files: emberOverrides.files.concat(["lib/*/index.js", "server/**/*.js"]),
      rules: Object.assign(emberOverrides.rules, {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        "node/no-unpublished-require": "off"
      })
    })
  ]
};
