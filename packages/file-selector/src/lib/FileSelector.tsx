import { useState } from 'react';
import type { ChangeEvent, ElementType, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import type { DropEvent, FileError, FileRejection } from 'react-dropzone/typings/react-dropzone';
import { useQueryClient } from '@tanstack/react-query';
import type { default as Upload } from '@availity/upload-core';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { Dropzone } from './Dropzone';
import { ErrorAlert } from './ErrorAlert';
import { FileList } from './FileList';
import type { FileListProps } from './FileList';
import { FileTypesMessage } from './FileTypesMessage';
import { HeaderMessage } from './HeaderMessage';
import type { Options, UploadQueryOptions } from './useUploadCore';

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
   * Whether to enable the dropzone area
   */
  enableDropArea?: boolean;
  /**
   * Custom endpoint URL for file uploads. If not provided, default endpoint will be used
   */
  endpoint?: string;
  /**
   * Componet to render the File information. This should return a `ListItem`
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
  onUploadRemove?: (files: File[], removedUploadId: string) => void;
  /**
   * Query options from `react-query` for the upload call
   * */
  queryOptions?: UploadQueryOptions;
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
  queryOptions,
  uploadOptions,
  validator,
  disableRemove,
}: FileSelectorProps) => {
  const [totalSize, setTotalSize] = useState(0);
  const [fileRejections, setFileRejections] = useState<(FileRejection & { id: number })[]>([]);

  const client = useQueryClient();
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
    const prevFiles: File[] = formMethods.getValues(name);
    const newFiles = prevFiles.filter((file) => file.name !== upload.file.name);

    if (newFiles.length !== prevFiles.length) {
      const removedFile = prevFiles.find((file) => file.name === upload.file.name);

      // Stop upload
      try {
        upload.abort();
      } catch {
        console.error('Encountered an issue stopping the file upload');
      }

      // Remove from context and cache
      formMethods.setValue(name, newFiles);
      client.removeQueries(['upload', upload.file.name]);

      if (removedFile?.size) setTotalSize(totalSize - removedFile.size);

      if (onUploadRemove) onUploadRemove(newFiles, uploadId);
    }
  };

  const files = formMethods.watch(name);

  const handleRemoveRejection = (id: number) => {
    const rejections = fileRejections.filter((value) => value.id !== id);
    setFileRejections(rejections);
  };

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
            validator={validator}
          />
          <FileTypesMessage allowedFileTypes={allowedFileTypes} maxFileSize={maxSize} variant="caption" />
          {children}
        </>
      ) : (
        <Grid container rowSpacing={3} flexDirection="column">
          <Grid>
            <HeaderMessage maxFiles={maxFiles} maxSize={maxSize} />
            <FileTypesMessage allowedFileTypes={allowedFileTypes} variant="body2" />
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
              validator={validator}
            />
          </Grid>
        </Grid>
      )}
      {fileRejections.length > 0
        ? fileRejections.map((rejection) => (
            <ErrorAlert
              key={rejection.id}
              errors={rejection.errors}
              fileName={rejection.file.name}
              id={rejection.id}
              onClose={() => handleRemoveRejection(rejection.id)}
            />
          ))
        : null}
      <FileList
        files={files || []}
        options={options}
        onRemoveFile={handleOnRemoveFile}
        queryOptions={queryOptions}
        customFileRow={customFileRow}
        disableRemove={disableRemove}
      />
    </>
  );
};
