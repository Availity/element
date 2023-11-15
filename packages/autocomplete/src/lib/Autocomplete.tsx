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
}

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
  return (
    <MuiAutocomplete
      renderInput={(params: AutocompleteRenderInputParams) => <TextField {...FieldProps} {...params} />}
      popupIcon={<SelectPropOverrides.IconComponent />}
      {...props}
    />
  );
};
