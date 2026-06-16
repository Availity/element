import { avProvidersApi, ApiConfig, type ProvidersResponse, type Provider as BaseProvider } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';
import type { Optional } from './util';

export interface Provider extends BaseProvider {
  businessName: string;
  uiDisplayName: string;
  payerAssignedIdentifiers?: { payerId: string; identifier: string }[];
  atypical: boolean;
  npi: string;
  customerIds: string[];
  roles: { code: string; value: string }[];
  primaryPhone: { internationalCellularCode: string; areaCode: string; phoneNumber: string };
  primaryFax: { internationalCellularCode: string; areaCode: string; phoneNumber: string };
  taxId?: string;
  ssn?: string;
  primaryAddress: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    stateCode: string;
    zip: { code: string; addon: string };
  };
  primarySpecialty?: {
    code: string;
    value: string;
  };
}

export const fetchProviders = async (
  customerId: string,
  config: ApiConfig
): Promise<{ options: Provider[]; hasMore: boolean; offset: number }> => {
  const resp = await avProvidersApi.getProviders<ProvidersResponse>(customerId, config);

  return {
    options: resp.data.providers as Provider[],
    hasMore: (config.params!.offset as number) + (config.params!.limit as number) < resp.data.totalCount,
    offset: config.params!.offset as number,
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
  /** Customer ID of the Organization you are requesting the providers for */
  customerId: string;
  /** Config passed to the AvProvidersApi.getProviders function */
  apiConfig?: ApiConfig;
}

export const handleGetProviderOptionLabel = (option: Provider) => option.uiDisplayName;

export const ProviderAutocomplete = <
  Option = Provider,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  apiConfig = {},
  customerId,
  queryKey = 'prov-autocomplete',
  ...rest
}: ProviderAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const handleLoadOptions = async (offset: number, limit: number, inputValue: string) => {
    const resp = await fetchProviders(customerId, {
      ...apiConfig,
      params: { ...apiConfig.params, offset, limit, q: inputValue },
    });

    return {
      ...resp,
      options: resp.options as Option[],
    };
  };

  return (
    <AsyncAutocomplete
      getOptionLabel={handleGetProviderOptionLabel as (option: Option) => string}
      queryOptions={{ enabled: !!customerId }}
      queryKey={queryKey}
      watchParams={{ customerId }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
