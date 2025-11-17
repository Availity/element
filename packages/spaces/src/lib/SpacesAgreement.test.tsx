import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '../../../mock/src/lib/server';
import { SpacesAgreement } from './SpacesAgreement';
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

describe('SpacesAgreement', () => {
  it('should render regular text successfully', async () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['agreement']}>
          <SpacesAgreement spaceId="agreement" />
        </Spaces>
      </QueryClientProvider>
    );

    const agreementText = await waitFor(() => getByText('This is an agreement.'));

    expect(agreementText.tagName).toBe('SPAN');
    expect(agreementText.innerHTML).toBe('This is an agreement.');
  });

  it('should render markdown successfully', async () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['agreementMarkdown']}>
          <SpacesAgreement spaceId="agreementMarkdown" markdown />
        </Spaces>
      </QueryClientProvider>
    );

    const agreementText = await waitFor(() => getByText('This is an agreement.'));

    expect(agreementText.tagName).toBe('H1');
    expect(agreementText.innerHTML).toBe('This is an agreement.');
  });
});
