import { default as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import { StatusChip, StatusChipProps } from '@availity/mui-chip';

type CardStatusChipProps = StatusChipProps & {
  /** Setting the position to `bottom` displays the StatusChip under the header and subheader. Setting the position to `right` displays the StatusChip next to the actions section. */
  position: 'bottom' | 'right';
};

export interface CardHeaderProps extends MuiCardHeaderProps {
  /** These props will be forwarded to the StatusChip.  */
  statusChipProps?: CardStatusChipProps;
  /** Section at the top-right of the card for displaying logos. */
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
}: CardHeaderProps): React.JSX.Element => {
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
