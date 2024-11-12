import { Dispatch, MouseEvent, useCallback } from 'react';
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

export type DropzoneProps = {
  name: string;
  allowedFileNameCharacters?: string;
  allowedFileTypes?: `.${string}`[];
  // deliverFileOnSubmit?: boolean;
  // deliveryChannel?: string;
  disabled?: boolean;
  // endpoint?: string;
  // fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
  getDropRejectionMessages?: (fileRejectsions: FileRejection[]) => void;
  // isCloud?: boolean;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  onChange?: (files: File[]) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  totalSize: number;
  setTotalSize: Dispatch<React.SetStateAction<number>>;
  // onDeliveryError?: (responses: unknown[]) => void;
  // onDeliverySuccess?: (responses: unknown[]) => void;
  // onFileDelivery?: (upload: Upload) => void;
  // onFilePreUpload?: ((upload: Upload) => boolean)[];
};

export const Dropzone = ({
  // allowedFileNameCharacters,
  allowedFileTypes = [],
  disabled,
  getDropRejectionMessages,
  maxFiles,
  maxSize,
  multiple,
  name,
  onChange,
  onClick,
  setTotalSize,
  totalSize,
}: DropzoneProps) => {
  const { setValue, watch } = useFormContext();

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      // Verify we have not exceeded max number of files
      if (maxFiles && acceptedFiles.length > maxFiles) {
        acceptedFiles.slice(0, Math.max(9, maxFiles));
      }

      let newSize = 0;
      for (const file of acceptedFiles) {
        newSize += file.size;
      }

      setTotalSize((prev) => prev + newSize);

      const previous = watch(name) ?? [];

      // Set accepted files to form context
      setValue(name, previous.concat(acceptedFiles));

      if (getDropRejectionMessages) getDropRejectionMessages(fileRejections);
    },
    [getDropRejectionMessages]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const accept = allowedFileTypes.join(',');

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
              inputProps={getInputProps({
                multiple,
                accept,
              })}
              onChange={onChange}
              setTotalSize={setTotalSize}
              totalSize={totalSize}
            />
          </>
        </Stack>
      </Box>
    </Box>
  );
};
