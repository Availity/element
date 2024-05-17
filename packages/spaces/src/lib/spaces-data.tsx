import { avWebQLApi } from '@availity/api-axios';
import {
  Space,
  NameValuePair,
  NormalizedSpace,
  NormalizedPairField,
  PairFields,
  FetchSpacesProps,
  FetchAllSpacesProps,
  SpacesContextType,
  SpacesReducerAction,
} from './spaces-types';

export const actions = {
  SPACES: (
    currentState: SpacesContextType,
    { spaces, spacesByConfig, spacesByPayer }: SpacesReducerAction
  ): SpacesContextType => ({
    previousSpacesMap: spaces,
    previousSpacesByConfigMap: spacesByConfig,
    previousSpacesByPayerMap: spacesByPayer,
    error: undefined,
    loading: false,
  }),
  ERROR: (state: SpacesContextType, { error }: SpacesReducerAction): SpacesContextType => ({
    ...state,
    loading: false,
    error,
  }),
  LOADING: (state: SpacesContextType, { loading }: SpacesReducerAction): SpacesContextType => ({
    ...state,
    loading: loading !== undefined ? loading : !state.loading,
  }),
};

export const spacesReducer = (state: SpacesContextType, action: SpacesReducerAction): SpacesContextType => {
  const { type } = action;
  return actions[type](state, action);
};

export const normalizeSpaces = (spaces: (Space | Space[] | undefined)[]): NormalizedSpace[] => {
  // if spaces coming in is array of an array of spaces objects,
  // then we matched by payerId and should unravel that first level of array
  let spacesToReduce = spaces;
  if (Array.isArray(spaces[0])) {
    spacesToReduce = spaces[0];
  }
  // Normalize space pairs ( [{ name: 'foo'', value: 'bar' }] => { foo: 'bar' } )
  const pairFields: PairFields = ['images', 'metadata', 'colors', 'icons', 'mapping'];
  return spacesToReduce.reduce((accum: NormalizedSpace[], spc: Space): NormalizedSpace[] => {
    if (!spc) return accum;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { images, metadata, colors, icons, mapping, ...rest } = spc;
    const normalizedSpace: NormalizedSpace = { ...rest };

    for (const field of pairFields) {
      if (spc[field] && Array.isArray(spc[field])) {
        normalizedSpace[field] = spc[field]?.reduce((_accum: NormalizedPairField, { name, value }: NameValuePair) => {
          _accum[name] = value;
          return _accum;
        }, {});
      }
    }

    accum.push(normalizedSpace);
    return accum;
  }, []);
};

export const fetchSpaces = async ({ query, clientId, variables }: FetchSpacesProps) => {
  // eslint-disable-next-line no-useless-catch
  const {
    data: {
      data: { configurationPagination },
    },
  } = await avWebQLApi.create(
    {
      query,
      variables: { ...variables },
    },
    { headers: { 'X-Client-ID': clientId } }
  );

  const {
    pageInfo: { currentPage, hasNextPage },
    items,
  } = configurationPagination;

  return {
    items,
    currentPage,
    hasNextPage,
  };
};

export const fetchAllSpaces = async ({
  query,
  clientId,
  variables,
  _spaces = [],
}: FetchAllSpacesProps): Promise<Space[]> => {
  const { items, currentPage, hasNextPage } = await fetchSpaces({ query, clientId, variables });

  _spaces.push(...items);

  if (hasNextPage) {
    const vars = {
      ...variables,
      page: currentPage + 1,
    };
    return fetchAllSpaces({ query, clientId, variables: vars, _spaces });
  }

  return _spaces;
};
