import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

type FileTypesMessageProps = {
  allowedFileTypes: `.${string}`[];
  maxFileSize: number;
};

export const FileTypesMessage = ({ allowedFileTypes, maxFileSize }: FileTypesMessageProps) => {
  const fileSizeMsg = typeof maxFileSize === 'number' ? `Maximum file size is ${formatBytes(maxFileSize)}. ` : null;
  const fileTypesMsg =
    allowedFileTypes.length > 0
      ? `Supported file types include: ${allowedFileTypes.join(', ')}.`
      : 'All file types allowed.';

  return (
    <Typography variant="caption">
      {fileSizeMsg}
      {fileTypesMsg}
    </Typography>
  );
};
