import { ReactNode, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import type { FileRejection } from 'react-dropzone/typings/react-dropzone';
import Upload, { UploadOptions } from '@availity/upload-core';
import { Button } from '@availity/mui-button';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { Dropzone } from './Dropzone';
import { FileList } from './FileList';
import { FileTypesMessage } from './FileTypesMessage';

const CLOUD_URL = '/cloud/web/appl/vault/upload/v1/resumable';

export type FileSelectorProps = {
  name: string;
  bucketId: string;
  customerId: string;
  allowedFileNameCharacters?: string;
  allowedFileTypes?: `.${string}`[];
  children?: ReactNode;
  clientId: string;
  // deliverFileOnSubmit?: boolean;
  // deliveryChannel?: string;
  disabled?: boolean;
  endpoint?: string;
  // fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
  getDropRejectionMessages?: (rejections: FileRejection[]) => void;
  isCloud?: boolean;
  label?: ReactNode;
  maxFiles?: number;
  maxSize: number;
  multiple?: boolean;
  onChange?: (files: File[]) => void;
  // onDeliveryError?: (error: unknown) => void;
  // onDeliverySuccess?: () => void;
  onSubmit?: (values: Record<string, unknown>) => void;
  onSuccess?: UploadOptions['onSuccess'];
  onError?: UploadOptions['onError'];
  onFilePreUpload?: (() => boolean)[];
  onUploadRemove?: (files: File[], removedUploadId: string) => void;
  // onFileDelivery?: (upload: Upload) => void;
  retryDelays?: UploadOptions['retryDelays'];
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
  endpoint,
  getDropRejectionMessages,
  isCloud,
  label = 'Upload file',
  maxFiles = 1,
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

  const handleOnSubmit = (values: Record<string, unknown>) => {
    if (files.length === 0) return;

    if (onSubmit) onSubmit(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <>
          <Typography>{label}</Typography>
          <Dropzone
            name={name}
            allowedFileNameCharacters={allowedFileNameCharacters}
            allowedFileTypes={allowedFileTypes}
            disabled={disabled}
            getDropRejectionMessages={getDropRejectionMessages}
            maxFiles={maxFiles}
            maxSize={maxSize}
            multiple={multiple}
            onChange={onChange}
            setTotalSize={setTotalSize}
            totalSize={totalSize}
          />
          <FileTypesMessage allowedFileTypes={allowedFileTypes} maxFileSize={maxSize} />
        </>
        {children}
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
