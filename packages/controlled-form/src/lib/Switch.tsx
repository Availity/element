import { Switch, SwitchProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledSwitchProps = SwitchProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledSwitch = ({ name, registerOptions, ...rest }: ControlledSwitchProps) => {
  const { register } = useFormContext();
  return <Switch {...rest} {...register(name, registerOptions)} />;
};
