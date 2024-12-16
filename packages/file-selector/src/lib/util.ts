export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const FILE_EXT_ICONS = {
  png: 'file-image',
  jpg: 'file-image',
  jpeg: 'file-image',
  gif: 'file-image',
  ppt: 'file-powerpoint',
  pptx: 'file-powerpoint',
  xls: 'file-excel',
  xlsx: 'file-excel',
  doc: 'file-word',
  docx: 'file-word',
  txt: 'doc-alt',
  text: 'doc-alt',
  zip: 'file-archive',
  '7zip': 'file-archive',
  xml: 'file-code',
  html: 'file-code',
  pdf: 'file-pdf',
} as const;

export type FileExtensionKey = keyof typeof FILE_EXT_ICONS;

export const isValidKey = (key: string): key is FileExtensionKey => (key ? key in FILE_EXT_ICONS : false);

export const getFileExtIcon = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase() || '';
  const icon = isValidKey(ext) ? FILE_EXT_ICONS[ext] : 'doc';

  return { ext, icon };
};
