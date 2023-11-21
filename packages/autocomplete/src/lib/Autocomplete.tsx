import { forwardRef } from 'react';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  ChipTypeMap,
} from '@mui/material';
import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { SelectDivider, SelectExpandIcon } from '@availity/mui-form-utils';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<
    MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    'renderInput' | 'slotProps'
  > {
  FieldProps?: TextFieldProps;
}

const PopupIndicatorWrapper = forwardRef<HTMLButtonElement, MuiIconButtonProps>((props, ref) => (
  <>
    <SelectDivider orientation="vertical" className="MuiSelect-avEndAdornmentDivider" />
    <MuiIconButton {...props} ref={ref} />
  </>
));

export const Autocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
>({
  FieldProps,
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>): JSX.Element => {
  const resolvedProps = (params: AutocompleteRenderInputParams) => ({
    InputProps: {
      ...FieldProps?.InputProps,
      ...params?.InputProps,
    },
    inputProps: {
      ...FieldProps?.inputProps,
      ...params?.inputProps,
    },
  });
  return (
    <MuiAutocomplete
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...FieldProps} {...params} {...resolvedProps(params)} />
      )}
      popupIcon={<SelectExpandIcon className="MuiSelect-avExpandIcon" />}
      slotProps={{ popupIndicator: { component: PopupIndicatorWrapper } }}
      {...props}
    />
  );
};
