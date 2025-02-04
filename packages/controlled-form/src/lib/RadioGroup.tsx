import { RadioGroup, RadioGroupProps } from '@availity/mui-form-utils';
import { useFormContext, ControllerProps, Controller, RegisterOptions, FieldValues } from 'react-hook-form';
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
  const { control, getFieldState } = useFormContext();
  const errorMessage = getFieldState(name).error?.message;
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{ deps, onBlur, onChange, required, shouldUnregister, value }}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <FormControl error={!!errorMessage}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field} {...rest} />
          <FormHelperText>
            {errorMessage && typeof errorMessage === 'string' ? (
              <>
                {errorMessage}
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
