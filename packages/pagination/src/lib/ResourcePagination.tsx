import { useQuery } from '@tanstack/react-query';

type Resource<TData> = {
  postGet: (
    request: { limit: number; offset: number } & Record<string, unknown>,
    config: unknown
  ) => Promise<{ data: TData & { totalCount: number } }>;
  getResult: string | ((result: TData) => unknown[]);
  addParams: (data: Record<string, unknown>, config: Record<string, unknown>) => unknown;
};

export type LoadPageProps<TData> = {
  page: number;
  /** When a function, the function is called with the response body from the API call and is expected to return an array containing the list of items for the page. When a string, the string is expected to be a simple key used to get the value from the response. ("simple" means dot notation is not supported for grabbing values from nested objects. If your result is deeply nested, provide a function) */
  getResult: string | ((result: TData) => unknown[]);
  /** If array, defaults `totalCount` to the length of the array, and page values are sliced from the Array. If a function, it is called with the current page as an argument and expects an array of items to be returned. */
  itemsPerPage?: number;
  /** Object use to create querystring parameters in the request. */
  parameters?: { params?: Record<string, unknown> } & Record<string, unknown>;
  /** Availity API resource (see [@availity/api-axios](https://github.com/Availity/sdk-js/tree/master/packages/api-axios)).  */
  resource: Resource<TData>;
};

const loadPage = async <TData,>({
  page,
  itemsPerPage = 10,
  parameters = {},
  getResult,
  resource,
}: LoadPageProps<TData>): Promise<{ items: TData[]; totalCount: number }> => {
  const data = {
    limit: itemsPerPage,
    offset: (page - 1) * itemsPerPage,
    ...parameters.params,
  };

  const config = resource.addParams(data, parameters);

  const resp = await resource.postGet(data, config);

  const useGetResult = getResult || resource.getResult;

  const items =
    (typeof useGetResult === 'function'
      ? useGetResult.call(resource, resp.data)
      : (resp.data as Record<string, unknown>)[useGetResult]) || resp.data;

  if (!Array.isArray(items)) {
    throw new TypeError(
      `Expected data to be an array but got \`${typeof items}\`. Use the \`getResult\` prop to specify how to get the data from the API response.`
    );
  }

  return {
    items,
    totalCount: resp.data.totalCount,
  };
};

/** @requires `@tanstack/react-query` peer dependency */
export const useResourcePagination = <TData,>({
  page,
  itemsPerPage,
  parameters,
  getResult,
  resource,
}: LoadPageProps<TData>) =>
  useQuery(['resource', page], () => loadPage({ page, itemsPerPage, parameters, getResult, resource }));
