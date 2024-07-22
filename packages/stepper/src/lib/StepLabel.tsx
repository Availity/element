import MuiStepLabel, { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

import { StepIcon } from './StepIcon';

export type StepLabelProps = {
  warning?: boolean;
} & MuiStepLabelProps;

export const StepLabel = ({ children, error, warning, ...rest }: StepLabelProps): JSX.Element => {
  return (
    <MuiStepLabel StepIconProps={{ error, warning }} StepIconComponent={StepIcon} error={error} {...rest}>
      {children}
    </MuiStepLabel>
  );
};
