import { AsyncAutocomplete, AsyncAutocompleteProps } from '@availity/mui-autocomplete';
import { RegisterOptions, FieldValues, Controller, useFormContext } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';
import { ControllerProps, TransformProp } from './Types';

export type ControlledAsyncAutocompleteProps<
  Option,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
> = { defaultToFirstOption?: boolean; defaultToOnlyOption?: boolean } & Omit<
  AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'onBlur' | 'onChange' | 'value' | 'name'
> &
  Pick<RegisterOptions<FieldValues, string>, 'onBlur' | 'onChange' | 'value'> &
  ControllerProps &
  TransformProp<
    AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
    Output
  >;

export const ControlledAsyncAutocomplete = <
  Option,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
>({
  name,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  FieldProps,
  defaultToFirstOption,
  defaultToOnlyOption,
  transform,
  ...rest
}: ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>) => {
  const { setValue } = useFormContext();
  return (
    <Controller
      name={name}
      defaultValue={rest.defaultValue}
      rules={{ onBlur, onChange, shouldUnregister, value, ...rules }}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => (
        <AsyncAutocomplete
          {...rest}
          FieldProps={{
            required: typeof rules.required === 'object' ? rules.required.value : !!rules.required,
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
            inputRef: ref,
          }}
          onChange={(event, value, reason) => {
            if (reason === 'clear') {
              onChange(transform?.output?.(null) ?? null);
            }
            onChange(transform?.output?.(value) ?? value);
          }}
          onBlur={onBlur}
          value={transform?.input?.(value) ?? value ?? null}
          loadOptions={async (offset, limit, inputValue) => {
            const { options, hasMore, offset: returnedOffsetValue } = await rest.loadOptions(offset, limit, inputValue);

            if (defaultToFirstOption && offset === 0) {
              setValue(name, rest.multiple ? [options[0]] : options[0]);
            }

            if (defaultToOnlyOption && offset === 0 && options.length === 1) {
              setValue(name, rest.multiple ? [options[0]] : options[0]);
            }

            return { options, hasMore, offset: returnedOffsetValue };
          }}
        />
      )}
    />
  );
};
