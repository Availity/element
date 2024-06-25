import React from 'react';
import { Tooltip } from '@availity/mui-tooltip';
import { HeartIcon, HeartEmptyIcon } from '@availity/mui-icon';
import { CircularProgress } from '@availity/mui-progress';
import { styled } from '@mui/material/styles';
import { useFavorites } from './Favorites';

const icons = {
  spinner: <CircularProgress aria-hidden size="small" loadingCaption={false} />,
  unknownDisabledHeart: <HeartIcon aria-hidden color="disabled" />,
  favoritedDisabledHeart: <HeartIcon aria-hidden color="error" opacity="0.6" />,
  unfavoritedDisabledHeart: <HeartEmptyIcon aria-hidden color="disabled" opacity="0.6" />,
  favoritedHeart: <HeartIcon aria-hidden color="error" />,
  unfavoritedHeart: <HeartEmptyIcon aria-hidden color="secondary" />,
};

const FavoriteHeartContainer = styled('div', { name: 'AvFavoriteHeart', slot: 'root' })({});
const FavoriteInput = styled('input', {
  name: 'AvFavoriteHeart',
  slot: 'input',
})({});

const FavoriteIcon = styled('div', {
  name: 'AvFavoriteHeart',
  slot: 'icon',
})({});

export const FavoriteHeart = ({
  id,
  name,
  onChange,
  onMouseDown,
  disabled = false,
}: {
  id: string;
  name: string;
  onChange?: (
    isFavorited: boolean,
    event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  disabled?: boolean;
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

  const favoriteInputProps = {
    onKeyDown: handleKeyPress,
    type: 'checkbox',
    'aria-label': `Favorite ${name}`,
    id: `av-favorite-heart-${id}`,
    disabled,
    checked: isFavorited,
    onChange: handleChange,
    onMouseDown,
    style: { cursor },
  };

  return (
    <FavoriteHeartContainer>
      <FavoriteIcon>{icons[iconKey]}</FavoriteIcon>
      <span
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
        aria-live={isLastClickedFavorite && (status === 'reloading' || status === 'error') ? 'polite' : 'off'}
      >
        {isLastClickedFavorite && status === 'reloading'
          ? 'Loading...'
          : isLastClickedFavorite && status === 'error'
            ? 'An error has occurred. Please try again.'
            : ''}
      </span>

      {disabled ? (
        <FavoriteInput {...favoriteInputProps} />
      ) : (
        <Tooltip title={tooltipContent} placement="top">
          <FavoriteInput {...favoriteInputProps} />
        </Tooltip>
      )}
    </FavoriteHeartContainer>
  );
};
