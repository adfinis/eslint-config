# @adfinis/eslint-config

This package contains our internally used eslint config.

## Usage

To install this package, simply run

```console
pnpm add -D @adfinis/eslint-config \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-import
```

Then add the following to your `.eslintrc.js`

```js
import adfinisConfig from "@adfinis/eslint-config";

export default [
  ...adfinisConfig,
  {
    // Custom rules for your project
  },
];
```

### Ember

If you are using it in an ember app or addon you can use the config for
ember:

```console
pnpm add -D @adfinis/eslint-config \
            @babel/eslint-parser \
            @babel/plugin-proposal-decorators \
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
import adfinisEmberAppConfig from "@adfinis/eslint-config/ember-app";

export default [
  ...adfinisEmberAppConfig,
  {
    // Custom rules for your project
  },
];
```

Or for an addon replace your `.eslintrc.js` with this:

```js
import adfinisEmberAddonConfig from "@adfinis/eslint-config/ember-addon";

export default [
  ...adfinisEmberAddonConfig,
  {
    // Custom rules for your project
  },
];
```
