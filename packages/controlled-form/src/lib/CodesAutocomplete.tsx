import { avCodesApi, ApiConfig } from '@availity/api-axios';
import { ChipTypeMap } from '@mui/material/Chip';
import { ControlledAsyncAutocomplete, ControlledAsyncAutocompleteProps } from './AsyncAutocomplete';

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface ControlledCodesAutocompleteProps<
  Option = Code,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    Optional<ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'queryKey'>,
    'loadOptions'
  > {
  /** The code list id. */
  list: string;
  /** Config passed to the AvCodesApi.query function */
  apiConfig?: ApiConfig;
}

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

export const ControlledCodesAutocomplete = ({
  name,
  defaultValue,
  onBlur,
  onChange,
  rules = {},
  shouldUnregister,
  value,
  FieldProps,
  apiConfig = {},
  queryOptions,
  queryKey = 'codes-autocomplete',
  list,
  watchParams,
  ...rest
}: ControlledCodesAutocompleteProps) => {
  const handleLoadOptions = async (offset: number, limit: number, inputValue: string) => {
    const resp = await fetchCodes({
      ...apiConfig,
      params: { ...apiConfig.params, list, offset, limit, q: inputValue },
    });

    return resp;
  };

  const handleGetOptionLabel = (option: Code) => [option.code, option.value].filter(Boolean).join(' - ');

  return (
    <ControlledAsyncAutocomplete
      name={name}
      defaultValue={defaultValue}
      onBlur={onBlur}
      onChange={onChange}
      rules={rules}
      shouldUnregister={shouldUnregister}
      value={value}
      FieldProps={FieldProps}
      getOptionLabel={handleGetOptionLabel}
      queryKey={queryKey}
      queryOptions={{ enabled: !!list, ...queryOptions }}
      watchParams={{ list, ...watchParams }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
