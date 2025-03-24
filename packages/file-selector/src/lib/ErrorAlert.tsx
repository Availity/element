import { Alert, AlertTitle } from '@availity/mui-alert';
import { List, ListItem } from '@availity/mui-list';
import type { FileRejection } from 'react-dropzone';

const codes: Record<string, string> = {
  'file-too-large': 'File exceeds maximum size',
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

export const ErrorAlert = ({ errors, fileName, id, onClose }: ErrorAlertProps) => {
  if (errors.length === 0) return null;

  return (
    <Alert severity="error" onClose={onClose}>
      {errors.length > 1 ?
        <>
          <AlertTitle>
            There were {errors.length} error(s) found when uploading {fileName}
          </AlertTitle>
          <List sx={{
            listStyleType: 'disc',
            listStylePosition: 'inside',
            marginLeft: 1,
            '.MuiListItem-root': {
              display: 'list-item'
            }
          }} disablePadding>
            <>
              {errors.map((error) => {
                return (
                  <ListItem disableGutters disablePadding divider={false} key={`${id}-${error.code}`}>
                    {error.message}
                  </ListItem>
                );
              })}
            </>
          </List>
        </>
      :
        <>
          <AlertTitle>
            {codes[errors[0].code] || 'Error'}: {fileName}
          </AlertTitle>
          {errors[0].message}
        </>
      }
    </Alert>
  );
};
