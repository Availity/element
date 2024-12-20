import type { default as Upload, UploadOptions } from '@availity/upload-core';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@availity/mui-list';
import { DeleteIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Divider } from '@availity/mui-divider';

import { UploadProgressBar } from './UploadProgressBar';
import { formatBytes, getFileExtIcon } from './util';
import { useUploadCore } from './useUploadCore';

type FileRowProps = {
  /** The File object containing information about the uploaded file */
  file: File;
  /**
   * Callback function called when a file is removed
   * @param id - The unique identifier of the file being removed
   * @param upload - The Upload instance associated with the file
   */
  onRemoveFile: (id: string, upload: Upload) => void;
  /** Configuration options for the upload process */
  options: UploadOptions;
};

const FileRow = ({ file, options, onRemoveFile }: FileRowProps) => {
  const Icon = getFileExtIcon(file.name);

  const { data: upload } = useUploadCore(file, options);

  if (!upload) return null;

  return (
    <>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" width="100%" borderBottom="1px">
        <Grid xs={1}>
          <ListItemIcon>
            <Icon />
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
      <Divider component="li" />
    </>
  );
};

export type FileListProps = {
  /**
   * Array of File objects to be displayed in the list
   */
  files: File[];
  /**
   * Callback function called when a file is removed from the list
   * @param id - The unique identifier of the file being removed
   * @param upload - The Upload instance associated with the file
   */
  onRemoveFile: (id: string, upload: Upload) => void;
  /**
   * Configuration options applied to all file uploads in the list
   */
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
