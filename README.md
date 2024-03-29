# @parcellab/eslint-config

[![Publish](https://github.com/parcelLab/eslint-config/actions/workflows/publish.yaml/badge.svg)](https://github.com/parcelLab/eslint-config/actions/workflows/publish.yaml) [![Test](https://github.com/parcelLab/eslint-config/actions/workflows/test.yaml/badge.svg)](https://github.com/parcelLab/eslint-config/actions/workflows/test.yaml)

Specific parcelLab configuration for JavaScript and TypeScript projects. It also includes React ecosystem and Jest rules.

The philosophy is to use `prettier` for auto formatting code syntactically, therefore this configuration extensively uses `eslint-config-prettier` as defined in [prettier's documentation](https://prettier.io/docs/en/integrating-with-linters.html), disabling some eslint rules that could collide with prettier's. Anything else that prettier can't auto format will be linted by eslint.

## Features

- **Customizable**: extend the exported configurations and fine-tune them.
- **Composable**: add only what your project needs. Increase performance and reduce side-effects.
- **Easy**: explanatory documentation about the plugins you need for every custom rule.

## Install

```sh
# npm
$ npm install @parcellab/eslint-config --save-dev
# yarn
$ yarn add --dev @parcellab/eslint-config
```

## Usage

In your package, create a `.eslintrc.js` file that extends any of the existing configs.
If no config is specified, the base `typescript` config will be used.

For example:

```js
module.exports = {
  extends: [
    "@parcellab", // This installs the typescript configuration
  ],
};
```

## Configurations

Configurations are stored in `./src` and their required plugins.

| Config                                                        | Files to be linted                | Required configs/plugins                                                                                                     |
| :------------------------------------------------------------ | :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [base](./src/base.js)                                         | all                               | `eslint-plugin-promise`, `eslint-plugin-unicorn`                                                                             |
| [jest](./src/jest.js)                                         | `*.{test,spec}.{j,t}s?(x)`        | `eslint-plugin-jest`                                                                                                         |
| [react-testing-library](./src/react-testing-library.js)       | `**/?(*.)+(test).{js,jsx,ts,tsx}` | `eslint-plugin-testing-library`                                                                                              |
| [react-ts](./src/react.js) (extends `react` and `typescript`) | `*.tsx`                           | `eslint-config-airbnb-typescript`                                                                                            |
| [react](./src/react.js) (extends `base`)                      | `*.jsx`                           | `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks` |
| [playwright](./src/playwright.js)                             | `**/e2e/**/*.test.{js,ts}`        | `eslint-plugin-playwright`                                                                                                   |
| [storybook](./src/storybook.js)                               | `*.stories.{ts,tsx,mdx}`          | `eslint-plugin-storybook`                                                                                                    |
| [typescript](./src/typescript.js) (extends `base`) DEFAULT    | `*.{ts,tsx}`                      | `eslint-plugin-import`, `eslint-import-resolver-typescript`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` |

For instance, to lint TypeScript files (the default), the `@parcellab/typescript` config has to be used
and all the base plugins (`eslint-plugin-promise`, `eslint-plugin-unicorn`)
and the typescript plugin (`@typescript-eslint/eslint-plugin`) has to be installed as development dependencies:

```sh
# npm
npm install eslint-plugin-import \
            eslint-import-resolver-typescript \
            eslint-plugin-promise \
            eslint-plugin-unicorn \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            --save-dev
# yarn
yarn add eslint-plugin-import \
         eslint-import-resolver-typescript \
         eslint-plugin-promise \
         eslint-plugin-unicorn \
         @typescript-eslint/eslint-plugin \
         @typescript-eslint/parser \
         --dev
```

To lint a React codebase that uses TypeScript, you need to install all plugins for
`typescript` and `react` as it depends on these:

```sh
# npm
npm install eslint-plugin-import \
            eslint-plugin-promise \
            eslint-plugin-unicorn \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-config-airbnb \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            eslint-config-airbnb-typescript \
            --save-dev
# yarn
yarn add eslint-plugin-import \
         eslint-plugin-promise \
         eslint-plugin-unicorn \
         @typescript-eslint/eslint-plugin \
         @typescript-eslint/parser \
         eslint-config-airbnb \
         eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         eslint-config-airbnb-typescript \
         --dev
```

### Configuration examples

```js
// minimum configuration, e.g. for .js files
module.exports = {
  extends: ["@parcellab/eslint-config/base"],
};
```

```js
// for .ts and .tsx files (do not forget to add `parseOptions` pointing to the tsconfig file)
module.exports = {
  extends: ["@parcellab/eslint-config/typescript"], // or just "@parcellab"
  parserOptions: {
    project: "./tsconfig.json",
    // Enable tsconfigRootDir if the tsconfig has to be loaded base on folder (e.g. monorepo)
    // tsconfigRootDir: __dirname,
  },
};
```

```js
// for .jsx files
module.exports = {
  extends: ["@parcellab/eslint-config/react"],
};
```

```js
// for .tsx files
module.exports = {
  extends: ["@parcellab/eslint-config/react-ts"],
};
```

```js
// for test files
module.exports = {
  extends: ["@parcellab/eslint-config/jest"],
};
```

```js
// for e2e tests
module.exports = {
  extends: ["@parcellab/eslint-config/playwright"],
};
```

```js
// for react testing library tests
module.exports = {
  extends: ["@parcellab/eslint-config/react-testing-library"],
};
```

```js
// for storybook files
module.exports = {
  extends: ["@parcellab/eslint-config/storybook"],
};
```

```js
// You can combine multiple extends, like this:
// for typescript files and their tests
module.exports = {
  extends: [
    "@parcellab/eslint-config/typescript",
    "@parcellab/eslint-config/jest",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```

## Troubleshooting

### I get this error when running ESLint: "The file must be included in at least one of the projects provided"

This means you are attempting to lint a file that `tsconfig.json` doesn't include, when running
the `parcellab/typescript` config.

A common fix is to create a `tsconfig.eslint.json` file, which extends your `tsconfig.json` file and includes all files you are linting.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"]
}
```

Update your ESLint config file:

```js
// .eslintrc.js
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```

### ESLint couldn't find the config "X" to extend from. Please check that the name of the config is correct

This could also happen with plugins. When this error is encountered, it is because
a peer dependency defined by this library is not fulfilled. Check the [Configurations table](#configurations) and make sure that all the configs and plugins are installed. The consumers of this library should be the ones that manage
any peer dependencies so they are not constrained from the versions defined in this library.

## Development

Lint the lint rules

```sh
npm run lint
```

Run the tests

```sh
npm t
```
