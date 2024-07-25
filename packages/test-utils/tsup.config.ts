import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', /@paalan\/react-(.*)/],
    target: 'esnext',
    outDir: 'dist',
    minify: true,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    platform: 'browser',
    dts: true,
    // esbuildOptions(options) {
    //   options.conditions = ['module']; // https://esbuild.github.io/api/#conditions
    // },

    banner: {
      js: "'use client';",
    },
  };
});
