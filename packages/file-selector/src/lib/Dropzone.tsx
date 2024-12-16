import { Dispatch, MouseEvent, useCallback, ChangeEvent } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { Divider } from '@availity/mui-divider';
import { CloudDownloadIcon } from '@availity/mui-icon';
import { Box, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { FilePickerBtn } from './FilePickerBtn';
import { useFormContext } from 'react-hook-form';

const outerBoxStyles = {
  backgroundColor: 'background.canvas',
  border: '1px dotted',
  borderRadius: '4px',
  padding: '2rem',
};

const innerBoxStyles = {
  width: '100%',
  height: '100%',
};

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
  name: string;
  allowedFileTypes?: `.${string}`[];
  // deliverFileOnSubmit?: boolean;
  // deliveryChannel?: string;
  disabled?: boolean;
  // fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  setFileRejections?: (fileRejectsions: (FileRejection & { id: number })[]) => void;
  setTotalSize: Dispatch<React.SetStateAction<number>>;
  // onDeliveryError?: (responses: unknown[]) => void;
  // onDeliverySuccess?: (responses: unknown[]) => void;
  // onFileDelivery?: (upload: Upload) => void;
};

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
        <Stack spacing={2} divider={<Divider>OR</Divider>} alignItems="center" justifyContent="center">
          <>
            <CloudDownloadIcon fontSize="xlarge" color="secondary" />
            <Typography variant="subtitle2" fontWeight="700">
              Drag and Drop Files Here
            </Typography>
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
