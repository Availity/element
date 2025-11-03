import React, { useEffect } from 'react';
import { TextField } from '@availity/mui-textfield';
import { LoadingButton, Button, IconButton } from '@availity/mui-button';
import { ToggleButtonGroup, ToggleButton } from '@availity/mui-toggle-button';
import { Grid } from '@availity/mui-layout';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ToggleButtonProps } from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import { FaceFrownIcon, FaceNeutralIcon, FaceSmileIcon } from '@availity/mui-icon';
import { FormLabel } from '@availity/mui-form-utils';
import { avRegionsApi } from '@availity/api-axios';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface Inputs {
  feedback: string;
  smileField: string;
}

interface SmileButtonProps extends ToggleButtonProps {
  disabled: boolean;
  Icon: (props: SvgIconProps) => React.JSX.Element;
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

const FormActions = styled(Grid, { name: 'AvFeedbackContainer', slot: 'FormActions' })({});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SmileButton = ({ disabled, Icon, label, value, ...props }: SmileButtonProps) => (
  <div>
    <ToggleButton
      component={IconButton}
      disableRipple
      title={label}
      aria-label={value}
      value={value}
      {...props}
      disabled={disabled}
      size="large"
    >
      <Icon />
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
}: FeedbackFormProps): React.JSX.Element | null => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<Inputs>();

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

  const smileFieldValue = watch('smileField');

  const getFeedbackLabel = () => {
    const option = options.find((option) => option.value === smileFieldValue);

    return option?.label || 'What would you improve?';
  };

  if (!sent) {
    return (
      <Grid
        component="form"
        container
        sx={{ justifyContent: 'center' }}
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Feedback Form"
        aria-describedby="feedback-form-header"
      >
        <Controller
          control={control}
          name="smileField"
          render={({ field }) => {
            return (
              <SmileButtons
                children={options.map((props, index) => (
                  <SmileButton autoFocus={index === 0} disabled={loading} key={props.value} {...props} />
                ))}
                {...field}
                aria-labelledby="feedback-form-header"
                onChange={(event: React.MouseEvent<HTMLElement>, value: string) => {
                  setValue(field.name, value);
                }}
                size="medium"
                exclusive
              />
            );
          }}
        />
        <TextField
          {...register('feedback', {
            required: 'This field is required',
            maxLength: { value: 200, message: 'This field must not exceed 200 characters' },
          })}
          fullWidth
          multiline
          minRows={3}
          maxRows={3}
          label={getFeedbackLabel()}
          InputLabelProps={{
            component: FormLabel,
            required: true,
          }}
          inputProps={{ 'aria-required': 'true' }}
          helperText={errors.feedback?.message || 'Max 200 characters'}
          error={!!errors.feedback}
          disabled={loading || !smileFieldValue}
        />
        <FormActions container direction="row" width="100%" spacing={1} wrap="wrap">
          <Grid sx={{ flex: 1, minWidth: '147px' }}>
            <Button color="secondary" disabled={loading} onClick={handleClose}>
              Close
            </Button>
          </Grid>
          <Grid sx={{ flex: 1, minWidth: '147px' }}>
            <LoadingButton disabled={!smileFieldValue} loading={loading} type="submit">
              Send Feedback
            </LoadingButton>
          </Grid>
        </FormActions>
      </Grid>
    );
  } else {
    return null;
  }
};
