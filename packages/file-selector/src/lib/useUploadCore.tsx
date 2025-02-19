import { useQuery } from '@tanstack/react-query';
import Upload, { UploadOptions } from '@availity/upload-core';

export type Options = {
  onError?: (error: Error) => void;
  onSuccess?: () => void;
} & UploadOptions;

async function startUpload(file: File, options: Options) {
  const { onSuccess, onError, ...uploadOptions } = options;
  const upload = new Upload(file, uploadOptions);

  await upload.generateId();

  if (onSuccess) upload.onSuccess.push(onSuccess);
  if (onError) upload.onError.push(onError);

  upload.start();

  return upload;
}

export function useUploadCore(file: File, options: Options) {
  const isQueryEnabled = !!file;

  return useQuery(['upload', file.name, options], () => startUpload(file, options), {
    enabled: isQueryEnabled,
    retry: false,
    refetchOnWindowFocus: false,
  });
}
