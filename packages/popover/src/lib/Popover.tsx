import { default as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material/Popover';

export type PopoverProps = MuiPopoverProps;

export const Popover = ({ ...rest }: PopoverProps): JSX.Element => {
  return <MuiPopover {...rest} />;
};
