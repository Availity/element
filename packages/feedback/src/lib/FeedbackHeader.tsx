import { IconButton } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@mui/material';

export const FeedbackHeader = ({ appName, handleClose }): JSX.Element => {
  return (
    <Grid
      alignItems="center"
      container
      marginBottom="8px"
      direction="row"
      whiteSpace="nowrap"
      justifyContent="space-between"
    >
      <Grid item width="">
        <Typography variant="h5">Tell us what you think about {appName}</Typography>
      </Grid>
      <Grid item>
        <IconButton title="Close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
