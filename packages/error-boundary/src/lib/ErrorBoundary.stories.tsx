// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { Typography } from '@availity/mui-typography';
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';

/** Throws while rendering when `shouldThrow` is true, simulating a crash inside the app. */
const Crasher = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Simulated render error');
  }
  return <Typography>Everything is working.</Typography>;
};

/** Wraps a section of the app and shows an error page if something inside it crashes while rendering,
 * instead of leaving the user with a blank screen.
 *
 * - Put one boundary around your whole app and use `fullPage` so the error page fills the screen.
 * - Put additional boundaries around smaller sections (a widget, a table, a modal) so a crash there does not take down the rest of the page. The closest boundary above the crash handles it.
 * - Use `onError` to send the error to your logging or monitoring tool.
 * - Use `resetKeys` (for example, the current route) so navigating away from a broken page recovers automatically.
 *
 * _Error boundaries only catch errors thrown while rendering. They do not catch errors in event handlers or in asynchronous code like promises and timers._
 */
const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
};

export default meta;

export const _ErrorBoundary: StoryObj<typeof ErrorBoundary> = {
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary {...args}>
      <Crasher shouldThrow />
    </ErrorBoundary>
  ),
};

/** Use `fullPage` on the boundary that wraps your whole app. The error page fills the screen and the heading is an `h1`. */
export const _FullPage: StoryObj<typeof ErrorBoundary> = {
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary {...args} fullPage>
      <Crasher shouldThrow />
    </ErrorBoundary>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/** "Try again" clears the error and renders the children again. Here the crash is only simulated once, so the retry succeeds. */
export const _TryAgain: StoryObj<typeof ErrorBoundary> = {
  render: (args: ErrorBoundaryProps) => {
    const Example = () => {
      const [shouldThrow, setShouldThrow] = useState(true);
      return (
        <ErrorBoundary {...args} onReset={() => setShouldThrow(false)}>
          <Crasher shouldThrow={shouldThrow} />
        </ErrorBoundary>
      );
    };
    return <Example />;
  },
};

/** Wrap smaller sections so a crash stays contained. The header and the working widget below keep running while the broken widget shows its own error page. */
export const _Nested: StoryObj<typeof ErrorBoundary> = {
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary {...args} fullPage>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" component="h1">
          Dashboard
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          <ErrorBoundary>
            <Crasher shouldThrow />
          </ErrorBoundary>
          <ErrorBoundary>
            <Crasher shouldThrow={false} />
          </ErrorBoundary>
        </Box>
      </Box>
    </ErrorBoundary>
  ),
};

/** `fallback` accepts an element, or a function that receives the `error` and a `reset` function. */
export const _CustomFallback: StoryObj<typeof ErrorBoundary> = {
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary
      {...args}
      fallback={({ error, reset }) => (
        <Box role="alert" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
          <Typography>This widget could not load ({error.message}).</Typography>
          <Button color="primary" onClick={reset}>
            Retry
          </Button>
        </Box>
      )}
    >
      <Crasher shouldThrow />
    </ErrorBoundary>
  ),
};

/** Pass `resetKeys` something that changes when the user moves on, like the current route. When a value changes, the boundary resets itself. */
export const _ResetKeys: StoryObj<typeof ErrorBoundary> = {
  render: (args: ErrorBoundaryProps) => {
    const Example = () => {
      const [page, setPage] = useState<'broken' | 'working'>('broken');
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="secondary" onClick={() => setPage('broken')}>
              Go to broken page
            </Button>
            <Button color="secondary" onClick={() => setPage('working')}>
              Go to working page
            </Button>
          </Box>
          <ErrorBoundary {...args} resetKeys={[page]}>
            <Crasher shouldThrow={page === 'broken'} />
          </ErrorBoundary>
        </Box>
      );
    };
    return <Example />;
  },
};
