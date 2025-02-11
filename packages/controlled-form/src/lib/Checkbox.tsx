import { Checkbox, CheckboxProps } from '@availity/mui-checkbox';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledCheckboxProps = CheckboxProps &
  Omit<
    RegisterOptions<FieldValues, string>,
    | 'required'
    | 'disabled'
    | 'valueAsNumber'
    | 'valueAsDate'
    | 'setValueAs'
    | 'max'
    | 'maxLength'
    | 'min'
    | 'minLength'
    | 'pattern'
  > &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledCheckbox = ({
  name,
  disabled,
  onChange,
  onBlur,
  value,
  defaultValue = false,
  shouldUnregister,
  deps,
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
      }}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <Checkbox {...rest} {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
      )}
    />
  );
};
