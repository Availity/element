import { useState, useRef, useEffect, useCallback } from 'react';
import type { ChipTypeMap } from '@mui/material/Chip';
import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { AutocompleteInputChangeReason } from '@mui/material/Autocomplete';

import { Autocomplete, AutocompleteProps } from './Autocomplete';
import { useDebounce } from './util';

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
  loadOptions: (
    offset: number,
    limit: number,
    inputValue?: string
  ) => Promise<{ options: Option[]; hasMore: boolean; offset: number }>;
  /** The key used by @tanstack/react-query to cache the response */
  queryKey: string;
  /** The number of options to request from the api
   * @default 50 */
  limit?: number;
  /** Config options for the useInfiniteQuery hook */
  queryOptions?: UseInfiniteQueryOptions<{ options: Option[]; hasMore: boolean; offset: number }>;
  /** Object of parameters used for the cacheKey. Options are re-refetched when a value in the object changes  */
  watchParams?: Record<string, unknown>;
  /** Time to wait before searching with the input value typed into the component */
  debounceTimeout?: number;
  /** Options to prepend to the list (e.g., frequently used items). These will be filtered from loadOptions results to avoid duplicates. */
  prependOptions?: Option[];
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
  watchParams,
  debounceTimeout = 350,
  FieldProps,
  onInputChange,
  prependOptions = [],
  ...rest
}: AsyncAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const [inputValue, setInputValue] = useState('');
  const listboxRef = useRef<Element>(null);
  const setListboxRef = useCallback((node: Element) => {
    listboxRef.current = node;
  }, [])

  const handleInputPropsOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // Call passed in onChange if present
    if (FieldProps?.InputProps?.onChange) FieldProps.InputProps.onChange(event);
  };

  const debouncedInput = useDebounce(inputValue, debounceTimeout);

  const { isLoading, isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryKey, limit, debouncedInput, watchParams],
    queryFn: async ({ pageParam = 0 }) => loadOptions(pageParam, limit, debouncedInput),
    staleTime: 10000,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.offset + limit : undefined),
    ...queryOptions,
  });

  const options = data?.pages ? data.pages.map((page) => page.options).flat() : [];

  const finalOptions =
    prependOptions.length > 0
      ? [
          ...prependOptions,
          ...options.filter(
            (option) =>
              !prependOptions.some((prepended) =>
                rest.isOptionEqualToValue ? rest.isOptionEqualToValue(option, prepended) : option === prepended
              )
          ),
        ]
      : options;

  const handleOnInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === 'clear') {
      setInputValue(event.target.value);
    } else if (reason === 'blur') {
      setInputValue(value);
    }

    if (onInputChange) onInputChange(event, value, reason);
  };

  const handleAddingOptions = async (event: React.SyntheticEvent) => {
    const listboxNode = event.currentTarget;
    const difference = listboxNode.scrollHeight - (listboxNode.scrollTop + listboxNode.clientHeight);

    // Only fetch if we are near the bottom, not already fetching, and there are more results
    if (difference <= 5 && !isLoading && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }

  // trigger scroll event every time options added in case too many options filtered out to allow for scroll
  // allow onScroll to determine if next page should be fetched
  useEffect(() => {
    if (hasNextPage) {
      listboxRef.current?.dispatchEvent(new UIEvent('scroll'));
    }
  }, [data?.pages.length, hasNextPage]);

  return (
    <Autocomplete
      {...rest}
      onInputChange={handleOnInputChange}
      FieldProps={{
        ...FieldProps,
        InputProps: {
          ...FieldProps?.InputProps,
          onChange: handleInputPropsOnChange,
        },
      }}
      loading={isFetching}
      options={finalOptions}
      ListboxProps={{
        ...ListboxProps,
        ref: setListboxRef,
        onScroll: handleAddingOptions,
        onPointerEnter: handleAddingOptions,
      }}
    />
  );
};
