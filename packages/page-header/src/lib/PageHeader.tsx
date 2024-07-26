import { Divider } from '@availity/mui-divider';
import { Typography } from '@availity/mui-typography';
import { Breadcrumbs, BreadcrumbsProps } from '@availity/mui-breadcrumbs';
import { Link } from '@availity/mui-link';
import { Button, ButtonProps } from '@availity/mui-button';
import { Feedback } from '@availity/mui-feedback';
import { Box, Grid } from '@availity/mui-layout';

export interface ButtonsProps extends Omit<ButtonProps, 'size' | 'height' | 'color'> {
  key: string;
}

export interface PageHeaderProps {
  /** Render breadcrumbs above the header */
  breadcrumbs: BreadcrumbsProps;
  /** Renders buttons in the right side of the header */
  buttons?: ButtonsProps[];
  /** If true, the Give Feedback button displays
   * @default false
   */
  feedback?: boolean;
  /** The text that displays in the header  */
  headerText: string;
  /** The name that displays in the help text. Should be used when the help is a demo video.
   * @example "This App"
   * @returns Need Help? Watch a demo for This App
   */
  helpAppName?: string;
  /** The URL to the Help Demo */
  helpLink?: string;
}

export const PageHeader = ({
  breadcrumbs,
  buttons,
  feedback = false,
  headerText,
  helpAppName,
  helpLink,
}: PageHeaderProps): JSX.Element => {
  return (
    <Grid
      component={Box}
      container
      direction="column"
      marginTop="1rem"
      marginBottom="1.25rem"
      paddingLeft={3}
      paddingRight={3}
    >
      {breadcrumbs || helpLink ? (
        <Grid direction="row" container justifyContent="space-between" marginBottom={4}>
          {breadcrumbs && (
            <Grid>
              <Breadcrumbs {...breadcrumbs} />
            </Grid>
          )}
          {helpLink && (
            <Grid marginLeft={2}>
            <Typography variant="body1">
              Need help?{' '}
              <Link href={helpLink} target="_blank" loadApp={false} >
                {helpAppName ? "Watch a demo" : "Learn More"}
              </Link>{' '}
              {helpAppName ? ` for ${helpAppName}` : null}
            </Typography>
            </Grid>
          )}
        </Grid>
      ) : null}

      <Grid direction="row" container marginBottom={2} alignItems="center" justifyContent="space-between">
        <Grid>
          <Typography variant="h1" children={headerText} />
        </Grid>
        <Grid container width="auto">
          {buttons &&
            buttons.length > 0 &&
            buttons?.map((buttonProps) => (
              <Grid marginLeft={2} height="100%">
                <Button {...buttonProps} size="large" color="secondary" />
              </Grid>
            ))}
          {feedback ? (
            <Grid marginLeft={2} height="100%">
              <Feedback appName={headerText} />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
};
