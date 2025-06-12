import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

export type HeaderMessageProps = {
  /**
   * Maximum number of files allowed
   */
  maxFiles: number;
  /**
   * Maximum size of each file
   */
  maxSize: number;
  /**
   * Maximum combined total size of all files
   */
  maxTotalSize?: number;
};

export const HeaderMessage = ({ maxFiles, maxSize, maxTotalSize }: HeaderMessageProps) => {
  return (
    <Typography variant="h6">
      Attach up to {maxFiles} file(s), with a maximum individual size of {formatBytes(maxSize)}{' '}
      {maxTotalSize && `and a maximum total size of ${formatBytes(maxTotalSize)}`}
    </Typography>
  );
};
