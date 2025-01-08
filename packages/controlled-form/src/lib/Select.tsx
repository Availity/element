import { Select, SelectProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledSelectProps = SelectProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledSelect = ({ name, registerOptions, ...rest }: ControlledSelectProps) => {
  const { register } = useFormContext();

  return <Select {...rest} {...register(name, registerOptions)} />;
};
