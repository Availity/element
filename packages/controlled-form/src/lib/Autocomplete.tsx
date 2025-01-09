import { Autocomplete, AutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues, Controller } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';

export type ControlledAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'onChange' | 'onBlur' | 'value'> & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledAutocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  name,
  ...rest
}: ControlledAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => (
        <Autocomplete
          {...rest}
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
