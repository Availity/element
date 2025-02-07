import { AsyncAutocomplete, AsyncAutocompleteProps } from '@availity/mui-autocomplete';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';

export type ControlledAsyncAutocompleteProps<
  Option,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = Omit<AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'name'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledAsyncAutocomplete = <
  Option,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  name,
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
  FieldProps,
  ...rest
}: ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  return (
    <Controller
      name={name}
      defaultValue={rest.defaultValue}
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
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <AsyncAutocomplete
          {...rest}
          FieldProps={{
            ...FieldProps,
            required: typeof required === 'object' ? required.value : !!required,
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
