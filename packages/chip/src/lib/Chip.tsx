import { default as MuiChip, ChipProps as MuiChipProps } from '@mui/material/Chip';

export type ChipProps = Omit<
  MuiChipProps,
  'children' | 'color' | 'variant' | 'skipFocusWhenDisabled' | 'disabled' | 'size' | 'icon' | 'clickable' | 'color'
>;

export const Chip = (props: ChipProps): React.JSX.Element => {
  return <MuiChip {...props} color="default" size="medium" />;
};
