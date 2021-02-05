module.exports = {
  extends: 'airbnb-base',
  env: {
    // To allow console variable.
    browser: true,
  },
  rules: {
    // Because browser doesn't automatically add the file extensions.
    'import/extensions': [
      'error',
      'always',
    ],
    // To allow console.log().
    'no-console': 'off',
  },
};
