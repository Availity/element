import { Checkbox, CheckboxProps } from '@availity/mui-checkbox';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, TransformProp } from './Types';

export type ControlledCheckboxProps<Output = boolean> = Omit<CheckboxProps, 'disabled' | 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'disabled' | 'onBlur' | 'onChange' | 'value'> &
  ControllerProps & TransformProp<boolean, Output>;

export const ControlledCheckbox = <Output = boolean,>({
  name,
  disabled,
  onChange,
  onBlur,
  value,
  defaultValue = false,
  rules = {},
  shouldUnregister,
  transform,
  ...rest
}: ControlledCheckboxProps<Output>) => {
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
      render={({ field }) => (
        <Checkbox
          required={typeof rules.required === 'object' ? rules.required.value : !!rules.required}
          {...rest}
          {...field}
          checked={transform?.input?.(field.value) ?? field.value}
          onChange={(e) => field.onChange(transform?.output?.(e.target.checked) ?? e.target.checked)}
        />
      )}
    />
  );
};
