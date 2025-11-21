import { Autocomplete, AutocompleteProps } from '@availity/mui-autocomplete';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';
import { ControllerProps, TransformProp } from './Types';

export type ControlledAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'onBlur' | 'onChange' | 'value' | 'name'
> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null, Output>;

export const ControlledAutocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
>({
  name,
  FieldProps,
  defaultValue,
  rules = {},
  onBlur,
  onChange,
  shouldUnregister,
  value,
  transform,
  ...rest
}: ControlledAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>) => {
  const emptyValue = rest?.multiple ? [] : null;
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
              onChange(transform?.output?.(null) ?? emptyValue);
            }
            onChange(transform?.output?.(value) ?? value);
          }}
          onBlur={onBlur}
          value={transform?.input?.(value) ?? value ?? emptyValue}
        />
      )}
    />
  );
};
