import { Datepicker, DatepickerProps } from '@availity/mui-datepicker';
import { RegisterOptions, FieldValues, Controller, ControllerProps } from 'react-hook-form';

export type ControlledDatepickerProps = DatepickerProps &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledDatepicker = ({
  name,
  defaultValue,
  deps,
  max,
  maxLength,
  min,
  minLength,
  onBlur,
  onChange,
  pattern,
  required,
  shouldUnregister,
  validate,
  value,
  FieldProps,
  ...rest
}: ControlledDatepickerProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        deps,
        max,
        maxLength,
        min,
        minLength,
        onBlur,
        onChange,
        pattern,
        required,
        shouldUnregister,
        validate,
        value,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Datepicker
          {...rest}
          FieldProps={{
            ...FieldProps,
            required: typeof required === 'object' ? required.value : !!required,
            error: !!error,
            helperText: error?.message ? (
              <>
                {error?.message}
                <br />
                {FieldProps?.helperText}
              </>
            ) : (
              FieldProps?.helperText
            ),
          }}
          onChange={onChange}
          value={value || null}
        />
      )}
    />
  );
};
