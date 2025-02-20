import { ProviderAutocomplete, ProviderAutocompleteProps } from '@availity/mui-autocomplete';
import { Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledProviderAutocompleteProps = Omit<ProviderAutocompleteProps,
'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& DeprecatedRulesProps;

export const ControlledProviderAutocomplete = ({
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
}: ControlledProviderAutocompleteProps) => {
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
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <ProviderAutocomplete
          {...rest}
          FieldProps={{
            ...FieldProps,
            error: !!error,
            helperText: error?.message ? (
              <>
                {error.message}
                <br />
                {FieldProps?.helperText}
              </>
            ) : (
              FieldProps?.helperText
            ),
          }}
          onChange={(event, value, reason) => {
            if (reason === 'clear') {
              onChange(null);
            }
            onChange(value);
          }}
          onBlur={onBlur}
          value={value || null}
        />
      )}
    />
  );
};
