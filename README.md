# @adfinis-sygroup/eslint-config

This package contains our internally used eslint config.

## Usage

To install this package, simply run

```bash
yarn add -D @adfinis-sygroup/eslint-config \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-import
```

Then add the following to your `.eslintrc.js`

```js
module.exports = {
  extends: "@adfinis-sygroup/eslint-config",
};
```

### Ember

If you are using it in an ember app or addon you can use the config for
ember:

```bash
yarn add -D @adfinis-sygroup/eslint-config \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-import \
            eslint-plugin-ember \
            eslint-plugin-node \
            eslint-plugin-qunit
```

For an app replace your `.eslintrc.js` with this:

```js
module.exports = {
  extends: "@adfinis-sygroup/eslint-config/ember-app",
};
```

Or for an addon replace your `.eslintrc.js` with this:

```js
module.exports = {
  extends: "@adfinis-sygroup/eslint-config/ember-addon",
};
```
