import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { SpacesImage } from './SpacesImage';
import { Spaces } from './Spaces';

const mockImage = vi.fn();

vi.mock('react-image', async (importOriginal) => ({
  ...(await importOriginal<typeof import('react-image')>()),
  Img: (props: any) => mockImage(props),
}));

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
  vi.restoreAllMocks();
});

// terminate the server
afterAll(() => server.close());

describe('SpacesImage', () => {
  it('should render successfully', async () => {
    const queryClient = new QueryClient();

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['11', '22', '33']}>
          <SpacesImage spaceId="33" />
        </Spaces>
      </QueryClientProvider>
    );

    // Expect loader to display
    await waitForElementToBeRemoved(getByRole('progressbar'));

    // Ensure the correct src was selected.
    expect(mockImage.mock.calls[0][0].src).toEqual('/spaces/tile.jpg');
  });
});
