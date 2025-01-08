import { OrganizationAutocomplete, OrgAutocompleteProps } from '@availity/mui-autocomplete';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledOrgAutocompleteProps = OrgAutocompleteProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

export const ControlledOrganizationAutocomplete = ({
  name,
  registerOptions,
  ...rest
}: ControlledOrgAutocompleteProps) => {
  const { register } = useFormContext();

  return <OrganizationAutocomplete {...rest} {...register(name, registerOptions)} />;
};
