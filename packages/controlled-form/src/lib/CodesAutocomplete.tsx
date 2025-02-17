import { CodesAutocomplete, CodesAutocompleteProps } from '@availity/mui-autocomplete';
import { Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledCodesAutocompleteProps = Omit<CodesAutocompleteProps,
'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& DeprecatedRulesProps;

export const ControlledCodesAutocomplete = ({
  name,
  defaultValue,
  deps,
  max,
  maxLength,
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
}: ControlledCodesAutocompleteProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        deps,
        max,
        maxLength,
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
        <CodesAutocomplete
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
            inputRef:ref
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
