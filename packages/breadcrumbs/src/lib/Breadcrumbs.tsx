import * as React from 'react';
import { Breadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps, Typography } from '@mui/material';
import NavigateNext from '@mui/icons-material/NavigateNext'
import {AvLink, AvLinkProps} from '@availity/mui-link'
export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  crumbs?: Crumb[];
  active: string;
  emptyState?: React.ReactNode;
  children?: React.ReactNode;
  linkTag: keyof JSX.IntrinsicElements | React.ComponentType;
  homeUrl?: string;
}
export type Crumb = {
  url: string;
  name: string;
};


export const BreadcrumbLink = ({children, ...rest}: AvLinkProps) => {
  return <AvLink {...rest}>{children}</AvLink>
}

export const AvBreadcrumbs = ({
  crumbs,
  active,
  emptyState = '…',
  children,
  linkTag: LinkTag = BreadcrumbLink,
  homeUrl = '/public/apps/dashboard',
  ...rest
}: BreadcrumbsProps) => {
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
