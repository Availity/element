import { ChangeEvent, ReactNode, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import type { FileRejection } from 'react-dropzone/typings/react-dropzone';
import { useQueryClient } from '@tanstack/react-query';
import Upload, { UploadOptions } from '@availity/upload-core';
import { Button } from '@availity/mui-button';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { Dropzone } from './Dropzone';
import { ErrorAlert } from './ErrorAlert';
import { FileList } from './FileList';
import { FileTypesMessage } from './FileTypesMessage';

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
  maxFiles?: number;
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
   * Callback fired when the form is submitted
   * @param uploads - Array of Upload instances for the submitted files
   * @param values - Object containing the form values, with files indexed by the name prop
   */
  onSubmit?: (uploads: Upload[], values: Record<string, File[]>) => void;
  /**
   * Callback fired when a file is successfully uploaded
   */
  onSuccess?: UploadOptions['onSuccess'];
  /**
   * Callback fired when an error occurs during upload
   */
  onError?: UploadOptions['onError'];
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
   * Array of delays (in milliseconds) between upload retry attempts
   */
  retryDelays?: UploadOptions['retryDelays'];
};

// Below props were removed from availity-react version. Perserving here in case needed later
// deliverFileOnSubmit?: boolean;
// deliveryChannel?: string;
// fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
// onDeliveryError?: (error: unknown) => void;
// onDeliverySuccess?: () => void;
// onFileDelivery?: (upload: Upload) => void;

export const FileSelector = ({
  name,
  allowedFileNameCharacters,
  allowedFileTypes = [],
  bucketId,
  clientId,
  children,
  customerId,
  disabled = false,
  endpoint,
  isCloud,
  label = 'Upload file',
  maxFiles,
  maxSize,
  multiple = true,
  onChange,
  onSubmit,
  onSuccess,
  onError,
  onFilePreUpload = [],
  onUploadRemove,
  retryDelays,
}: FileSelectorProps) => {
  const [totalSize, setTotalSize] = useState(0);
  const [fileRejections, setFileRejections] = useState<(FileRejection & { id: number })[]>([]);

  const client = useQueryClient();

  const methods = useForm({
    defaultValues: {
      [name]: [] as File[],
    },
  });

  const options: UploadOptions = {
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

      methods.setValue(name, newFiles);

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
          <Typography marginBottom="4px">{label}</Typography>
          <Dropzone
            name={name}
            allowedFileTypes={allowedFileTypes}
            disabled={disabled}
            maxFiles={maxFiles}
            maxSize={maxSize}
            multiple={multiple}
            onChange={onChange}
            setFileRejections={setFileRejections}
            setTotalSize={setTotalSize}
          />
          <FileTypesMessage allowedFileTypes={allowedFileTypes} maxFileSize={maxSize} />
        </>
        {children}
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
        <FileList files={files} options={options} onRemoveFile={handleOnRemoveFile} />
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
