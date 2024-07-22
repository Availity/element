import MuiStepIcon, { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon';
import { CheckCircleIcon, WarningCircleIcon } from '@availity/mui-icon';
import { SvgIconProps } from '@mui/material/SvgIcon';

type Tag = ((props: SvgIconProps) => JSX.Element) | null;

declare module '@mui/material/StepIcon' {
  interface StepIconProps {
    as?: Tag;
    warning?: boolean;
  }
}

export type StepIconProps = { warning?: boolean } & MuiStepIconProps;

export const StepIcon = ({ error, completed, warning, ...rest }: StepIconProps): JSX.Element => {
  let tag: Tag = null;
  if (error) tag = WarningCircleIcon;
  if (warning) tag = (props: SvgIconProps) => <WarningCircleIcon color="warning" {...props} />;
  if (completed) tag = CheckCircleIcon;

  return <MuiStepIcon {...rest} error={error} completed={completed} as={tag} />;
};
