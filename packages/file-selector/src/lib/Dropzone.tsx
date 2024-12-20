import { Dispatch, MouseEvent, useCallback, ChangeEvent } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { Divider } from '@availity/mui-divider';
import { CloudUploadIcon } from '@availity/mui-icon';
import { Box, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { FilePickerBtn } from './FilePickerBtn';
import { useFormContext } from 'react-hook-form';

const outerBoxStyles = {
  backgroundColor: 'background.hover',
  border: '1px dotted',
  borderColor: 'secondary.light',
  borderRadius: '4px',
  padding: '2rem',
};

const innerBoxStyles = {
  width: '100%',
  height: '100%',
};

/** Counter for creating unique id */
const createCounter = () => {
  let id = 0;
  const increment = () => (id += 1);
  return {
    id,
    increment,
  };
};

const counter = createCounter();

export type DropzoneProps = {
  /**
   * Name given to the input field. Used by react-hook-form
   */
  name: string;
  /**
   * List of allowed file extensions (e.g. ['.pdf', '.doc']). Each extension must start with a dot
   */
  allowedFileTypes?: `.${string}`[];
  /**
   * Whether the dropzone is disabled
   */
  disabled?: boolean;
  /**
   * Maximum number of files that can be uploaded
   */
  maxFiles?: number;
  /**
   * Maximum size of each file in bytes
   */
  maxSize?: number;
  /**
   * Whether multiple file selection is allowed
   */
  multiple?: boolean;
  /**
   * Handler called when the file input's value changes
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Handler called when the file picker button is clicked
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Callback to handle rejected files that don't meet validation criteria
   */
  setFileRejections?: (fileRejections: (FileRejection & { id: number })[]) => void;
  /**
   * Callback to update the total size of all uploaded files
   */
  setTotalSize: Dispatch<React.SetStateAction<number>>;
};

// The types below were props used in the availity-react implementation.
// Perserving this here in case it needs to be added back
// deliverFileOnSubmit?: boolean;
// deliveryChannel?: string;
// fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
// onDeliveryError?: (responses: unknown[]) => void;
// onDeliverySuccess?: (responses: unknown[]) => void;
// onFileDelivery?: (upload: Upload) => void;

export const Dropzone = ({
  allowedFileTypes = [],
  disabled,
  maxFiles,
  maxSize,
  multiple,
  name,
  onChange,
  onClick,
  setFileRejections,
  setTotalSize,
}: DropzoneProps) => {
  const { setValue, watch } = useFormContext();

  const validator = useCallback(
    (file: File) => {
      const previous: File[] = watch(name) ?? [];

      const isDuplicate = previous.some((prev) => prev.name === file.name);
      if (isDuplicate) {
        return {
          code: 'duplicate-name',
          message: 'A file with this name already exists',
        };
      }

      const hasMaxFiles = maxFiles && previous.length >= maxFiles;
      if (hasMaxFiles) {
        return {
          code: 'too-many-files',
          message: `Too many files. You may only upload ${maxFiles} file(s).`,
        };
      }

      return null;
    },
    [maxFiles]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: (FileRejection & { id: number })[]) => {
      let newSize = 0;
      for (const file of acceptedFiles) {
        newSize += file.size;
      }

      setTotalSize((prev) => prev + newSize);

      const previous = watch(name) ?? [];

      // Set accepted files to form context
      setValue(name, previous.concat(acceptedFiles));

      if (fileRejections.length > 0) {
        for (const rejection of fileRejections) {
          rejection.id = counter.increment();
        }
      }

      if (setFileRejections) setFileRejections(fileRejections);
    },
    [setFileRejections]
  );

  const accept = allowedFileTypes.join(',');

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize,
    maxFiles,
    disabled,
    multiple,
    accept,
    validator,
  });

  const inputProps = getInputProps({
    multiple,
    accept,
    onChange,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputProps.onChange) {
      inputProps.onChange(event);
    }
  };

  return (
    <Box sx={outerBoxStyles} {...getRootProps()}>
      <Box sx={innerBoxStyles}>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <>
            <CloudUploadIcon fontSize="xlarge" color="secondary" />
            <Typography variant="subtitle2" fontWeight="700">
              Drag and Drop Files Here
            </Typography>
            <Divider>OR</Divider>
            <FilePickerBtn
              name={name}
              color="primary"
              disabled={disabled}
              maxSize={maxSize}
              onClick={onClick}
              inputProps={inputProps}
              onChange={handleOnChange}
            />
          </>
        </Stack>
      </Box>
    </Box>
  );
};
