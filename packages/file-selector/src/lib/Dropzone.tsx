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

import { FilePickerBtn } from './FilePickerBtn';
import { formatBytes } from './util';

export const outerBoxStyles = {
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

export const innerBoxStyles = {
  width: '100%',
  height: '100%',
};

/** Counter for creating unique id */
export const createCounter = () => {
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
   * Regular expression pattern of allowed characters in file names
   * @example "a-zA-Z0-9-_."
   */
  allowedFileNameCharacters?: string;
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
   * Maximum size of total upload in bytes
   */
  maxTotalSize?: number;
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
  /**
   * Validation function used for custom validation that is not covered with the other props
   * */
  validator?: (file: File) => FileError | FileError[] | null;
};

export const DropzoneContainer = styled(Box, { name: 'AvDropzoneContainer', slot: 'root' })({
  '.MuiDivider-root': {
    width: '196px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}) as typeof MuiBox;

export const Dropzone = ({
  allowedFileTypes = [],
  allowedFileNameCharacters,
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
  validator,
}: DropzoneProps) => {
  const { getValues, setValue, watch } = useFormContext();

  const handleValidation = useCallback(
    (file: File) => {
      const previous: File[] = watch(name) ?? [];
      const errors: FileError[] = [];

      const isDuplicate = previous.some((prev) => prev.name === file.name);
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
      if (allowedFileNameCharacters) {
        const fileName = file.name.substring(0, file.name.lastIndexOf('.'));
        const regExp = new RegExp(`([^${allowedFileNameCharacters}])`, 'g');
        
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

      return errors.length > 0 ? errors : null;
    },
    [maxFiles, validator, allowedFileNameCharacters, watch, name, allowedFileTypes]
  );

  const handleOnDrop = useCallback(
    (acceptedFiles: File[], fileRejections: (FileRejection & { id: number })[], event: DropEvent) => {
      let newSize = 0;
      for (const file of acceptedFiles) {
        newSize += file.size;
      }

      setTotalSize((prev) => prev + newSize);

      const previous = watch(name) ?? [];

      if (maxTotalSize) {
        // Calculate current total size
        const currentTotalSize = previous.reduce((sum: number, file: File) => sum + file.size, 0);
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
      setValue(name, previous.concat(filesToAdd));

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
    [setFileRejections, setTotalSize, watch, name, maxTotalSize, maxFiles, setValue, onDrop]
  );

  const accept = allowedFileTypes.join(',');

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
