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

const DEFAULT_SIZE = '2.5rem';

interface SizableHeartProps {
  customSize?: string
}

const FavoriteHeartContainer = styled('div', {
  name: 'AvFavoriteHeart',
  slot: 'Root',
})<SizableHeartProps>(({ customSize }) => ({
  height: customSize,
  width: customSize,
}));

const FavoriteInput = styled('input', {
  name: 'AvFavoriteHeart',
  slot: 'input',
})<SizableHeartProps>(({ customSize }) => ({
  height: customSize,
  width: customSize,
  minHeight: customSize,
  minWidth: customSize,
}));

const fontSize = (size = DEFAULT_SIZE) => {
  // Match the number and unit in the size string
  const match = size.match(/^(\d*\.?\d+)(px|rem)$/);

  if (!match) {
    throw new Error("Invalid size format. Must be in 'px' or 'rem'.");
  }

  const [, number, unit] = match;

  // Parse the number, halve it, and return the new size string
  const halvedNumber = parseFloat(number) / 2;
  return `${halvedNumber}${unit}`;
}

const FavoriteIcon = styled('div', {
  name: 'AvFavoriteHeart',
  slot: 'icon',
})<SizableHeartProps>(({ customSize }) => ({
  fontSize: fontSize(customSize),
}));

// validates the size input is the correct format and at least 24px or 1.5rem
const validateSize = (size: string) => {
  // Match the number and unit in the size string
  const match = size.match(/^(\d*\.?\d+)(px|rem)$/);

  if (!match) {
    return false; // Invalid format
  }

  const [, number, unit] = match;
  const value = parseFloat(number);

  // Validate the size based on the unit
  if (unit === 'rem' && value >= 1.5) {
    return true;
  } else if (unit === 'px' && value >= 24) {
    return true;
  }

  return false;
}

type FavoriteHeartProps = {
  /** The configuration's id */
  id: string;
  /** The name of the configuration */
  name: string;
  /** What to do on Favorite Toggle */
  onChange?: (
    isFavorited: boolean,
    event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  /** What to do on click */
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  /** Whether or not the Favorite is disabled
   * @default false
   */
  disabled?: boolean;
  /** The size of the icon in rem or px, minimum size is 1.5rem / 24px  */
  customSize?: string;
};

export const FavoriteHeart = ({
  id,
  name,
  onChange,
  onMouseDown,
  disabled = false,
  customSize = DEFAULT_SIZE,
}: FavoriteHeartProps): React.JSX.Element => {
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

  const validSize = validateSize(customSize) ? customSize : DEFAULT_SIZE;

  return (
    <FavoriteHeartContainer customSize={validSize}>
      <FavoriteIcon customSize={validSize}>{icons[iconKey]}</FavoriteIcon>
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
        <FavoriteInput customSize={validSize} {...favoriteInputProps} />
      ) : (
        <Tooltip title={tooltipContent} placement="top">
          <FavoriteInput customSize={validSize} {...favoriteInputProps} />
        </Tooltip>
      )}
    </FavoriteHeartContainer>
  );
};
