module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    rules: {
      "indent": [
        "error",
        2
      ],
      "semi": 2,
      "no-trailing-spaces": 2,
      "eol-last": 2,
      "no-console": [
        "error",
        { "allow": ["warn", "error"] }
      ],
      "no-shadow": 2,
      "no-else-return": 2,
      "no-param-reassign": 2,
      "no-eval": 2,
      "arrow-parens": 2,
      "prefer-const": 2,
      "prefer-template": 2,
      "strict": 2
    },
  };
  