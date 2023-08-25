module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Add this line
      'plugin:prettier/recommended' // Add this line
    ],
    rules: {
      // Your custom rules
    },
  };
  