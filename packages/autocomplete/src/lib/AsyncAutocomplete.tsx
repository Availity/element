import type { ChipTypeMap } from '@mui/material/Chip';
import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';

import { Autocomplete, AutocompleteProps } from './Autocomplete';

export interface AsyncAutocompleteProps<
  Option,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    'options' | 'disableListWrap' | 'loading'
  > {
  /** Function that is called to fetch the options for the list. Returns a promise with options, hasMore, and offset */
  loadOptions: (offset: number, limit: number) => Promise<{ options: Option[]; hasMore: boolean; offset: number }>;
  /** The key used by @tanstack/react-query to cache the response */
  queryKey: string;
  /** The number of options to request from the api
   * @default 50 */
  limit?: number;
  /** Config options for the useInfiniteQuery hook */
  queryOptions?: UseInfiniteQueryOptions<{ options: Option[]; hasMore: boolean; offset: number }>;
}

export const AsyncAutocomplete = <
  Option,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
  loadOptions,
  limit = 50,
  queryKey,
  ListboxProps,
  queryOptions,
  ...rest
}: AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const { isLoading, isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryKey, limit],
    queryFn: async ({ pageParam = 0 }) => loadOptions(pageParam, limit),
    staleTime: 10000,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.offset + limit : false),
    ...queryOptions,
  });

  const options = data?.pages ? data.pages.map((page) => page.options).flat() : [];

  return (
    <Autocomplete
      {...rest}
      loading={isFetching}
      options={options}
      ListboxProps={{
        ...ListboxProps,
        onScroll: async (event: React.SyntheticEvent) => {
          const listboxNode = event.currentTarget;
          const difference = listboxNode.scrollHeight - (listboxNode.scrollTop + listboxNode.clientHeight);

          // Only fetch if we are near the bottom, not already fetching, and there are more results
          if (difference <= 5 && !isLoading && !isFetching && hasNextPage) {
            fetchNextPage();
          }
        },
      }}
    />
  );
};
