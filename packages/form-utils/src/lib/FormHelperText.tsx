import MuiFormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material/FormHelperText';
import { WarningTriangleIcon } from '@availity/mui-icon';

export type FormHelperTextProps = MuiFormHelperTextProps;

export const FormHelperText = ({ children, ...props }: FormHelperTextProps): React.JSX.Element => (
  <MuiFormHelperText {...props}>
    <WarningTriangleIcon sx={{ marginRight: '4px' }} titleAccess="Error" aria-hidden={false} />
    {children}
  </MuiFormHelperText>
);
