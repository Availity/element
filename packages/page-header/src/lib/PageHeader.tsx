import { Container, Grid } from '@mui/material';
import { Divider } from '@availity/mui-divider';
import { Typography } from '@availity/mui-typography';
import { Breadcrumbs, BreadcrumbsProps } from '@availity/mui-breadcrumbs';
import { Link } from '@availity/mui-link';
import { Button, ButtonProps } from '@availity/mui-button';

export interface ButtonsProps extends Omit<ButtonProps, 'size' | 'height'> {
  key: string;
}

export interface PageHeaderProps {
  breadcrumbs: BreadcrumbsProps;
  buttons?: [ButtonsProps?, ButtonsProps?];
  headerText: string;
  helpLink?: string;
}

export const PageHeader = ({ breadcrumbs, buttons, headerText, helpLink }: PageHeaderProps): JSX.Element => {
  return (
    <Grid component={Container} container direction="column">
      {breadcrumbs || helpLink ? (
        <Grid direction="row" item container justifyContent="space-between" marginBottom={4}>
          {breadcrumbs && <Grid item component={Breadcrumbs} {...breadcrumbs} />}
          {helpLink && (
            <Grid item marginLeft={2}>
              <Typography variant="body1">
                Need help? <Link href={helpLink} target="_blank" children="Watch a demo" />
              </Typography>
            </Grid>
          )}
        </Grid>
      ) : null}

      <Grid direction="row" item container marginBottom={2} alignItems="center" justifyContent="space-between">
        <Grid item component={Typography} variant="h1" children={headerText} />
        {buttons && buttons.length > 0 && (
          <Grid item container width="auto">
            {buttons?.map((buttonProps) => (
              <Grid item marginLeft={2} component={Button} {...buttonProps} size="large" height="100%" />
            ))}
          </Grid>
        )}
      </Grid>
      <Divider />
    </Grid>
  );
};
