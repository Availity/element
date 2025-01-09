import { RadioGroup, RadioGroupProps } from '@availity/mui-form-utils';
import { useFormContext, ControllerProps, FieldValues, Controller } from 'react-hook-form';

export type ControlledRadioGroupProps = RadioGroupProps & {
  name: string;
  controllerProps: ControllerProps;
};

export const ControlledRadioGroup = ({ name, controllerProps, ...rest }: ControlledRadioGroupProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      {...controllerProps}
      control={control}
      name={name}
      render={({ field }) => <RadioGroup {...field} {...rest} />}
    />
  );
};
