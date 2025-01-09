import { Input, InputProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledInputProps = Omit<InputProps, 'error'> & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledInput = ({ name, registerOptions, ...rest }: ControlledInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return <Input {...rest} error={!!errors[name]} {...register(name, registerOptions)} />;
};
