import { useQuery } from '@tanstack/react-query';
import Upload, { Options } from '@availity/upload-core';

function startUpload(file: File, options: Options) {
  const upload = new Upload(file, options);

  upload.start();

  return upload;
}

export function useUploadCore(file: File, options: Options) {
  const isQueryEnabled = !!file;

  return useQuery(['upload', file.name, options], () => startUpload(file, options), {
    enabled: isQueryEnabled,
    retry: false,
  });
}
