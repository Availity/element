import { Alert, AlertTitle } from '@availity/mui-alert';
import { List, ListItem } from '@availity/mui-list';
import type { FileRejection } from 'react-dropzone';
import { formatBytes } from './util';

const codes: Record<string, string> = {
  'file-too-large': 'File exceeds maximum size',
  'upload-too-large': 'File causes maximum total upload size to be exceeded',
  'file-invalid-type': 'File has an invalid type',
  'file-too-small': 'File is smaller than minimum size',
  'too-many-file': 'Too many files',
  'duplicate-name': 'Duplicate file selected',
};

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

  onClose: () => void;
};

const FILE_SIZE_REGEX = /\b(\d+)\b/;

export const formatFileTooLarge = (message: string): string => {
  const fileSize = message.match(FILE_SIZE_REGEX);

  if (!fileSize) return message;

  const formattedSize = formatBytes(Number(fileSize[0]));

  return message.replace(` bytes`, '').replace(FILE_SIZE_REGEX, formattedSize);
};

export const ErrorAlert = ({ errors, fileName, id, onClose }: ErrorAlertProps) => {
  if (errors.length === 0) return null;

  return (
    <Alert severity="error" onClose={onClose}>
      {errors.length > 1 ? (
        <>
          <AlertTitle>
            There were {errors.length} error(s) found when uploading {fileName}
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
              {errors.map((error) => {
                const message = error.code === 'file-too-large' ? formatFileTooLarge(error.message) : error.message;
                return (
                  <ListItem disableGutters disablePadding divider={false} key={`${id}-${error.code}`}>
                    {message}
                  </ListItem>
                );
              })}
            </>
          </List>
        </>
      ) : (
        <>
          <AlertTitle>
            {codes[errors[0].code] || 'Error'}: {fileName}
          </AlertTitle>
          {errors[0].code === 'file-too-large' ? formatFileTooLarge(errors[0].message) : errors[0].message}
        </>
      )}
    </Alert>
  );
};
