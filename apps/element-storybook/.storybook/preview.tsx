import { themes } from '@storybook/theming';
import { ThemeProvider } from '@availity/theme-provider';

export const parameters = {
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
};

const withThemeProvider = (Story: () => JSX.Element) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
