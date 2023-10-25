import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps, Typography } from '@mui/material';
import { NavigateNextIcon, MoreHorizontalIcon } from '@availity/mui-icon';
import { Link } from '@availity/mui-link';

interface Crumb {
  /** The name of the ancestor page. */
  name: string;
  /** The url for navigating to the ancestor page. */
  url: string;
}

export interface BreadcrumbsProps extends Omit<MuiBreadcrumbsProps, 'separator' | 'slotProps' | 'slots'> {
  /** The name of the active page (the page the user is currently on). */
  active?: string;
  children?: React.ReactNode;
  /** The ancestor pages.
   * An array of objects containing the name and url
   * { name: 'Page', url: '#' }
   */
  crumbs?: Crumb[];
  /** The value to display when the active page or an ancestor does not have a value.
   * @default ... */
  emptyState?: string;
  /** Url for the Home route.
   * @default /public/apps/dashboard */
  homeUrl?: string;
}

export const Breadcrumbs = ({
  active,
  children,
  crumbs,
  emptyState = '...',
  homeUrl = '/public/apps/dashboard',
  ...rest
}: BreadcrumbsProps): JSX.Element => {
  const renderBreadCrumb = ({ name = emptyState, url }: Crumb) => {
    const props = {
      'aria-label': name,
      children: name,
    };

    return url ? <Link {...props} href={url} /> : <Typography {...props} />;
  };

  return (
    <MuiBreadcrumbs
      {...rest}
      separator={<NavigateNextIcon fontSize="xsmall" />}
      slotProps={{ collapsedIcon: { className: 'breadcrumbs__collapsed-icon' } }}
      slots={{ CollapsedIcon: MoreHorizontalIcon }}
    >
      <Link aria-label="Home" target="_top" href={homeUrl}>
        Home
      </Link>
      {crumbs && crumbs.length > 0 && crumbs.map((crumb) => renderBreadCrumb(crumb))}
      {children}
      {<Typography>{active || emptyState}</Typography>}
    </MuiBreadcrumbs>
  );
};
