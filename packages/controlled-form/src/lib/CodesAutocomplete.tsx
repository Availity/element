import type { AsyncAutocompleteProps, Code } from '@availity/mui-autocomplete';
import { fetchCodes, handleGetCodesOptionLabel } from '@availity/mui-autocomplete';
import { ApiConfig } from '@availity/api-axios';
import { ChipTypeMap } from '@mui/material/Chip';
import type { Optional } from './utils';
import { ControlledAsyncAutocomplete, ControlledAsyncAutocompleteProps } from './AsyncAutocomplete';

export interface ControlledCodesAutocompleteProps<
  Option = Code,
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
  /** The code list id. */
  list: string;
  /** Config passed to the AvCodesApi.query function */
  apiConfig?: ApiConfig;
}

export const ControlledCodesAutocomplete = <
  Option = Code,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  Output = AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>['value'] | null,
>({
  apiConfig = {},
  queryOptions,
  queryKey = 'codes-autocomplete',
  list,
  watchParams,
  ...rest
}: ControlledCodesAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent, Output>) => {
  const handleLoadOptions = async (offset: number, limit: number, inputValue: string) => {
    const resp = await fetchCodes({
      ...apiConfig,
      params: { ...apiConfig.params, list, offset, limit, q: inputValue },
    });

    return resp;
  };

  return (
    <ControlledAsyncAutocomplete
      getOptionLabel={handleGetCodesOptionLabel}
      queryKey={queryKey}
      queryOptions={{ enabled: !!list, ...queryOptions }}
      watchParams={{ list, ...watchParams }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
