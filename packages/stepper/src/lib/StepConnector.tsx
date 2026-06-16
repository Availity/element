import MuiStepConnector, { StepConnectorProps as MuiStepConnectorProps } from '@mui/material/StepConnector';

export type StepConnectorProps = MuiStepConnectorProps;

export const StepConnector = (props: StepConnectorProps): React.JSX.Element => <MuiStepConnector {...props} />;
