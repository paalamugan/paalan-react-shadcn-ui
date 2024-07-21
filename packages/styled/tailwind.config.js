import tailwindConfig, { tailwindSafeList } from '@paalan/react-config/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,
  content: ['../**/src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: tailwindSafeList,
};
