import { Autocomplete, AutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';

export type ControlledAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'onChange' | 'onBlur' | 'value' | 'name'
> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

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
  deps,
  max,
  maxLength,
  min,
  minLength,
  onBlur,
  onChange,
  pattern,
  required,
  shouldUnregister,
  validate,
  value,
  ...rest
}: ControlledAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const { control, getFieldState } = useFormContext();
  const errorMessage = getFieldState(name).error?.message;
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        deps,
        max,
        maxLength,
        min,
        minLength,
        onBlur,
        onChange,
        pattern,
        required,
        shouldUnregister,
        validate,
        value,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value, onBlur } }) => (
        <Autocomplete
          {...rest}
          FieldProps={{
            ...FieldProps,
            required: typeof required === 'object' ? required.value : !!required,
            error: !!errorMessage,
            helperText:
              errorMessage && typeof errorMessage === 'string' ? (
                <>
                  {errorMessage}
                  <br />
                  {FieldProps?.helperText}
                </>
              ) : (
                FieldProps?.helperText
              ),
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
