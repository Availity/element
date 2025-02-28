import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

export type FileTypesMessageProps = {
  /**
   * Allowed file type extensions. Each extension should be prefixed with a ".". eg: .txt, .pdf, .png
   */
  allowedFileTypes?: `.${string}`[];
  /**
   * Maximum size per file in bytes. This will be formatted. eg: 1024 * 20 = 20 KB
   */
  maxFileSize?: number;
  variant?: 'caption' | 'body2';
};

export const FileTypesMessage = ({
  allowedFileTypes = [],
  maxFileSize,
  variant = 'caption',
}: FileTypesMessageProps) => {
  const fileSizeMsg = typeof maxFileSize === 'number' ? `Maximum file size is ${formatBytes(maxFileSize)}. ` : null;
  const fileTypesMsg =
    allowedFileTypes.length > 0
      ? `Supported file types include: ${allowedFileTypes.join(', ')}`
      : 'All file types allowed.';

  return (
    <Typography variant={variant}>
      {fileSizeMsg}
      {fileTypesMsg}
    </Typography>
  );
};
