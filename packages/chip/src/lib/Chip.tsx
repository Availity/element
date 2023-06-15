import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export type ChipProps = {
  /** The color of the component. Nondefault colors are only to be used with size `small`.
   * @default default */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the component. Size `small` is for statuses and inline counters. */
  size?: 'small' | 'medium';
} & Omit<
  MuiChipProps,
  'children' | 'color' | 'variant' | 'skipFocusWhenDisabled' | 'disabled' | 'size' | 'icon' | 'clickable'
>;

export const Chip = ({ color = 'default', onDelete, ...rest }: ChipProps): JSX.Element => {
  return <MuiChip color={color} onClick={onDelete} onDelete={onDelete} {...rest} />;
};
