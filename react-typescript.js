module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb',
  plugins: ['react'],
  rules: {
    curly: ['error', 'multi'],
    indent: ['error', 2],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either', depth: 5 }],
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 'latest',
      project: './test/fixtures/tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
    },
  }],
};
