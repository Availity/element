import { Checkbox, CheckboxProps } from '@availity/mui-checkbox';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

export type ControlledCheckboxProps = CheckboxProps & {
  name: string;
} & Omit<
    RegisterOptions<FieldValues, string>,
    'required' | 'max' | 'maxLength' | 'min' | 'minLength' | 'pattern' | 'validate'
  >;

export const ControlledCheckbox = ({
  name,
  setValueAs,
  disabled,
  onChange,
  onBlur,
  value,
  shouldUnregister,
  deps,
  ...rest
}: ControlledCheckboxProps) => {
  const { register } = useFormContext();
  return (
    <Checkbox
      {...rest}
      {...register(name, {
        setValueAs,
        disabled,
        onChange,
        onBlur,
        value,
        shouldUnregister,
        deps,
      })}
    />
  );
};
