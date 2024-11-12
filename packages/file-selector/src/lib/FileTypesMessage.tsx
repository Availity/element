import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

type FileTypesMessageProps = {
  /** Allowed file type extensions. Each extension should be prefixed with a ".". eg: .txt, .pdf, .png */
  allowedFileTypes: `.${string}`[];
  /** Maximum size per file in bytes. This will be formatted. eg: 1000 * 20 = 20 KB */
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
