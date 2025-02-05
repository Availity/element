import { Input, InputProps } from '@availity/mui-form-utils';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledInputProps = Omit<InputProps, 'error' | 'name' | 'required'> & { name: string } & RegisterOptions<
    FieldValues,
    string
  >;

export const ControlledInput = ({
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
}: ControlledInputProps) => {
  const { register, getFieldState } = useFormContext();
  return (
    <Input
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
