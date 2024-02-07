import { themes } from '@storybook/theming';
import { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories, useOf } from '@storybook/blocks';
import type { StoryContext } from '@storybook/types';
import { ThemeProvider } from '@availity/theme-provider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(far, fas);

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
      page: () => {
        // https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/blocks/DocsPage.tsx
        // Adjusting autodocs when no component passed
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
        order: ['Element', 'Contributing', 'BS4 Migration', ['Getting Started'], 'Design System', 'Components'],
      },
    },
  },
};

// Make sure we are in the browser before starting
if (typeof global.process === 'undefined') {
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('../../../packages/mock/src/lib/browser').then(({ worker }) => {
    const config =
      process.env.NODE_ENV === 'development'
        ? {
            onUnhandledRequest: (request, print) => {
              // font awesome gets noisy
              if (request.url.includes('node_modules')) {
                return;
              }
              print.warning();
            },
          }
        : {
            serviceWorker: { url: '/element/mockServiceWorker.js' },
            onUnhandledRequest: 'bypass',
          };
    worker.start(config);
  });
}

export default preview;
