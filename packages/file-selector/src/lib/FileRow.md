import { Button } from 'reactstrap';
import Icon from '@availity/icon';
import type Upload from '@availity/upload-core';

import { UploadProgressBar } from './UploadProgressBar';

const FILE_EXT_ICONS = {
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

type FileExtensionKey = keyof typeof FILE_EXT_ICONS;

const isValidKey = (key: string): key is FileExtensionKey => {
  return key ? key in FILE_EXT_ICONS : false;
};

export type FileRowProps = {
  upload: Upload;
  onRemoveFile: (id: string) => void;
};

export const FileRow = ({ upload, onRemoveFile }: FileRowProps) => {
  const remove = () => {
    onRemoveFile(upload.id);
  };

  const ext = upload.file.name.split('.').pop()?.toLowerCase() || '';
  const icon = isValidKey(ext) ? FILE_EXT_ICONS[ext] : 'doc';
  const extLabel = ext.toUpperCase();

  return (
    <tr>
      <td className="align-middle" style={{ width: '10%' }}>
        <Icon name={icon} title={`${extLabel} File Icon`}>
          <span className="sr-only">{extLabel} File Icon</span>
        </Icon>{' '}
      </td>
      <td className="align-middle" style={{ width: '35%' }}>
        <div className="text-truncate" title={upload.file.name}>
          {upload.file.name}
        </div>
      </td>
      <td className="align-middle" style={{ width: '45%' }}>
        <UploadProgressBar upload={upload} aria-label={`${upload.file.name} upload`} />
      </td>
      <td className="align-middle" style={{ width: '10%' }}>
        <Button data-testid="remove-file-btn" color="link" className="text-danger px-0" onClick={remove}>
          <Icon name="trash-empty" />
          <span className="sr-only">Remove {upload.file.name}</span>
        </Button>
      </td>
    </tr>
  );
};
