import * as React from 'react';
import { Link, Breadcrumbs, Typography } from '@mui/material';
import {NavigateNext} from '@mui/icons-material'

// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

// Windows paths like `c:\`
const WINDOWS_PATH_REGEX = /^[a-zA-Z]:\\/;

function isAbsoluteUrl(url: string) {
  if (WINDOWS_PATH_REGEX.test(url)) {
    return false;
  }

  return ABSOLUTE_URL_REGEX.test(url);
}

// if absolute or loadApp is disabled, return url. otherwise loadappify the url
const getUrl = (url = '') => {
  return `/public/apps/home/#!/loadApp?appUrl=${encodeURIComponent(url)}`;
};

const getTarget = (target?: string) => {
  // should start with _, otherwise it is specifying a specific frame name
  // _blank = new tab/window, _self = same frame, _parent = parent frame (use for home page from modals), _top = document body, framename = specific frame
  if (target && !target.startsWith('_')) {
    // Thanos uses BODY
    // 'newBody' hard-coded in spaces -> should we keep this logic?
    if (target === 'BODY' || target === 'newBody') {
      return '_self';
    }
    if (target === 'TAB') {
      return '_blank';
    }
  }

  return target || '_self';
};

// takes href and transforms it so that we can compare hostnames and other properties
const getLocation = (href: string) => {
  const location = document.createElement('a');
  location.href = href;
  return location;
};

const setRel = (url: string, target: string, absolute: boolean) => {
  if (target === '_blank' && absolute) {
    const dest = getLocation(url);
    if (dest.hostname !== window.location.hostname) {
      // default rel when linking to external destinations for performance and security
      return 'noopener noreferrer';
    }
  }
  return undefined;
};

interface Props {
  tag?: keyof JSX.IntrinsicElements | React.ComponentType;
  href: string;
  target?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent, url: string) => void;
  loadApp?: boolean;
  className?: string;
  rel?: string;
}

export const AvLink = ({
  tag: Tag = Link,
  href,
  target,
  children,
  onClick,
  loadApp = true,
  rel,
  ...rest
}: Props) => {
  const absolute = isAbsoluteUrl(href);
  const encode = !(absolute || !loadApp);
  const url = encode ? getUrl(href) : href;
  target = getTarget(target);
  const underline = Tag === Link ? 'hover' : undefined

  return (
    <Tag
      href={url}
      target={target}
      onClick={(event: React.MouseEvent) => onClick && onClick(event, url)}
      data-testid="av-link-tag"
      rel={rel || setRel(url, target, absolute)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      underline={underline}
      {...rest}
    >
      {children}
    </Tag>
  );
};


export type Crumb = {
  url: string;
  name: string;
};

interface MyProps {
  crumbs?: Crumb[];
  active: string;
  emptyState?: React.ReactNode;
  children?: React.ReactNode;
  linkTag: keyof JSX.IntrinsicElements | React.ComponentType;
  homeUrl?: string;
}

export const AvBreadcrumbs = ({
  crumbs,
  active,
  emptyState = '…',
  children,
  linkTag: LinkTag = AvLink,
  homeUrl = '/public/apps/dashboard',
  ...rest
}: MyProps) => {
  const renderBreadCrumb = (crumb: Crumb) => {
    // default breadcrumbitem render
    let breadCrumbItem = <span>{emptyState}</span>;
    // render static links
    if (crumb.name && crumb.url) {
      breadCrumbItem = (
        <LinkTag aria-label={crumb.name} href={crumb.url}>
          {crumb.name}
        </LinkTag>
      );
    }
    return breadCrumbItem;
  };

  return (
    <Breadcrumbs separator={<NavigateNext fontSize="small" />} {...rest} maxItems={25} >
      <LinkTag aria-label="Home" href={homeUrl}>
        Home
      </LinkTag>
      {crumbs &&
        crumbs.length > 0 &&
        crumbs.map((crumb) => renderBreadCrumb(crumb))}
      {children ?? null}
      <Typography>{active || emptyState}</Typography>
    </Breadcrumbs>
  );
};

// Breadcrumbs.propTypes = {
//   /** The name of the active page (the page the user is currently on). */
//   active: PropTypes.string.isRequired,
//   /** The ancestor pages. Objects in array contain `name` (String) and `url` (String) properties. */
//   crumbs: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       url: PropTypes.string,
//     })
//   ),
//   /** Custom link tag for the links. */
//   linkTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   /** The value to display when the active page or an ancestor does not have a value. */
//   emptyState: PropTypes.string,
//   /** The children must be a reactstrap `BreadcrumbItem` components. */
//   children: PropTypes.node,
//   /** Url for the Home route. */
//   homeUrl: PropTypes.string,
// };
