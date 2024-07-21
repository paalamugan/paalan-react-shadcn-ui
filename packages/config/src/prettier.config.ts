import type { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';
import type { PluginOptions } from 'prettier-plugin-tailwindcss';

const config: PrettierConfig & PluginOptions = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: [
    '^react$',
    '^next$',
    '',
    '^@?\\w',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@)(/.*)$',
    '',
    '^[.]',
  ],
  tailwindFunctions: ['cn'],
};

export default config;
