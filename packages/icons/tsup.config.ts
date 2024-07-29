import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.ts', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', '!src/**/*.d.ts'],
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
    dts: {
      entry: ['src/index.ts'],
    },
    platform: 'browser',
    // esbuildOptions(options) {
    //   options.conditions = ['module']; // https://esbuild.github.io/api/#conditions
    // },

    banner: {
      js: "'use client';",
    },
  };
});
