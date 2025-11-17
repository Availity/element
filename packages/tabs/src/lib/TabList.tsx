import { default as MuiTabList, TabListProps as MuiTabListProps } from '@mui/lab/TabList';
import { TabsProps, secondaryTabStyling } from './Tabs';
import { styled } from '@mui/material/styles';

export type TabListProps = Omit<
    MuiTabListProps,
    'centered' | 'centerRipple' | 'focusRipple' | 'orientation' | 'TouchRippleProps' | 'touchRippleRef'
  > & Pick<TabsProps, 'level'>

const PrimaryTabs = styled(MuiTabList, {
  name: 'MuiTabs',
  slot: 'AvPrimary',
  overridesResolver: (props, styles) => styles.avPrimary,
})({});

const SecondaryTabs = styled(MuiTabList, {
  name: 'MuiTabs',
  slot: 'AvSecondary',
  overridesResolver: (props, styles) => styles.avSecondary,
})<{ ownerState: MuiTabListProps }>(secondaryTabStyling);

export const TabList = ({ level = 'primary', ...rest }: TabListProps): React.JSX.Element => {
  const LevelledTabs = level === 'primary' ? PrimaryTabs : SecondaryTabs;
  return (
    <LevelledTabs {...rest} orientation="horizontal" centered={false}/>
  );
};
