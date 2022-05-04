module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react'],
  extends: [
    require.resolve('./base.js'),
    'airbnb/hooks',
  ],
};
