import React from 'react';
import type { ReactNode } from 'react';
import { BlockUi } from '@availity/mui-block-ui';

import { useAuthorize, UseAuthorizeProps } from '@availity/authorize';

export type AuthorizeProps = {
  /** The content that renders when the user does have the permissions required. */
  children?: ReactNode;
  /** When true, BlockUi is used when loading the permissions. When a node, that node is rendered instead of BlockUi when loading the permissions. When false, nothing is rendered when loading the permissions. Default: true. */
  loader?: boolean | ReactNode;
  /** Negate the authorization. If the user does have the permissions specified, they are considered "unauthorized" (shown the unauthorized prop content). If the user does not have the permissions specified, they are considered "authorized" (shown the children prop content) */
  negate?: boolean;
  /** The content that renders when the user does not have the permissions required. */
  unauthorized?: ReactNode;
// } & Pick<UseAuthorizeProps, 'permissions' | 'queryOptions'> & UseAuthorizeProps['parameters'];
} & UseAuthorizeProps;

/** Component for showing content based on the user's permissions. Wrap this component around content you only want specific users to see.
 *
 * The internal `useAuthorize` hook utilizes [react-query](https://tanstack.com/query/v4/docs/framework/react/overview) to handle data fetching.
 * This means you must add a [QueryClientProvider](https://tanstack.com/query/v4/docs/framework/react/reference/QueryClientProvider)
 * to your app if you do not already have one.
 *
 * The default setup should cover most use-cases. However, there are 2 query options we recommend looking into
 * in order to determine what is correct for your app. These settings are `refetchOnWindowFocus` and
 * `staleTime`. The first option sets whether the to refetch the query when the window is focused, and
 * the other is the default marker for how long the query is valid.
 */
export const Authorize = ({
  loader = true,
  negate = false,
  children = null,
  unauthorized = null,
  permissions,
  parameters = {},
  queryOptions
}: AuthorizeProps): React.JSX.Element | null => {
  const { authorized, isLoading } = useAuthorize(permissions, parameters, queryOptions);

  if (isLoading) {
    if (loader) return loader === true ? <BlockUi blocking /> : <>{loader}</>;
    return null;
  }

  // show children when authorized or negate is exclusively true
  if ((authorized || negate) && !(authorized && negate)) {
    return <>{children}</>;
  }

  return <>{unauthorized}</>;
};
