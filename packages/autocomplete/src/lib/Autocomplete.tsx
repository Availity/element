import { forwardRef } from 'react';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  AutocompletePropsSizeOverrides,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  ChipTypeMap,
} from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
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
    | 'clearIcon'
    | 'clearText'
    | 'closeText'
    | 'componentsProps'
    | 'disabledItemsFocusable'
    | 'forcePopupIcon'
    | 'fullWidth'
    | 'handleHomeEndKeys'
    | 'includeInputInList'
    | 'openOnFocus'
    | 'openText'
    | 'PaperComponent'
    | 'PopperComponent'
    | 'popupIcon'
    | 'selectOnFocus'
    | 'size'
    | 'renderInput'
    | 'slotProps'
  > {
  /** Props applied to the `TextField` component */
  FieldProps?: TextFieldProps;
  name?: string;
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
  // Availity desired default props are not making it into component context through theme defaultProps.
  // Can be overridden by props passed to TextField through `FieldProps`.
  const defaultProps = {
    fullWidth: true,
    size: 'small' as OverridableStringUnion<'small' | 'medium', AutocompletePropsSizeOverrides>,
  };

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
        <TextField {...params} {...resolvedProps(params)} {...FieldProps} />
      )}
      popupIcon={<SelectExpandIcon className="MuiSelect-avExpandIcon" />}
      slotProps={{ popupIndicator: { component: PopupIndicatorWrapper } }}
      {...props}
      {...defaultProps}
    />
  );
};
