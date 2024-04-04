import { useTheme } from '@mui/material/styles';
import { default as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

export interface CardHeaderProps extends Omit<MuiCardHeaderProps, 'avatar'> {
  children?: React.ReactNode;
}

export const CardHeader = ({
  titleTypographyProps,
  subheaderTypographyProps,
  ...rest
}: CardHeaderProps): JSX.Element => {
  const theme = useTheme();

  /**
   * This is ugly, but it allows us to define a default variant while retaining the rest of the
   * titleTypographyProps that the user passed.
   */
  const titleVariant = theme.components?.MuiCardHeader?.defaultProps?.titleTypographyProps?.variant;

  return (
    <MuiCardHeader
      {...rest}
      titleTypographyProps={{
        variant: titleVariant,
        ...titleTypographyProps,
      }}
      subheaderTypographyProps={{ variant: 'subtitle2', ...subheaderTypographyProps }}
    />
  );
};
