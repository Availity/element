import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

export type HeaderMessageProps = {
  maxFiles: number;
  maxSize: number;
};

export const HeaderMessage = ({ maxFiles, maxSize }: HeaderMessageProps) => {
  return (
    <Typography variant="h6">
      Attach up to {maxFiles} file(s), with a maximum of {formatBytes(maxSize)}
    </Typography>
  );
};
