# @adfinis-sygroup/eslint-config

This package contains our internally used eslint config.

## Usage

To install this package, simply run

`yarn add -D @adfinis-sygroup/eslint-config eslint eslint-plugin-prettier eslint-plugin-import`

Then add the following to your `.eslintrc.js`

```js
// .eslintrc.js

module.exports = {
  extends: "@adfinis-sygroup/eslint-config"
};
```

### Ember

If you are using it in an ember app or addon you can use the config for
ember:

`yarn add -D eslint-plugin-ember eslint-plugin-node`

```js
// .eslintrc.js

module.exports = {
  extends: "@adfinis-sygroup/eslint-config/ember-app" // for an app
};

// or

module.exports = {
  extends: "@adfinis-sygroup/eslint-config/ember-addon" // for an addon
};
```
