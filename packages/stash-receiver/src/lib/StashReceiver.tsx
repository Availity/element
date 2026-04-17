import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export type StashData = Record<string, unknown>;

export type StashContextType = {
  /** The data returned from the Stash API. */
  data: StashData | undefined;
  /** Whether the Stash API call is in progress. */
  loading: boolean;
  /** Error message if the Stash API call failed. */
  error: string | undefined;
};

export type StashReceiverProps = {
  /** The session ID used to fetch data from the Stash API. */
  sessionId: string;
  /** Children rendered inside the provider. */
  children?: React.ReactNode;
};

export const STASH_API_URL = '/cloud/web/appl/stash/v1/session/data';

export const INITIAL_STATE: StashContextType = {
  data: undefined,
  loading: true,
  error: undefined,
};

export const StashContext = createContext<StashContextType>(INITIAL_STATE);

export const useStashContext = () => useContext(StashContext);

export const StashReceiver = ({ sessionId, children }: StashReceiverProps): React.JSX.Element => {
  const [data, setData] = useState<StashContextType['data']>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    axios
      .get(`${STASH_API_URL}/${sessionId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setError('Error fetching stash data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sessionId]);

  return <StashContext.Provider value={{ data, loading, error }}>{children}</StashContext.Provider>;
};
