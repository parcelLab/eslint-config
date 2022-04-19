# eslint-config-parcellab

Specific parcelLab configuration for JavaScript and TypeScript projects.

It applies the `recommended` rules from:

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-ordered-imports](https://www.npmjs.com/package/eslint-plugin-ordered-imports)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

Therefore, these lint rules will be compatible with your prettier workflow, and won't collide when
running prettier commands.

In addition, the following `recommended` rules can be enabled on demand. By default, when extending
from `parcellab` directly, all will be enabled.

- JavaScript
  - [eslint](https://www.npmjs.com/package/eslint)
- Jest
  - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- React
  - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- TypeScript
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
    - `typescript`
  - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
    - `eslint-recommended`
    - `recommended`
    - `recommended-requiring-type-checking`

## Configuration

### 1. Install [ESLint](http://eslint.org)

```sh
# npm
npm install eslint --save-dev
# yarn
yarn add eslint --save
```

### 2. Install `eslint-config-parcellab`

```sh
# npm
npm install eslint-config-parcellab --save-dev
# yarn
yarn add eslint-config-parcellab --save
```

### 3. Install required ESLint Plugins and configure

All configurations inherit from some base rules. Therefore these plugins are always required.

```sh
# npm
npm install eslint-plugin-eslint-comments \
            eslint-plugin-import \
            eslint-plugin-node \
            eslint-plugin-ordered-imports \
            eslint-plugin-promise \
            eslint-plugin-unicorn \
            --save-dev
# yarn
yarn add eslint-plugin-eslint-comments \
         eslint-plugin-import \
         eslint-plugin-node \
         eslint-plugin-ordered-imports \
         eslint-plugin-promise \
         eslint-plugin-unicorn \
         --dev
```

#### JavaScript

Lints `.js` files.

To add this configuration:

```js
module.exports = {
  extends: ['parcellab/javascript'],
};
```

#### Jest

Lints JavaScript/TypeScript test files with the following globs.

```js
[
  '**/__tests__/*.{j,t}s?(x)',
  '**/test/**/*.{j,t}s?(x)',
  '**/*.spec.{j,t}s?(x)',
  '**/*.test.{j,t}s?(x)',
];
```

It requires the following additional plugin:

```sh
# npm
npm install eslint-plugin-jest \
            --save-dev
# yarn
yarn add eslint-plugin-jest \
         --dev
```

To add this configuration:

```js
module.exports = {
  extends: ['parcellab/jest'],
};
```

#### React

Lints `.tsx` and `.jsx` React files that are no tests.

It requires the following additional plugins:

```sh
# npm
npm install eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            --save-dev
# yarn
yarn add eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         --dev
```

To add this configuration:

```js
module.exports = {
  extends: ['parcellab/react'],
};
```

#### TypeScript

Lints `.ts` and `.tsx` Files.

It requires the following additional plugin:

```sh
# npm
npm install @typescript-eslint/eslint-plugin \
            --save-dev
# yarn
yarn add @typescript-eslint/eslint-plugin \
         --dev
```

To add this configuration, you need to define your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your tsconfig.json.

For example:

```js
 module.exports = {
   extends: ['parcellab/typescript'],
+  parserOptions: {
+    project: './tsconfig.json',
+ }
 };
```

#### All

If you just want to use all the rules (ideally for a monorepo setup):

```sh
# npm
npm install eslint-plugin-eslint-comments \
            eslint-plugin-import \
            eslint-plugin-node \
            eslint-plugin-ordered-imports \
            eslint-plugin-promise \
            eslint-plugin-jest \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            @typescript-eslint/eslint-plugin \
            --save-dev
# yarn
yarn add eslint-plugin-eslint-comments \
         eslint-plugin-import \
         eslint-plugin-node \
         eslint-plugin-ordered-imports \
         eslint-plugin-promise \
         eslint-plugin-jest \
         eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         @typescript-eslint/eslint-plugin \
         --dev
```

and

```js
module.exports = {
  extends: ['parcellab'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

The `tsconfigRootDir` is useful when you want to load different `tsconfig.json` files.
It will always use the TypeScript configuration of the package to be linted.

### 4. Run ESLint

Run the following script:

```bash
# npm
npx eslint .
# yarn
yarn eslint .
```

ESLint will lint all relevant JS and TS files within the current folder, and output results.

Most IDEs via a ESLint plugin will also give these results.

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
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```
