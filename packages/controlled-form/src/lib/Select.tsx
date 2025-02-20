import { Select, SelectProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledSelectProps = Omit<SelectProps,
'onBlur' | 'onChange' | 'value' | 'name' | 'required'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& Omit<DeprecatedRulesProps, 'required'> & {
  /** If `true`, will add `aria-required` to `input`.
   *
   * @deprecated There has been a collision of properties. The boolean value
   * to mark the input as required will remain in future versions, but the
   * required object for `react-hook-form` has been moved to the `rules` prop.
   */
  required?: boolean | RegisterOptions['required'];
};

export const ControlledSelect = ({
  name,
  defaultValue,
  deps,
  disabled,
  max,
  maxLength,
  min,
  minLength,
  onBlur,
  onChange,
  pattern,
  required,
  rules = {},
  shouldUnregister,
  validate,
  value,
  ...rest
}: ControlledSelectProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={{
        required: typeof required === 'boolean' ? undefined : required,
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
        ...rules,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...rest}
          {...field}
          error={!!error}
          required={!!required}
        />
      )}
    />
  );
};
