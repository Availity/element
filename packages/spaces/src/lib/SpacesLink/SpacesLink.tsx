import dayjs from 'dayjs';
import { Card, CardContent, CardHeader } from '@availity/mui-card';
import { Typography } from '@availity/mui-typography';
import { useSpacesContext } from '../Spaces';
import { useLink } from './useLink';
import { NavigateTopIcon } from '@availity/mui-icon';
import { useMemo, cloneElement } from 'react';
import { StatusChip, Chip } from '@availity/mui-chip';
import { CircularProgress } from '@availity/mui-progress';
import { Link } from '@availity/mui-link';
import { FavoriteHeart } from '@availity/mui-favorites';
import { Grid } from '@availity/mui-layout';
import { ListItem, ListItemText } from '@availity/mui-list';
import { SpacesLinkProps } from './spaces-link-types';

const getDisplayDate = (date: string | null | undefined) => dayjs(date).format('MM/DD/YYYY');

const getContainerTag = (propTag = 'div', linkStyle: string) => ({ card: Card, list: ListItem })[linkStyle] || propTag;

const getBodyTag = (propTag = 'div', linkStyle: string) => ({ card: CardContent, list: 'div' })[linkStyle] || propTag;

const getTitleTag = (propTag: string, linkStyle: string) =>
  propTag ||
  {
    card: CardHeader,
    list: ListGroupItemHeading,
  }[linkStyle] ||
  'div';

const getTextTag = (propTag = 'div', linkStyle: string) =>
  ({ card: Typography, list: ListItemText })[linkStyle] || propTag;

export const SpacesLink = ({
  spaceId,
  space: propSpace,
  className,
  children,
  favorite,
  icon,
  showName,
  showNew,
  showDate,
  stacked,
  body,
  description: showDescription,
  tag: Tag,
  bodyTag: BodyTag,
  titleTag: TitleTag,
  textTag: TextTag,
  titleClassName,
  linkStyle,
  loading: propsLoading,
  clientId: propsClientId,
  maxDescriptionLength, // TODO: remove and replace with text-truncate
  style,
  linkAttributes,
  role,
  analytics,
  customBadgeText,
  customBadgeColor,
  idPrefix,
  ...rest
}: SpacesLinkProps) => {
  const { loading } = useSpacesContext();
  const isLoading = loading || propsLoading;

  const [
    id,
    name,
    shortName,
    type,
    description,
    activeDate,
    isNew,
    icons = {},
    images = {},
    colors = {},
    link,
    configurationId,
    isGhosted,
    ...restLink
  ] = useLink(propSpace || spaceId, { clientId: propsClientId, linkAttributes });

  const showUrl = !isGhosted && link.url;

  const favoriteIcon = useMemo(
    () =>
      configurationId &&
      favorite && (
        <span className="d-table-cell align-middle">
          <FavoriteHeart id={`${idPrefix}${configurationId}`} name={name} onChange={(_, e) => e.stopPropagation()} />
        </span>
      ),
    [favorite, configurationId, name, idPrefix]
  );

  const dateInfo = useMemo(
    () =>
      (showNew || showDate) && (
        <div className={classNames({ 'text-center': stacked, 'media media-right': !stacked })}>
          {showNew && isNew && (
            <Chip
              className={classNames({ 'mr-2': showDate })}
              id={`${idPrefix}app-new-badge-${configurationId}`}
              label="New !"
            />
          )}
          {showDate && (
            <Typography id={`${idPrefix}app-date-badge-${configurationId}`} variant="caption" color="textSecondary">
              {getDisplayDate(activeDate)}
            </Typography>
          )}
        </div>
      ),
    [activeDate, isNew, showDate, showNew, stacked, configurationId, idPrefix]
  );

  const customBadgeDisplay = useMemo(
    () =>
      customBadgeText && (
        <div
          className={classNames({
            'text-center': stacked,
            'media media-right': !stacked,
            'mr-2': linkStyle !== 'card' && (showDate || (showNew && isNew)),
          })}
        >
          <StatusChip
            color={customBadgeColor || 'info'}
            id={`${idPrefix}app-custom-badge-${configurationId}-${customBadgeText}`}
            label={customBadgeText}
          />
        </div>
      ),
    [customBadgeColor, customBadgeText, showDate, showNew, stacked, linkStyle, isNew, idPrefix, configurationId]
  );

  if (isLoading) {
    return <CircularProgress id={`${idPrefix}app-${configurationId}-loading`} {...rest} />;
  }

  Tag = getContainerTag(Tag, linkStyle);
  BodyTag = getBodyTag(BodyTag, linkStyle);
  TitleTag = getTitleTag(TitleTag, linkStyle);
  TextTag = getTextTag(TextTag, linkStyle);

  const renderChildren = () =>
    isFunction(children)
      ? (() =>
          children({
            id,
            name,
            shortName,
            type,
            metadata,
            description,
            isNew,
            activeDate,
            icons,
            images,
            colors,
            ...analytics,
            ...restLink,
            ...props,
          }))()
      : cloneElement(children, {
          role: 'link',
          tabIndex: 0,
          style: { cursor: showUrl ? 'pointer' : 'not-allowed' },
          'aria-label': name,
          ...analytics,
          ...props,
        });
  return (
    <Tag
      title={name}
      className={className('spaces-hook-link', className, `spaces-${linkStyle}-link`, {
        'p-2': linkStyle === 'default',
      })}
      {...rest}
      style={{ ...style }}
      role={linkStyle === 'list' ? 'listitem' : role}
    >
      <BodyTag
        className={classNames('d-flex', `align-items-${!showDescription || stacked ? 'center' : 'start'}`, {
          'flex-column': stacked,
        })}
      >
        {!stacked && favoriteIcon}
        {icon && type?.toUpperCase() === 'FILE' ? (
          <Link target="_blank" href={restLink.url}>
            <NavigateTopIcon />
          </Link>
        ) : (
          <NavigateTopIcon />
        )}
        {children
          ? renderChildren()
          : body && (
              <Grid id={`${idPrefix}${type}-${configurationId}`}>
                <TitleTag
                  id={`${idPrefix}app-title-${configurationId}`}
                  className={classNames(
                    {
                      'mb-0': !customBadgeDisplay && (!showDescription || !description),
                      'pt-3': stacked,
                      'text-center': stacked,
                    },
                    titleClassName
                  )}
                  tabIndex={0}
                  style={{
                    cursor: showUrl ? 'pointer' : 'not-allowed',
                  }}
                  {...analytics}
                  {...props}
                  role={showUrl ? 'link' : role}
                  aria-label={name}
                  aria-describedby={showNew && isNew ? `${idPrefix}app-new-badge-${configurationId}` : undefined}
                >
                  {showName ? name : null}
                </TitleTag>
                {stacked && dateInfo}
                {showDescription && description && (
                  <TextTag
                    tag="div"
                    className={classNames('mt-1', { 'text-center': stacked })}
                    id={`${idPrefix}app-description-${configurationId}`}
                  >
                    {/* TODO: just rendering text, do we need markdown component? */}
                    <ReactMarkdown className="Card-text">
                      {maxDescription && description.length > maxDescriptionLength
                        ? truncate(description, { length: maxDescriptionLength, separator: ' ' })
                        : description}
                    </ReactMarkdown>
                  </TextTag>
                )}
                {linkStyle === 'card' && customBadgeDisplay}
              </Grid>
            )}
        {linkStyle !== 'card' && customBadgeDisplay}
        {!stacked && dateInfo}
      </BodyTag>
    </Tag>
  );
};
