import { Typography } from '@availity/mui-typography';

import { formatBytes } from './util';

export type FileTypesMessageProps = {
  /**
   * Allowed file type extensions. Each extension should be prefixed with a ".". eg: .txt, .pdf, .png
   */
  allowedFileTypes?: `.${string}`[];
  /**
   * Overrides the standard file size message
   */
  customSizeMessage?: React.ReactNode;
  /**
   * Overrides the standard total upload size message
   */
  customTotalSizeMessage?: React.ReactNode;
  /**
   * Overrides the standard file types message
   */
  customTypesMessage?: React.ReactNode;
  /**
   * Maximum size per file in bytes. This will be formatted. eg: 1024 * 20 = 20 KB
   */
  maxFileSize?: number;
  /**
   * Maximum size of the total upload in bytes. This will be formatted. eg: 1024 * 20 = 20 KB
   */
  maxTotalSize?: number;
  variant?: 'caption' | 'body2';
};

export const FileTypesMessage = ({
  allowedFileTypes = [],
  customSizeMessage,
  customTotalSizeMessage,
  customTypesMessage,
  maxFileSize,
  maxTotalSize,
  variant = 'caption',
}: FileTypesMessageProps) => {
  const fileSizeMsg =
    customSizeMessage ||
    (typeof maxFileSize === 'number' ? `Maximum file size is ${formatBytes(maxFileSize)}. ` : null);
  const totalFileSizeMsg =
    customTotalSizeMessage ||
    (typeof maxTotalSize === 'number' ? `Maximum total upload size is ${formatBytes(maxTotalSize)}. ` : null);
  const fileTypesMsg =
    customTypesMessage ||
    (allowedFileTypes.length > 0
      ? `Supported file types include: ${allowedFileTypes.join(', ')}`
      : 'All file types allowed.');
  return (
    <Typography variant={variant}>
      {fileSizeMsg}
      {totalFileSizeMsg}
      {fileTypesMsg}
    </Typography>
  );
};
