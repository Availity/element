import { avCodesApi, ApiConfig } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';
import type { Optional } from './util';

export type Code = {
  code: string;
  value: string;
};

export const fetchCodes = async (config: ApiConfig) => {
  const resp = await avCodesApi.query(config);

  return {
    options: resp.data.codes as Code[],
    hasMore: config.params.offset + config.params.limit < resp.data.totalCount,
    offset: config.params.offset,
  };
};

export interface CodesAutocompleteProps<
  Option = Code,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    Optional<AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'queryKey'>,
    'loadOptions'
  > {
  /** The code list id. */
  list: string;
  /** Config passed to the AvCodesApi.query function */
  apiConfig?: ApiConfig;
}

export const handleGetCodesOptionLabel = (option: Code) => [option.code, option.value].filter(Boolean).join(' - ');

export const CodesAutocomplete = <
  Option = Code,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  apiConfig = {},
  queryOptions,
  queryKey = 'codes-autocomplete',
  list,
  watchParams,
  ...rest
}: CodesAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const handleLoadOptions = async (offset: number, limit: number, inputValue: string) => {
    const resp = await fetchCodes({
      ...apiConfig,
      params: { ...apiConfig.params, list, offset, limit, q: inputValue },
    });

    return {
      ...resp,
      options: resp.options as Option[],
    };
  };

  return (
    <AsyncAutocomplete
      getOptionLabel={handleGetCodesOptionLabel as (option: Option) => string}
      queryKey={queryKey}
      queryOptions={{ enabled: !!list, ...queryOptions }}
      watchParams={{ list, ...watchParams }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
