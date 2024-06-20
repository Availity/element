import React from 'react';
import { Tooltip } from '@availity/mui-tooltip';
import { HeartIcon, HeartEmptyIcon } from '@availity/mui-icon';
import { CircularProgress } from '@availity/mui-progress';
import { useFavorites } from './Favorites';

const icons = {
  spinner: <CircularProgress aria-hidden />,
  unknownDisabledHeart: <HeartIcon aria-hidden />,
  favoritedDisabledHeart: <HeartIcon aria-hidden />,
  unfavoritedDisabledHeart: <HeartEmptyIcon aria-hidden />,
  favoritedHeart: <HeartIcon aria-hidden />,
  unfavoritedHeart: <HeartEmptyIcon aria-hidden />,
};

export const FavoriteHeart = ({
  id,
  name,
  onChange,
  onMouseDown,
  disabled = false,
  size,
}: {
  id: string;
  name: string;
  onChange?: (
    isFavorited: boolean,
    event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  disabled?: boolean;
  size?: string;
}): JSX.Element => {
  const { isFavorited, isLastClickedFavorite, status, toggleFavorite } = useFavorites(id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(isFavorited, event);
    toggleFavorite();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.key === 'Enter') {
      onChange?.(isFavorited, event);
      toggleFavorite();
    }
  };

  const iconKey = (() => {
    if (status === 'initLoading') return 'unknownDisabledHeart';

    if (status === 'reloading') {
      if (isLastClickedFavorite) return 'spinner';
      return isFavorited ? 'favoritedDisabledHeart' : 'unfavoritedDisabledHeart';
    }
    if (disabled) {
      return isFavorited ? 'favoritedDisabledHeart' : 'unfavoritedDisabledHeart';
    }
    if (isFavorited) return 'favoritedHeart';
    return 'unfavoritedHeart';
  })();

  const cursor =
    disabled || (!isLastClickedFavorite && (status === 'initLoading' || status === 'reloading'))
      ? 'not-allowed'
      : undefined;

  const tooltipContent = `${isFavorited ? 'Remove from' : 'Add to'} My Favorites`;

  return (
    <div>
      <div>{icons[iconKey]}</div>
      <span aria-live={isLastClickedFavorite && (status === 'reloading' || status === 'error') ? 'polite' : 'off'}>
        {isLastClickedFavorite && status === 'reloading'
          ? 'Loading...'
          : isLastClickedFavorite && status === 'error'
            ? 'An error has occurred. Please try again.'
            : ''}
      </span>

      <Tooltip title={tooltipContent}>
        <input
          onKeyUp={handleKeyPress}
          type="checkbox"
          aria-label={`Favorite ${name}`}
          id={`av-favorite-heart-${id}`}
          disabled={disabled}
          checked={isFavorited}
          onChange={handleChange}
          onMouseDown={onMouseDown}
        />
      </Tooltip>
    </div>
  );
};
