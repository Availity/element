import { StoryObj } from '@storybook/react-vite';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { FavoritesProvider } from './Favorites';
import { FavoriteHeart } from './FavoriteHeart';

export default {
  title: 'Components/Favorites/Favorites',
  component: FavoriteHeart,
};

const storyFavorites = [
  { id: '123', pos: 0, name: 'App #1' },
  { id: '456', pos: 0, name: 'A retired app' },
  { id: '789', pos: 0, name: 'Another retired app' },
];

export const _FavoriteHeart: StoryObj = {
  render: () => {
    return (
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: false,
              },
            },
          })
        }
      >
        <FavoritesProvider>
          {storyFavorites.map((fav) => (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} key={fav.id}>
              <FavoriteHeart id={fav.id} name={fav.name} disabled={fav.name.includes('retired')} />
              <div>{fav.name}</div>
            </div>
          ))}
        </FavoritesProvider>
      </QueryClientProvider>
    );
  },
};
