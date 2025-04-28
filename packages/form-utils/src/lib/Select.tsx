import { useState } from 'react';
import MuiSelect, { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { ExpandIcon } from '@availity/mui-icon';
import { InputPropOverrides } from './Input';

export type SelectProps<Value = unknown> = Omit<
  MuiSelectProps<Value>,
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
  <Stack {...args} direction="row" sx={{ height: '100%', top: 'unset!important' }}>
    <SelectDivider orientation="vertical" className="MuiSelect-avEndAdornmentDivider" />
    <SelectExpandIcon className="MuiSelect-avExpandIcon" />
  </Stack>
);

/** Availity predefined overrides for Select component */
export const SelectPropOverrides = { IconComponent: InnerEndAdornment, ...InputPropOverrides };

/** Accessibility additions to resolve Level Access violations. Requires tracking of open state for updates. */
export const SelectAccessibilityOverrides = <Value = unknown,>(
  /** The detected open status for uncontrolled components */
  openDetected?: boolean,
  /** Function to update detected open status for uncontrolled components */
  setOpenDetected?: React.Dispatch<React.SetStateAction<boolean>>,
  /** The open status for controlled components */
  open?: boolean
): SelectProps<Value> => {
  if (setOpenDetected && open === undefined) {
    const onOpen = () => {
      setOpenDetected(true);
    };
    const onClose = () => {
      setOpenDetected(false);
    };
    return openDetected ? { onOpen, onClose } : { onOpen, onClose, SelectDisplayProps: { 'aria-controls': '' } };
  }
  return open ? {} : { SelectDisplayProps: { 'aria-controls': '' } };
};

export const Select = <Value = unknown,>(props: SelectProps<Value>): JSX.Element => {
  const [openDetected, setOpenDetected] = useState(false);
  return (
    <MuiSelect
      {...props}
      {...SelectPropOverrides}
      {...SelectAccessibilityOverrides(openDetected, setOpenDetected, props?.open)}
    />
  );
};

export type { SelectChangeEvent };
