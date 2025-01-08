import { AsyncAutocomplete, AsyncAutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';
import { ChipTypeMap } from '@mui/material/Chip';

type ControlledAsyncAutocompleteProps<
  Option,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent> & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledAsyncAutocompleteProps = <
  Option,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  name,
  registerOptions,
  ...rest
}: ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const { register } = useFormContext();
  return <AsyncAutocomplete {...rest} {...register(name, registerOptions)} />;
};
