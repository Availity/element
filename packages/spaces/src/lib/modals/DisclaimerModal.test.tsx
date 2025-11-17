import { render, waitFor, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from '../Spaces';
import { SpacesLink } from '../SpacesLink/SpacesLink';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';

window.open = jest.fn();

const queryClient = new QueryClient();

const DisclaimerModal = () => (
  <QueryClientProvider client={queryClient}>
    <Spaces
      spaces={[
        {
          id: '1',
          configurationId: 'space1',
          name: 'Some Application',
          type: 'space',
          meta: { disclaimerId: '1234' },
          link: {
            url: '/some-url',
            target: 'newBody',
          },
        },
      ]}
    >
      <SpacesLink
        spaceId="1"
        linkAttributes={{
          spaceId: '1',
        }}
      />
    </Spaces>
  </QueryClientProvider>
);

describe('DisclaimerModal', () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });
  afterEach(() => {
    jest.clearAllMocks();
    server.resetHandlers();
  });

  // terminate the server
  afterAll(() => server.close());

  it('renders modal when space metadata contains disclaimerId', async () => {
    const { getByText } = render(<DisclaimerModal />);

    const link = await waitFor(() => getByText('Some Application'));
    fireEvent.click(link);

    const disclaimerText = await waitFor(() => getByText('hello world'));
    expect(disclaimerText).toBeDefined();

    const submitBtn = await waitFor(() => getByText('Accept'));
    fireEvent.click(submitBtn);

    expect(window.open).toHaveBeenCalledTimes(1);
  });
});
