import dayjs from 'dayjs';
import { Card, CardContent, CardHeader } from '@availity/mui-card';
import { Typography } from '@availity/mui-typography';
import { NavigateTopIcon, FileIcon } from '@availity/mui-icon';
import { useMemo, cloneElement } from 'react';
import { StatusChip, Chip } from '@availity/mui-chip';
import { CircularProgress } from '@availity/mui-progress';
import { Link } from '@availity/mui-link';
import { FavoriteHeart } from '@availity/mui-favorites';
import { Grid, Box } from '@availity/mui-layout';
import { ListItem, ListItemText } from '@availity/mui-list';
import ReactMarkdown from 'react-markdown';
import { useSpacesContext } from '../Spaces';
import { useLink } from './useLink';
import type { SpacesLinkWithSpace, SpacesLinkWithSpaceId, SpacesLinkVariants } from './spaces-link-types';
import { isFunction } from '../helpers';

const getDisplayDate = (date: string | null | undefined) => dayjs(date).format('MM/DD/YYYY');

const getContainerTag = (propTag: string | undefined, variant: SpacesLinkVariants) => {
  if (variant && variant !== 'default') return { card: Card, list: ListItem }[variant];
  return propTag || 'div';
};

const getBodyTag = (propTag: string | undefined, variant: SpacesLinkVariants) => {
  if (variant && variant !== 'default') return { card: CardContent, list: 'div' }[variant];
  return propTag || 'div';
};

const getTitleTag = (propTag: string | undefined, variant: SpacesLinkVariants) => {
  if (variant && variant !== 'default') return { card: CardHeader, list: Typography }[variant];
  return propTag || 'div';
};

const getTextTag = (propTag: string | undefined, variant: SpacesLinkVariants) => {
  if (variant && variant !== 'default') return { card: Typography, list: ListItemText }[variant];
  return propTag || 'div';
};

