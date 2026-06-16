import MuiStepLabel, { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

import { Typography } from '@availity/mui-typography';
import { StepIcon, StepIconProps } from './StepIcon';

export type StepLabelProps = Pick<StepIconProps, 'warning'> & MuiStepLabelProps;

const StepLabel = ({ children, error, optional, warning, ...rest }: StepLabelProps): React.JSX.Element => {
  if (typeof optional === 'string') {
    optional = <Typography variant="caption" children={optional} />;
  }
  return (
    <MuiStepLabel
      StepIconProps={{ error, warning }}
      StepIconComponent={StepIcon}
      error={error}
      optional={optional}
      {...rest}
    >
      {children}
    </MuiStepLabel>
  );
};

StepLabel.muiName = MuiStepLabel.muiName;

export { StepLabel };
