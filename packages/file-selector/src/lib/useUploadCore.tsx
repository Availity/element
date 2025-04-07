import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import Upload from '@availity/upload-core';
import type { UploadOptions } from '@availity/upload-core';

export type Options = {
  onError?: (error: Error) => void;
  onSuccess?: () => void;
  onProgress?: () => void;
} & UploadOptions;

export type UploadQueryOptions = UseQueryOptions<Upload, Error, Upload, [string, string, Options]>;

async function startUpload(file: File, options: Options) {
  const { onSuccess, onError, onProgress, ...uploadOptions } = options;
  const upload = new Upload(file, uploadOptions);

  await upload.generateId();

  if (onSuccess) upload.onSuccess.push(onSuccess);
  if (onError) upload.onError.push(onError);
  if (onProgress) upload.onProgress.push(onProgress);

  upload.start();

  return upload;
}

export function useUploadCore(file: File, options: Options, queryOptions?: UploadQueryOptions) {
  const isQueryEnabled = !!file;

  return useQuery({
    queryKey: ['upload', file.name, options],
    queryFn: () => startUpload(file, options),
    enabled: isQueryEnabled,
    retry: false,
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
}
