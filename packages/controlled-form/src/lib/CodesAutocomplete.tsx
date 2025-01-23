import { CodesAutocomplete, CodesAutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, Controller, RegisterOptions, ControllerProps, FieldValues } from 'react-hook-form';

type ControlledCodesAutocompleteProps = Omit<CodesAutocompleteProps, 'name'> &
  Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> &
  Pick<ControllerProps, 'defaultValue' | 'shouldUnregister' | 'name'>;

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
  shouldUnregister,
  validate,
  value,
  FieldProps,
  ...rest
}: ControlledCodesAutocompleteProps) => {
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
        max,
        maxLength,
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
        <CodesAutocomplete
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
