import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { SpacesDisclaimer } from './SpacesDisclaimer';
import { Spaces } from './Spaces';

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

// terminate the server
afterAll(() => server.close());

describe('SpacesDisclaimer', () => {
  it('should render regular text successfully', async () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['disclaimer']}>
          <SpacesDisclaimer spaceId="disclaimer" />
        </Spaces>
      </QueryClientProvider>
    );

    const disclaimerText = await waitFor(() => getByText('This is a disclaimer.'));

    expect(disclaimerText.tagName).toBe('P');
    expect(disclaimerText.innerHTML).toBe('This is a disclaimer.');
  });

  it('should render markdown successfully', async () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['disclaimerMarkdown']}>
          <SpacesDisclaimer spaceId="disclaimerMarkdown" markdown />
        </Spaces>
      </QueryClientProvider>
    );

    const disclaimerText = await waitFor(() => getByText('This is a disclaimer.'));

    expect(disclaimerText.tagName).toBe('H1');
    expect(disclaimerText.innerHTML).toBe('This is a disclaimer.');
  });
});
