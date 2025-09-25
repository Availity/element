import { createContext, useContext, useReducer, useEffect } from 'react';
import { useQueries } from '@tanstack/react-query';
import { spacesReducer, fetchAllSpaces } from './spaces-data';
import configurationFindMany from './configurationFindMany';
import { ModalProvider } from './modals/ModalProvider';
import type { Space, SpacesProps, SpacesContextType, UseSpaces } from './spaces-types';
import { isReactNodeFunction } from './helpers';

export const INITIAL_STATE = {
  loading: true,
};

export const SpacesContext = createContext<SpacesContextType>(INITIAL_STATE);

export const useSpacesContext = () => useContext(SpacesContext);

export const Spaces = ({
  query = configurationFindMany,
  variables = { types: ['PAYERSPACE'] },
  operationName,
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
      if (id && typeof id === 'string' && id.trim() && !(spacesMap.has(id) || configIdsMap.has(id))) {
        spaceIdsToQuery.add(id);
      }
    }
  }

  if (payerIds && payerIds.length > 0) {
    for (const pid of payerIds) {
      if (pid && typeof pid === 'string' && pid.trim() && !payerIdsMap.has(pid)) {
        payerIdsToQuery.add(pid);
      }
    }
  }

  const spaceIdVars = { ...variables, ids: [...spaceIdsToQuery.keys()] };

  const payerIdVars = { ...variables, payerIDs: [...payerIdsToQuery.keys()] };

  const [
    { data: spacesBySpaceIds, isFetching: isLoadingBySpaceIds, isError: isErrorBySpaceIds },
    { data: spacesByPayerIds, isFetching: isLoadingByPayerIds, isError: isErrorByPayerIds },
  ] = useQueries({
    queries: [
      {
        queryKey: ['id', spaceIdVars],
        queryFn: () => fetchAllSpaces({ query, clientId, variables: spaceIdVars, operationName }),
        enabled: spaceIdsToQuery.size > 0,
      },
      {
        queryKey: ['id', payerIdVars],
        queryFn: () => fetchAllSpaces({ query, clientId, variables: payerIdVars, operationName }),
        enabled: payerIdsToQuery.size > 0,
      },
    ],
  });

  useEffect(() => {
    if (isErrorByPayerIds || isErrorBySpaceIds) {
      dispatch({
        type: 'ERROR',
        error: 'Error fetching spaces.',
        loading: false,
      });
    }
  }, [isErrorByPayerIds, isErrorBySpaceIds]);

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

  const spacesChildren = () => {
    if (children) {
      return isReactNodeFunction(children)
        ? (() => children({ spaces: [spacesMap.values()], loading, error }))()
        : children;
    }
  };

  return (
    <SpacesContext.Provider
      value={{
        spaces: spacesMap,
        spacesByConfig: configIdsMap,
        spacesByPayer: payerIdsMap,
        loading: loading || isLoadingByPayerIds || isLoadingBySpaceIds,
        error,
      }}
    >
      <ModalProvider>{spacesChildren()}</ModalProvider>
    </SpacesContext.Provider>
  );
};

export const useSpaces: UseSpaces = (...ids) => {
  const { spaces, spacesByConfig, spacesByPayer } = useSpacesContext();

  const idsIsEmpty = !ids || ids.length === 0;
  const callerIsExpectingFirstSpace = ids?.length === 1 && ids[0] === undefined;
  const shouldReturnAllSpaces = idsIsEmpty || callerIsExpectingFirstSpace;

  if (shouldReturnAllSpaces) {
    console.warn(`You did not pass in an ID to find a space, returning all spaces.`);
    return spaces && [...spaces.values()];
  }

  return ids.reduce((acc: (Space)[], id) => {
    const matchedSpace = spaces?.get(id) || spacesByConfig?.get(id);

    if (matchedSpace) {
      acc.push(matchedSpace);
      return acc;
    }

    const matchedSpacesByPayer = spacesByPayer?.get(id);

    if (matchedSpacesByPayer) {
      acc.push(...matchedSpacesByPayer);
      return acc;
    }
  }, []);
};
