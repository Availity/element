import { render, waitFor, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from '../Spaces';
import { SpacesLink } from '../SpacesLink/SpacesLink';

const parentSpace2 = {
  type: 'space',
  name: 'parent space 2',
  id: '2',
  configurationId: '2',
  images: {
    tile: '/spaces/tile.jpg',
  },
};

const parentSpace3 = {
  type: 'space',
  name: 'parent space 3',
  id: '3',
  configurationId: '3',
  images: {
    tile: '/spaces/tile.jpg',
  },
};

const space = {
  id: 'multipayermodal',
  configurationId: 'multipayermodal',
  name: 'Some Application',
  type: 'space',
  parents: [parentSpace2, parentSpace3],
  link: {
    url: '/some-url',
    target: 'newBody',
  },
};

const MultiPayerModal = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Spaces spaces={[space, parentSpace2, parentSpace3]} clientId="my-client-id">
        <SpacesLink spaceId="multipayermodal" clientId="my-client-id" />
      </Spaces>
    </QueryClientProvider>
  );
};

describe('MultiPayerModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders modal when space has payerspace parents', async () => {
    const { getByText } = render(<MultiPayerModal />);

    const link = await waitFor(() => getByText('Some Application'));
    fireEvent.click(link);

    await waitFor(() => expect(getByText('Open Some Application as:')).toBeDefined());
  });
});
