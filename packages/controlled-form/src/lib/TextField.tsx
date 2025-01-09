import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledTextFieldProps = TextFieldProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledTextField = ({ name, registerOptions, helperText, ...rest }: ControlledTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <TextField
      {...rest}
      {...register(name, registerOptions)}
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
