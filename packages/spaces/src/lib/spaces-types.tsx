export type Link = {
  /** Contains a URL or URL Fragment that the hyperlink points to. */
  url: string;
  /** Specifies where to open the linked URL. */
  target: string;
};

export type NameValuePair = {
  /** The key of the of the data. */
  name: string;
  /** The value of the data. */
  value: string;
};

export type PairFields = ('images' | 'metadata' | 'colors' | 'icons' | 'mapping')[];

export type Space = {
  /** The name of the content or configuration. */
  name: string;
  /** The configuration type. */
  type: string;
  /** Globally unique ID associated with the configuration object. */
  id: string;
  /** The ID used to identify the configuration. */
  configurationId: string;
  /** A list of payerIds for the configuration or content. */
  payerIDs?: string[];
  /** The images associated with the configuration. */
  images?: NameValuePair[];
  /** Key-value data for a configuration. */
  metadata?: NameValuePair[];
  /** The feature box colors associated with the Payer Space. */
  colors?: NameValuePair[];
  /** Contains URL fragments that point to icons. */
  icons?: NameValuePair[];
  /** The key-value mapping pairs. */
  mapping?: NameValuePair[];
};

export type NormalizedPairField = { [key: string]: string };

export interface NormalizedSpace extends Omit<Space, 'images' | 'metadata' | 'colors' | 'icons' | 'mapping'> {
  /** The images associated with the configuration. */
  images?: NormalizedPairField;
  /** The feature box colors associated with the Payer Space. */
  colors?: NormalizedPairField;
  /** Contains URL fragments that point to icons. */
  icons?: NormalizedPairField;
  /** Key-value data for a configuration. */
  metadata?: NormalizedPairField;
  /** The key-value mapping pairs. */
  mapping?: NormalizedPairField;
  /** URL metadata for the configuration. */
  link?: {
    /** Contains a URL or URL Fragment that the hyperlink points to. */
    url: string;
    /** Specifies where to open the linked URL. */
    target: string;
  };
}

export type FetchSpacesProps = {
  /** The query sent to the avWebQL endpoint. */
  query: string;
  /** The Client ID obtained from APIConnect. Must be subscribed to the thanos API. */
  clientId: string;
  /** The variables sent to the avWebQL endpoint. */
  variables?: object;
  /** The page sent to the avWebQL endpoint. */
  page?: string;
};

export type FetchAllSpacesProps = {
  /** The query sent to the avWebQL endpoint. */
  query: string;
  /** The Client ID obtained from APIConnect. Must be subscribed to the thanos API. */
  clientId: string;
  /** The variables sent to the avWebQL endpoint. */
  variables?: object;
  /** Array of spaces to be passed into the Spaces provider. */
  _spaces?: Space[];
};

export type SpacesContextType = {
  /** Array of spaces to be passed into the Spaces provider. */
  spaces?: Map<string, Space>;
  /** Array of spaces from previous page load. */
  previousSpacesMap?: Map<string, Space>;
  /** Array of spaces organized by configurationId. */
  spacesByConfig?: Map<string, Space>;
  /** Array of spaces organized by configurationId from previous page load. */
  previousSpacesByConfigMap?: Map<string, Space>;
  /** Array of spaces organized by payerId. */
  spacesByPayer?: Map<string, Space[]>;
  /** Array of spaces organized by payerId from previous page load. */
  previousSpacesByPayerMap?: Map<string, Space[]>;
  /** Whether or not spaces are loading. */
  loading: boolean;
  /** Errors associated with fetching spaces. */
  error?: string;
  /** Items that live within the spaces component and can access SpacesContext. */
  children?: React.ReactNode;
};

export interface SpacesReducerAction extends SpacesContextType {
  /** Action to take on SpacesContext state. */
  type: 'SPACES' | 'ERROR' | 'LOADING';
}

export type ChildrenProps = {
  /** Array of spaces to be passed into the Spaces provider. */
  spaces: NormalizedSpace[];
};

export type SpacesProps = {
  /** Override the default thanos query. */
  query?: string;
  /** Override the default variables used in the thanos query. Default: { types: [PAYERSPACE] }.
   * If the spaces provider should contain configurations of a type other than PAYERSPACE, you must override this prop */
  variables?: object;
  /** The Client ID obtained from APIConnect. Must be subscribed to the thanos API. */
  clientId: string;
  /** Children can be a react child or render prop. */
  children?: React.ReactNode;
  /** Array of payerIds the Spaces provider should fetch the spaces for.
   * Any payerIds already included in spaces will not be fetched again.
   * Note: If a payerId is associated with more than one payer space, the order in which they are returned should not be relied upon.
   * If a specific payer space is required, you'll need to filter the list that is returned. */
  payerIds?: string[];
  /** Array of spaceIds the Spaces provider should fetch the spaces for.
   * Any spaceIds already included in spaces will not be fetched again. */
  spaceIds?: string[];
  /** Array of spaces to be passed into the Spaces provider.
   * Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again. */
  spaces?: Space[];
};
