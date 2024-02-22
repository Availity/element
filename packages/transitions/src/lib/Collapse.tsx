import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse';

export type CollapseProps = MuiCollapseProps;

export const Collapse = (props: CollapseProps): JSX.Element => {
  return <MuiCollapse {...props} />;
};
