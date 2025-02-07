import { CodesAutocomplete, CodesAutocompleteProps } from '@availity/mui-autocomplete';
import { Controller, RegisterOptions, ControllerProps, FieldValues } from 'react-hook-form';

export type ControlledCodesAutocompleteProps = Omit<CodesAutocompleteProps, 'name'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledCodesAutocomplete = ({
  name,
  defaultValue,
  deps,
  max,
  maxLength,
  onBlur,
  onChange,
  pattern,
  required,
  shouldUnregister,
  validate,
  value,
  FieldProps,
  ...rest
}: ControlledCodesAutocompleteProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        deps,
        max,
        maxLength,
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
        <CodesAutocomplete
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
