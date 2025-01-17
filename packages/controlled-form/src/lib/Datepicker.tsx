import { Datepicker, DatepickerProps } from '@availity/mui-datepicker';
import { useFormContext, RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledDatepickerProps = DatepickerProps &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledDatepicker = ({
  name,
  defaultValue,
  deps,
  max,
  maxLength,
  min,
  minLength,
  onBlur,
  onChange,
  pattern,
  required,
  shouldUnregister,
  validate,
  value,
  ...rest
}: ControlledDatepickerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        deps,
        max,
        maxLength,
        min,
        minLength,
        onBlur,
        onChange,
        pattern,
        required,
        shouldUnregister,
        validate,
        value,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value } }) => <Datepicker {...rest} onChange={onChange} value={value || null} />}
    />
  );
};
