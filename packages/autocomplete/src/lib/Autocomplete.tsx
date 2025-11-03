import { forwardRef } from 'react';
import {
  default as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  AutocompletePropsSizeOverrides,
} from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { default as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import { ChipTypeMap } from '@mui/material/Chip';
import { OverridableStringUnion } from '@mui/types';
import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { SelectDivider, SelectExpandIcon } from '@availity/mui-form-utils';

export { createFilterOptions } from '@mui/material/Autocomplete';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
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

const progressSx = { marginRight: '.5rem' };

const LoadingIndicator = () => <CircularProgress aria-label="Loading" size={20} sx={progressSx} />;

export const Autocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  FieldProps,
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>): React.JSX.Element => {
  // Availity desired default props are not making it into component context through theme defaultProps.
  // Can be overridden by props passed to TextField through `FieldProps`.
  const defaultProps = {
    fullWidth: true,
    size: 'small' as OverridableStringUnion<'small' | 'medium', AutocompletePropsSizeOverrides>,
  };

  const resolvedProps = (params: AutocompleteRenderInputParams) => ({
    InputProps: {
      ...params?.InputProps,
      ...FieldProps?.InputProps,
      endAdornment: props.loading ? (
        <>
          {params?.InputProps.endAdornment || null}
          <LoadingIndicator />
        </>
      ) : (
        params?.InputProps.endAdornment || null
      ),
    },
    inputProps: {
      ...params?.inputProps,
      // appease the Level Access scanning tools
      'aria-controls': params?.inputProps['aria-controls'] || '',
    },
  });

  return (
    <MuiAutocomplete
      renderInput={(params: AutocompleteRenderInputParams) => {
        return <TextField {...params} {...FieldProps} {...resolvedProps(params)} />;
      }}
      popupIcon={<SelectExpandIcon className="MuiSelect-avExpandIcon" />}
      slotProps={{ popupIndicator: { component: PopupIndicatorWrapper } }}
      {...props}
      {...defaultProps}
    />
  );
};
