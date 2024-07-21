import tailwindConfig, { tailwindSafeList } from './packages/config/src/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,
  content: ['./packages/**/src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: tailwindSafeList,
};
