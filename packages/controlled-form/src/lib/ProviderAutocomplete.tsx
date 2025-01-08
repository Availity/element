import { ProviderAutocomplete, ProviderAutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledProviderAutocompleteProps = ProviderAutocompleteProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledProviderAutocomplete = ({
  name,
  registerOptions,
  ...rest
}: ControlledProviderAutocompleteProps) => {
  const { register } = useFormContext();
  return <ProviderAutocomplete {...rest} {...register(name, registerOptions)} />;
};
