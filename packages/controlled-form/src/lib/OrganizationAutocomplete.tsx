import { OrganizationAutocomplete, OrgAutocompleteProps } from '@availity/mui-autocomplete';
import { Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { ControllerProps, DeprecatedRulesProps } from './Types';

export type ControlledOrgAutocompleteProps = Omit<OrgAutocompleteProps,
'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps
//TODO v1 - remove deprecated props
& Omit<DeprecatedRulesProps, 'max' | 'maxLength' | 'min' | 'minLength'
>;

export const ControlledOrganizationAutocomplete = ({
  name,
  defaultValue,
  deps,
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
}: ControlledOrgAutocompleteProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{
        deps,
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
        <OrganizationAutocomplete
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
