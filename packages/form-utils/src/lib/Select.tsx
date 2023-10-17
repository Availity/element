import { Divider, Select as MuiSelect, SelectProps as MuiSelectProps, Stack, StackProps } from '@mui/material';
import { ExpandIcon } from '@availity/mui-icon';
import { InputPropOverrides } from './Input';

export type SelectProps = Omit<
  MuiSelectProps,
  'components' | 'componentsProps' | 'SelectComponent' | 'notched' | 'slots' | 'slotProps' | 'sx' | 'variant'
>;

// IconComponent is absolutely positioned, combining divider and icon to position together
const InnerEndAdornment = (args: StackProps) => (
  <Stack {...args} direction="row" spacing={1} height="100%" paddingY=".5rem" top="unset!important">
    <Divider orientation="vertical" />
    <ExpandIcon sx={{ position: 'relative', top: 'calc(50% - .5rem)' }} />
  </Stack>
);

/** Availity predefined overrides for Select component */
export const SelectPropOverrides = {
  IconComponent: InnerEndAdornment,
  ...InputPropOverrides,
};

export const Select = (props: SelectProps): JSX.Element => {
  return <MuiSelect {...props} {...SelectPropOverrides} />;
};
