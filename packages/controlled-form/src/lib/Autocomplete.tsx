import { Autocomplete, AutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';

type ControlledAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent> & {
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
  registerOptions,
  ...rest
}: ControlledAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const { register } = useFormContext();
  return <Autocomplete {...rest} {...register(name, registerOptions)} />;
};
