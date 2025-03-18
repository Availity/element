import { TextField, TextFieldProps } from '@availity/mui-textfield';
import { RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ControllerProps } from './Types';

export type ControlledTextFieldProps = Omit<TextFieldProps, 'onBlur' | 'onChange' | 'value' | 'name'> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps;

export const ControlledTextField = ({
  name,
  defaultValue,
  disabled,
  helperText,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  ...rest
}: ControlledTextFieldProps) => {
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
          {...rest}
          slotProps={{
            ...rest.slotProps,
            htmlInput: {
              maxLength: rules.maxLength,
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
