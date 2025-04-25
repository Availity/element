import type { AsyncAutocompleteProps, Organization } from '@availity/mui-autocomplete';
import { handleGetOrgOptionLabel, fetchOrgs } from '@availity/mui-autocomplete';
import type { ChipTypeMap } from '@mui/material/Chip';
import type { ApiConfig } from '@availity/api-axios';
import type { Optional } from './utils';
import { ControlledAsyncAutocomplete, ControlledAsyncAutocompleteProps } from './AsyncAutocomplete';

export interface ControlledOrgAutocompleteProps<
  Option = Organization,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
> extends Omit<
    Optional<
      ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>,
      'queryKey'
    >,
    'loadOptions'
  > {
  /** Axios ApiConfig */
  apiConfig?: ApiConfig;
}

export const ControlledOrganizationAutocomplete = <
  Option = Organization,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
>({
  queryKey = 'org-autocomplete',
  apiConfig = {},
  ...rest
}: ControlledOrgAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>) => {
  const handleLoadOptions = async (offset: number, limit: number) => {
    const resp = await fetchOrgs({ ...apiConfig, params: { dropdown: true, ...apiConfig.params, offset, limit } });

    return resp;
  };
  return (
    <ControlledAsyncAutocomplete
      getOptionLabel={handleGetOrgOptionLabel}
      queryKey={queryKey}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
