module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-css-order',
  ],
  overrides: [
    { files: '.*rc!(.js)', options: { parser: 'json', printWidth: 200 } },
    { files: '*.cjs', options: { parser: 'babel' } },
  ],
};
