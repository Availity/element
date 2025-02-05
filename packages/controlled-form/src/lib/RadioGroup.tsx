import { RadioGroup, RadioGroupProps } from '@availity/mui-form-utils';
import { ControllerProps, Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { FormControl, FormLabel, FormHelperText } from '@availity/mui-form-utils';

export type ControlledRadioGroupProps = RadioGroupProps & {
  name: string;
  label: string;
  helperText?: string;
} & Omit<
    RegisterOptions<FieldValues, string>,
    | 'disabled'
    | 'valueAsNumber'
    | 'valueAsDate'
    | 'setValueAs'
    | 'max'
    | 'maxLength'
    | 'min'
    | 'minLength'
    | 'pattern'
    | 'validate'
  > &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledRadioGroup = ({
  name,
  helperText,
  label,
  defaultValue,
  deps,
  onBlur,
  onChange,
  required,
  shouldUnregister,
  value,
  ...rest
}: ControlledRadioGroupProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{ deps, onBlur, onChange, required, shouldUnregister, value }}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormLabel required={typeof required === 'object' ? required.value : !!required}>{label}</FormLabel>
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
