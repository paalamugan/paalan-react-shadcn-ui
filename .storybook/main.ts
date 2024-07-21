import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

import 'storybook-addon-tw-dm-toggle';

import { mergeConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../packages/**/src/**/*.mdx',
    '../stories/**/*.mdx',
    '../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  core: {
    disableTelemetry: true,
  },

  addons: [
    'storybook-addon-tw-dm-toggle',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    'storybook-addon-react-router-v6',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../packages')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 120, singleQuote: false },
        },
      },
    },
    '@chromatic-com/storybook',
    '@storybook/addon-mdx-gfm',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: (config) => {
    // customize the Vite config here
    config.plugins?.push(tsconfigPaths());
    config.plugins?.push(EnvironmentPlugin('all'));

    if (config.build) {
      config.build = {
        ...config.build,
        chunkSizeWarningLimit: 25000,
      };
    }

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@paalan/react-components': path.resolve(__dirname, '../packages/components/src'),
        '@paalan/react-hooks': path.resolve(__dirname, '../packages/hooks/src'),
        '@paalan/react-icons': path.resolve(__dirname, '../packages/icons/src'),
        '@paalan/react-layouts': path.resolve(__dirname, '../packages/layouts/src'),
        '@paalan/react-providers': path.resolve(__dirname, '../packages/providers/src'),
        '@paalan/react-shared': path.resolve(__dirname, '../packages/shared/src'),
        '@paalan/react-styled': path.resolve(__dirname, '../packages/styled/src'),
      };
    }

    // Merge custom configuration into the default config
    return mergeConfig(config, {});
  },

  docs: {},

  staticDirs: ['./public'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
