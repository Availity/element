import { styled } from '@mui/material/styles';
import { default as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material/Tabs';

export interface TabsProps
  extends Omit<
    MuiTabsProps,
    'centered' | 'centerRipple' | 'focusRipple' | 'orientation' | 'TouchRippleProps' | 'touchRippleRef'
  > {
  /** The hierarchy level of the tabs, i.e. `primary` for top level tabs, `secondary` for inner tabs. */
  level?: "primary" | "secondary";
}

const PrimaryTabs = styled(MuiTabs, {
  name: 'MuiTabs',
  slot: 'AvPrimary',
  overridesResolver: (props, styles) => styles.avPrimary,
})({});

const SecondaryTabs = styled(MuiTabs, {
  name: 'MuiTabs',
  slot: 'AvSecondary',
  overridesResolver: (props, styles) => styles.avSecondary,
})<{ ownerState: MuiTabsProps }>(({ theme }) => ({
  '.MuiTabs-indicator': {
    display: 'none'
  },
  '.MuiTab-root': {
    borderTopLeftRadius: '.25rem',
    borderTopRightRadius: '.25rem',
    border: '1px solid',
    borderColor: 'transparent',
    marginBottom: '-1px',
    '&:hover, &:hover.Mui-selected': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focusVisible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      backgroundColor: 'inherit',
      outlineOffset: '-2px',
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      borderBottomColor: theme.palette.background.paper,
    },
  },
}));

export const Tabs = ({level = "primary", ...rest}: TabsProps): JSX.Element => {
  const LevelledTabs = level === 'primary' ? PrimaryTabs : SecondaryTabs;

  return (
    <LevelledTabs {...rest} orientation="horizontal" centered={false}/>
  );
};
