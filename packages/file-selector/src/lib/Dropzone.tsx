import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import { v4 as uuid } from 'uuid';
import { Divider } from '@availity/mui-divider';
import { CloudDownloadIcon } from '@availity/mui-icon';
import { Box, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import Upload, { Options } from '@availity/upload-core';

import { FilePickerBtn } from './FilePickerBtn';

const outerBoxStyles = {
  backgroundColor: 'background.canvas',
  border: '1px dotted',
  borderRadius: '4px',
  padding: '2rem',
};

const innerBoxStyles = {
  width: '100%',
  height: '100%',
};

const CLOUD_URL = '/cloud/web/appl/vault/upload/v1/resumable';

export type DropzoneProps = {
  name: string;
  bucketId: string;
  clientId: string;
  customerId: string;
  allowedFileNameCharacters?: string;
  allowedFileTypes?: `.${string}`[];
  deliverFileOnSubmit?: boolean;
  deliveryChannel?: string;
  disabled?: boolean;
  endpoint?: string;
  fileDeliveryMetadata?: Record<string, unknown> | ((file: Upload) => Record<string, unknown>);
  getDropRejectionMessages?: (fileRejectsions: FileRejection[]) => void;
  isCloud?: boolean;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  // onDeliveryError?: (responses: unknown[]) => void;
  // onDeliverySuccess?: (responses: unknown[]) => void;
  onFileDelivery?: (upload: Upload) => void;
  onFilePreUpload?: ((upload: Upload) => boolean)[];
};

export const Dropzone = ({
  allowedFileNameCharacters,
  allowedFileTypes = [],
  bucketId,
  clientId,
  customerId,
  deliveryChannel,
  // deliverFileOnSubmit,
  fileDeliveryMetadata,
  disabled,
  endpoint,
  getDropRejectionMessages,
  isCloud,
  maxFiles,
  maxSize,
  multiple,
  name,
  onChange,
  onClick,
  onFilePreUpload,
  onFileDelivery,
}: DropzoneProps) => {
  const [totalSize, setTotalSize] = useState(0);
  const [files, setFiles] = useState<Upload[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[], dropEvent: DropEvent) => {
      // Do something with the files
      console.log('Dropzone acceptedFiles:', acceptedFiles);
      console.log('Dropzone fileRejections:', fileRejections);
      console.log('Dropzone dropEvent:', dropEvent);

      // Verify we have not exceeded max number of files
      if (maxFiles && acceptedFiles.length > maxFiles) {
        acceptedFiles.slice(0, Math.max(9, maxFiles));
      }

      const uploads = acceptedFiles.map((file) => {
        const options: Options = {
          bucketId,
          customerId,
          clientId,
          fileTypes: allowedFileTypes,
          maxSize,
          allowedFileNameCharacters,
        };

        if (onFilePreUpload) options.onPreStart = onFilePreUpload;
        if (endpoint) options.endpoint = endpoint;
        if (isCloud) options.endpoint = CLOUD_URL;

        const upload = new Upload(file, options);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        upload.id = `${upload.id}-${uuid()}`;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (file.dropRejectionMessage) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          upload.errorMessage = file.dropRejectionMessage;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        } else if (maxSize && totalSize + newFilesTotalSize + upload.file.size > maxSize) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          upload.errorMessage = 'Total documents size is too large';
        } else {
          upload.start();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          newFilesTotalSize += upload.file.size;
        }
        if (onFileDelivery) {
          onFileDelivery(upload);
        } else if (deliveryChannel && fileDeliveryMetadata) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // upload.onSuccess.push(() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // if (upload?.references?.[0]) {
          // allow form to revalidate when upload is complete
          // setFieldTouched(name, true);
          // deliver upon upload complete, not form submit
          // if (!deliverFileOnSubmit) {
          //   callFileDelivery(upload);
          // }
          // }
          // });
        }

        return upload;
      });

      // Set uploads somewhere. state?
      setFiles(files);

      if (getDropRejectionMessages) getDropRejectionMessages(fileRejections);
    },
    [getDropRejectionMessages]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const accept = allowedFileTypes.join(',');

  return (
    <Box sx={outerBoxStyles} {...getRootProps()}>
      <Box sx={innerBoxStyles}>
        <Stack spacing={2} divider={<Divider>OR</Divider>} alignItems="center" justifyContent="center">
          <>
            <CloudDownloadIcon fontSize="xlarge" color="secondary" />
            <Typography variant="subtitle2" fontWeight="700">
              Drag and Drop Files Here
            </Typography>
            <FilePickerBtn
              name={name}
              color="primary"
              disabled={disabled}
              maxSize={maxSize}
              onClick={onClick}
              inputProps={getInputProps({
                multiple,
                accept,
                onChange,
              })}
            />
          </>
        </Stack>
      </Box>
    </Box>
  );
};
