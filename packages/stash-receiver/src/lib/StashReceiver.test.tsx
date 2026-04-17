import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { StashReceiver, useStashContext } from './StashReceiver';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '../../../mock/src/lib/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const Consumer = () => {
  const { data, loading, error } = useStashContext();
  if (loading) return <span>loading</span>;
  if (error) return <span>error: {error}</span>;
  return <span>memberId: {String(data?.memberId)}</span>;
};

describe('StashReceiver', () => {
  it('shows loading state initially', () => {
    const { getByText } = render(
      <StashReceiver sessionId="test-session">
        <Consumer />
      </StashReceiver>
    );
    expect(getByText('loading')).toBeInTheDocument();
  });

  it('provides stash data to children after fetch', async () => {
    const { getByText } = render(
      <StashReceiver sessionId="test-session">
        <Consumer />
      </StashReceiver>
    );
    await waitFor(() => expect(getByText('memberId: member-123')).toBeInTheDocument());
  });

  it('provides error state when fetch fails', async () => {
    server.use(
      http.get('/cloud/web/appl/stash/v1/session/data/:sessionId', () =>
        HttpResponse.json({ message: 'Server Error' }, { status: 500 })
      )
    );

    const { getByText } = render(
      <StashReceiver sessionId="bad-session">
        <Consumer />
      </StashReceiver>
    );
    await waitFor(() => expect(getByText('error: Error fetching stash data.')).toBeInTheDocument());
  });
});
