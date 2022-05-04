module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['unicorn', 'promise'],
  extends: [
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'unicorn/no-array-for-each': 'off',
  },
};
