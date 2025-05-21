import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { FileRejection } from 'react-dropzone/typings/react-dropzone';
import type { default as Upload } from '@availity/upload-core';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { Alert, AlertTitle } from '@availity/mui-alert';

import { Dropzone2 } from './Dropzone2';
import { ErrorAlert } from './ErrorAlert';
import { FileList2 } from './FileList2';
import { FileTypesMessage } from './FileTypesMessage';
import { HeaderMessage } from './HeaderMessage';
import type { Options } from './useUploadCore';

import { CLOUD_URL } from './FileSelector';
import type { FileSelectorProps } from './FileSelector';

export type FileSelector2Props = Omit<FileSelectorProps, 'onUploadRemove' | 'queryOptions'> & {
  onUploadRemove?: (uploads: Upload[], removedUploadId: string) => void;
};

export const FileSelector2 = ({
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
}: FileSelector2Props) => {
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
          <Dropzone2
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
            <Dropzone2
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
      <FileList2
        uploads={uploads || []}
        options={options}
        onRemoveFile={handleOnRemoveFile}
        customFileRow={customFileRow}
        disableRemove={disableRemove}
      />
    </>
  );
};
