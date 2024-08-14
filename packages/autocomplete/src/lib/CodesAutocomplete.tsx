import { avCodesApi, ApiConfig } from '@availity/api-axios';
import type { ChipTypeMap } from '@mui/material/Chip';

import { AsyncAutocomplete, AsyncAutocompleteProps } from './AsyncAutocomplete';
import type { Optional } from './util';

type Code = {
  code: string;
  value: string;
};

const fetchCodes = async (config: ApiConfig) => {
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
  list: string;
  /** Config passed to the AvCodesApi.query function */
  apiConfig?: ApiConfig;
}

export const CodesAutocomplete = ({
  apiConfig = {},
  queryOptions,
  queryKey = 'codes-autocomplete',
  list,
  watchParams,
  ...rest
}: CodesAutocompleteProps) => {
  const handleLoadOptions = async (offset: number, limit: number, inputValue: string) => {
    const resp = await fetchCodes({
      ...apiConfig,
      params: { ...apiConfig.params, list, offset, limit, q: inputValue },
    });

    return resp;
  };

  const handleGetOptionLabel = (option: Code) => [option.code, option.value].filter(Boolean).join(' - ');

  return (
    <AsyncAutocomplete
      getOptionLabel={handleGetOptionLabel}
      queryKey={queryKey}
      queryOptions={{ enabled: !!list, ...queryOptions }}
      watchParams={{ list, ...watchParams }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
