module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    'vitest-globals/env': true,
  },
  extends: ['airbnb', 'prettier', 'plugin:vitest-globals/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.2' },
  },
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
