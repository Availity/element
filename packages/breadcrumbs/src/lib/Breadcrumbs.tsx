import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps, Typography } from '@mui/material';
import { NavigateNextIcon } from '@availity/mui-icon';
import { Link } from '../../../link';

interface Crumb {
  name: string;
  url: string;
}

export interface BreadcrumbsProps extends Omit<MuiBreadcrumbsProps, 'separator'> {
  active?: string;
  children: React.ReactNode;
  crumbs?: Crumb[];
}

const renderBreadCrumb = (crumb: Crumb) => {
  if (crumb.name && crumb.url) {
    return (
      <Link aria-label={crumb.name} href={crumb.url}>
        {crumb.name}
      </Link>
    );
  }
};

export const Breadcrumbs = ({ active, children, crumbs, ...rest }: BreadcrumbsProps): JSX.Element => {
  return (
    <MuiBreadcrumbs {...rest} separator={<NavigateNextIcon fontSize="small" />}>
      {crumbs && crumbs.length > 0 && crumbs.map((crumb) => renderBreadCrumb(crumb))}
      {children}
      {active && <Typography>{active}</Typography>}
    </MuiBreadcrumbs>
  );
};
