export default {
  'packages/**/*.{ts,tsx}': () => 'pnpm type-check',
  'packages/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix --no-ignore --cache --max-warnings 0'],
  '*.{json,md,mdx,yml}': 'prettier --write',
};
