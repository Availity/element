import { ReactNode } from 'react';

export type Link = {
  url: string;
  target: string;
};

export type Space = { id: string; configurationId: string; payerIDs: string[] };

export type SpacesProps = {
  query?: string;
  variables?: object;
  clientId: string;
  children?: ReactNode | '() => ReactNode';
  payerIds?: string[];
  spaceIds?: string[];
  spaces?: Space[];
};
