import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledTextFieldProps = TextFieldProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledTextField = ({ name, registerOptions, ...rest }: ControlledTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...rest}
      {...register(name, registerOptions)}
      error={!!errors[name]}
      helperText={errors[name]?.message ? JSON.stringify(errors[name].message) : ''}
    />
  );
};
