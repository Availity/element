import { Divider } from '@availity/mui-divider';
import { Typography } from '@availity/mui-typography';
import { Breadcrumbs, BreadcrumbsProps } from '@availity/mui-breadcrumbs';
import { Link } from '@availity/mui-link';
import { Button, ButtonProps } from '@availity/mui-button';
import { Feedback } from '@availity/mui-feedback';
import { Box, Grid } from '@availity/mui-layout';
import { SpacesImage } from '@availity/mui-spaces';
import Skeleton from '@mui/material/Skeleton';

export interface ButtonsProps extends Omit<ButtonProps, 'size' | 'height' | 'color'> {
  key: string;
}

export type Help = {
  /** The URL to the Help Demo */
  url: string;
  /** The name that displays in the help text. Should be used when the help is a demo video.
   * @example "This App"
   * @returns Need Help? Watch a demo for This App
   */
  helpAppName?: string;
};

type LogoSpaceId = {
  /** The spaceId associated with the app. Required if payerId is not present. */
  spaceId: string;
  /** The payerId associated with the app. Required if spaceId is not present. */
  payerId?: string;
};

type LogoPayerId = {
  /** The spaceId associated with the app. Required if payerId is not present. */
  spaceId?: string;
  /** The payerId associated with the app. Required if spaceId is not present. */
  payerId: string;
};

export interface PageHeaderProps {
  /** Render breadcrumbs above the header */
  breadcrumbs?: BreadcrumbsProps;
  /** Renders buttons in the right side of the header */
  buttons?: ButtonsProps[];
  /** If true, the Feedback button displays
   * @default false
   */
  feedback?: boolean;
  /** The text that displays in the header  */
  headerText: string;
  /** Help attributes */
  help?: Help;
  /** Logo attributes */
  logo?: LogoSpaceId | LogoPayerId;
}

const Logo = (props: LogoSpaceId | LogoPayerId) => {
  if (props.spaceId)
    return (
      <SpacesImage
        imageType="images.logo"
        spaceId={props.spaceId}
        Loader={({ id }) => <Skeleton id={id} height="60px" width="234px" />}
      />
    );
  else if (props.payerId)
    return (
      <SpacesImage
        imageType="images.logo"
        payerId={props.payerId}
        Loader={({ id }) => <Skeleton id={id} height="60px" width="234px" />}
      />
    );
  else return null;
};

export const PageHeader = ({
  breadcrumbs,
  buttons,
  feedback = false,
  headerText,
  logo,
  help,
}: PageHeaderProps): JSX.Element => {
  return (
    <Grid
      component={Box}
      container
      direction="column"
      sx={{
        marginTop: '1rem',
        marginBottom: '1.25rem',
        paddingLeft: 3,
        paddingRight: 3,
      }}
    >
      {breadcrumbs || logo || help ? (
        <Grid direction="row" container sx={{ justifyContent: 'space-between', marginBottom: 4 }}>
          {breadcrumbs && (
            <Grid marginRight={2}>
              <Breadcrumbs {...breadcrumbs} />
            </Grid>
          )}
          {(logo || help) && (
            <Grid>
              {help && (
                <Typography variant="body1">
                  Need help?{' '}
                  <Link href={help.url} target="_blank" loadApp={false}>
                    {help.helpAppName ? 'Watch a demo' : 'Learn More'}
                  </Link>{' '}
                  {help.helpAppName ? ` for ${help.helpAppName}` : null}
                </Typography>
              )}
              {logo && (
                <Grid container justifyContent="end">
                  <Logo {...logo} />
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
      ) : null}

      <Grid direction="row" container sx={{ marginBottom: 2, alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid>
          <Typography variant="h1" children={headerText} />
        </Grid>
        <Grid container sx={{ width: 'auto' }}>
          {buttons &&
            buttons.length > 0 &&
            buttons?.map((buttonProps) => (
              <Grid sx={{ marginLeft: 2, height: '100%' }}>
                <Button {...buttonProps} size="large" color="secondary" />
              </Grid>
            ))}
          {feedback ? (
            <Grid sx={{ marginLeft: 2, height: '100%' }}>
              <Feedback appName={headerText} />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
};
