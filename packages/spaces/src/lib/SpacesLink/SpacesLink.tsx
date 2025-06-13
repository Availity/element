import { ElementType } from 'react';
import dayjs from 'dayjs';
import { Card, CardContent } from '@availity/mui-card';
import { Typography } from '@availity/mui-typography';
import { useMemo, cloneElement } from 'react';
import { StatusChip } from '@availity/mui-chip';
import { CircularProgress } from '@availity/mui-progress';
import Link from '@mui/material/Link';
import { FavoriteHeart } from '@availity/mui-favorites';
import { Grid, Box } from '@availity/mui-layout';
import MuiBox from '@mui/material/Box';
import { ListItem, ListItemText } from '@availity/mui-list';
import ReactMarkdown from 'react-markdown';
import { styled } from '@mui/material/styles';
import { useSpacesContext } from '../Spaces';
import { useLink } from './useLink';
import type { SpacesLinkWithSpace, SpacesLinkWithSpaceId, SpacesLinkVariants } from './spaces-link-types';
import { isFunction } from '../helpers';

const SpacesLinkContainer = styled(Box, { name: 'AvSpacesLink', slot: 'root' })({}) as typeof MuiBox;
const DateInfo = styled(Grid, { name: 'AvSpacesLink', slot: 'AvDateInfo' })({});
const SpacesLinkFavoriteHeart = styled(FavoriteHeart, { name: 'AvSpacesLink', slot: 'AvFavoriteHeart' })({});
const IconLink = styled(Link, { name: 'AvSpacesLink', slot: 'IconLink' })({});

const getDisplayDate = (date: string | null | undefined) => dayjs(date).format('MM/DD/YYYY');

const getContainerTag = (
  propTag: ElementType<any, keyof JSX.IntrinsicElements> | undefined,
  variant: SpacesLinkVariants
) => {
  if (variant && variant !== 'default') return { card: Card, list: ListItem }[variant];
  return propTag || 'div';
};

const getBodyTag = (
  propTag: ElementType<any, keyof JSX.IntrinsicElements> | undefined,
  variant: SpacesLinkVariants
) => {
  if (variant && variant !== 'default') return { card: CardContent, list: 'div' }[variant];
  return propTag || 'div';
};

const getTitleTag = (
  propTag: ElementType<any, keyof JSX.IntrinsicElements> | undefined,
  variant: SpacesLinkVariants
) => {
  if (variant && variant !== 'default') return Link;
  return propTag || Link;
};

const getTextTag = (
  propTag: ElementType<any, keyof JSX.IntrinsicElements> | undefined,
  variant: SpacesLinkVariants
) => {
  if (variant && variant !== 'default') return { card: Typography, list: ListItemText }[variant];
  return propTag || 'div';
};

export const SpacesLink = ({
  spaceId,
  space: propSpace,
  className,
  children,
  favorite,
  icon: FileIcon,
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
        <SpacesLinkFavoriteHeart
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
        <DateInfo textAlign={stacked ? 'center' : 'right'} sx={{ marginTop: '8px' }}>
          {showNew && linkSpace?.isNew && (
            <StatusChip id={`${idPrefix}app-new-badge-${linkSpace?.configurationId}`} label="New!" color="secondary" />
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
        </DateInfo>
      ),
    [linkSpace?.activeDate, linkSpace?.isNew, showDate, showNew, stacked, linkSpace?.configurationId, idPrefix]
  );

  const customBadgeDisplay = useMemo(
    () =>
      customBadgeText && (
        <Box
          sx={{
            textAlign: stacked ? 'center' : 'inherit',
            marginRight: variant !== 'card' && (showDate || (showNew && linkSpace?.isNew)) ? 1 : undefined,
          }}
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
    <SpacesLinkContainer
      component={Tag}
      title={linkSpace?.name}
      className={className}
      {...rest}
      style={{ ...style }}
      role={variant === 'list' ? 'listitem' : role}
    >
      <BodyTag style={{ width: '100%' }}>
        <Grid
          sx={{
            alignItems: !showDescription || stacked ? 'center' : 'start',
            flexWrap: 'nowrap',
          }}
          direction={stacked ? 'column' : 'row'}
          container
        >
          {!stacked && favoriteIcon}
          {FileIcon && linkSpace?.url && linkSpace?.type?.toUpperCase() === 'FILE' ? (
            <IconLink
              target="_blank"
              href={linkSpace?.url}
              role="link"
              aria-labelledby={`${idPrefix}app-title-${linkSpace?.configurationId}`}
            >
              <FileIcon data-testid="icon" />
            </IconLink>
          ) : null}
          {children
            ? renderChildren()
            : body && (
                <Grid
                  id={`${idPrefix}${linkSpace?.type}-${linkSpace?.configurationId}`}
                  sx={{ flexGrow: 1, marginTop: '8px' }}
                >
                  <Box
                    sx={{
                      marginBottom:
                        !customBadgeDisplay && (!showDescription || !linkSpace?.description) ? 0 : undefined,
                      paddingTop: stacked ? 3 : undefined,
                      textAlign: stacked ? 'center' : undefined,
                    }}
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
                      variant="h5"
                      title={showName ? linkSpace?.name : undefined}
                    >
                      {showName ? linkSpace?.name : undefined}
                    </TitleTag>
                  </Box>
                  {stacked && dateInfo}
                  {showDescription && linkSpace?.description && (
                    <TextTag
                      component={'div'}
                      style={{
                        marginTop: '.5rem',
                        textAlign: stacked ? 'center' : undefined,
                        overflow: 'hidden',
                        whiteSpace: maxDescriptionWidth ? 'nowrap' : undefined,
                        width: maxDescriptionWidth,
                        textOverflow: 'ellipsis',
                      }}
                      id={`${idPrefix}app-description-${linkSpace?.configurationId}`}
                    >
                      <ReactMarkdown>{linkSpace?.description}</ReactMarkdown>
                    </TextTag>
                  )}
                  {variant === 'card' && customBadgeDisplay}
                </Grid>
              )}
          {variant !== 'card' && customBadgeDisplay}
          {!stacked && dateInfo}
        </Grid>
      </BodyTag>
    </SpacesLinkContainer>
  );
};
