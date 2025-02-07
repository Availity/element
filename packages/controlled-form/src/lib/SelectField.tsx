import { FormControl, FormHelperText, FormLabel, Select, SelectProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledSelectFieldProps = Omit<SelectProps, 'error' | 'required'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'> & { helperText?: React.ReactNode };

export const ControlledSelectField = ({
  name,
  required,
  maxLength,
  minLength,
  max,
  min,
  pattern,
  validate,
  disabled,
  onChange,
  onBlur,
  value,
  defaultValue,
  shouldUnregister,
  deps,
  label,
  helperText,
  ...rest
}: ControlledSelectFieldProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={{
        required,
        maxLength,
        minLength,
        max,
        min,
        pattern,
        validate,
        onChange,
        onBlur,
        value,
        shouldUnregister,
        deps,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} disabled={field.disabled}>
          {label && (
            <FormLabel required={!!required} htmlFor={rest.id}>
              {label}
            </FormLabel>
          )}
          <Select
            {...rest}
            {...field}
            error={!!error}
            required={typeof required === 'object' ? required.value : !!required}
          />
          {error?.message ? (
            <FormHelperText error>
              {error.message}
              <br />
              {helperText}
            </FormHelperText>
          ) : (
            <FormHelperText>{helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
