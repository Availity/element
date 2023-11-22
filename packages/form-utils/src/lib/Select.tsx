import MuiSelect, { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { ExpandIcon } from '@availity/mui-icon';
import { InputPropOverrides } from './Input';

export type SelectProps = Omit<
  MuiSelectProps,
  'components' | 'componentsProps' | 'SelectComponent' | 'notched' | 'slots' | 'slotProps' | 'variant'
>;

export const SelectDivider = styled(Divider, {
  name: 'MuiSelect',
  slot: 'AvEndAdornmentDivider',
  overridesResolver: (props, styles) => styles.avEndAdornmentDivider,
})({});

export const SelectExpandIcon = styled(ExpandIcon, {
  name: 'MuiSelect',
  slot: 'AvExpandIcon',
  overridesResolver: (props, styles) => styles.avExpandIcon,
})({});

// IconComponent is absolutely positioned, combining divider and icon to position together
const InnerEndAdornment = (args: StackProps) => (
  <Stack {...args} direction="row" height="100%" top="unset!important">
    <SelectDivider orientation="vertical" className="MuiSelect-avEndAdornmentDivider" />
    <SelectExpandIcon className="MuiSelect-avExpandIcon" />
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

export type { SelectChangeEvent };
