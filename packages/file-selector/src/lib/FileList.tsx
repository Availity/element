import type { default as Upload, UploadOptions } from '@availity/upload-core';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@availity/mui-list';
import { DeleteIcon, FileIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';

import { UploadProgressBar } from './UploadProgressBar';
import { formatBytes, getFileExtIcon } from './util';
import { useUploadCore } from './useUploadCore';

type FileRowProps = {
  file: File;
  /** Callback called when file is removed. The callback is passed the id of the file that was removed. */
  onRemoveFile: (id: string, upload: Upload) => void;
  options: UploadOptions;
};

const FileRow = ({ file, options, onRemoveFile }: FileRowProps) => {
  const { ext, icon } = getFileExtIcon(file.name);
  console.log('ext, icon:', ext, icon);

  const { data: upload } = useUploadCore(file, options);

  if (!upload) return null;

  return (
    <>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" width="100%">
        <Grid xs={1}>
          <ListItemIcon>
            <FileIcon />
          </ListItemIcon>
        </Grid>
        <Grid xs={4}>
          <ListItemText>{upload.trimFileName(upload.file.name)}</ListItemText>
        </Grid>
        <Grid xs={2}>
          <ListItem>{formatBytes(upload.file.size)}</ListItem>
        </Grid>
        <Grid xs={4}>
          <UploadProgressBar upload={upload} />
        </Grid>
        <Grid xs={1}>
          <ListItemButton
            onClick={() => {
              onRemoveFile(upload.id, upload);
            }}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
          </ListItemButton>
        </Grid>
      </Grid>
    </>
  );
};

export type FileListProps = {
  /** Callback called when file is removed. The callback is passed the id of the file that was removed. */
  files: File[];
  onRemoveFile: (id: string, upload: Upload) => void;
  options: UploadOptions;
};

export const FileList = ({ files, options, onRemoveFile }: FileListProps) => {
  if (files.length === 0) return null;

  return (
    <List>
      {files.map((file) => {
        return <FileRow key={file.name} file={file} options={options} onRemoveFile={onRemoveFile} />;
      })}
    </List>
  );
};
