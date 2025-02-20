import { Checkbox, CheckboxProps } from '@availity/mui-checkbox';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledCheckboxProps = Omit<CheckboxProps,
  'disabled' | 'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
  'disabled' | 'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& Omit<DeprecatedRulesProps,
| 'required'
| 'max'
| 'maxLength'
| 'min'
| 'minLength'
| 'pattern'>;

export const ControlledCheckbox = ({
  name,
  disabled,
  onChange,
  onBlur,
  value,
  defaultValue = false,
  rules = {},
  shouldUnregister,
  deps,
  validate,
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
        deps,
        validate,
        ...rules,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <Checkbox {...rest} {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
      )}
    />
  );
};
