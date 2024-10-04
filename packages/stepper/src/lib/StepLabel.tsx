import MuiStepLabel, { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

import { StepIcon, StepIconProps } from './StepIcon';

export type StepLabelProps = Pick<StepIconProps, 'warning'> & MuiStepLabelProps;

const StepLabel = ({ children, error, warning, ...rest }: StepLabelProps): JSX.Element => {
  return (
    <MuiStepLabel StepIconProps={{ error, warning }} StepIconComponent={StepIcon} error={error} {...rest}>
      {children}
    </MuiStepLabel>
  );
};

StepLabel.muiName = MuiStepLabel.muiName;

export { StepLabel };
