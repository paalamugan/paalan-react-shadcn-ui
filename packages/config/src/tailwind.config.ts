import type { Config } from 'tailwindcss';

import tailwindLocalConfig, { tailwindSafeList } from './tailwind-local.config';

const config = {
  ...tailwindLocalConfig,
  safelist: tailwindSafeList,
} satisfies Config;

export default config;
