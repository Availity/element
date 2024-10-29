import { useQuery } from '@tanstack/react-query';
import Upload, { Options } from '@availity/upload-core';

function startUploads(files: File[], options: Options) {
  return files.map((file) => {
    const upload = new Upload(file, options);

    upload.start();

    return upload;
  });
}

export function useUploadCore(files: File[], options: Options) {
  const fileNames = files.map((file) => file.name).join(',');

  const isQueryEnabled = files.length > 0;

  return useQuery(['upload', fileNames, options], () => startUploads(files, options), {
    enabled: isQueryEnabled,
    retry: false,
  });
}
