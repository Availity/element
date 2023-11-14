import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';

export type PopoverProps = MuiPopoverProps;

export const Popover = ({ ...rest }: PopoverProps): JSX.Element => {
  return <MuiPopover {...rest} />;
};
