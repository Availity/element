import { useCallback } from 'react';
import type { Dispatch, MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import { useDropzone } from 'react-dropzone';
import type { DropEvent, FileError, FileRejection } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { Divider } from '@availity/mui-divider';
import { CloudUploadIcon, PlusIcon } from '@availity/mui-icon';
import { Box, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import Upload from '@availity/upload-core';
import type { UploadOptions } from '@availity/upload-core';
import type { OnSuccessPayload } from 'tus-js-client';

import { FilePickerBtn } from './FilePickerBtn';
import { dedupeErrors, getFileExtension } from './util';

const outerBoxStyles = {
  backgroundColor: 'background.secondary',
  border: '1px dotted',
  borderColor: 'secondary.light',
  borderRadius: '4px',
  padding: '2rem',
  '&:hover': {
    backgroundColor: 'background.primary',
    borderColor: 'border.primary',
  },
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
   * Whether to enable the dropzone area
   */
  enableDropArea?: boolean;
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
  onChange?: (event: DropEvent) => void;
  /**
   * Handler called when the file picker button is clicked
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * More sophisticated version of "onChange". This is the recommend function to use for changes to the form state
   */
  onDrop?: (acceptedFiles: File[], fileRejections: (FileRejection & { id: number })[], event: DropEvent) => void;
  /**
   * Callback to handle rejected files that don't meet validation criteria
   */
  setFileRejections?: (fileRejections: (FileRejection & { id: number })[]) => void;
  /**
   * Callback to update the total size of all uploaded files
   */
  setTotalSize: Dispatch<React.SetStateAction<number>>;
  uploadOptions: UploadOptions;
  /**
   * Validation function used for custom validation that is not covered with the other props
   * */
  validator?: (file: File) => FileError | FileError[] | null;
};

const DropzoneContainer = styled(Box, { name: 'AvDropzoneContainer', slot: 'root' })({
  '.MuiDivider-root': {
    width: '196px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}) as typeof MuiBox;

type Options = {
  onError?: (error: Error) => void;
  onSuccess?: (response: OnSuccessPayload) => void;
  onProgress?: () => void;
  onChunkComplete?: (chunkSize: number, bytesAccepted: number, bytesTotal: number | null) => void;
} & UploadOptions;

async function startUpload(file: File, options: Options) {
  const { onSuccess, onError, onProgress, onChunkComplete, ...uploadOptions } = options;
  const upload = new Upload(file, uploadOptions);

  await upload.generateId();

  if (onSuccess) upload.onSuccess.push(onSuccess);
  if (onError) upload.onError.push(onError);
  if (onProgress) upload.onProgress.push(onProgress);
  if (onChunkComplete) upload.onChunkComplete.push(onChunkComplete);

  upload.start();

  return upload;
}

export const Dropzone = ({
  allowedFileTypes = [],
  disabled,
  enableDropArea = true,
  maxFiles,
  maxSize,
  multiple,
  name,
  onChange,
  onClick,
  onDrop,
  setFileRejections,
  setTotalSize,
  uploadOptions,
  validator,
}: DropzoneProps) => {
  const { getValues, setValue, watch } = useFormContext();

  const accept = allowedFileTypes.join(',');

  const handleValidation = useCallback(
    (file: File) => {
      const previous: Upload[] = watch(name) ?? [];
      const errors: FileError[] = [];

      // const ext = getFileExtension(file.name);
      // const isAllowedExtension = accept.includes(`.${ext}`);
      // if (!isAllowedExtension) {
      //   errors.push({
      //     code: 'invalid-type',
      //     message: `File type .${ext} is not allowed`,
      //   });
      // }

      const isDuplicate = previous.some((prev) => prev.file.name === file.name);
      if (isDuplicate) {
        errors.push({
          code: 'duplicate-name',
          message: 'A file with this name already exists',
        });
      }

      const hasMaxFiles = maxFiles && previous.length >= maxFiles;
      if (hasMaxFiles) {
        errors.push({
          code: 'too-many-files',
          message: `Too many files. You may only upload ${maxFiles} file(s).`,
        });
      }

      if (validator) {
        const validatorErrors = validator(file);
        if (validatorErrors) {
          if (Array.isArray(validatorErrors)) {
            errors.push(...validatorErrors);
          } else {
            errors.push(validatorErrors);
          }
        }
      }

      return errors.length > 0 ? dedupeErrors(errors) : null;
    },
    [maxFiles, validator]
  );

  const handleOnDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: (FileRejection & { id: number })[], event: DropEvent) => {
      let newSize = 0;
      for (const file of acceptedFiles) {
        newSize += file.size;
      }

      setTotalSize((prev) => prev + newSize);

      const previous = watch(name) ?? [];

      // Set accepted files to form context
      const uploads = acceptedFiles.map((file) => startUpload(file, uploadOptions));
      setValue(name, previous.concat(await Promise.all(uploads)));

      if (fileRejections.length > 0) {
        const TOO_MANY_FILES_CODE = 'too-many-files';
        let hasTooManyFiles = false;

        fileRejections = fileRejections.reduce(
          (acc, rejection) => {
            const isTooManyFiles = rejection.errors.some((error) => error.code === TOO_MANY_FILES_CODE);

            if (isTooManyFiles) {
              // Only add the first too-many-files rejection
              if (!hasTooManyFiles) {
                hasTooManyFiles = true;
                acc.push({
                  ...rejection,
                  id: counter.increment(),
                });
              }
            } else {
              // Add all other rejection types normally
              acc.push({
                ...rejection,
                id: counter.increment(),
              });
            }

            return acc;
          },
          [] as Array<(typeof fileRejections)[0] & { id: number }>
        );
      }

      if (setFileRejections) setFileRejections(fileRejections);
      if (onDrop) onDrop(acceptedFiles, fileRejections, event);
    },
    [setFileRejections]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleOnDrop,
    maxSize,
    maxFiles,
    disabled,
    multiple,
    accept,
    validator: handleValidation,
  });

  const inputProps = getInputProps({
    multiple,
    accept,
    onChange,
  });

  // Remove role and tabIndex for accessibility
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { role, tabIndex, ...rootProps } = getRootProps();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputProps.onChange) {
      inputProps.onChange(event);
    }
  };

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!enableDropArea && rootProps.onClick) rootProps.onClick(event);
    if (onClick) onClick;
  };

  const getFieldValue = () => {
    const field = getValues();
    return field[name] || [];
  };

  const hasFiles = getFieldValue().length > 0;

  return enableDropArea ? (
    <DropzoneContainer sx={outerBoxStyles} {...rootProps}>
      <Box sx={innerBoxStyles}>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <>
            <CloudUploadIcon fontSize="xlarge" color="secondary" />
            <Typography variant="subtitle2" fontWeight="700">
              Drag and Drop Files Here
            </Typography>
            <Divider flexItem>
              <Typography variant="subtitle2">OR</Typography>
            </Divider>
            <FilePickerBtn
              name={name}
              color="primary"
              disabled={disabled}
              maxSize={maxSize}
              onClick={onClick}
              inputProps={inputProps}
              onChange={handleOnChange}
            >
              Browse Files
            </FilePickerBtn>
          </>
        </Stack>
      </Box>
    </DropzoneContainer>
  ) : (
    <FilePickerBtn
      name={name}
      color="tertiary"
      disabled={disabled}
      maxSize={maxSize}
      onClick={handleOnClick}
      inputProps={inputProps}
      onChange={handleOnChange}
      startIcon={<PlusIcon />}
    >
      {hasFiles ? 'Add More Files' : 'Add File(s)'}
    </FilePickerBtn>
  );
};
