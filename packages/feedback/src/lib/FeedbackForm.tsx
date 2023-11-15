import React from 'react';
import { TextField } from '@availity/mui-textfield';
import { Button } from '@availity/mui-button';
import { ToggleButtonGroup, ToggleButton } from '@availity/mui-toggle-button';
import { Tooltip } from '@availity/mui-tooltip';
import { Grid, SvgIconProps, ToggleButtonProps, styled } from '@mui/material';
import { FaceFrownIcon, FaceNeutralIcon, FaceSmileIcon } from '@availity/mui-icon';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface Inputs {
  smileField: string;
  feedback: string;
}

interface SmileButtonProps extends ToggleButtonProps {
  Icon: (props: SvgIconProps) => JSX.Element;
  label: string;
  value: string;
}

const SmileButtons = styled(ToggleButtonGroup, { name: 'SmileButtons', slot: 'root' })({});

const SmileButton = ({ Icon, label, value, ...props }: SmileButtonProps) => (
  <Tooltip title={label}>
    <div>
      <ToggleButton value={value} {...props}>
        <Icon fontSize="large" />
      </ToggleButton>
    </div>
  </Tooltip>
);

export const FeedbackForm = (): JSX.Element => {
  const { handleSubmit, control, setValue, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
  return (
    <Grid container component="form" justifyContent="center" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="smileField"
        control={control}
        render={({ field }) => {
          return (
            <SmileButtons
              children={options.map((props) => (
                <SmileButton key={props.value} {...props} />
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
        name="feedback"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth multiline minRows={3} maxRows={3} label="What would you improve?" />
        )}
      />
      <Grid container direction="row" spacing={1} marginTop="8px">
        <Grid item xs={6}>
          <Button fullWidth color="secondary">
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth type="submit" disabled={!watch('smileField')}>
            Send Feedback
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
