import { avWebQLApi } from '@availity/api-axios';
import { Space } from './spaces-types';

export const spacesReducer = (state, action) => actions[action.type](state, action);

export const normalizeSpaces = (spaces: Space[]) => {
  // if spaces coming in is array of an array of spaces objects,
  // then we matched by payerId and should unravel that first level of array
  let spacesToReduce = spaces;
  if (Array.isArray(spaces[0])) {
    spacesToReduce = spaces[0];
  }
  // Normalize space pairs ([{name: 'foo', value: 'bar'}] => { foo: 'bar' })
  const pairFields = ['images', 'metadata', 'colors', 'icons', 'mapping'];
  return spacesToReduce.reduce((acc, spc) => {
    if (!spc) return acc;
    for (const field of pairFields) {
      if (spc[field] && Array.isArray(spc[field])) {
        spc[field] = spc[field].reduce((_acc, { name, value }) => {
          _acc[name] = value;
          return _acc;
        }, {});
      }
    }
    acc.push(spc);
    return acc;
  }, []);
};

export const fetchSpaces = async ({ query, clientId, variables, page }) => {
  if (!clientId) throw new Error('clientId is required.');

  const {
    data: {
      data: { configurationPagination },
    },
  } = await avWebQLApi.create(
    {
      query,
      variables: { ...variables, page },
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

export const fetchAllSpaces = async ({ query, clientId, variables, _spaces = [] }) => {
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
