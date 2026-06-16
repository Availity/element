import { avOrganizationsApi, ApiConfig, type OrganizationsResponse, type Organization } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';
import qs from 'qs';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';
import type { Optional } from './util';

export type { Organization } from '@availity/api-axios';

export const fetchOrgs = async (
  config: ApiConfig
): Promise<{ options: Organization[]; hasMore: boolean; offset: number }> => {
  // Configure axios to use 'repeat' format for arrays (no brackets)
  const configWithParamsSerializer = {
    ...config,
    paramsSerializer: {
      serialize: (params: Record<string, any>) => qs.stringify(params, { arrayFormat: 'repeat' }),
    },
  };

  const resp = await avOrganizationsApi.getOrganizations<OrganizationsResponse>(configWithParamsSerializer);

  return {
    options: resp.data.organizations,
    hasMore: (config.params!.offset as number) + (config.params!.limit as number) < resp.data.totalCount,
    offset: config.params!.offset as number,
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
  /** Axios ApiConfig */
  apiConfig?: ApiConfig;
}

export const handleGetOrgOptionLabel = (org: Organization) => org.name;

export const OrganizationAutocomplete = <
  Option = Organization,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  apiConfig = {},
  queryKey = 'org-autocomplete',
  ...rest
}: OrgAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const handleLoadOptions = async (offset: number, limit: number) => {
    const resp = await fetchOrgs({ ...apiConfig, params: { dropdown: true, ...apiConfig.params, offset, limit } });

    return {
      ...resp,
      options: resp.options as Option[],
    };
  };

  return (
    <AsyncAutocomplete
      getOptionLabel={handleGetOrgOptionLabel as (option: Option) => string}
      queryKey={queryKey}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
