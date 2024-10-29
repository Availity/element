import { ReactNode, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import type { FileRejection } from 'react-dropzone/typings/react-dropzone';
import Upload, { Options } from '@availity/upload-core';

import { Dropzone } from './Dropzone';
import { FileList } from './FileList';
import { FileTypesMessage } from './FileTypesMessage';
import { useUploadCore } from './useUploadCore';
import { Typography } from '@availity/mui-typography';

const CLOUD_URL = '/cloud/web/appl/vault/upload/v1/resumable';

export type FileSelectorProps = {
  name: string;
  bucketId: string;
  customerId: string;
  allowedFileNameCharacters?: string;
  allowedFileTypes?: `.${string}`[];
  children?: ReactNode;
  clientId: string;
  deliverFileOnSubmit?: boolean;
  deliveryChannel?: string;
  disabled?: boolean;
  endpoint?: string;
  fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
  getDropRejectionMessages?: (rejections: FileRejection[]) => void;
  isCloud?: boolean;
  label?: ReactNode;
  maxFiles?: number;
  maxSize: number;
  multiple?: boolean;
  onDeliveryError?: (error: unknown) => void;
  onDeliverySuccess?: () => void;
  onSubmit?: (values: Record<string, unknown>) => void;
  onSuccess?: (() => void)[];
  onError?: (() => void)[];
  onFilePreUpload?: (() => boolean)[];
  onUploadRemove?: (uploads: Upload[], removedUploadId: string) => void;
  onFileDelivery?: (upload: Upload) => void;
};

export const FileSelector = ({
  name,
  allowedFileNameCharacters,
  allowedFileTypes = [],
  bucketId,
  clientId,
  children,
  customerId,
  deliverFileOnSubmit = false,
  deliveryChannel,
  disabled = false,
  endpoint,
  fileDeliveryMetadata,
  getDropRejectionMessages,
  isCloud,
  label = 'Upload file',
  maxFiles = 1,
  maxSize,
  multiple = true,
  // onDeliveryError,
  // onDeliverySuccess,
  onSubmit,
  onSuccess,
  onError,
  onFilePreUpload = [],
  onUploadRemove,
  onFileDelivery,
}: FileSelectorProps) => {
  // const classes = classNames(
  //   className,
  //   metadata.touched ? 'is-touched' : 'is-untouched',
  //   metadata.touched && metadata.error && 'is-invalid'
  // );
  const [totalSize, setTotalSize] = useState(0);

  const methods = useForm();

  const options: Options = {
    bucketId,
    customerId,
    clientId,
    fileTypes: allowedFileTypes,
    maxSize,
    allowedFileNameCharacters,
    onError,
    onSuccess,
  };

  if (onFilePreUpload) options.onPreStart = onFilePreUpload;
  if (endpoint) options.endpoint = endpoint;
  if (isCloud) options.endpoint = CLOUD_URL;

  const { data: uploads = [] } = useUploadCore(methods.watch(name) || [], options);

  const handleOnRemoveFile = (uploadId: string) => {
    const newFiles = uploads.filter((upload) => upload.id !== uploadId);

    if (newFiles.length !== uploads.length) {
      const removedFile = uploads.find((upload) => upload.id === uploadId);

      methods.setValue(name, newFiles);

      if (!removedFile?.error && !removedFile?.errorMessage && removedFile?.file.size)
        setTotalSize(totalSize - removedFile.file.size);
      if (onUploadRemove) onUploadRemove(newFiles, uploadId);
    }
  };

  const handleOSubmit = (values: Record<string, unknown>) => {
    if (onSubmit) onSubmit(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOSubmit)}>
        <>
          <Typography>{label}</Typography>
          <Dropzone
            name={name}
            allowedFileNameCharacters={allowedFileNameCharacters}
            allowedFileTypes={allowedFileTypes}
            bucketId={bucketId}
            clientId={clientId}
            customerId={customerId}
            deliverFileOnSubmit={deliverFileOnSubmit}
            deliveryChannel={deliveryChannel}
            disabled={disabled}
            endpoint={endpoint}
            fileDeliveryMetadata={fileDeliveryMetadata}
            getDropRejectionMessages={getDropRejectionMessages}
            isCloud={isCloud}
            maxSize={maxSize}
            multiple={multiple}
            // onDeliveryError={onDeliveryError}
            // onDeliverySuccess={onDeliverySuccess}
            onFilePreUpload={onFilePreUpload}
            onFileDelivery={onFileDelivery}
          />
          <FileTypesMessage allowedFileTypes={allowedFileTypes} maxFileSize={maxSize} />
        </>
        {children}
        <FileList uploads={uploads} onRemoveFile={handleOnRemoveFile} />
      </form>
    </FormProvider>
  );
};
