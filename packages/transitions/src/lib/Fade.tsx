import MuiFade, { FadeProps as MuiFadeProps } from '@mui/material/Fade';

export type FadeProps = MuiFadeProps;

export const Fade = (props: FadeProps): JSX.Element => {
  return <MuiFade {...props} />;
};
