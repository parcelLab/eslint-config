# @parcellab/eslint-config

Specific parcelLab configuration for JavaScript and TypeScript projects. It also includes React and Jest rules.

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
If no config is specified, the `javascript` config will be used.

For example:

```js
module.exports = {
  extends: [
    '@parcellab', // This installs the `javascript` configuration
  ],
};
```

## Configurations

Configurations are stored in `./src` and their required plugins.

| Config                                                  | Files                             | Plugins                                                                                            |
| :------------------------------------------------------ | :-------------------------------- | :------------------------------------------------------------------------------------------------- |
| [base](./src/graphql.js)                                | based on consumer                 | `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-promise`, `eslint-plugin-unicorn` |
| [javascript](./src/javascript.js) (extends `base`)      | all                               |                                                                                                    |
| [jest](./src/jest.js)                                   | `*.{test,spec}.{j,t}s?(x)`        | `eslint-plugin-jest`                                                                               |
| [react-testing-library](./src/react-testing-library.js) | `**/?(*.)+(test).{js,jsx,ts,tsx}` | `eslint-plugin-testing-library`                                                                    |
| [react-ts](./src/react.js) (extends `typescript`)       | `*.tsx`                           | `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks`                       |
| [react](./src/react.js) (extends `base`)                | `*.jsx`                           | `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks`                       |
| [playwright](./src/playwright.js)                       | `**/e2e/**/*.test.{js,ts}`        | `eslint-plugin-playwright`                                                                         |
| [storybook](./src/storybook.js)                         | `*.stories.{ts,tsx,mdx}`          | `eslint-plugin-storybook`                                                                          |
| [typescript](./src/typescript.js) (extends `base`)      | `*.{ts,tsx}`                      | `@typescript-eslint/eslint-plugin`                                                                 |

For instance, to lint TypeScript files, the `@parcellab/typescript` config has to be used
and all the base plugins (`eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-promise`, `eslint-plugin-unicorn`)
and the typescript plugin (`@typescript-eslint/eslint-plugin`) has to be installed as development dependencies:

```sh
# npm
npm install eslint-plugin-import \
            eslint-plugin-prettier \
            eslint-plugin-promise \
            eslint-plugin-unicorn \
            @typescript-eslint/eslint-plugin \
            --save-dev
# yarn
yarn add eslint-plugin-import \
         eslint-plugin-prettier \
         eslint-plugin-promise \
         eslint-plugin-unicorn \
         @typescript-eslint/eslint-plugin \
         --dev
```

### Configuration examples

```js
// .eslintrc.js

// for .js files
module.exports = {
  extends: ['@parcellab/javascript'], // Or just `@parcellab`
};

// for .ts and .tsx files (do not forget to add `parseOptions` pointing to the tsconfig file)
module.exports = {
  extends: ['@parcellab/typescript'],
  parserOptions: {
    project: './tsconfig.json',
    // Enable tsconfigRootDir if the tsconfig has to be loaded base on folder (e.g. monorepo)
    // tsconfigRootDir: __dirname,
  },
};

// for .jsx files
module.exports = {
  extends: ['@parcellab/react'],
};

// for .tsx files
module.exports = {
  extends: ['@parcellab/react-ts'],
};

// for test files
module.exports = {
  extends: ['@parcellab/jest'],
};

// for e2e tests
module.exports = {
  extends: ['@parcellab/playwright'],
};

// for react testing library tests
module.exports = {
  extends: ['@parcellab/react-testing-library'],
};

// for storybook files
module.exports = {
  extends: ['@parcellab/storybook'],
};

// You can combine multiple extends, like this:
// for .tsx files
module.exports = {
  extends: ['@parcellab/react', '@parcellab/typescript'],
  parserOptions: {
    project: './tsconfig.json',
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

## Development

Prepare the hooks (to automatically lint files before commit)

```sh
yarn prepare
```

Lint the lint rules

```sh
yarn lint
```

Run the tests

```sh
yarn test
```
