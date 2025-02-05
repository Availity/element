import { Select, SelectProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledSelectProps = Omit<SelectProps, 'error' | 'required'> & { name: string } & RegisterOptions<
    FieldValues,
    string
  >;

export const ControlledSelect = ({
  name,
  required,
  maxLength,
  minLength,
  max,
  min,
  pattern,
  validate,
  setValueAs,
  disabled,
  onChange,
  onBlur,
  value,
  shouldUnregister,
  deps,
  ...rest
}: ControlledSelectProps) => {
  const { register, getFieldState } = useFormContext();

  return (
    <Select
      {...rest}
      error={!!getFieldState(name).error}
      required={typeof required === 'object' ? required.value : !!required}
      {...register(name, {
        required,
        maxLength,
        minLength,
        max,
        min,
        pattern,
        validate,
        setValueAs,
        disabled,
        onChange,
        onBlur,
        value,
        shouldUnregister,
        deps,
      })}
    />
  );
};
