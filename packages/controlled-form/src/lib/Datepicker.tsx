import { Datepicker, DatepickerProps } from '@availity/mui-datepicker';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, TransformProp } from './Types';
import { Dayjs } from 'dayjs';

export type ControlledDatepickerProps<Output = Dayjs | null> = Omit<
  DatepickerProps,
  'onBlur' | 'onChange' | 'value' | 'name'
> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<Dayjs | null, Output>;

export const ControlledDatepicker = <Output = Dayjs | null,>({
  name,
  defaultValue,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  FieldProps,
  transform,
  ...rest
}: ControlledDatepickerProps<Output>) => {
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
            required: typeof rules.required === 'object' ? rules.required.value : !!rules.required,
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
              onBlur: onBlur,
            },
          }}
          onChange={(e) => onChange(transform?.output?.(e) ?? e)}
          value={transform?.input?.(value) || value || null}
        />
      )}
    />
  );
};
