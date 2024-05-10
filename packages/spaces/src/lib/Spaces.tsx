import { createContext, useContext, useReducer, useEffect } from 'react';
import { useQueries } from '@tanstack/react-query';
import { normalizeSpaces, spacesReducer, fetchAllSpaces } from './spaces-data';
import { Space, SpacesProps, SpacesContextType } from './spaces-types';
import configurationFindMany from './configurationFindMany';

export const INITIAL_STATE = {
  loading: true,
};

export const SpacesContext = createContext<SpacesContextType>(INITIAL_STATE);

export const useSpacesContext = () => useContext(SpacesContext);

export const Spaces = ({
  query = configurationFindMany,
  variables = { types: ['PAYERSPACE'] },
  clientId,
  children,
  payerIds,
  spaceIds,
  spaces: spacesFromProps,
}: SpacesProps): JSX.Element => {
  const [{ previousSpacesMap, previousSpacesByConfigMap, previousSpacesByPayerMap, loading, error }, dispatch] =
    useReducer(spacesReducer, INITIAL_STATE);

  const spacesMap: Map<string, Space> = new Map(previousSpacesMap);
  const configIdsMap: Map<string, Space> = new Map(previousSpacesByConfigMap);
  const payerIdsMap: Map<string, Space[]> = new Map(previousSpacesByPayerMap);
  const spaceIdsToQuery: Set<string> = new Set();
  const payerIdsToQuery: Set<string> = new Set();

  if (spacesFromProps && spacesFromProps.length > 0) {
    for (const space of spacesFromProps) {
      if (space.id && !spacesMap.has(space.id)) {
        spacesMap.set(space.id, space);
      }

      if (space.configurationId && !configIdsMap.has(space.configurationId)) {
        configIdsMap.set(space.configurationId, space);
      }

      if (space.payerIDs) {
        for (const pId of space.payerIDs) {
          const currentSpacesForPayerId = payerIdsMap.get(pId);
          if (currentSpacesForPayerId) {
            payerIdsMap.set(pId, [...currentSpacesForPayerId, space]);
          } else {
            payerIdsMap.set(pId, [space]);
          }
        }
      }
    }
  }

  if (spaceIds && spaceIds.length > 0) {
    for (const id of spaceIds) {
      if (!(spacesMap.has(id) || configIdsMap.has(id))) {
        spaceIdsToQuery.add(id);
      }
    }
  }

  if (payerIds && payerIds.length > 0) {
    for (const pid of payerIds) {
      if (!payerIdsMap.has(pid)) {
        payerIdsToQuery.add(pid);
      }
    }
  }

  const spaceIdVars = { ...variables, ids: [...spaceIdsToQuery.keys()] };

  const payerIdVars = { ...variables, payerIds: [...payerIdsToQuery.keys()] };

  const [
    { data: spacesBySpaceIds, isLoading: isLoadingBySpaceIds, error: errorBySpaceIds },
    { data: spacesByPayerIds, isLoading: isLoadingByPayerIds, error: errorByPayerIds },
  ] = useQueries({
    queries: [
      {
        queryKey: ['id', spaceIdVars],
        queryFn: () => fetchAllSpaces({ query, clientId, variables: spaceIdVars }),
        enabled: spaceIdsToQuery.size > 0,
      },
      {
        queryKey: ['id', payerIdVars],
        queryFn: () => fetchAllSpaces({ query, clientId, variables: payerIdVars }),
        enabled: payerIdsToQuery.size > 0,
      },
    ],
  });

  if (errorByPayerIds || errorBySpaceIds) {
    dispatch({
      type: 'ERROR',
      error: errorByPayerIds?.message || errorBySpaceIds?.message,
      loading: false,
    });
  }

  useEffect(() => {
    dispatch({
      type: 'LOADING',
      loading: true,
    });
    if (spaceIdsToQuery.size === 0 && payerIdsToQuery.size === 0) {
      dispatch({
        type: 'LOADING',
        loading: false,
      });
      return;
    }
    if (spacesBySpaceIds) {
      for (const space of spacesBySpaceIds) {
        if (!spacesMap.has(space.id)) {
          spacesMap.set(space.id, space);
        }

        if (!configIdsMap.has(space.configurationId)) {
          configIdsMap.set(space.configurationId, space);
        }

        if (space.payerIDs) {
          for (const pId of space.payerIDs) {
            const currentSpacesForPayerId = payerIdsMap.get(pId);
            if (currentSpacesForPayerId) {
              payerIdsMap.set(pId, [...currentSpacesForPayerId, space]);
            } else {
              payerIdsMap.set(pId, [space]);
            }
          }
        }
      }
    }
    if (payerIdsToQuery.size > 0) {
      if (spacesByPayerIds) {
        for (const space of spacesByPayerIds) {
          if (!spacesMap.has(space.id)) {
            spacesMap.set(space.id, space);
          }

          if (!configIdsMap.has(space.configurationId)) {
            configIdsMap.set(space.configurationId, space);
          }

          if (space.payerIDs) {
            for (const pId of space.payerIDs) {
              const currentSpacesForPayerId = payerIdsMap.get(pId);
              if (currentSpacesForPayerId) {
                payerIdsMap.set(pId, [...currentSpacesForPayerId, space]);
              } else {
                payerIdsMap.set(pId, [space]);
              }
            }
          }
        }
      }
    }
    dispatch({
      type: 'SPACES',
      spaces: spacesMap,
      spacesByConfig: configIdsMap,
      spacesByPayer: payerIdsMap,
      loading: false,
    });
  }, [spacesBySpaceIds, spacesByPayerIds, payerIds, spaceIds]);

  // const hasParentModalProvider = useModal() !== undefined;
  return (
    <SpacesContext.Provider
      children={children}
      value={{
        spaces: spacesMap,
        spacesByConfig: configIdsMap,
        spacesByPayer: payerIdsMap,
        loading,
        error,
      }}
    />
  );
};

export const useSpaces = (...ids: string[]) => {
  const { spaces, spacesByConfig, spacesByPayer } = useContext(SpacesContext);

  const idsIsEmpty = !ids || ids.length === 0;
  const callerIsExpectingFirstSpace = ids?.length === 1 && ids[0] === undefined;
  const shouldReturnAllSpaces = idsIsEmpty || callerIsExpectingFirstSpace;

  if (shouldReturnAllSpaces) {
    console.warn(`You did not pass in an ID to find a space, returning all spaces.`);
    return spaces && normalizeSpaces([...spaces.values()]);
  }

  const matchedSpaces = ids.map((id) => spaces?.get(id) || spacesByConfig?.get(id) || spacesByPayer?.get(id));
  const normalized = normalizeSpaces(matchedSpaces);

  return normalized;
};
