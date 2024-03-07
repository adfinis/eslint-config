# @adfinis/eslint-config

This package contains our internally used eslint config.

## Usage

To install this package, simply run

```bash
pnpm add -D @adfinis/eslint-config \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-import
```

Then add the following to your `.eslintrc.js`

```js
module.exports = {
  extends: "@adfinis/eslint-config",
};
```

### Ember

If you are using it in an ember app or addon you can use the config for
ember:

```bash
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
module.exports = {
  extends: "@adfinis/eslint-config/ember-app",
};
```

Or for an addon replace your `.eslintrc.js` with this:

```js
module.exports = {
  extends: "@adfinis/eslint-config/ember-addon",
};
```

## Maintaining

Since we want to keep the config in sync with Ember.js' config, we need to
synchronize it from time to time. This can be done very easily by running
`pnpm update-blueprints` and verifying the changes.

There is also a [Github Action](https://github.com/adfinis/eslint-config/actions/workflows/update-blueprints.yml)
that runs this script automatically every week at Friday 12:00 and opens a
[PR](https://github.com/adfinis/eslint-config/pulls?q=is%3Aopen+is%3Apr+label%3Aupdate-blueprints)
if there is a change.
