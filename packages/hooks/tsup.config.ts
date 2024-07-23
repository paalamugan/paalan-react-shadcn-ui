import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    splitting: false,
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', 'react-router-dom', /@paalan\/react-(.*)/],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    platform: 'node',
    dts: true,
    define: {
      'import.meta.env.TEST': 'false',
      'import.meta.env.DEV': 'false',
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
