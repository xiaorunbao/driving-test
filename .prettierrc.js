module.exports = {
  arrowParens: 'always',
  endOfLine: 'auto',
  importOrder: ['^src/(.*)$', '^[./]'],
  importOrderParserPlugins: ['jsx', 'typescript', 'decorators-legacy'],
  importOrderSeparation: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  printWidth: 120,
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'es5',
};
