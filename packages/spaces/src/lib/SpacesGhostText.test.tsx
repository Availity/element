import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '../../../mock/src/lib/server';
import SpacesGhostText from './SpacesGhostText';
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

describe('SpacesGhostText', () => {
  it('should render successfully', async () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['ghosted']} clientId="clientId">
          <SpacesGhostText spaceId="ghosted" />
        </Spaces>
      </QueryClientProvider>
    );

    await waitFor(() => getByText('This is some ghost text'));
  });
});
