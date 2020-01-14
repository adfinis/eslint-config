const [emberOverrides] = require("./ember").overrides;

module.exports = {
  extends: ["./ember.js"],
  overrides: [
    {
      ...emberOverrides,
      files: [
        ...emberOverrides.files,
        "index.js",
        "tests/dummy/config/**/*.js"
      ],
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**"
      ]
    }
  ]
};
