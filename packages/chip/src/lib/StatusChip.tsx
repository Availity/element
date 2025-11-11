import { default as MuiChip, ChipProps as MuiChipProps } from '@mui/material/Chip';

export type StatusChipProps = {
  /** The color of the component.
   * @default default */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
} & Omit<
  MuiChipProps,
  | 'avatar'
  | 'children'
  | 'color'
  | 'variant'
  | 'skipFocusWhenDisabled'
  | 'disabled'
  | 'size'
  | 'icon'
  | 'clickable'
  | 'deleteIcon'
  | 'onDelete'
>;

export const StatusChip = ({ color = 'default', ...rest }: StatusChipProps): React.JSX.Element => {
  return <MuiChip color={color} {...rest} size="small" />;
};
