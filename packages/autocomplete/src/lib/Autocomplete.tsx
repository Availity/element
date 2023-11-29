import { forwardRef } from 'react';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  ChipTypeMap,
} from '@mui/material';
import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { SelectPropOverrides } from '@availity/mui-form-utils';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'renderInput'> {
  FieldProps?: TextFieldProps;
  name?: string;
}

export const Autocomplete = forwardRef(
  <
    T,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
  >(
    { FieldProps, ...props }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    ref: React.Ref<unknown>
  ): JSX.Element => {
    return (
      <MuiAutocomplete
        ref={ref}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField {...FieldProps} {...params} name={props.name} />
        )}
        popupIcon={<SelectPropOverrides.IconComponent />}
        {...props}
      />
    );
  }
);
