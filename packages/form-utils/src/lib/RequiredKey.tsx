import { Typography } from '@availity/mui-typography';
import { styled } from '@mui/material';

export const RequiredKey = () => {
  const Asterisk = styled(Typography, {
    name: 'MuiFormLabel',
    slot: 'Asterisk',
    overridesResolver: (props, styles) => styles.asterisk,
  })({ marginLeft: '0!important', marginRight: '0!important' });

  return (
    <Typography>
      <Asterisk component="span">*</Asterisk> is a required field.
    </Typography>
  );
};
