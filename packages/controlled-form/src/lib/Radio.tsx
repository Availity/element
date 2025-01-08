import { Radio, RadioProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledRadioProps = RadioProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledRadio = ({ name, registerOptions, ...rest }: ControlledRadioProps) => {
  const { register } = useFormContext();
  return <Radio {...rest} {...register(name, registerOptions)} />;
};
