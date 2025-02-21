import { Datepicker, DatepickerProps } from '@availity/mui-datepicker';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledDatepickerProps = Omit<DatepickerProps,
  'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
  'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& DeprecatedRulesProps;

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
  rules = {},
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
        ...rules,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => (
        <Datepicker
          {...rest}
          FieldProps={{
            ...FieldProps,
            error: !!error,
            helperText: error ? (
              <>
                {error.message}
                <br />
                {FieldProps?.helperText}
              </>
            ) : (
              FieldProps?.helperText
            ),
            inputRef: ref,
            inputProps: {
              onBlur: onBlur
            },
          }}
          onChange={onChange}
          value={value || null}
        />
      )}
    />
  );
};
