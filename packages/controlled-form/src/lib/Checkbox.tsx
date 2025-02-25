import { Checkbox, CheckboxProps } from '@availity/mui-checkbox';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps } from './Types';

export type ControlledCheckboxProps = Omit<CheckboxProps, 'disabled' | 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'disabled' | 'onBlur' | 'onChange' | 'value'> &
  ControllerProps;

export const ControlledCheckbox = ({
  name,
  disabled,
  onChange,
  onBlur,
  value,
  defaultValue = false,
  rules = {},
  shouldUnregister,
  ...rest
}: ControlledCheckboxProps) => {
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
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      )}
    />
  );
};
