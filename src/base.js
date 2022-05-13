module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['unicorn', 'prettier', 'promise'],
  extends: [
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {
    // Define custom parcelLab rules
    'prettier/prettier': [
      'error',
      // Align prettier linting to the eslint rules
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        bracketSameLine: false,
        useTabs: false,
        endOfLine: 'lf',
        overrides: [],
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'unicorn/no-array-for-each': 'off',
  },
};
