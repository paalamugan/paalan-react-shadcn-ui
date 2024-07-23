import tailwindConfig from './packages/config/src/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ['./packages/**/src/**/*.{js,ts,jsx,tsx,mdx}'],
};
