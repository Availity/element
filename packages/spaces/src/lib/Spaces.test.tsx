import '@testing-library/jest-dom';
import { useState } from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces, useSpaces, useSpacesContext } from '..';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '../../../mock/src/lib/server';

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});

describe('Spaces', () => {
  it('provides correct spaces from props and from avWebQL', async () => {
    const queryClient = new QueryClient();
    // Create a space component that renders "Space <id-here> is in provider" if the space is in the provider and "Space <id-here> is not in provider" if it is not the provider
    const SpaceComponent = ({ spaceId }: { spaceId: string }) => {
      const space = useSpaces(spaceId);
      return (
        <div>
          <span id={`space-for-${spaceId}`}>
            {space && space.length > 0 ? `Space ${spaceId} is in provider` : `Space ${spaceId} is not in provider`}
          </span>
        </div>
      );
    };
    // Create component that renders a SpaceComponent for ids 1, 2, and 3
    const MyComponent = () => {
      const [spaceIds, setSpaceIds] = useState(['1', '3']);
      return (
        <QueryClientProvider client={queryClient}>
          <Spaces spaceIds={spaceIds} spaces={[{ id: '3', configurationId: '3', type: 'space', name: 'Space 3' }]}>
            <SpaceComponent spaceId="1" />
            <SpaceComponent spaceId="2" />
            <SpaceComponent spaceId="3" />
            <button type="button" id="add-spaceid-btn" onClick={() => setSpaceIds(['1', '2', '3'])}>
              Add
            </button>
          </Spaces>
        </QueryClientProvider>
      );
    };
    const { container, getByText } = render(<MyComponent />);
    // Check that space 1 (fetched from avWebQL) is accessible by spaces provider
    await waitFor(() => getByText('Space 1 is in provider'));
    expect(getByText('Space 1 is in provider')).toBeDefined();
    // Check that space 2 (not provided) is not accessible by spaces provider
    await waitFor(() => getByText('Space 2 is not in provider'));
    expect(getByText('Space 2 is not in provider')).toBeDefined();
    // Check that space 3 (provided by props) is accessible by spaces provider
    await waitFor(() => getByText('Space 3 is in provider'));
    expect(getByText('Space 3 is in provider')).toBeDefined();
    // Check that avWebQL was only queried for space 1 because space 3 was provided by props
    // Click button that adds another space id, "2", to the provider
    const button = container.querySelector('#add-spaceid-btn');
    if (button) fireEvent.click(button);
    // // Check that space 1 (fetched from avWebQL) is still accessible by spaces provider
    await waitFor(() => getByText('Space 1 is in provider'));
    expect(getByText('Space 1 is in provider')).toBeDefined();
    // // Check that space 2 (now fetched from avWebQL) is now accessible by spaces provider
    await waitFor(() => getByText('Space 2 is in provider'));
    expect(getByText('Space 2 is in provider')).toBeDefined();
    // // Check that space 3 (provided by props) is still accessible by spaces provider
    await waitFor(() => getByText('Space 3 is in provider'));
    expect(getByText('Space 3 is in provider')).toBeDefined();
  });
});

