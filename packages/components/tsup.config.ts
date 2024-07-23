import fse from 'fs-extra';
import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', '!src/**/*.d.ts'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', 'react-router-dom', 'react-error-boundary', /@paalan\/react-(.*)/],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    platform: 'browser',
    async onSuccess() {
      console.log('Build succeeded!');
      await fse.copy('src/tailwind.css', 'dist/tailwind.css');
      console.log('Tailwind css copied!');
    },
    dts: {
      entry: ['src/index.ts', 'src/components/index.ts', 'src/base/index.ts'],
    },
    // esbuildOptions(options) {
    //   options.conditions = ['module']; // https://esbuild.github.io/api/#conditions
    // },

    banner: {
      js: "'use client';",
    },
    ...options,
  };
});
