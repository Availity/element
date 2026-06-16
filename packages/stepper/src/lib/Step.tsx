import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step';

export type StepProps = MuiStepProps;

export const Step = ({ children, ...rest }: StepProps): React.JSX.Element => <MuiStep {...rest}>{children}</MuiStep>;
