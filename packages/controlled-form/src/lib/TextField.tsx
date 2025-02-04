import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledTextFieldProps = Omit<TextFieldProps, 'required'> & {
  name: string;
} & RegisterOptions<FieldValues, string>;

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
  setValueAs,
  disabled,
  onChange,
  onBlur,
  value,
  shouldUnregister,
  deps,
  ...rest
}: ControlledTextFieldProps) => {
  const { register, getFieldState } = useFormContext();

  const errorMessage = getFieldState(name).error?.message;

  return (
    <TextField
      {...rest}
      {...register(name, {
        required,
        maxLength,
        minLength,
        max,
        min,
        pattern,
        validate,
        setValueAs,
        disabled,
        onChange,
        onBlur,
        value,
        shouldUnregister,
        deps,
      })}
      error={!!getFieldState(name).error}
      helperText={
        errorMessage && typeof errorMessage === 'string' ? (
          <>
            {errorMessage}
            <br />
            {helperText}
          </>
        ) : (
          helperText
        )
      }
    />
  );
};
