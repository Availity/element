import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export type ChipProps = {
  /** @default default */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the component. Size `small` is for statuses and inline counters. */
  size?: 'small' | 'medium';
} & Omit<MuiChipProps, 'children' | 'skipFocusWhenDisabled'>;

export const Chip = ({ color = 'default', ...rest }: ChipProps): JSX.Element => {
  return <MuiChip color={color} {...rest} />;
};
