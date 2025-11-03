import MuiDialogTitle, { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';
import { AlertIcons } from '@availity/mui-alert';
import { styled } from '@mui/material/styles';

const AlertIcon = styled('div', {
  name: 'MuiDialogTitle',
  slot: 'AvIcon',
  overridesResolver: (props, styles) => styles.avIcon,
})({
  display: 'inline-flex',
  fontSize: 'inherit',
  marginRight: '.5rem',
  verticalAlign: 'text-bottom'
});

export type DialogTitleProps = {
  children?: React.ReactNode;
  /** The corresponding severity for the Alert Icon, if `undefined`/`false` no icon is displayed */
  icon?: keyof typeof AlertIcons;
} & Omit<MuiDialogTitleProps, 'align' | 'variantMapping'>

export const DialogTitle = ({ children, component="h2", icon, variant="h5", ...rest }: DialogTitleProps): React.JSX.Element => {
  return (
    <MuiDialogTitle component={component} variant={variant} {...rest}>
      {icon ? <AlertIcon>{AlertIcons[icon]}</AlertIcon> : null}
      {children}
    </MuiDialogTitle>
  );
};
