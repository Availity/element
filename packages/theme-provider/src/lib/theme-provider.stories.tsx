import type { StoryObj } from '@storybook/react-vite';
import { Alert } from '@availity/mui-alert';
import { ThemeProvider } from './theme-provider';

/** Wraps entire app for theme, locale, and date context */
export default {
  title: 'Design System/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs']
};

export const Default: StoryObj<typeof ThemeProvider> = {
  render: () => (
    <>
      <ThemeProvider theme="lightTheme">
        <Alert severity="info" sx={{mb: 2}}>This alert is inside the ThemeProvider using "lightTheme"</Alert>
      </ThemeProvider>
      <ThemeProvider theme="legacyBS">
        <Alert severity="info">This alert is inside the ThemeProvider using "legacyBS" theme</Alert>
      </ThemeProvider>
    </>
  ),
};
