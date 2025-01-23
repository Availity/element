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
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      {...rest}
      error={!!errors[name]}
      required={!!required}
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
