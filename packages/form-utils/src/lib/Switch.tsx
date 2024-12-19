import { styled } from '@mui/material';
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import { svgPathData, width, height } from '@fortawesome/free-solid-svg-icons/faCheck';

export type SwitchProps = {
  showCheckedIcon?: boolean;
} & Omit<
  MuiSwitchProps,
  | 'checkedIcon'
  | 'centerRipple'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'focusVisibleClassName'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

const CheckedIconSwitch = styled(MuiSwitch)(({ theme }) => ({
  '& .Mui-checked': {
    '+ .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 12,
        height: 12,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 ${width} ${height}"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="${svgPathData}"/></svg>')`,
        left: 4,
      },
    },
  },
}));

export const Switch = ({ showCheckedIcon, ...args }: SwitchProps): JSX.Element => {
  if (showCheckedIcon && args.size === 'small') {
    return <CheckedIconSwitch {...args} />;
  }
  return <MuiSwitch {...args} />;
};
