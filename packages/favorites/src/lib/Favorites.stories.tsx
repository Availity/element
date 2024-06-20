import { StoryObj } from '@storybook/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { FavoritesProvider } from './Favorites';
import { FavoriteHeart } from './FavoriteHeart';

export default {
  title: 'Components/Favorites',
  component: FavoriteHeart,
};

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
            <div style={{ display: 'flex', gap: '1rem' }} key={fav.id}>
              <FavoriteHeart id={fav.id} name={fav.name} disabled={fav.name.includes('retired')} />
              <div>{fav.name}</div>
            </div>
          ))}
        </FavoritesProvider>
      </QueryClientProvider>
    );
  },
};
