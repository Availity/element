import { Container, Grid } from '@mui/material';
import { Divider } from '@availity/mui-divider';
import { Typography } from '@availity/mui-typography';
import { Breadcrumbs, BreadcrumbsProps } from '@availity/mui-breadcrumbs';
import { Link } from '@availity/mui-link';
import { Button, ButtonProps } from '@availity/mui-button';

export interface ButtonsProps extends Omit<ButtonProps, 'size' | 'height' | 'color'> {
  key: string;
}

export interface PageHeaderProps {
  breadcrumbs: BreadcrumbsProps;
  buttons?: ButtonsProps[];
  headerText: string;
  helpLink?: string;
}

export const PageHeader = ({ breadcrumbs, buttons, headerText, helpLink }: PageHeaderProps): JSX.Element => {
  return (
    <Grid component={Container} container direction="column" marginTop="1rem" marginBottom="1.25rem">
      {breadcrumbs || helpLink ? (
        <Grid direction="row" item container justifyContent="space-between" marginBottom={4}>
          {breadcrumbs && (
            <Grid item>
              <Breadcrumbs {...breadcrumbs} />
            </Grid>
          )}
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
        <Grid item>
          <Typography variant="h1" children={headerText} />
        </Grid>
        {buttons && buttons.length > 0 && (
          <Grid item container width="auto">
            {buttons?.map((buttonProps) => (
              <Grid item marginLeft={2} height="100%">
                <Button {...buttonProps} size="large" color="secondary" />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <Divider />
    </Grid>
  );
};
