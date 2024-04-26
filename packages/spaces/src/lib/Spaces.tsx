import { createContext, useContext, useReducer, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { isFunction } from './helpers';
import { normalizeSpaces, spacesReducer, fetchAllSpaces } from './spaces-data';
import ModalProvider, { useModal } from './modals/ModalProvider';
import { Space, SpacesProps } from './spaces-types';

export const SpacesContext = createContext();

export const useSpacesContext = () => useContext(SpacesContext);

export const INITIAL_STATE = {
  spaces: [],
  loading: true,
  error: null,
};

export const Spaces = ({
  query,
  variables,
  clientId,
  children,
  payerIds,
  spaceIds,
  spaces: spacesFromProps,
}: SpacesProps): JSX.Element => {
  const [{ previousSpacesMap, previousSpacesByConfigMap, previousSpacesByPayerMap, loading, error }, dispatch] =
    useReducer(spacesReducer, INITIAL_STATE);

  const spacesMap = new Map(previousSpacesMap);
  const configIdsMap: Map<string, Space[]> = new Map(previousSpacesByConfigMap);
  const payerIdsMap: Map<string, Space[]> = new Map(previousSpacesByPayerMap);
  const spaceIdsToQuery: Set<string> = new Set();
  const payerIdsToQuery: Set<string> = new Set();

  const populateMaps = (idsToQuery: Set<string>) => {
    const vars = { ...variables, ids: [...idsToQuery.keys()] };
    const { isSuccess, data: spacesBySpaceIds } = useQuery({
      queryKey: [],
      queryFn: () => fetchAllSpaces({ query, clientId, variables: vars }),
    });

    useEffect(() => {
      if (isSuccess) {
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
    }, [isSuccess]);
  };

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

  useEffect(() => {
    try {
      dispatch({ type: 'LOADING', loading: true });

      if (spaceIdsToQuery.size === 0 && payerIdsToQuery.size === 0) {
        dispatch({
          type: 'LOADING',
          loading: false,
        });
        return;
      }

      if (spaceIdsToQuery.size > 0) {
        populateMaps(spaceIdsToQuery);
      }
      if (payerIdsToQuery.size > 0) {
        populateMaps(payerIdsToQuery);
      }
      dispatch({ type: 'SPACES', spaces: spacesMap, spacesByConfig: configIdsMap, spacesByPayer: payerIdsMap });
    } catch (error_) {
      dispatch({
        type: 'ERROR',
        error: error_.message,
      });
    }
  }, [payerIds, spaceIds]);

  const spacesChildren = isFunction(children)
    ? (() => children({ spaces: normalizeSpaces([...spacesMap.values()]) }))()
    : children;

  const hasParentModalProvider = useModal() !== undefined;
  return (
    <SpacesContext.Provider
      value={{ spaces: spacesMap, spacesByConfig: configIdsMap, spacesByPayer: payerIdsMap, loading, error }}
    >
      {!hasParentModalProvider ? <ModalProvider>{spacesChildren}</ModalProvider> : spacesChildren}
    </SpacesContext.Provider>
  );
};

export const useSpaces = (...ids: string[]) => {
  const { spaces, spacesByConfig, spacesByPayer } = useContext(SpacesContext) || {};

  const idsIsEmpty = !ids || ids.length === 0;
  const callerIsExpectingFirstSpace = ids?.length === 1 && ids[0] === undefined;
  const shouldReturnAllSpaces = idsIsEmpty || callerIsExpectingFirstSpace;

  if (shouldReturnAllSpaces) {
    console.warn(`You did not pass in an ID to find a space, returning all spaces.`);
    return normalizeSpaces([...spaces.values()]);
  }

  const matchedSpaces = ids.map((id) => spaces?.get(id) || spacesByConfig?.get(id) || spacesByPayer?.get(id));
  const normalized = normalizeSpaces(matchedSpaces);

  return normalized;
};
