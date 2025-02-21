import { Input, InputProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps } from './Types';

export type ControlledInputProps = Omit<InputProps, 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps;

export const ControlledInput = ({
  name,
  defaultValue,
  disabled,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  ...rest
}: ControlledInputProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={{
        onChange,
        onBlur,
        value,
        shouldUnregister,
        ...rules,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => (
        <Input
          required={typeof rules.required === 'object' ? rules.required.value : !!rules.required}
          {...rest}
          {...field}
          error={!!error}
        />
      )}
    />
  );
};
