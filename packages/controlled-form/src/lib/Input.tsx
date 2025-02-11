import { Input, InputProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledInputProps = Omit<InputProps, 'error' | 'name' | 'required'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledInput = ({
  name,
  required,
  maxLength,
  minLength,
  max,
  min,
  pattern,
  validate,
  defaultValue,
  disabled,
  onChange,
  onBlur,
  value,
  shouldUnregister,
  deps,
  ...rest
}: ControlledInputProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={{
        required,
        maxLength,
        minLength,
        max,
        min,
        pattern,
        validate,
        onChange,
        onBlur,
        value,
        shouldUnregister,
        deps,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...rest}
          {...field}
          error={!!error}
          required={typeof required === 'object' ? required.value : !!required}
        />
      )}
    />
  );
};
