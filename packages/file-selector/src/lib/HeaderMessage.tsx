import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

export type HeaderMessageProps = {
  /**
   * Maximum number of files allowed
   */
  maxFiles: number;
  /**
   * Maximum combined total size of all files
   */
  maxSize: number;
};

export const HeaderMessage = ({ maxFiles, maxSize }: HeaderMessageProps) => {
  return (
    <Typography variant="h6">
      Attach up to {maxFiles} file(s), with a maximum individual size of {formatBytes(maxSize)}
    </Typography>
  );
};