export const SpacesLink = ({
  spaceId,
  space: propSpace,
  className,
  children,
  favorite,
  icon,
  showName = true,
  showNew,
  showDate,
  stacked,
  body = true,
  description: showDescription,
  tag,
  bodyTag,
  titleTag,
  textTag,
  titleClassName,
  variant = 'default',
  loading: propsLoading,
  clientId: propsClientId,
  maxDescriptionWidth,
  style,
  linkAttributes,
  role,
  analytics,
  customBadgeText,
  customBadgeColor,
  idPrefix = '',
  ...rest
}: SpacesLinkWithSpace | SpacesLinkWithSpaceId) => {
  const { loading } = useSpacesContext();
  const isLoading = loading || propsLoading;

  const [linkSpace, props] = useLink(propSpace || spaceId, { clientId: propsClientId, linkAttributes });

  const showUrl = !linkSpace?.isGhosted && linkSpace?.link?.url;

  const favoriteIcon = useMemo(
    () =>
      linkSpace?.configurationId &&
      favorite && (
        <FavoriteHeart
          id={`${idPrefix}${linkSpace?.configurationId}`}
          name={linkSpace?.name}
          onChange={(_, e) => e.stopPropagation()}
        />
      ),
    [favorite, linkSpace?.configurationId, linkSpace?.name, idPrefix]
  );

  const dateInfo = useMemo(
    () =>
      (showNew || showDate) && (
        <Grid textAlign={stacked ? 'center' : 'inherit'}>
          {showNew && linkSpace?.isNew && (
            <Chip id={`${idPrefix}app-new-badge-${linkSpace?.configurationId}`} label="New!" />
          )}
          {showDate && (
            <Typography
              id={`${idPrefix}app-date-badge-${linkSpace?.configurationId}`}
              variant="caption"
              color="textSecondary"
            >
              {getDisplayDate(linkSpace?.activeDate)}
            </Typography>
          )}
        </Grid>
      ),
    [linkSpace?.activeDate, linkSpace?.isNew, showDate, showNew, stacked, linkSpace?.configurationId, idPrefix]
  );

  const customBadgeDisplay = useMemo(
    () =>
      customBadgeText && (
        <Box
          textAlign={stacked ? 'center' : 'inherit'}
          marginRight={variant !== 'card' && (showDate || (showNew && linkSpace?.isNew)) ? 2 : undefined}
        >
          <StatusChip
            color={customBadgeColor || 'info'}
            id={`${idPrefix}app-custom-badge-${linkSpace?.configurationId}-${customBadgeText}`}
            label={customBadgeText}
          />
        </Box>
      ),
    [
      customBadgeColor,
      customBadgeText,
      showDate,
      showNew,
      stacked,
      variant,
      linkSpace?.isNew,
      idPrefix,
      linkSpace?.configurationId,
    ]
  );

  if (isLoading) {
    return <CircularProgress id={`${idPrefix}app-${linkSpace?.configurationId}-loading`} {...rest} />;
  }

  const Tag = getContainerTag(tag, variant);
  const BodyTag = getBodyTag(bodyTag, variant);
  const TitleTag = getTitleTag(titleTag, variant);
  const TextTag = getTextTag(textTag, variant);

  const renderChildren = () => {
    if (children) {
      return isFunction(children)
        ? (() =>
            children({
              ...linkSpace,
              ...analytics,
              ...props,
            }))()
        : cloneElement(children, {
            role: 'link',
            tabIndex: 0,
            style: { cursor: showUrl ? 'pointer' : 'not-allowed' },
            'aria-label': linkSpace?.name,
            ...analytics,
            ...props,
          });
    }
  };
  return (
    <Tag
      title={linkSpace?.name}
      className={className}
      {...rest}
      style={{ ...style }}
      role={variant === 'list' ? 'listitem' : role}
    >
      <BodyTag>
        <Grid alignItems={!showDescription || stacked ? 'center' : 'start'} direction={stacked ? 'column' : 'row'}>
          {!stacked && favoriteIcon}
          {icon && linkSpace?.url && linkSpace?.type?.toUpperCase() === 'FILE' ? (
            <Link target="_blank" href={linkSpace?.url}>
              <FileIcon data-testid="icon" />
            </Link>
          ) : (
            <NavigateTopIcon data-testid="icon" />
          )}
          {children
            ? renderChildren()
            : body && (
                <Grid id={`${idPrefix}${linkSpace?.type}-${linkSpace?.configurationId}`}>
                  <Box
                    marginBottom={!customBadgeDisplay && (!showDescription || !linkSpace?.description) ? 0 : undefined}
                    paddingTop={stacked ? 3 : undefined}
                    textAlign={stacked ? 'center' : undefined}
                  >
                    <TitleTag
                      id={`${idPrefix}app-title-${linkSpace?.configurationId}`}
                      className={titleClassName}
                      tabIndex={0}
                      style={{
                        cursor: showUrl ? 'pointer' : 'not-allowed',
                      }}
                      {...analytics}
                      {...props}
                      role={showUrl ? 'link' : role}
                      aria-label={linkSpace?.name}
                      aria-describedby={
                        showNew && linkSpace?.isNew
                          ? `${idPrefix}app-new-badge-${linkSpace?.configurationId}`
                          : undefined
                      }
                      variant={variant === 'list' ? 'h5' : 'h6'}
                      title={showName ? linkSpace?.name : undefined}
                    >
                      {showName ? linkSpace?.name : undefined}
                    </TitleTag>
                  </Box>
                  {stacked && dateInfo}
                  {showDescription && linkSpace?.description && (
                    <TextTag
                      marginTop={1}
                      textAlign={stacked ? 'center' : undefined}
                      overflow="hidden"
                      whiteSpace={maxDescriptionWidth ? 'nowrap' : undefined}
                      width={maxDescriptionWidth}
                      textOverflow="ellipsis"
                      id={`${idPrefix}app-description-${linkSpace?.configurationId}`}
                    >
                      <ReactMarkdown className="Card-text">{linkSpace?.description}</ReactMarkdown>
                    </TextTag>
                  )}
                  {variant === 'card' && customBadgeDisplay}
                </Grid>
              )}
          {variant !== 'card' && customBadgeDisplay}
          {!stacked && dateInfo}
        </Grid>
      </BodyTag>
    </Tag>
  );
};
