import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import avMessages from '@availity/message-core';
import type { Favorite } from './utils';
import { useFavoritesQuery, useSubmitFavorites, sendUpdateMessage, openMaxModal } from './utils';
import { AV_INTERNAL_GLOBALS, MAX_FAVORITES, NAV_APP_ID } from './constants';

type StatusUnion = 'idle' | 'error' | 'loading' | 'reloading' | 'success';

type FavoritesContextType = {
  favorites?: Favorite[];
  queryStatus: StatusUnion;
  mutationStatus: StatusUnion;
  lastClickedFavoriteId: string;
  deleteFavorite: (id: string) => void;
  addFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({
  children,
  onFavoritesChange,
  onMaxFavoritesReached,
  settingsFavorites,
  settingsStatus,
  applicationId = NAV_APP_ID,
  maxFavorites = MAX_FAVORITES,
}: {
  children: React.ReactNode;
  onFavoritesChange?: (favorites: Favorite[]) => void;
  onMaxFavoritesReached?: (favorites: Favorite[]) => void;
  settingsFavorites?: Favorite[];
  settingsStatus?: StatusUnion;
  applicationId?: string;
  maxFavorites?: number;
}): JSX.Element => {
  const [lastClickedFavoriteId, setLastClickedFavoriteId] = useState<string>('');

  const queryClient = useQueryClient();
  const { data: favoritesData, status: favoritesDataStatus } = useFavoritesQuery(!settingsStatus, applicationId);
  const favorites = settingsStatus ? settingsFavorites : favoritesData;
  const queryStatus = settingsStatus ? settingsStatus : favoritesDataStatus;

  const { submitFavorites, status: mutationStatus } = useSubmitFavorites({
    onMutationStart(targetFavoriteId) {
      setLastClickedFavoriteId(targetFavoriteId);
    },
  }, applicationId);

  useEffect(() => {
    const subscribe = () => {
      if (applicationId === NAV_APP_ID) {
        const unsubscribeFavoritesChanged = avMessages.subscribe(
          AV_INTERNAL_GLOBALS.FAVORITES_CHANGED,
          (data) => {
            if (data?.favorites) {
              queryClient.setQueryData(['favorites'], data?.favorites);
            }
          },
          { ignoreSameWindow: false }
        );

        const unsubscribeFavoritesUpdate = avMessages.subscribe(
          AV_INTERNAL_GLOBALS.FAVORITES_UPDATE,
          (data) => {
            if (data?.favorites) {
              queryClient.setQueryData(['favorites'], data?.favorites);
            }
          },
          { ignoreSameWindow: false }
        );

        return () => {
          unsubscribeFavoritesChanged();
          unsubscribeFavoritesUpdate();
        };
      }
    };

    const unsubscribe = subscribe();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [queryClient, applicationId]);

  const deleteFavorite = async (id: string) => {
    if (favorites) {
      const response = await submitFavorites({
        favorites: favorites.filter((favorite: Favorite) => favorite.id !== id),
        targetFavoriteId: id,
      });

      sendUpdateMessage(response.favorites, applicationId);
      onFavoritesChange?.(response.favorites);
    }
  };

  const addFavorite = async (id: string) => {
    if (!favorites) return false;

    if (favorites.length >= maxFavorites) {
      openMaxModal(applicationId);
      if (onMaxFavoritesReached && typeof onMaxFavoritesReached === 'function') {
        await onMaxFavoritesReached(favorites);
      }
      return false;
    }

    const maxFavorite = favorites.reduce<Favorite | null>((accum, fave) => {
      if (!accum || fave.pos > accum.pos) {
        accum = fave;
      }

      return accum;
    }, null);

    const newFavPos = maxFavorite ? maxFavorite.pos + 1 : 0;
    const response = await submitFavorites({
      favorites: [...favorites, { id, pos: newFavPos }],
      targetFavoriteId: id,
    });

    sendUpdateMessage(response.favorites, applicationId);
    onFavoritesChange?.(response.favorites);

    const isFavorited = response.favorites.find((f: Favorite) => f.id === id);

    return !!isFavorited;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        queryStatus,
        mutationStatus,
        lastClickedFavoriteId,
        deleteFavorite,
        addFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noOp = () => { };

type MergedStatusUnion = 'initLoading' | 'reloading' | 'error' | 'success';

export const useFavorites = (
  id: string
): {
  isFavorited: boolean;
  status: MergedStatusUnion;
  isLastClickedFavorite: boolean;
  toggleFavorite: () => void;
} => {
  const context = useContext(FavoritesContext);

  if (context === null) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  const { favorites, queryStatus, mutationStatus, lastClickedFavoriteId, deleteFavorite, addFavorite } = context;

  const isLastClickedFavorite = lastClickedFavoriteId === id;

  const isFavorited = useMemo(() => {
    const fav = favorites?.find((f) => f.id === id);
    return !!fav;
  }, [favorites, id]);

  const toggleFavorite = () => (isFavorited ? deleteFavorite(id) : addFavorite(id));

  const isDisabled = queryStatus === 'loading' || queryStatus === 'idle' || mutationStatus === 'loading';

  let status: MergedStatusUnion = 'initLoading';
  if (queryStatus === 'loading') status = 'initLoading';
  if (queryStatus === 'reloading') status = 'reloading';
  if (mutationStatus === 'loading') status = 'reloading';
  if (queryStatus === 'error' || mutationStatus === 'error') status = 'error';
  if (queryStatus === 'success' && (mutationStatus === 'success' || mutationStatus === 'idle')) status = 'success';

  return {
    isFavorited,
    status,
    isLastClickedFavorite,
    toggleFavorite: isDisabled ? noOp : toggleFavorite,
  };
};
