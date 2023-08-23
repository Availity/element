import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { DecoratorFunction, Renderer, Args } from '@storybook/types';
import { ThemeProvider } from '@availity/theme-provider';
import { ThemeOptions, createTheme } from '@mui/material';
import { legacyTheme, lightTheme } from '@availity/theme';

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

const LightTheme = createTheme(lightTheme as ThemeOptions);
const LegacyTheme = createTheme(legacyTheme as ThemeOptions);

export const decorators: DecoratorFunction<Renderer, Args>[] = [
  withThemeFromJSXProvider({
    themes: {
      Current: LightTheme,
      Development: LegacyTheme,
    },
    defaultTheme: 'Current',
    Provider: ThemeProvider,
  }),
];
