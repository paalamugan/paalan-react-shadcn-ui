import fse from 'fs-extra';
import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}'],
    format: ['esm', 'cjs'],
    target: 'esnext',
    outDir: 'dist',
    minify: true,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    dts: true,
    async onSuccess() {
      console.log('Build succeeded!');
      await fse.copy('src/css', 'dist/css');
      console.log('tailwind style copied!');
    },
    platform: 'browser',
  };
});
