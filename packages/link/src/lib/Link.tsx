import * as React from 'react';
import { Link } from '@mui/material';

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

export type AvLinkProps = {
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
}: AvLinkProps) => {
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
