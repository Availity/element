import {
  FileArchiveIcon,
  FileCodeIcon,
  FileCsvIcon,
  FileExcelIcon,
  FileIcon,
  FileImageIcon,
  FileLinesIcon,
  FilePdfIcon,
  FilePowerpointIcon,
  FileWordIcon,
} from '@availity/mui-icon';
import type { FileError } from 'react-dropzone';

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
export const FILE_EXT_ICONS = {
  png: FileImageIcon,
  jpg: FileImageIcon,
  jpeg: FileImageIcon,
  gif: FileImageIcon,
  csv: FileCsvIcon,
  ppt: FilePowerpointIcon,
  pptx: FilePowerpointIcon,
  xls: FileExcelIcon,
  xlsx: FileExcelIcon,
  doc: FileWordIcon,
  docx: FileWordIcon,
  txt: FileLinesIcon,
  text: FileLinesIcon,
  zip: FileArchiveIcon,
  '7zip': FileArchiveIcon,
  xml: FileCodeIcon,
  html: FileCodeIcon,
  pdf: FilePdfIcon,
} as const;

export type FileExtensionKey = keyof typeof FILE_EXT_ICONS;

export const isValidKey = (key: string): key is FileExtensionKey => (key ? key in FILE_EXT_ICONS : false);

export const getFileExtension = (fileName: string) => fileName.split('.').pop()?.toLowerCase() || '';

export const getFileExtIcon = (fileName: string) => {
  const ext = getFileExtension(fileName);
  return isValidKey(ext) ? FILE_EXT_ICONS[ext] : FileIcon;
};

export const dedupeErrors = (errors: FileError[]) => {
  const dedupedErrors = errors.reduce((acc, error) => {
    if (!acc.find((err) => err.code === error.code)) {
      acc.push(error);
    }
    return acc;
  }, [] as FileError[]);

  return dedupedErrors;
};
