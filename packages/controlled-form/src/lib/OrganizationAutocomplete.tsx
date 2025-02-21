import { OrganizationAutocomplete, OrgAutocompleteProps } from '@availity/mui-autocomplete';
import { Controller, RegisterOptions, FieldValues } from 'react-hook-form';
import { ControllerProps } from './Types';

export type ControlledOrgAutocompleteProps = Omit<OrgAutocompleteProps,
'onBlur' | 'onChange' | 'value' | 'name'
> & Pick<RegisterOptions<FieldValues, string>,
'onBlur' | 'onChange' | 'value'
> & ControllerProps;

export const ControlledOrganizationAutocomplete = ({
  name,
  defaultValue,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  FieldProps,
  ...rest
}: ControlledOrgAutocompleteProps) => {
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
