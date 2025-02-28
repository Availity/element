import { Autocomplete, AutocompleteProps } from '@availity/mui-autocomplete';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';
import { ControllerProps } from './Types';

export type ControlledAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'onBlur' | 'onChange' | 'value' | 'name'
> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps;

export const ControlledAutocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  name,
  FieldProps,
  defaultValue,
  rules = {},
  onBlur,
  onChange,
  shouldUnregister,
  value,
  ...rest
}: ControlledAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        onBlur,
        onChange,
        shouldUnregister,
        value,
        ...rules,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => (
        <Autocomplete
          {...rest}
          FieldProps={{
            required: typeof rules.required === 'object' ? rules.required.value : !!rules.required,
            ...FieldProps,
            error: !!error,
            helperText: error?.message ? (
              <>
                {error.message}
                <br />
                {FieldProps?.helperText}
              </>
            ) : (
              FieldProps?.helperText
            ),
            inputRef: ref,
          }}
          onChange={(event, value, reason) => {
            if (reason === 'clear') {
              onChange(null);
            }
            onChange(value);
          }}
          onBlur={onBlur}
          value={value || null}
        />
      )}
    />
  );
};