it('toggles whether the spaces provider is loading', async () => {
  const queryClient = new QueryClient();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const fn = jest.fn();
  // Create component to call mock function
  const SpaceComponent = ({ spaceId }: { spaceId: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    const space = useSpaces(spaceId);
    const { loading } = useSpacesContext();

    if (loading) fn();

    // Should be called when we fetch spaces from avWebQL gets executed
    return loading ? null : (
      <span id={`space-for-${spaceId}`}>{space?.[0] ? `Space ${space[0].id}` : 'No Space '}</span>
    );
  };

  // Create component that renders a SpaceComponent for the current space id
  const MyComponent = () => {
    const [spaceId, setSpaceId] = useState(['1']);

    return (
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={spaceId}>
          <SpaceComponent spaceId={spaceId[0]} />

          <button type="button" id="add-spaceid-btn" onClick={() => setSpaceId(['2'])}>
            Add
          </button>
        </Spaces>
      </QueryClientProvider>
    );
  };

  const { container, getByText } = render(<MyComponent />);

  expect(fn).toHaveBeenCalled();

  await waitFor(() => getByText('Space 1'));

  // Add a space id
  const button = container.querySelector('#add-spaceid-btn');
  if (button) fireEvent.click(button);

  expect(fn).toHaveBeenCalled();

  await waitFor(() => getByText('Space 2'));
});

describe('useSpaces', () => {
  // Create a spaces component that renders ids passed in
  const SpacesComponent = ({ ids = [] }: { ids?: string[] }) => {
    const spaces = useSpaces(...ids) || [];

    const dataTestIdSuffix = ids && ids.length > 0 ? ids.join('-') : 'all-spaces';
    return (
      <div>
        <span id={`spaces-for-${dataTestIdSuffix}`}>{spaces.map((spc) => `Id: ${spc.id} `)}</span>
      </div>
    );
  };

  it('returns spaces by id', async () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['1', '2', '3']}>
          <SpacesComponent />
          <SpacesComponent ids={['2', '3']} />
        </Spaces>
      </QueryClientProvider>
    );

    // Check that all spaces get returned when no ids get passed to useSpaces hook
    const allSpaces = await waitFor(() => container.querySelector('#spaces-for-all-spaces'));
    await waitFor(() => expect(allSpaces?.textContent).toBe('Id: 1 Id: 2 Id: 3 '));

    // Check that spaces for ids get returned when ids passed to useSpaces hook
    const specificSpaces = await waitFor(() => container.querySelector('#spaces-for-2-3'));
    expect(specificSpaces?.textContent).toBe('Id: 2 Id: 3 ');
  });

  it('returns spaces by configurationId', async () => {
    const queryClient = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['11', '22', '33']}>
          <SpacesComponent />
          <SpacesComponent ids={['22', '33']} />
        </Spaces>
      </QueryClientProvider>
    );

    // Check that all spaces get returned when no configurationIds get passed to useSpaces hook
    await waitFor(() => getByText('Id: 11 Id: 22 Id: 33'));

    // Check that spaces for configurationIds get returned when configurationIds passed to useSpaces hook
    await waitFor(() => getByText('Id: 22 Id: 33'));
  });

  it('returns all matching spaces when searching by payerId', async () => {
    const queryClient = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces payerIds={['a', 'b', 'c']}>
          <SpacesComponent ids={['b']} />
          <SpacesComponent ids={['c']} />
        </Spaces>
      </QueryClientProvider>
    );

    // Check that spaces for payer ids get returned when ids passed to useSpaces hook
    await waitFor(() => getByText('Id: 11 Id: 22'));
    await waitFor(() => getByText('Id: 11 Id: 22 Id: 33'));
  });

  it('renders with warning when returning all spaces because no ids were passed in', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const SpacesComponent = ({ ids = [] }) => {
      const spaces = useSpaces(...ids) || [];

      const dataTestIdSuffix = ids && ids.length > 0 ? ids.join('-') : 'all-spaces';
      return (
        <div>
          <span id={`spaces-for-${dataTestIdSuffix}`}>{spaces.map((spc) => `Id: ${spc && spc.id} `)}</span>
        </div>
      );
    };

    const queryClient = new QueryClient();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['1', '2']}>
          <SpacesComponent />
        </Spaces>
      </QueryClientProvider>
    );

    await waitFor(() => container.querySelector('#spaces-for-all-spaces'));

    expect(consoleWarnMock).toHaveBeenCalled();
    expect(consoleWarnMock.mock.calls[0][0]).toBe('You did not pass in an ID to find a space, returning all spaces.');

    consoleWarnMock.mockRestore();
  });
});

it('returns first payer space with when no spaceId passed', async () => {
  // Create component that renders a SpaceComponent for the current space id
  const SpaceComponent = () => {
    const spaces = useSpaces() || [];

    return (
      <div id={`space-${spaces[0]?.id}`}>
        <span>{spaces[0]?.name}</span>
      </div>
    );
  };

  const queryClient = new QueryClient();

  const { container, getByText } = render(
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['1']}>
        <SpaceComponent />
      </Spaces>
    </QueryClientProvider>
  );

  const spc1 = await waitFor(() => container.querySelector('#space-1'));
  const spc2 = await waitFor(() => getByText('Space 1'));

  expect(spc1).toBeDefined();
  expect(spc2).toBeDefined();
});
