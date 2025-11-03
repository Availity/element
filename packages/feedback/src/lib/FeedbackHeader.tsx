import { IconButton } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { styled } from '@mui/material/styles';

interface FeedbackHeaderProps {
  appName: string;
  handleClose: () => void;
  loading: boolean;
  sent: boolean;
}

const FeedbackHeaderContainer = styled(Grid, { name: 'AvFeedbackContainer', slot: 'FeedbackHeaderContainer' })({});

export const FeedbackHeader = ({ appName, handleClose, loading, sent }: FeedbackHeaderProps): React.JSX.Element => {
  return (
    <FeedbackHeaderContainer
      alignItems="flex-start"
      container
      direction="row"
      justifyContent="space-between"
      flexWrap="nowrap"
      id="feedback-form-header"
    >
      <Grid sx={{ whiteSpace: 'normal' }}>
        <Typography component="h2" variant="h5">
          {sent ? 'Thank you for your feedback.' : `Tell us what you think about ${appName}`}
        </Typography>
      </Grid>
      <Grid>
        <IconButton disabled={loading} title="Close" onClick={handleClose} size="medium">
          <CloseIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
    </FeedbackHeaderContainer>
  );
};
