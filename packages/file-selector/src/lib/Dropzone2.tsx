import { useCallback } from 'react';
import type { MouseEvent } from 'react';
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
import { dedupeErrors, formatBytes } from './util';
import { createCounter, DropzoneContainer, innerBoxStyles, outerBoxStyles } from './Dropzone';
import type { DropzoneProps } from './Dropzone';

const counter = createCounter();

export type Dropzone2Props = DropzoneProps & {
  uploadOptions: UploadOptions;
};

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

/**
 * `<Dropzone2 />` is the future of the the `<Dropzone />` component. In a
 * future release, the `<Dropzone />` and `<Dropzone2 />` components will be
 * consolidated into a single component.
 *
 * `<Dropzone2 />` adds the `uploadOptions` prop that previously existed on
 * `<FileSelector />`.
 */
export const Dropzone2 = ({
  allowedFileTypes = [],
  disabled,
  enableDropArea = true,
  maxFiles,
  maxSize,
  maxTotalSize,
  multiple,
  name,
  onChange,
  onClick,
  onDrop,
  setFileRejections,
  setTotalSize,
  uploadOptions,
  validator,
}: Dropzone2Props) => {
  const { getValues, setValue, watch } = useFormContext();

  const accept = allowedFileTypes.join(',');

  const handleValidation = useCallback(
    (file: File) => {
      const previous: Upload[] = watch(name) ?? [];
      const errors: FileError[] = [];

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
      
      // Check for allowed file name characters
      if (uploadOptions.allowedFileNameCharacters) {
        const fileName = file.name.substring(0, file.name.lastIndexOf('.'));
        const regExp = new RegExp(`([^${uploadOptions.allowedFileNameCharacters}])`, 'g');
        
        if (fileName.match(regExp) !== null) {
          errors.push({
            code: 'invalid-file-name-characters',
            message: 'File name contains characters not allowed',
          });
        }
      }
      
      // Explicit check for allowed file types
      if (allowedFileTypes.length > 0) {
        const fileName = file.name;
        const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
        
        // Convert all file types to lowercase for comparison
        const lowerCaseAllowedTypes = allowedFileTypes.map(type => type.toLowerCase());
        
        if (!lowerCaseAllowedTypes.includes(fileExt)) {
          errors.push({
            code: 'file-invalid-type',
            message: `File type ${fileExt} is not allowed`,
          });
        }
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
    [maxFiles, validator, uploadOptions.allowedFileNameCharacters, allowedFileTypes, watch, name]
  );

  const handleOnDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: (FileRejection & { id: number })[], event: DropEvent) => {
      let newSize = 0;
      for (const file of acceptedFiles) {
        newSize += file.size;
      }

      setTotalSize((prev) => prev + newSize);

      const previous = watch(name) ?? [];

      if (maxTotalSize) {
        // Calculate current total size
        const currentTotalSize = previous.reduce((sum: number, upload: Upload) => sum + upload.file.size, 0);
        let newSize = 0;

        const availableSize = Math.max(0, maxTotalSize - currentTotalSize);
        let sizeCounter = 0;

        // Find the index where we exceed the total size limit
        const cutoffIndex = acceptedFiles.findIndex((file) => {
          sizeCounter += file.size;
          return sizeCounter > availableSize;
        });

        // If we found files that exceed the limit
        if (cutoffIndex !== -1) {
          // Files that fit within the size limit
          const filesToAdd = acceptedFiles.slice(0, cutoffIndex === 0 ? 0 : cutoffIndex);

          // Create rejection for excess files
          fileRejections.push({
            file: acceptedFiles[cutoffIndex],
            errors: [
              {
                code: 'upload-too-large',
                message: `Total upload size exceeds the limit of ${formatBytes(maxTotalSize)}.`,
              },
            ],
            id: counter.increment(),
          });

          // Update acceptedFiles to only include files that fit
          acceptedFiles = filesToAdd;
        }

        // Calculate size of accepted files for the state update
        newSize = acceptedFiles.reduce((sum, file) => sum + file.size, 0);
        setTotalSize((prev) => prev + newSize);
      }

      // Set accepted files to form context
      const remainingSlots = maxFiles ? Math.max(0, maxFiles - previous.length) : acceptedFiles.length;
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);
      const uploads = filesToAdd.map((file) => startUpload(file, uploadOptions));
      setValue(name, previous.concat(await Promise.all(uploads)));

      // Add rejections for excess files if needed
      if (maxFiles && acceptedFiles.length > remainingSlots) {
        fileRejections.push({
          file: acceptedFiles[remainingSlots], // Use the first excess file
          errors: [
            {
              code: 'too-many-files',
              message: `Too many files. You may only upload ${maxFiles} file(s).`,
            },
          ],
          id: counter.increment(),
        });
      }

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
    [setFileRejections, setTotalSize, watch, name, maxTotalSize, maxFiles, uploadOptions, setValue, onDrop]
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
    if (onClick) onClick(event);
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
