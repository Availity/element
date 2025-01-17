import { OrganizationAutocomplete, OrgAutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, Controller, RegisterOptions, FieldValues, ControllerProps } from 'react-hook-form';

type ControlledOrgAutocompleteProps = Omit<OrgAutocompleteProps, 'name'> &
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
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;
  return (
    <Controller
      name={name}
      control={control}
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
      render={({ field: { onChange, value, onBlur } }) => (
        <OrganizationAutocomplete
          {...rest}
          FieldProps={{
            ...FieldProps,
            error: !!errorMessage,
            helperText:
              errorMessage && typeof errorMessage === 'string' ? (
                <>
                  {errorMessage}
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
