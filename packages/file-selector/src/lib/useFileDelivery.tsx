import { useQuery } from '@tanstack/react-query';
import { avFilesDeliveryApi } from '@availity/api-axios';
import Upload from '@availity/upload-core';
import { AxiosResponse } from 'axios';

export type UploadDeliveryOptions = {
  /** ID of the vault bucket */
  bucketId: string;
  /** Client ID to be attached to the request */
  clientId: string;
  /** Customer ID of the organization submitting the request */
  customerId: string;
  /** Delivery Channel for the AvFileDeliveryApi */
  deliveryChannel?: string;
  /** Determine whether AvFileDeliveryApi should be automatically called or if the component should wait */
  deliverFileOnSubmit?: boolean;
  /** Metadata to be sent with the request. Can be an object or function that returns an object */
  fileDeliveryMetadata?: Record<string, unknown> | ((upload: Upload) => Record<string, unknown>);
  /** Callback function for when the upload succeeds */
  onSuccess?: (responses: unknown[]) => void;
  /** Callback function for when the upload fails */
  onError?: (responses: unknown[]) => void;
  /** The upload instance returned by creating a new Upload via @availity/upload-core. */
  uploads: Upload[];
};

export function useFileDelivery({
  bucketId,
  clientId,
  customerId,
  deliveryChannel,
  deliverFileOnSubmit,
  fileDeliveryMetadata,
  // onSuccess,
  // onError,
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

  return useQuery({
    queryKey: ['file-delivery', customerId, clientId, bucketId],
    queryFn: () => callFileDelivery(uploads),
    enabled: isQueryEnabled,
    retry: false,
  });
}
