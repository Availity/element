import { useState, useEffect } from 'react';
import type { ChipTypeMap } from '@mui/material/Chip';

import { Autocomplete, AutocompleteProps } from './Autocomplete';

export interface AsyncAutocompleteProps<
  Option,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'options'> {
  /** Function that returns a promise with options and hasMore */
  loadOptions: (page: number, limit: number) => Promise<{ options: Option[]; hasMore: boolean }>;
  /** The number of options to request from the api
   * @default 50 */
  limit?: number;
}

export const AsyncAutocomplete = <
  Option,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
>({
  loadOptions,
  limit = 50,
  ...rest
}: AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getInitialOptions = async () => {
      setLoading(true);
      const result = await loadOptions(page, limit);
      setOptions(result.options);
      setHasMore(result.hasMore);
      setPage((prev) => prev + 1);
      setLoading(false);
    };

    if (!loading && hasMore && page === 0) {
      getInitialOptions();
    }
  }, [page, loading, loadOptions]);

  return (
    <Autocomplete
      {...rest}
      loading={loading}
      options={options}
      ListboxProps={{
        onScroll: async (event: React.SyntheticEvent) => {
          const listboxNode = event.currentTarget;
          const difference = listboxNode.scrollHeight - (listboxNode.scrollTop + listboxNode.clientHeight);

          // Only fetch if we are near the bottom, not already fetching, and there are more results
          if (difference <= 5 && !loading && hasMore) {
            setLoading(true);
            const result = await loadOptions(page, limit);
            setOptions([...options, ...result.options]);
            setHasMore(result.hasMore);
            setPage((prev) => prev + 1);
            setLoading(false);
          }
        },
      }}
    />
  );
};
