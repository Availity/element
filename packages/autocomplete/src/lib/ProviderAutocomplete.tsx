import { avProvidersApi, ApiConfig } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';
import type { Optional } from './util';

export type Provider = {
  id: string;
  businessName: string;
  uiDisplayName: string;
  aytypical: boolean;
};

const fetchProviders = async (
  customerId: string,
  config: ApiConfig
): Promise<{ options: Provider[]; hasMore: boolean; offset: number }> => {
  const resp = await avProvidersApi.getProviders(customerId, config);

  return {
    options: resp.data.providers as Provider[],
    hasMore: config.params.offset + config.params.limit < resp.data.totalCount,
    offset: config.params.offset,
  };
};

export interface ProviderAutocompleteProps<
  Option = Provider,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    Optional<AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'queryKey'>,
    'loadOptions'
  > {
  customerId: string;
  apiConfig?: ApiConfig;
}

export const ProviderAutocomplete = ({
  apiConfig = {},
  customerId,
  queryKey = 'prov-autocomplete',
  ...rest
}: ProviderAutocompleteProps) => {
  const handleLoadOptions = async (offset: number, limit: number) => {
    const resp = await fetchProviders(customerId, { ...apiConfig, params: { ...apiConfig.params, offset, limit } });

    return resp;
  };

  const handleGetOptionLabel = (option: Provider) => option.uiDisplayName;

  return (
    <AsyncAutocomplete
      getOptionLabel={handleGetOptionLabel}
      queryOptions={{ enabled: !!customerId }}
      queryKey={queryKey}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
