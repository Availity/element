import remarkGfm from 'remark-gfm';
import { StorybookConfig } from '@storybook/react-vite';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/*/*.mdx',
    '../../../packages/*/src/lib/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons'],
      },
    });
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) // filter out all node_modules except packages starting with "@mui"
          : true,
    },
  },
  staticDirs: ['../../../static'],
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
