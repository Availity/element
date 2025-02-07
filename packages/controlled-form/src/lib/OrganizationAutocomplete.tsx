import { OrganizationAutocomplete, OrgAutocompleteProps } from '@availity/mui-autocomplete';
import { Controller, RegisterOptions, FieldValues, ControllerProps } from 'react-hook-form';

export type ControlledOrgAutocompleteProps = Omit<OrgAutocompleteProps, 'name'> &
  Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'max' | 'maxLength' | 'min' | 'minLength'
  > &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

export const ControlledOrganizationAutocomplete = ({
  name,
  defaultValue,
  deps,
  onBlur,
  onChange,
  pattern,
  required,
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
      }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <OrganizationAutocomplete
          {...rest}
          FieldProps={{
            ...FieldProps,
            required: typeof required === 'object' ? required.value : !!required,
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
