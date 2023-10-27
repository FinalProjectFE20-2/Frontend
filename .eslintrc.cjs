module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier/prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb-base',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 'off ',
    'react/react-in-jsx-scope': 'off',
    // quotes: ["error", "double", { avoidEscape: true }],
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-var': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
