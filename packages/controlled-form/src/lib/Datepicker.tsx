import { Datepicker, DatepickerProps } from '@availity/mui-datepicker';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps } from './Types';

export type ControlledDatepickerProps = Omit<DatepickerProps,
  'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
  'onBlur' | 'onChange' | 'value'
> & ControllerProps;

export const ControlledDatepicker = ({
  name,
  defaultValue,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  FieldProps,
  ...rest
}: ControlledDatepickerProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        onBlur,
        onChange,
        shouldUnregister,
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
