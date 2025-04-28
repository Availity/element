import { Select, SelectProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, TransformProp } from './Types';

export type ControlledSelectProps<Output = string, Input = unknown> = Omit<
  SelectProps<Input>,
  'onBlur' | 'onChange' | 'value' | 'name'
> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<Input, Output>;

export const ControlledSelect = <Output = string, Input = unknown>({
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
}: ControlledSelectProps<Output, Input>) => {
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
        <Select
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
