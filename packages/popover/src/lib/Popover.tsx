import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';

export const Popover = ({ ...rest }: MuiPopoverProps): JSX.Element => {
  return <MuiPopover {...rest} />;
};
