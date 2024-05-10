export type Link = {
  url: string;
  target: string;
};

export type NameValuePair = {
  name: string;
  value: string;
};

export type PairFields = ('images' | 'metadata' | 'colors' | 'icons' | 'mapping')[];

export type Space = {
  name: string;
  type: string;
  id: string;
  configurationId: string;
  payerIDs?: string[];
  images?: NameValuePair[];
  metadata?: NameValuePair[];
  colors?: NameValuePair[];
  icons?: NameValuePair[];
  mapping?: NameValuePair[];
};

export type NormalizedPairField = { [key: string]: string };

export interface NormalizedSpace extends Omit<Space, 'images' | 'metadata' | 'colors' | 'icons' | 'mapping'> {
  images?: NormalizedPairField;
  colors?: NormalizedPairField;
  icons?: NormalizedPairField;
  metadata?: NormalizedPairField;
  mapping?: NormalizedPairField;
  link?: {
    url: string;
    target: string;
  };
}

export type FetchSpacesProps = {
  query: string;
  clientId: string;
  variables?: object;
  page?: string;
};

export type FetchAllSpacesProps = {
  query: string;
  clientId: string;
  variables?: object;
  _spaces?: Space[];
};

export type SpacesContextType = {
  spaces?: Map<string, Space>;
  previousSpacesMap?: Map<string, Space>;
  spacesByConfig?: Map<string, Space>;
  previousSpacesByConfigMap?: Map<string, Space>;
  spacesByPayer?: Map<string, Space[]>;
  previousSpacesByPayerMap?: Map<string, Space[]>;
  loading: boolean;
  error?: string;
  children?: React.ReactNode;
};

export interface SpacesReducerAction extends SpacesContextType {
  type: 'SPACES' | 'ERROR' | 'LOADING';
}

export type ChildrenProps = {
  spaces: NormalizedSpace[];
};

export type SpacesProps = {
  query?: string;
  variables?: object;
  clientId: string;
  children?: React.ReactNode;
  payerIds?: string[];
  spaceIds?: string[];
  spaces?: Space[];
};
