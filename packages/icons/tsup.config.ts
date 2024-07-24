import path from 'path';

import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/index.ts', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', '!src/**/*.d.ts'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', /@paalan\/react-(.*)/],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    dts: true,
    platform: 'browser',
    tsconfig: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
    // esbuildOptions(options) {
    //   options.conditions = ['module']; // https://esbuild.github.io/api/#conditions
    // },

    // banner: {
    //   js: "'use client';",
    // },
  };
});
