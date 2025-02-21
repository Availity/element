import { Select, SelectProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps } from './Types';

export type ControlledSelectProps = Omit<SelectProps,
'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps;

export const ControlledSelect = ({
  name,
  defaultValue,
  disabled,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  ...rest
}: ControlledSelectProps) => {
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
          {...rest}
          {...field}
          error={!!error}
        />
      )}
    />
  );
};
