import { useQuery } from '@tanstack/react-query';
import { avFilesDeliveryApi } from '@availity/api-axios';
import Upload from '@availity/upload-core';
import { AxiosResponse } from 'axios';

export type UploadDeliveryOptions = {
  bucketId: string;
  clientId: string;
  customerId: string;
  deliveryChannel?: string;
  deliverFileOnSubmit?: boolean;
  fileDeliveryMetadata?: Record<string, unknown> | ((upload: Upload) => Record<string, unknown>);
  onSuccess?: (responses: unknown[]) => void;
  onError?: (responses: unknown[]) => void;
  uploads: Upload[];
};

export function useFileDelivery({
  bucketId,
  clientId,
  customerId,
  deliveryChannel,
  deliverFileOnSubmit,
  fileDeliveryMetadata,
  onSuccess,
  onError,
  uploads,
}: UploadDeliveryOptions) {
  const errors = {};

  const callFileDelivery = async (uploadList: Upload[]) => {
    const results: Promise<AxiosResponse>[] = [];

    for (const upload of uploadList) {
      const data = {
        deliveries: [
          {
            deliveryChannel,
            fileURI: upload.references[0],
            metadata: typeof fileDeliveryMetadata === 'function' ? fileDeliveryMetadata(upload) : fileDeliveryMetadata,
          },
        ],
      };

      results.push(
        avFilesDeliveryApi.uploadFilesDelivery(data, {
          clientId,
          customerId,
        })
      );
    }

    const responses = await Promise.all(results);

    return responses;
  };

  const validate = (errors: Record<string, unknown>) => {
    return Object.keys(errors).length === 0;
  };

  const isQueryEnabled =
    !!customerId &&
    !!clientId &&
    !!bucketId &&
    !!deliveryChannel &&
    deliverFileOnSubmit &&
    uploads.length > 0 &&
    validate(errors);

  return useQuery(['file-delivery', customerId, clientId, bucketId], () => callFileDelivery(uploads), {
    enabled: isQueryEnabled,
    retry: false,
  });
}
