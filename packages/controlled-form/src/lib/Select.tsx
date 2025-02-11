import { Select, SelectProps } from '@availity/mui-form-utils';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledSelectProps = Omit<SelectProps, 'error' | 'required'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledSelect = ({
  name,
  required,
  maxLength,
  minLength,
  max,
  min,
  pattern,
  validate,
  disabled,
  onChange,
  onBlur,
  value,
  defaultValue,
  shouldUnregister,
  deps,
  ...rest
}: ControlledSelectProps) => {
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
        <Select
          {...rest}
          {...field}
          error={!!error}
          required={typeof required === 'object' ? required.value : !!required}
        />
      )}
    />
  );
};
