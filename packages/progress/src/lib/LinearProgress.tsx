import { SuccessCircleIcon } from '@availity/mui-icon';
import { Box, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import MuiLinearProgress, { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';

export type LinearProgressProps = Omit<MuiLinearProgressProps, 'color'> & { hidePercentage?: boolean };

export const LinearProgress = ({ variant = 'determinate', value = 0, sx, hidePercentage = false, ...props }: LinearProgressProps) => {
  return (
    <Stack direction="row" alignItems="center">
      <Box sx={{ width: '100%', mr: 0.5 }}>
        <MuiLinearProgress variant={variant} {...props} value={value} color="success" sx={{ width: '100%', ...sx }} />
      </Box>
      {value === 100 && <SuccessCircleIcon color="success" data-icon="complete" />}
      {!hidePercentage && (
        <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>{`${Math.round(value)}%`}</Typography>
      )}
    </Stack>
  );
};
