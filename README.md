# eslint-config-parcellab

Specific parcelLab configuration for JavaScript and TypeScript projects.

It applies the `recommended` rules from:

- All files (`.js, .jsx, .ts, .tsx`)
	- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
	- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
	- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
	- [eslint-config-airbnb](https://github.com/airbnb/javascript)
	- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- Typescript files, extra rules (`*.ts, *.tsx`)
	- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
	- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- Test files, extra rules (`*.test.*, *.spec.*`)
	- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

Therefore, these lint rules will be compatible with your prettier workflow, and won't collide when running prettier commands.

In addition, the following `recommended` rules can be enabled on demand. By default, when extending from `parcellab` directly, all will be enabled.
But you can choose by topic:
	- Javascript: `parcellab/javascript`;
	- Typescript: `parcellab/typescript`;
	- React: `parcellab/react`;
	- Jest: `parcellab/jest`;

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

#### All rules
```js
// .eslintrc.js
module.exports = {
  extends: ['parcellab'],
};
```
#### Rule by file types
You can choose only a single set of rules instead of all the recomended ones.
To do it, just extend only the desired one.

Examples:
```js
// .eslintrc.js

// for .js files
module.exports = {
  extends: ['parcellab/javascript'],
};

// for .ts files
module.exports = {
  extends: ['parcellab/typescript'],
};

// for .jsx files
module.exports = {
  extends: ['parcellab/react'],
};

// for test files
module.exports = {
  extends: ['parcellab/jest'],
};

// You can combine multiple extends, like this:
// for .tsx files
module.exports = {
  extends: ['parcellab/react', 'parcellab/typescript']
};
```

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
// .eslintrc.js
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```
