import { useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import type { DropEvent, FileError, FileRejection } from 'react-dropzone/typings/react-dropzone';
import type { default as Upload } from '@availity/upload-core';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { Alert, AlertTitle } from '@availity/mui-alert';

import { Dropzone } from './Dropzone';
import { ErrorAlert } from './ErrorAlert';
import { FileList } from './FileList';
import { FileTypesMessage } from './FileTypesMessage';
import { HeaderMessage } from './HeaderMessage';
import type { Options } from './useUploadCore';

const CLOUD_URL = '/cloud/web/appl/vault/upload/v1/resumable';

export type FileSelectorProps = {
  /**
   * Name attribute for the form field. Used by react-hook-form for form state management
   * and must be unique within the form context
   */
  name: string;
  /**
   * The ID of the bucket where files will be uploaded
   */
  bucketId: string;
  /**
   * The customer ID associated with the upload
   */
  customerId: string;
  /**
   * Regular expression pattern of allowed characters in file names
   * @example "a-zA-Z0-9-_."
   */
  allowedFileNameCharacters?: string;
  /**
   * List of allowed file extensions. Each extension must start with a dot
   * @example ['.pdf', '.doc', '.docx']
   * @default []
   */
  allowedFileTypes?: `.${string}`[];
  /**
   * Optional content to render below the file upload area
   */
  children?: ReactNode;
  /**
   * Client identifier used for upload authentication
   */
  clientId: string;
  /**
   * Whether the file selector is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Overrides the standard file size message
   */
  customSizeMessage?: React.ReactNode;
  /**
   * Overrides the standard file types message
   */
  customTypesMessage?: React.ReactNode;
  /**
   * Whether to enable the dropzone area
   */
  enableDropArea?: boolean;
  /**
   * Custom endpoint URL for file uploads. If not provided, default endpoint will be used
   */
  endpoint?: string;
  /**
   * Component to render the File information. This should return a `ListItem`
   */
  customFileRow?: React.ElementType<{
    upload?: Upload;
    options: Options;
    onRemoveFile: (id: string, upload: Upload) => void;
  }>;
  /**
   * Whether to use the cloud upload endpoint
   * When true, uses '/cloud/web/appl/vault/upload/v1/resumable'
   */
  isCloud?: boolean;
  /**
   * Label text or element displayed above the upload area
   * @default 'Upload file'
   */
  label?: ReactNode;
  /**
   * Maximum number of files that can be uploaded simultaneously
   */
  maxFiles: number;
  /**
   * Maximum file size allowed per file in bytes
   * Use Kibi or Mibibytes. eg: 1kb = 1024 bytes; 1mb = 1024kb
   */
  maxSize: number;
  /**
   * Whether multiple file selection is allowed
   * @default true
   */
  multiple?: boolean;
  /**
   * Callback fired when files are selected
   * @param event - The change event containing the selected file(s)
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   *
   */
  onDrop?: (acceptedFiles: File[], fileRejections: (FileRejection & { id: number })[], event: DropEvent) => void;
  /**
   * Callback fired when a file is removed from the upload list
   * @param files - Array of remaining files
   * @param removedUploadId - ID of the removed upload
   */
  onUploadRemove?: (uploads: Upload[], removedUploadId: string) => void;
  /**
   * Options that are passed to the Upload class from `@availity/upload-core`
   */
  uploadOptions?: Partial<Options>;
  /**
   * Validation function used for custom validation that is not covered with the other props
   * */
  validator?: (file: File) => FileError | FileError[] | null;
  /**
   * Whether the remove button is disabled
   * @default false
   */
  disableRemove?: boolean;
};

export const FileSelector = ({
  name,
  allowedFileNameCharacters,
  allowedFileTypes = [],
  bucketId,
  clientId,
  children,
  customSizeMessage,
  customTypesMessage,
  customerId,
  customFileRow,
  disabled = false,
  enableDropArea = true,
  endpoint,
  isCloud,
  label = 'Upload file',
  maxFiles,
  maxSize,
  multiple = true,
  onChange,
  onDrop,
  onUploadRemove,
  uploadOptions,
  validator,
  disableRemove,
}: FileSelectorProps) => {
  const [totalSize, setTotalSize] = useState(0);
  const [fileRejections, setFileRejections] = useState<(FileRejection & { id: number })[]>([]);

  const formMethods = useFormContext();

  const options: Options = {
    ...uploadOptions,
    bucketId,
    customerId,
    clientId,
    fileTypes: allowedFileTypes,
    maxSize,
    allowedFileNameCharacters,
  };

  // Endpoint is set by default in upload-core so check if it exists before passing `undefined`
  if (endpoint) options.endpoint = endpoint;
  // Override endpoint if using the cloud
  if (isCloud) options.endpoint = CLOUD_URL;

  const handleOnRemoveFile = (uploadId: string, upload: Upload) => {
    const prevFiles: Upload[] = formMethods.getValues(name);
    const newFiles = prevFiles.filter((prev) => prev.file.name !== upload.file.name);

    if (newFiles.length !== prevFiles.length) {
      const removedFile = prevFiles.find((prev) => prev.file.name === upload.file.name);

      // Stop upload
      try {
        upload.abort();
      } catch {
        console.error('Encountered an issue stopping the file upload');
      }

      // Remove from context and cache
      formMethods.setValue(name, newFiles);

      if (removedFile?.file.size) setTotalSize(totalSize - removedFile.file.size);

      if (onUploadRemove) onUploadRemove(newFiles, uploadId);
    }
  };

  const uploads = (formMethods.watch(name) as Upload[]) || [];

  const handleRemoveRejection = (id: number) => {
    const rejections = fileRejections.filter((value) => value.id !== id);
    setFileRejections(rejections);
  };

  const TOO_MANY_FILES_CODE = 'too-many-files';

  // Extract too-many-files rejections
  const tooManyFilesRejections = fileRejections.filter((rejection) =>
    rejection.errors.some((error) => error.code === TOO_MANY_FILES_CODE)
  );

  // Extract other rejections
  const otherRejections = fileRejections.filter(
    (rejection) => !rejection.errors.some((error) => error.code === TOO_MANY_FILES_CODE)
  );

  return (
    <>
      {enableDropArea ? (
        <>
          {label ? <Typography marginBottom="4px">{label}</Typography> : null}
          <Dropzone
            name={name}
            allowedFileTypes={allowedFileTypes}
            disabled={disabled}
            enableDropArea={enableDropArea}
            maxFiles={maxFiles}
            maxSize={maxSize}
            multiple={multiple}
            onChange={onChange}
            onDrop={onDrop}
            setFileRejections={setFileRejections}
            setTotalSize={setTotalSize}
            uploadOptions={options}
            validator={validator}
          />
          <FileTypesMessage
            allowedFileTypes={allowedFileTypes}
            maxFileSize={maxSize}
            customSizeMessage={customSizeMessage}
            customTypesMessage={customTypesMessage}
            variant="caption"
          />
          {children}
        </>
      ) : (
        <Grid container rowSpacing={3} flexDirection="column">
          <Grid>
            <HeaderMessage maxFiles={maxFiles} maxSize={maxSize} />
            <FileTypesMessage
              allowedFileTypes={allowedFileTypes}
              customSizeMessage={customSizeMessage}
              customTypesMessage={customTypesMessage}
              variant="body2"
            />
          </Grid>
          {children ? <Grid>{children}</Grid> : null}
          <Grid>
            <Dropzone
              name={name}
              allowedFileTypes={allowedFileTypes}
              disabled={disabled}
              enableDropArea={enableDropArea}
              maxFiles={maxFiles}
              maxSize={maxSize}
              multiple={multiple}
              onChange={onChange}
              onDrop={onDrop}
              setFileRejections={setFileRejections}
              setTotalSize={setTotalSize}
              uploadOptions={options}
              validator={validator}
            />
          </Grid>
        </Grid>
      )}
      {tooManyFilesRejections.length > 0 && (
        <Alert
          severity="error"
          onClose={() => tooManyFilesRejections.forEach((rejection) => handleRemoveRejection(rejection.id))}
        >
          <AlertTitle>Items not allowed.</AlertTitle>
          Too many files are selected for upload, maximum {maxFiles} allowed.
        </Alert>
      )}

      {otherRejections.length > 0 &&
        otherRejections.map((rejection) => (
          <ErrorAlert
            key={rejection.id}
            errors={rejection.errors}
            fileName={rejection.file.name}
            id={rejection.id}
            onClose={() => handleRemoveRejection(rejection.id)}
          />
        ))}
      <FileList
        uploads={uploads || []}
        options={options}
        onRemoveFile={handleOnRemoveFile}
        customFileRow={customFileRow}
        disableRemove={disableRemove}
      />
    </>
  );
};
