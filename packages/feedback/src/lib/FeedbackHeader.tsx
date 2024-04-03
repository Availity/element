import { IconButton } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';
import { Typography } from '@availity/mui-typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

interface FeedbackHeaderProps {
  appName: string;
  handleClose: () => void;
  loading: boolean;
  sent: boolean;
}

const FeedbackHeaderContainer = styled(Grid, { name: 'AvFeedbackContainer', slot: 'FeedbackHeaderContainer' })({});

export const FeedbackHeader = ({ appName, handleClose, loading, sent }: FeedbackHeaderProps): JSX.Element => {
  return (
    <FeedbackHeaderContainer
      alignItems="center"
      container
      direction="row"
      marginBottom={!sent ? '8px' : '0px'}
      justifyContent="space-between"
      flexWrap="nowrap"
      id="feedback-form-header"
    >
      <Grid item whiteSpace="normal">
        <Typography component="h2" variant="h5">
          {sent ? 'Thank you for your feedback.' : `Tell us what you think about ${appName}`}
        </Typography>
      </Grid>
      <Grid item marginRight="-8px">
        <IconButton disabled={loading} title="Close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </FeedbackHeaderContainer>
  );
};
