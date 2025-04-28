import { FormControlProps, RadioGroup, RadioGroupProps } from '@availity/mui-form-utils';
import { Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { FormControl, FormLabel, FormHelperText } from '@availity/mui-form-utils';
import { ControllerProps, TransformProp } from './Types';

export type ControlledRadioGroupProps<Output = string> = {
  name: string;
  label: string;
  helperText?: string;
} & Omit<RadioGroupProps, 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<string, Output> &
  Pick<FormControlProps, 'required'>;

export const ControlledRadioGroup = <Output = string,>({
  name,
  helperText,
  label,
  defaultValue,
  onBlur,
  onChange,
  required,
  rules = {},
  shouldUnregister,
  value,
  transform,
  ...rest
}: ControlledRadioGroupProps<Output>) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{ onBlur, onChange, shouldUnregister, value, ...rules }}
      shouldUnregister={shouldUnregister}
      render={({ field: { disabled, ...field }, fieldState: { error } }) => (
        <FormControl
          error={!!error}
          disabled={disabled}
          required={!!required || (typeof rules.required === 'object' ? rules.required.value : !!rules.required)}
        >
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            {...field}
            onChange={(e) => field.onChange(transform?.output?.(e.target.value) ?? e)}
            value={transform?.input?.(field.value) ?? field.value ?? ''}
            {...rest}
          />
          <FormHelperText>
            {error?.message ? (
              <>
                {error.message}
                <br />
                {helperText}
              </>
            ) : (
              helperText
            )}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
