import { themes } from '@storybook/theming';
import { Preview } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { ThemeProvider } from '@availity/theme-provider';

const withThemeProvider = (Story: () => JSX.Element, context: StoryContext) => {
  return (
    <ThemeProvider theme={context.globals.theme || 'lightTheme'}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'lightTheme',
      toolbar: {
        icon: 'switchalt',
        items: [
          { value: 'lightTheme', icon: 'sun', title: 'Light (default)' },
          { value: 'legacyBS', icon: 'markup', title: 'Development' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },
  decorators: [withThemeProvider],
  parameters: {
    docs: {
      controls: {
        sort: 'requiredFirst',
      },
      theme: themes.light,
      source: {
        excludeDecorators: true,
      },
    },
    controls: {
      sort: 'requiredFirst',
    },
    options: {
      storySort: {
        order: ['Element', 'Contributing', 'BS4 Migration', ['Getting Started'], 'Design System', 'Components'],
      },
    },
  },
};

export default preview;
