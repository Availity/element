import { avWebQLApi } from '@availity/api-axios';
import { Space, FetchSpacesProps, FetchAllSpacesProps, SpacesContextType, SpacesReducerAction } from './spaces-types';

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
