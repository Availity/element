import { ChangeEvent, ReactNode, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { DropEvent, FileError, FileRejection } from 'react-dropzone/typings/react-dropzone';
import { useQueryClient } from '@tanstack/react-query';
import type { default as Upload, UploadOptions } from '@availity/upload-core';
import { Button } from '@availity/mui-button';
import { Grid, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { Dropzone } from './Dropzone';
import { ErrorAlert } from './ErrorAlert';
import { FileList } from './FileList';
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
   * Callback fired when the form is submitted
   * @param uploads - Array of Upload instances for the submitted files
   * @param values - Object containing the form values, with files indexed by the name prop
   */
  onSubmit?: (uploads: Upload[], values: Record<string, File[]>) => void;
  /**
   * Callback fired when a file is successfully uploaded
   */
  onSuccess?: () => void;
  /**
   * Callback fired when an error occurs during upload
   */
  onError?: (error: Error) => void;
  /**
   * Array of functions to execute before file upload begins.
   * Each function should return a boolean indicating whether to proceed with the upload.
   * @default []
   */
  onFilePreUpload?: (() => boolean)[];
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
   * Array of delays (in milliseconds) between upload retry attempts
   */
  retryDelays?: UploadOptions['retryDelays'];
  /**
   * Validation function used for custom validation that is not covered with the other props
   * */
  validator?: (file: File) => FileError | FileError[] | null;
};

export const FileSelector = ({
  name,
  allowedFileNameCharacters,
  allowedFileTypes = [],
  bucketId,
  clientId,
  children,
  customerId,
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
  onSubmit,
  onSuccess,
  onError,
  onFilePreUpload = [],
  onUploadRemove,
  retryDelays,
  queryOptions,
  validator,
}: FileSelectorProps) => {
  const [totalSize, setTotalSize] = useState(0);
  const [fileRejections, setFileRejections] = useState<(FileRejection & { id: number })[]>([]);

  const client = useQueryClient();

  const methods = useForm({
    defaultValues: {
      [name]: [] as File[],
    },
  });

  const options: Options = {
    bucketId,
    customerId,
    clientId,
    fileTypes: allowedFileTypes,
    maxSize,
    allowedFileNameCharacters,
    onError,
    onSuccess,
    retryDelays,
  };

  if (onFilePreUpload) options.onPreStart = onFilePreUpload;
  if (endpoint) options.endpoint = endpoint;
  if (isCloud) options.endpoint = CLOUD_URL;

  const handleOnRemoveFile = (uploadId: string, upload: Upload) => {
    const prevFiles = methods.watch(name);
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
      methods.setValue(name, newFiles);
      client.removeQueries(['upload', upload.file.name]);

      if (removedFile?.size) setTotalSize(totalSize - removedFile.size);

      if (onUploadRemove) onUploadRemove(newFiles, uploadId);
    }
  };

  const files = methods.watch(name);

  const handleOnSubmit = (values: Record<string, File[]>) => {
    if (values[name].length === 0) return;

    const queries = client.getQueriesData<Upload>(['upload']);
    const uploads = [];
    for (const [, data] of queries) {
      if (data) uploads.push(data);
    }

    if (onSubmit) onSubmit(uploads, values);
  };

  const handleRemoveRejection = (id: number) => {
    const rejections = fileRejections.filter((value) => value.id !== id);
    setFileRejections(rejections);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
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
            <>
              <Stack spacing={2}>
                <HeaderMessage maxFiles={maxFiles} maxSize={maxSize} />
                <FileTypesMessage allowedFileTypes={allowedFileTypes} variant="body2" />
                {children}
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
              </Stack>
            </>
          )}
        </>
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
        <FileList files={files} options={options} onRemoveFile={handleOnRemoveFile} queryOptions={queryOptions} />
        {files.length > 0 && (
          <Grid xs={12} justifyContent="end" display="flex" paddingTop={2.5}>
            <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
              Submit
            </Button>
          </Grid>
        )}
      </form>
    </FormProvider>
  );
};
