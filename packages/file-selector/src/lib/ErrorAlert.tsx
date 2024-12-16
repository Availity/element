import { Alert, AlertTitle } from '@availity/mui-alert';
import type { FileRejection } from 'react-dropzone';

const codes: Record<string, string> = {
  'file-too-large': 'File exceeds maximum size',
  'file-invalid-type': 'File has an invalid type',
  'file-too-small': 'File is smaller than minimum size',
  'too-many-file': 'Too many files',
  'duplicate-name': 'Duplicate file selected',
};

export type ErrorAlertProps = {
  errors: FileRejection['errors'];
  fileName: string;
  id: number;
  onClose: () => void;
};

export const ErrorAlert = ({ errors, fileName, id, onClose }: ErrorAlertProps) => {
  if (errors.length === 0) return null;

  return (
    <>
      {errors.map((error) => {
        return (
          <Alert severity="error" onClose={onClose} key={`${id}-${error.code}`}>
            <AlertTitle>
              {codes[error.code] || 'Error'}: {fileName}
            </AlertTitle>
            {error.message}
          </Alert>
        );
      })}
    </>
  );
};
