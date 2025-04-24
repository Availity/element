import { ReactNode, forwardRef } from 'react';
import { default as MuiLink, LinkProps as MuiLinkProps } from '@mui/material/Link';
import { OpenInNewIcon } from '@availity/mui-icon';

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

export type LinkProps = {
  /** Url of the page the link goes to */
  href: string;
  /** format href to leverage loadApp within home iframe when relative url used.
   *
   * @default true */
  loadApp?: boolean;
  /** Where to open the linked document. Adds `OpenInNewIcon` when target is `_blank` */
  target?: string;
  /** Function to run onClick of the link. The first argument passed to onClick is the event. The second argument is the processed url. */
  onClick?: (event: React.MouseEvent, url: string) => void;
  children?: ReactNode;
  rel?: string;
  /** The position of the icon relative to the text when target is `_blank`
   *
   * @default 'start' */
  iconPosition?: 'start' | 'end';
} & Omit<MuiLinkProps, 'noWrap' | 'onClick' | 'underline' | 'variantMapping'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, target = '_self', children, onClick, loadApp = true, rel, iconPosition = 'start', ...rest } = props;
  const absolute = isAbsoluteUrl(href);
  const encode = !(absolute || !loadApp);
  const url = encode ? getUrl(href) : href;
  const NewWindowIcon = target === '_blank' ? <OpenInNewIcon /> : null;
  const startIcon = iconPosition === 'start';
  const endIcon = iconPosition === 'end';

  return (
    <MuiLink
      href={url}
      target={target}
      onClick={(event: React.MouseEvent) => onClick && onClick(event, url)}
      rel={rel || setRel(url, target, absolute)}
      {...rest}
      ref={ref}
    >
      <span>
        {startIcon && NewWindowIcon} {children} {endIcon && NewWindowIcon}
      </span>
    </MuiLink>
  );
});
