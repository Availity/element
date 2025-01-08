import { Input, InputProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledInputProps = InputProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledInput = ({ name, registerOptions, ...rest }: ControlledInputProps) => {
  const { register } = useFormContext();
  return <Input {...rest} {...register(name, registerOptions)} />;
};
