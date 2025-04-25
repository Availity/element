import type { AsyncAutocompleteProps, Provider } from '@availity/mui-autocomplete';
import { handleGetProviderOptionLabel, fetchProviders } from '@availity/mui-autocomplete';
import type { ChipTypeMap } from '@mui/material/Chip';
import type { Optional } from './utils';
import type { ApiConfig } from '@availity/api-axios';
import { ControlledAsyncAutocomplete, type ControlledAsyncAutocompleteProps } from './AsyncAutocomplete';

export interface ControlledProviderAutocompleteProps<
  Option = Provider,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
> extends Omit<
    Optional<ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>, 'queryKey'>,
    'loadOptions'
  > {
  /** Customer ID of the Organization you are requesting the providers for */
  customerId: string;
  /** Config passed to the AvProvidersApi.getProviders function */
  apiConfig?: ApiConfig;
}

export const ControlledProviderAutocomplete = <
  Option = Provider,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
>({
  apiConfig = {},
  customerId,
  queryKey = 'prov-autocomplete',
  ...rest
}: ControlledProviderAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>) => {
  const handleLoadOptions = async (offset: number, limit: number, inputValue: string) => {
    const resp = await fetchProviders(customerId, {
      ...apiConfig,
      params: { ...apiConfig.params, offset, limit, q: inputValue },
    });

    return resp;
  };
  return (
    <ControlledAsyncAutocomplete
      getOptionLabel={handleGetProviderOptionLabel}
      queryOptions={{ enabled: !!customerId }}
      queryKey={queryKey}
      watchParams={{ customerId }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
