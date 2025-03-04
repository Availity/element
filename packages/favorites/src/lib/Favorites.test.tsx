import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import avMessages from '@availity/message-core';
import { FavoritesProvider } from './Favorites';
import { FavoriteHeart } from './FavoriteHeart';

jest.mock('@availity/message-core');

const domain = () => {
  if (window.location.origin) {
    return window.location.origin;
  }

  if (window.location.hostname) {
    return `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''
      }`;
  }

  return '*';
};

avMessages.subscribe = jest.fn((event, fn) => {
  window.addEventListener('message', (event) => {
    if (!event || !event.data) {
      // check origin as trusted domain
      return;
    }

    let { data } = event;

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch {
        // do nothing
      }
    }

    event = data && data.event;

    fn(data);
  });
  return () => jest.fn();
});

avMessages.send = jest.fn((payload, target) => {
  try {
    const message = typeof payload === 'string' ? payload : JSON.stringify(payload);
    target?.postMessage(message, domain());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('AvMessage.send()', error);
  }
});

const queryClient = new QueryClient();

describe('Favorites', () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    server.resetHandlers();
    jest.clearAllMocks();
    queryClient.clear();
  });
  it('should render favorited', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="123" name="App #1" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-123');

    await waitFor(() => expect(heart).toBeChecked());
  });

  it('should render unfavorited', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="789" name="App #3" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-789');

    await waitFor(() => expect(heart).not.toBeChecked());
  });

  it('should render disabled', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="789" name="App #3" disabled />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-789');

    await waitFor(() => expect(heart).toBeDisabled());
  });
  it('should show tooltip with add message', async () => {
    const { container, getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="789" name="App #3" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-789');

    act(() => {
      if (heart) fireEvent.mouseOver(heart);
    });

    expect(heart).toBeDefined();

    await waitFor(
      () => {
        const tooltip = getByRole('tooltip');

        expect(tooltip.textContent).toContain('Add to My Favorites');
      },
      { timeout: 2000 }
    );
  });

  it('should show tooltip with remove message', async () => {
    const { container, getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="123" name="App #1" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-123');

    act(() => {
      if (heart) fireEvent.mouseOver(heart);
    });

    expect(heart).toBeDefined();

    await waitFor(
      () => {
        const tooltip = getByRole('tooltip');

        expect(tooltip.textContent).toContain('Remove from My Favorites');
      },
      { timeout: 2000 }
    );
  });

  it('should render label with app name', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="123" name="App #1" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-123');

    expect(heart).toBeDefined();

    expect(heart).toHaveAttribute('aria-label', 'Favorite App #1');
  });

  it('should add favorite and send post message with updated favorites', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="789" name="App #3" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-789');

    await waitFor(() => expect(heart).not.toBeChecked());

    if (heart) await user.click(heart);

    await waitFor(() => expect(heart).toBeChecked());

    await waitFor(() => {
      expect(avMessages.send).toHaveBeenCalledTimes(1);
      expect(avMessages.send).toHaveBeenCalledWith({
        event: 'av:favorites:update',
        favorites: [
          { id: '123', pos: 0 },
          { id: '456', pos: 1 },
          { id: '789', pos: 2 },
        ],
      });
    });
  });

  it('should toggle favorite and send post message with updated favorites on keypress', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="123" name="App #1" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-123');

    await waitFor(() => {
      expect(heart).toBeChecked();
    });

    if (heart) await fireEvent.keyDown(heart, { key: 'Enter', code: 'Enter', charCode: 13 });

    await waitFor(() => expect(heart).not.toBeChecked());

    await waitFor(() => {
      expect(avMessages.send).toHaveBeenCalledTimes(1);
      expect(avMessages.send).toHaveBeenCalledWith({
        event: 'av:favorites:update',
        favorites: [{ id: '456', pos: 1 }],
      });
    });
  });

  it('should remove favorite and send post message with updated favorites', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <FavoriteHeart id="123" name="App #1" />
        </FavoritesProvider>
      </QueryClientProvider>
    );

    const heart = container.querySelector('#av-favorite-heart-123');

    await waitFor(() => expect(heart).toBeChecked());

    if (heart) await user.click(heart);

    await waitFor(() => expect(heart).not.toBeChecked());

    await waitFor(() => {
      expect(avMessages.send).toHaveBeenCalledTimes(1);
      expect(avMessages.send).toHaveBeenCalledWith({
        event: 'av:favorites:update',
        favorites: [{ id: '456', pos: 1 }],
      });
    });
  });


});
