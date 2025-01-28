import { default as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

export interface CardHeaderProps extends Omit<MuiCardHeaderProps, 'avatar'> {
  children?: React.ReactNode;
}

export const CardHeader = ({
  titleTypographyProps,
  subheaderTypographyProps,
  ...rest
}: CardHeaderProps): JSX.Element => {
  return (
    <MuiCardHeader
      {...rest}
      titleTypographyProps={{
        ...titleTypographyProps,
        variant: 'h5',
      }}
      subheaderTypographyProps={{ ...subheaderTypographyProps, variant: 'body2' }}
    />
  );
};
