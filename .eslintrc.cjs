module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        semi: true,
        trailingComma: 'none'
      }
    ],
    semi: ['error', 'always', { omitLastInOneLineBlock: false }],
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0
  }
};
