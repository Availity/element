import { Checkbox, CheckboxProps } from '@availity/mui-checkbox';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledCheckboxProps = CheckboxProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledCheckbox = ({ name, registerOptions, ...rest }: ControlledCheckboxProps) => {
  const { register } = useFormContext();
  return <Checkbox {...rest} {...register(name, registerOptions)} />;
};
