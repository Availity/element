import { avOrganizationsApi, ApiConfig } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';

export type Organization = {
  customerId: string;
  name: string;
  id: string;
  createDate: string;
  links: Record<string, Record<string, string>>;
};

const fetchOrgs = async (config: ApiConfig): Promise<{ options: Organization[]; hasMore: boolean }> => {
  try {
    const resp = await avOrganizationsApi.getOrganizations(config);

    return {
      options: resp.data.organizations as Organization[],
      hasMore: config.params.offset + config.params.limit < resp.data.totalCount,
    };
  } catch {
    return {
      options: [],
      hasMore: false,
    };
  }
};

export interface OrgAutocompleteProps<
  Option = Organization,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'loadOptions'> {
  apiConfig?: ApiConfig;
}

export const OrganizationAutocomplete = ({ apiConfig = {}, ...rest }: OrgAutocompleteProps) => {
  const handleLoadOptions = async (page: number, limit: number) => {
    const offset = page * limit;

    const resp = await fetchOrgs({ ...apiConfig, params: { dropdown: true, ...apiConfig.params, offset, limit } });

    return resp;
  };

  const handleGetOptionLabel = (org: Organization) => org.name;

  return <AsyncAutocomplete getOptionLabel={handleGetOptionLabel} {...rest} loadOptions={handleLoadOptions} />;
};
