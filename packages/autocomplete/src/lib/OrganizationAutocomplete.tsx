import { avOrganizationsApi, ApiConfig } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';
import type { Optional } from './util';

export type Organization = {
  customerId: string;
  name: string;
  id: string;
  createDate: string;
  links: Record<string, Record<string, string>>;
};

const fetchOrgs = async (config: ApiConfig): Promise<{ options: Organization[]; hasMore: boolean; offset: number }> => {
  const resp = await avOrganizationsApi.getOrganizations(config);

  return {
    options: resp.data.organizations as Organization[],
    hasMore: config.params.offset + config.params.limit < resp.data.totalCount,
    offset: config.params.offset,
  };
};

export interface OrgAutocompleteProps<
  Option = Organization,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    Optional<AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'queryKey'>,
    'loadOptions'
  > {
  apiConfig?: ApiConfig;
}

export const OrganizationAutocomplete = ({
  apiConfig = {},
  queryKey = 'org-autocomplete',
  ...rest
}: OrgAutocompleteProps) => {
  const handleLoadOptions = async (offset: number, limit: number) => {
    const resp = await fetchOrgs({ ...apiConfig, params: { dropdown: true, ...apiConfig.params, offset, limit } });

    return resp;
  };

  const handleGetOptionLabel = (org: Organization) => org.name;

  return (
    <AsyncAutocomplete
      getOptionLabel={handleGetOptionLabel}
      queryKey={queryKey}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
