import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps, Typography } from '@mui/material';
import { NavigateNextIcon } from '@availity/mui-icon';
import { Link } from '../../../link';

interface Crumb {
  /** The name of the ancestor page. */
  name: string;
  /** The url for navigating to the ancestor page. */
  url: string;
}

export interface BreadcrumbsProps extends Omit<MuiBreadcrumbsProps, 'separator'> {
  /** The name of the active page (the page the user is currently on). */
  active?: string;
  children?: React.ReactNode;
  /** The ancestor pages. */
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
    <MuiBreadcrumbs {...rest} separator={<NavigateNextIcon fontSize="small" />}>
      <Link aria-label="Home" href={homeUrl}>
        Home
      </Link>
      {crumbs && crumbs.length > 0 && crumbs.map((crumb) => renderBreadCrumb(crumb))}
      {children}
      {<Typography>{active || emptyState}</Typography>}
    </MuiBreadcrumbs>
  );
};
