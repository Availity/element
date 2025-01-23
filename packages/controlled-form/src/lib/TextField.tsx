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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

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
      error={!!errors[name]}
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
