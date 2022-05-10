module.exports = {
  overrides: [{
    env: {
      jest: true,
    },
    files: ['*.test.{j,t}s?(x)', '*.spec.{j,t}s?(x)'],
    plugins: ['jest'],
    extends: [
      'plugin:jest/recommended',
      require.resolve('./base.js'),
    ],
    rules: {},
  }],
};
