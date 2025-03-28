import type { Code } from '@availity/mui-autocomplete';
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
> extends Omit<
    Optional<ControlledAsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'queryKey'>,
    'loadOptions'
  > {
  /** The code list id. */
  list: string;
  /** Config passed to the AvCodesApi.query function */
  apiConfig?: ApiConfig;
}

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
      getOptionLabel={handleGetCodesOptionLabel}
      queryKey={queryKey}
      queryOptions={{ enabled: !!list, ...queryOptions }}
      watchParams={{ list, ...watchParams }}
      {...rest}
      loadOptions={handleLoadOptions}
    />
  );
};
