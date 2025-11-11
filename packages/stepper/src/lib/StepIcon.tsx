import MuiStepIcon, { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon';
import { SuccessCircleIcon, WarningCircleIcon } from '@availity/mui-icon';
import { SvgIconProps } from '@mui/material/SvgIcon';

type Tag = ((props: SvgIconProps) => React.JSX.Element) | null;

declare module '@mui/material/StepIcon' {
  interface StepIconProps {
    as?: Tag;
    warning?: boolean;
  }
}

export type StepIconProps = {
  /** If `true`, the step will have a warning icon. */
  warning?: boolean
} & MuiStepIconProps;

export const StepIcon = ({ error, completed, warning, ...rest }: StepIconProps): React.JSX.Element => {
  let tag: Tag = null;
  if (error) tag = WarningCircleIcon;
  if (warning) tag = (props: SvgIconProps) => <WarningCircleIcon color="warning" {...props} />;
  if (completed) tag = SuccessCircleIcon;

  return <MuiStepIcon {...rest} error={error} completed={completed} as={tag} />;
};
