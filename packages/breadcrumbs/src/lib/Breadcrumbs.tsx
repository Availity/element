import { default as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { NavigateNextIcon, MoreHorizontalIcon } from '@availity/mui-icon';
import { Link, LinkProps } from '@availity/mui-link';

interface Crumb {
  /** The name of the ancestor page. */
  name: string;
  /** The url for navigating to the ancestor page. */
  url: string;
  /** The target on the Link component
   * @default _top
   */
  target?: string;
  /** Props passed to the Links */
  LinkProps?: Omit<LinkProps, 'href'>;
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
  /** A string value that can be used to name an element
   * @default breadcrumbs */
  'aria-label'?: string;
  /** Props passed to the Links */
  LinkProps?: Omit<LinkProps, 'href'>;
}

const Breadcrumb = ({ name, url, target = '_top', LinkProps }: Crumb) => {
  const props = {
    'aria-label': name,
    children: name,
  };

  return url ? <Link {...props} {...LinkProps} href={url} target={target} /> : <Typography {...props} />;
};

export const Breadcrumbs = ({
  active,
  children,
  crumbs,
  emptyState = '...',
  homeUrl = '/static/web/onb/onboarding-ui-apps/dashboard-ui/',
  LinkProps,
  ...rest
}: BreadcrumbsProps): React.JSX.Element => {
  return (
    <MuiBreadcrumbs
      {...rest}
      separator={<NavigateNextIcon fontSize="xsmall" />}
      slotProps={{ collapsedIcon: { className: 'breadcrumbs__collapsed-icon' } }}
      slots={{ CollapsedIcon: MoreHorizontalIcon }}
      aria-label={rest['aria-label'] || 'breadcrumbs'}
    >
      <Link aria-label="Home" href={homeUrl} loadApp={false}>
        Home
      </Link>
      {crumbs &&
        crumbs.length > 0 &&
        crumbs.map(({ name = emptyState, url, target }) => (
          <Breadcrumb name={name} url={url} target={target} key={name} LinkProps={LinkProps} />
        ))}
      {children}
      <Typography>{active || emptyState}</Typography>
    </MuiBreadcrumbs>
  );
};
