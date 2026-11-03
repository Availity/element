import { Alert, AlertTitle } from '@availity/mui-alert';
import { List, ListItem } from '@availity/mui-list';
import type { FileError, FileRejection } from 'react-dropzone';
import { dedupeErrors, formatBytes } from './util';

const codes: Record<string, string> = {
  'file-too-large': 'File exceeds maximum size',
  'upload-too-large': 'File causes maximum total upload size to be exceeded',
  'file-invalid-type': 'File has an invalid type',
  'file-too-small': 'File is smaller than minimum size',
  'too-many-file': 'Too many files',
  'duplicate-name': 'Duplicate file selected',
};

export type GetErrorMessageFn = (error: FileError) => string | null | undefined;

export type ErrorAlertProps = {
  /**
   * Array of file rejection errors
   */
  errors: FileRejection['errors'];
  /**
   * Name of the file that encountered errors
   */
  fileName: string;
  /**
   * Unique identifier for the error alert
   */
  id: number;
  /**
   * Custom function to format error messages. Return null/undefined to use default message.
   */
  getErrorMessage?: GetErrorMessageFn;

  onClose: () => void;
};

const FILE_SIZE_REGEX = /\b(\d+)\b/;

export const formatFileTooLarge = (message: string): string => {
  const fileSize = message.match(FILE_SIZE_REGEX);

  if (!fileSize) return message;

  const formattedSize = formatBytes(Number(fileSize[0]));

  return message.replace(` bytes`, '').replace(FILE_SIZE_REGEX, formattedSize);
};

export const ErrorAlert = ({ errors, fileName, id, getErrorMessage, onClose }: ErrorAlertProps) => {
  if (errors.length === 0) return null;

  // Dedupe errors by code (e.g., react-dropzone may produce multiple file-invalid-type errors)
  const uniqueErrors = dedupeErrors(errors);

  const formatMessage = (error: FileRejection['errors'][0]) => {
    // Try custom error message first
    const customMessage = getErrorMessage?.(error);
    if (customMessage) return customMessage;
    
    // Fall back to default formatting
    if (error.code === 'file-too-large') {
      return formatFileTooLarge(error.message);
    }
    return error.message;
  };

  return (
    <Alert severity="error" onClose={onClose}>
      {uniqueErrors.length > 1 ? (
        <>
          <AlertTitle>
            There were {uniqueErrors.length} error(s) found when uploading {fileName}
          </AlertTitle>
          <List
            sx={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              marginLeft: 1,
              '.MuiListItem-root': {
                display: 'list-item',
              },
            }}
            disablePadding
          >
            <>
              {uniqueErrors.map((error) => (
                <ListItem disableGutters disablePadding divider={false} key={`${id}-${error.code}`}>
                  {formatMessage(error)}
                </ListItem>
              ))}
            </>
          </List>
        </>
      ) : (
        <>
          <AlertTitle>
            {codes[uniqueErrors[0].code] || 'Error'}: {fileName}
          </AlertTitle>
          {formatMessage(uniqueErrors[0])}
        </>
      )}
    </Alert>
  );
};
