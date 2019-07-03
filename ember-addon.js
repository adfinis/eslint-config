const emberOverrides = require("./ember").overrides[0];

module.exports = {
  extends: ["./ember.js"],
  overrides: [
    Object.assign(emberOverrides, {
      files: emberOverrides.files.concat([
        "index.js",
        "tests/dummy/config/**/*.js"
      ]),
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**"
      ]
    })
  ]
};
