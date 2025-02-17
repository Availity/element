import { RadioGroup, RadioGroupProps } from '@availity/mui-form-utils';
import { Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { FormControl, FormLabel, FormHelperText } from '@availity/mui-form-utils';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledRadioGroupProps = {
  name: string;
  label: string;
  helperText?: string;
} & Omit <RadioGroupProps,
'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& Omit<DeprecatedRulesProps,
  'max'
  | 'maxLength'
  | 'min'
  | 'minLength'
  | 'pattern'
  | 'required'
  | 'validate'
> & {
  /** If `true`, will add `aria-required` to `input`.
   *
   * @deprecated There has been a collision of properties. The boolean value
   * to mark the input as required will remain in future versions, but the
   * required object for `react-hook-form` has been moved to the `rules` prop.
   */
  required?: boolean | RegisterOptions['required'];
};

export const ControlledRadioGroup = ({
  name,
  helperText,
  label,
  defaultValue,
  deps,
  onBlur,
  onChange,
  required,
  rules = {},
  shouldUnregister,
  value,
  ...rest
}: ControlledRadioGroupProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{ deps, onBlur, onChange, required: typeof required === 'boolean' ? undefined : required, shouldUnregister, value, ...rules }}
      shouldUnregister={shouldUnregister}
      render={({ field: {disabled, ...field}, fieldState: { error } }) => (
        <FormControl error={!!error} disabled={disabled} required={!!required}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field} {...rest} />
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
