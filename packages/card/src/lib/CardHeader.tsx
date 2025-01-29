import { default as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import { StatusChip, StatusChipProps } from '@availity/mui-chip';

type CardStatusChipProps = StatusChipProps & {
  position: 'bottom' | 'right';
};

export interface CardHeaderProps extends MuiCardHeaderProps {
  children?: React.ReactNode;
  statusChipProps?: CardStatusChipProps;
  logo?: React.ReactNode;
}

export const CardHeader = ({
  titleTypographyProps,
  subheaderTypographyProps,
  statusChipProps,
  action,
  subheader,
  title,
  logo,
  ...rest
}: CardHeaderProps): JSX.Element => {
  return (
    <MuiCardHeader
      {...rest}
      title={
        logo ? (
          <>
            {logo}
            <br />
            {title}
          </>
        ) : (
          title
        )
      }
      titleTypographyProps={{
        ...titleTypographyProps,
        variant: 'h5',
      }}
      subheaderTypographyProps={{ ...subheaderTypographyProps, variant: 'body2' }}
      subheader={
        statusChipProps && statusChipProps.position === 'bottom' ? (
          <>
            {subheader}
            <br />
            <StatusChip {...statusChipProps} />
          </>
        ) : (
          subheader
        )
      }
      action={
        statusChipProps && statusChipProps.position === 'right' ? (
          <>
            <StatusChip {...statusChipProps} />
            {action}
          </>
        ) : (
          action
        )
      }
    />
  );
};
