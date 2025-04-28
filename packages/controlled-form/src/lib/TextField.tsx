import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps, TransformProp } from './Types';

export type ControlledTextFieldProps<Output = string> = Omit<TextFieldProps, 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<string, Output>;

export const ControlledTextField = <Output = string,>({
  name,
  defaultValue,
  disabled,
  helperText,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  transform,
  ...rest
}: ControlledTextFieldProps<Output>) => {
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
        ...rules,
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          required={typeof rules.required === 'object' ? rules.required.value : !!rules.required}
          {...field}
          onChange={(e) => field.onChange(transform?.output?.(e.target.value) ?? e)}
          value={transform?.input?.(field.value) ?? field.value ?? ''}
          {...rest}
          slotProps={{
            ...rest.slotProps,
            htmlInput: {
              maxLength: typeof rules.maxLength === 'object' ? rules.maxLength.value : rules.maxLength,
              ...rest.slotProps?.htmlInput,
            },
          }}
          inputRef={ref}
          error={!!error}
          helperText={
            error?.message ? (
              <>
                {error.message}
                <br />
                {helperText}
              </>
            ) : (
              helperText
            )
          }
        />
      )}
    />
  );
};
