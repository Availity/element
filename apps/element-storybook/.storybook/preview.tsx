import React from 'react';
import { Preview } from '@storybook/react-vite';
import { Title, Subtitle, Description, Primary, Controls, Stories, useOf } from '@storybook/addon-docs/blocks';
import type { StoryContext } from 'storybook/internal/types';
import { ThemeProvider } from '@availity/theme-provider';

const docsBackgrounds: Record<string, string> = {
  lightTheme: '#FFFFFF',
  legacyBS: '#FFFFFF',
  docsLight: '#EEF1F8',
  docsDark: '#000C30',
};

const ThemeWrapper = ({ Story, theme }: { Story: () => React.JSX.Element; theme: string }) => {
  const bg = docsBackgrounds[theme] || '#FFFFFF';
  const isDark = theme === 'docsDark';

  React.useEffect(() => {
    document.body.style.background = bg;
    document.body.style.color = isDark ? '#EFF3FF' : '#000C30';

    const docsStory = document.querySelector('.docs-story') as HTMLElement;
    if (docsStory) {
      docsStory.style.background = bg;
    }
    const sbDocs = document.querySelector('.sb-docs') as HTMLElement;
    if (sbDocs) {
      sbDocs.style.background = bg;
      sbDocs.style.color = isDark ? '#EFF3FF' : '#000C30';
    }
  }, [bg, isDark]);

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const withThemeProvider = (Story: () => React.JSX.Element, context: StoryContext) => {
  const theme = context.globals.theme || 'lightTheme';
  return <ThemeWrapper Story={Story} theme={theme} />;
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
          { value: 'legacyBS', icon: 'markup', title: 'Legacy Bootstrap' },
          { value: 'docsLight', icon: 'document', title: 'Docs Light' },
          { value: 'docsDark', icon: 'moon', title: 'Docs Dark' },
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
        disableSaveFromUI: true,
      },
      source: {
        excludeDecorators: true,
        type: 'code',
      },
      page: () => {
        // https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/blocks/DocsPage.tsx
        // Adjusting autodocs when no component passed
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const resolvedOf = useOf('meta', ['meta']);
        const { stories, meta } = resolvedOf.csfFile;
        const isSingleStory = Object.keys(stories).length === 1;

        return (
          <>
            <Title />
            <Subtitle />
            <Description of="meta" />
            {isSingleStory ? <Description of="story" /> : null}
            {meta?.component ? <Primary /> : null}
            {meta?.component ? <Controls /> : null}
            {isSingleStory ? null : (
              <Stories title={meta?.component ? 'Stories' : ''} includePrimary={!meta?.component} />
            )}
          </>
        );
      },
    },
    controls: {
      sort: 'requiredFirst',
    },
    options: {
      storySort: {
        order: [
          'Element',
          'Contributing',
          'Introduction',
          'Upgrading',
          ['BS4 Migration', ['Getting Started', 'Form Migration', '*', 'Upload']],
          'Sample Layouts',
          'Design System',
          'Form Components',
          [
            'Component Guide',
            'Controlled Form',
            ['*', 'README'],
            'Uncontrolled Fields',
            ['Autocomplete', ['*', 'README'], '*', 'Datepicker', ['*', 'README'], 'TextField', ['*', 'README']],
            'Uncontrolled FormUtils',
            ['*', 'README'],
          ],
          'Components',
        ],
      },
    },
  },
};

// Make sure we are in the browser before starting
if (global.process === undefined) {
  // eslint-disable-next-line promise/catch-or-return, unicorn/prefer-top-level-await
  import('@availity/mock/src/lib/browser').then(({ worker }) => {
    const config =
      process.env.NODE_ENV === 'development'
        ? {
            onUnhandledRequest: 'bypass',
          }
        : {
            serviceWorker: { url: '/element/mockServiceWorker.js' },
            onUnhandledRequest: 'bypass',
          };
    return worker.start(config);
  });
}

export default preview;
