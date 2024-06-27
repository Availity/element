import { ChipProps, StatusChipProps } from '@availity/mui-chip';
import { Space } from '../spaces-types';

export type SpacesLinkProps = {
  /** If no spaceId is provided, the first space in the spaces array is used.
   * Note: This is only to be used when the Spaces provider should only ever contain a single space.
   */
  spaceId?: string;
  /** Use to directly pass a space to the component rather than have it fetched from the spaces API.
   * This component does not have to be a child of SpacesProvider.
   * Note: If you are wanting to take advantage of the sso links you will additionally need to pass the clientId in.
   */
  space?: Space;
  /** Children can be a react child or render prop. */
  children?: React.ReactNode | JSX.Element;
  /** Tag to overwrite the root component rendered. */
  tag?: string;
  /** Tag to overwrite the body component that renders the title, description and data values.
   * It defaults to CardBody or div depending on the value of the linkStyle prop.
   */
  bodyTag?: string;
  /** Tag to overwrite the title component. If linkStyle prop is set to "card", defaults to CardTitle.
   * If linkStyle is set to "list", defaults to ListItemHeading. Overwise, defaults to div.
   */
  titleTag?: string;
  /** Tag to overwrite the text component. If linkStyle prop is set to "card", defaults to Card Text.
   * If linkStyle is set to "list", defaults to ListItemText. Otherwise, defaults to div.
   */
  textTag?: string;
  titleClassName?: string;
  /** When true, utilizes the Card component for styling. */
  card?: boolean;
  /** When true, renders an @availity/mui-icon next to the title if present on the Space. */
  icon?: boolean;
  /** When true, renders the Spaces description beneath the title. */
  description?: boolean;
  /** When passed in, provides predefined styles for the component.
   * @default 'default'
   */
  linkStyle?: 'card' | 'list' | 'default';
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
  maxDescriptionLength?: number;
  /** Additional attributes you may want to tack onto the native-form when submitting a SAML sso.
   * i.e. spaceId or sourceApplicationId
   */
  linkAttributes?: object;
  /** Allows the role of the root component to be overwritten.
   * If linkStyle prop is set to "list", defaults to "listitem".
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
};
