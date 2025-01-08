import { CodesAutocomplete, CodesAutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledCodesAutocompleteProps = CodesAutocompleteProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledCodesAutocomplete = ({ name, registerOptions, ...rest }: ControlledCodesAutocompleteProps) => {
  const { register } = useFormContext();
  return <CodesAutocomplete {...rest} {...register(name, registerOptions)} />;
};
