import type Upload from '@availity/upload-core';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@availity/mui-list';
import { DeleteIcon, FileIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';

import { UploadProgressBar } from './UploadProgressBar';
import { formatBytes, getFileExtIcon } from './util';

type FileRowProps = {
  /** The upload instance returned by creating a new Upload via @availity/upload-core. */
  upload: Upload;
  /** Callback called when file is removed. The callback is passed the id of the file that was removed. */
  onRemoveFile: (id: string) => void;
};

const FileRow = ({ upload, onRemoveFile }: FileRowProps) => {
  const { ext, icon } = getFileExtIcon(upload.file.name);
  console.log('ext, icon:', ext, icon);

  return (
    <ListItem>
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
          <ListItemButton>
            <ListItemIcon
              onClick={() => {
                onRemoveFile(upload.id);
              }}
            >
              <DeleteIcon />
            </ListItemIcon>
          </ListItemButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export type FileListProps = {
  /** List of Upload objects */
  uploads: Upload[];
  /** Callback called when file is removed. The callback is passed the id of the file that was removed. */
  onRemoveFile: (id: string) => void;
};

export const FileList = ({ uploads, onRemoveFile }: FileListProps) => {
  if (uploads.length === 0) return null;

  return (
    <List>
      {uploads.map((upload) => {
        return <FileRow key={upload.id} upload={upload} onRemoveFile={onRemoveFile} />;
      })}
    </List>
  );
};
