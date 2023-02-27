import type { StoryObj } from '@storybook/react';
import { ThemeProvider } from '@availity/theme-provider';

export const Default: StoryObj<typeof ThemeProvider> = {
  render: () => <>
    <ThemeProvider>
      <div>This component is inside the ThemeProvider</div>
    </ThemeProvider>
    <div>This component is outside the ThemeProvider</div>
  </>,
};

export default {
  title: 'Design System/ThemeProvider',
};
