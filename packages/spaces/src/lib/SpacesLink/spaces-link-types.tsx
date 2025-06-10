import type { StatusChipProps } from '@availity/mui-chip';
import type { Space } from '../spaces-types';
import { ElementType } from 'react';
import { SvgIconProps } from '@mui/material';

export type SpacesLinkVariants = 'card' | 'list' | 'default' | undefined;

export type SpacesLinkWithSpace = {
  /** If no spaceId is provided, the first space in the spaces array is used.
   * Note: This is only to be used when the Spaces provider should only ever contain a single space.
   */
  spaceId?: string;
  /** Use to directly pass a space to the component rather than have it fetched from the spaces API.
   * This component does not have to be a child of SpacesProvider.
   * Note: If you are wanting to take advantage of the sso links you will additionally need to pass the clientId in.
   */
  space: Space;
} & SpacesLinkProps;

export type SpacesLinkWithSpaceId = {
  /** If no spaceId is provided, the first space in the spaces array is used.
   * Note: This is only to be used when the Spaces provider should only ever contain a single space.
   */
  spaceId: string;
  /** Use to directly pass a space to the component rather than have it fetched from the spaces API.
   * This component does not have to be a child of SpacesProvider.
   * Note: If you are wanting to take advantage of the sso links you will additionally need to pass the clientId in.
   */
  space?: Space;
} & SpacesLinkProps;

export type SpacesLinkProps = {
  /** Children can be a react child or render prop. */
  children?: JSX.Element | ((props: any | undefined) => JSX.Element);
  /** Tag to overwrite the root component rendered. */
  tag?: ElementType<any, keyof JSX.IntrinsicElements>;
  /** Tag to overwrite the body component that renders the title, description and data values.
   * It defaults to CardBody or div depending on the value of the variant prop.
   */
  bodyTag?: ElementType<any, keyof JSX.IntrinsicElements>;
  /** Tag to overwrite the title component. If variant prop is set to "card", defaults to CardTitle.
   * If variant is set to "list", defaults to ListItemHeading. Overwise, defaults to div.
   */
  titleTag?: ElementType<any, keyof JSX.IntrinsicElements>;
  /** Tag to overwrite the text component. If variant prop is set to "card", defaults to Card Text.
   * If variant is set to "list", defaults to ListItemText. Otherwise, defaults to div.
   */
  textTag?: ElementType<any, keyof JSX.IntrinsicElements>;
  titleClassName?: string;
  /** When true, utilizes the Card component for styling. */
  card?: boolean;
  /** When true, renders an @availity/mui-icon next to the title if present on the Space. */
  icon?: (props: SvgIconProps) => JSX.Element;
  /** When true, renders the Spaces description beneath the title. */
  description?: boolean;
  /** When passed in, provides predefined styles for the component.
   * @default 'default'
   */
  variant?: SpacesLinkVariants;
  /** When true, renders the FavoriteHeart component to the left of the Component.
   * Note, this does require you to have wrapped your component somewhere in the Favorites Provider.
   * This also requires the peerDependency @tanstack/react-query.
   */
  favorite?: boolean;
  /** When true, renders the tyitle, and allow for the description and date info to be added on.
   * @default true
   */
  body?: boolean;
  /** When true, renders the activeDate of the space. */
  showDate?: boolean;
  /** When true, renders the name of the space.
   * @default true
   */
  showName?: boolean;
  /** When true, renders a "New!" badge if the activeDate is less than 30 days old. */
  showNew?: boolean;
  /** When true, renders the component vertically. */
  stacked?: boolean;
  /** Optionally pass in your own landing state for the component if you are managing the state yourself. */
  loading?: boolean;
  /** Required when space is not provided, or space is provided and space contains an sso link. */
  clientId?: string;
  style?: object;
  className?: string;
  /** Allows the description length to be truncated. */
  maxDescriptionWidth?: string;
  /** Additional attributes you may want to tack onto the native-form when submitting a SAML sso.
   * i.e. spaceId or sourceApplicationId
   */
  linkAttributes?: object;
  /** Allows the role of the root component to be overwritten.
   * If variant prop is set to "list", defaults to "listitem".
   */
  role?: string;
  /** When Analytics props are passed inside the analytics props, they will be passed down to the click item.
   * For more information on Analytics props see: Autotrack Logged Events
   */
  analytics?: object;
  customBadgeText?: string;
  customBadgeColor?: StatusChipProps['color'];
  /** prefix for ids to prevent duplicates when the same config link is displayed on the page more than once
   * @default ''
   */
  idPrefix?: string;
  [key: string]: any;
};

export type MediaProps = {
  role: string;
  onClick?: (event: React.MouseEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
};

export type UseLink = {
  (
    spaceId?: Space | string,
    options?: { clientId?: string; linkAttributes?: Record<string, any> }
  ): [Space | undefined, MediaProps | undefined];
};

export type OpenLink = {
  (
    space?: Space,
    params?: {
      akaname?: string;
      payerSpaceId?: string;
    }
  ): Promise<void>;
};

export type OpenLinkWithSso = {
  (
    space: Space,
    params: {
      akaname?: string;
      clientId: string;
      payerSpaceId: string;
      ssoParams: Record<string, string>;
    }
  ): Promise<boolean>;
};
