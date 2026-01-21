// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname, join } from 'path';
import remarkGfm from 'remark-gfm';
import { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    '../src/*.mdx',
    '../src/!(templates)/**/*.mdx',
    '../src/**/*.@(stories.@(js|jsx|ts|tsx))',
    '../../../packages/*/*.mdx',
    '../../../packages/*/src/lib/*.mdx',
    '../../../packages/*/src/lib/*.@(stories.@(js|jsx|ts|tsx|mdx))',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: getAbsolutePath("@storybook/addon-docs"),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    }
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },

  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) // filter out all node_modules except packages starting with "@mui"
          : true,
    },

    reactDocgen: 'react-docgen-typescript',
  },

  staticDirs: ['../../../static'],
  features: {
    actions: false,
    interactions: false,
    storyStoreV7: false
  },

  docs: {}
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}
