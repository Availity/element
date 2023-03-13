import { ThemeProvider } from '@availity/theme-provider';
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.light,
  },
  options: {
    storySort: {
      order: [
        'Element',
        'Contributing',
        'Design System/*',
        'Components/*'
      ],
    },
  },
};

const withThemeProvider = (Story: any) => {
    return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
  };

export const decorators = [withThemeProvider];
