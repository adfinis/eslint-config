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
            @babel/core \
            @babel/eslint-parser \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-import \
            eslint-plugin-ember \
            eslint-plugin-n \
            eslint-plugin-qunit \
            prettier
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

## Maintaining

Since we want to keep the config in sync with Ember.js' config, we need to
synchronize it from time to time. This can be done very easily by running
`yarn update-blueprints` and verifying the changes.
