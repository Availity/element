import React, { useEffect } from 'react';
import { TextField } from '@availity/mui-textfield';
import { LoadingButton, Button } from '@availity/mui-button';
import { ToggleButtonGroup, ToggleButton } from '@availity/mui-toggle-button';
import { Grid, SvgIconProps, ToggleButtonProps, styled } from '@mui/material';
import { FaceFrownIcon, FaceNeutralIcon, FaceSmileIcon } from '@availity/mui-icon';
import { avRegionsApi } from '@availity/api-axios';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface Inputs {
  feedback: string;
  smileField: string;
}

interface SmileButtonProps extends ToggleButtonProps {
  disabled: boolean;
  Icon: (props: SvgIconProps) => JSX.Element;
  label: string;
  value: string;
}

interface FeedbackFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  analytics: { info: (entries: Record<string, unknown>) => any };
  appName: string;
  handleClose: () => void;
  loading: boolean;
  sent: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmileButtons = styled(ToggleButtonGroup, { name: 'AvFeedbackContainer', slot: 'SmileButtons' })({});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SmileButton = ({ disabled, Icon, label, value, ...props }: SmileButtonProps) => (
  <div>
    <ToggleButton aria-label={value} value={value} {...props} disabled={disabled}>
      <Icon fontSize="large" />
    </ToggleButton>
  </div>
);

export const FeedbackForm = ({
  analytics,
  appName,
  handleClose,
  loading,
  sent,
  setLoading,
  setSent,
}: FeedbackFormProps): JSX.Element | null => {
  const { control, handleSubmit, setValue, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ smileField, ...values }) => {
    setLoading(true);
    try {
      const response = await avRegionsApi.getCurrentRegion();

      await analytics.info({
        surveyId: `${appName.replace(/\s/g, '_')}_Smile_Survey`,
        smileLocation: `${appName}`,
        smile: `icon-${smileField}`,
        url: window.location.href,
        region: response.data.regions[0] && response.data.regions[0].id,
        userAgent: window.navigator.userAgent,
        submitTime: new Date(),
        ...values, // Spread the form values onto the logger
      });
      setSent(true);
      setLoading(false);
    } catch {
      setSent(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  }, [sent]);

  const options = [
    {
      Icon: FaceSmileIcon,
      label: 'What do you like?',
      value: 'smile',
    },
    {
      Icon: FaceNeutralIcon,
      label: 'What would you improve?',
      value: 'meh',
    },
    { Icon: FaceFrownIcon, label: "What don't you like?", value: 'frown' },
  ];

  const getFeedbackLabel = () => {
    const smile = watch('smileField');

    const option = options.find((option) => option.value === smile);

    return option?.label || 'What would you improve?';
  };

  if (!sent) {
    return (
      <Grid component="form" container justifyContent="center" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="smileField"
          render={({ field }) => {
            return (
              <SmileButtons
                children={options.map((props) => (
                  <SmileButton disabled={loading} key={props.value} {...props} />
                ))}
                {...field}
                onChange={(event: React.MouseEvent<HTMLElement>, value: string) => {
                  setValue(field.name, value);
                }}
                size="medium"
                exclusive
              />
            );
          }}
        />
        <Controller
          control={control}
          name="feedback"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              minRows={3}
              maxRows={3}
              label={getFeedbackLabel()}
              disabled={loading}
            />
          )}
          rules={{ maxLength: 200, required: true }}
        />
        <Grid container direction="row" marginTop="16px" spacing={1}>
          <Grid item xs={6}>
            <Button color="secondary" disabled={loading} fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              disabled={!watch('smileField')}
              fullWidth
              loading={loading}
              type="submit"
              variant="contained"
            >
              Send Feedback
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};
