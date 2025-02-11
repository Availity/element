import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledTextFieldProps = Omit<TextFieldProps, 'required'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledTextField = ({
  name,
  helperText,
  required,
  maxLength,
  minLength,
  max,
  min,
  pattern,
  validate,
  disabled,
  defaultValue,
  onChange,
  onBlur,
  value,
  shouldUnregister,
  deps,
  ...rest
}: ControlledTextFieldProps) => {
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
        <TextField
          {...rest}
          {...field}
          required={typeof required === 'object' ? required.value : !!required}
          error={!!error}
          helperText={
            error?.message ? (
              <>
                {error.message}
                <br />
                {helperText}
              </>
            ) : (
              helperText
            )
          }
        />
      )}
    />
  );
};
