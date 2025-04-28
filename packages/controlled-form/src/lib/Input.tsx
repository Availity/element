import { Input, InputProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, TransformProp } from './Types';

export type ControlledInputProps<Output = string> = Omit<InputProps, 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<string, Output>;

export const ControlledInput = <Output = string,>({
  name,
  defaultValue,
  disabled,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  transform,
  ...rest
}: ControlledInputProps<Output>) => {
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
          onChange={(e) => field.onChange(transform?.output?.(e.target.value) ?? e)}
          value={transform?.input?.(field.value) ?? field.value ?? ''}
          error={!!error}
        />
      )}
    />
  );
};
