import type { default as Upload } from '@availity/upload-core';
import { List, ListItem, ListItemText, ListItemIcon } from '@availity/mui-list';
import { IconButton } from '@availity/mui-button';
import { DeleteIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Divider } from '@availity/mui-divider';

import { UploadProgressBar } from './UploadProgressBar';
import { formatBytes, getFileExtIcon } from './util';

import type { FileListProps, FileRowProps } from './FileList';

export type FileRow2Props = Omit<FileRowProps, 'file' | 'queryOptions'> & {
  /**
   * The File object containing information about the uploaded file
   * */
  upload: Upload;
};

/**
 * `<FileRow2 />` is the future of the the `<FileRow />` component. In a
 * future release, the `<FileRow />` and `<FileRow2 />` components will be
 * consolidated into a single component.
 *
 * `<FileRow2 />` replaces the `file` prop with the `upload` prop and
 * removes the `queryOptions` prop.
 */
export const FileRow2 = ({
  upload,
  options,
  onRemoveFile,
  customFileRow: CustomRow,
  disableRemove = false,
}: FileRow2Props) => {
  const Icon = getFileExtIcon(upload.file.name);

  if (!upload) return null;

  if (CustomRow) return <CustomRow upload={upload} options={options} onRemoveFile={onRemoveFile} />;

  return (
    <ListItem
      disableGutters
      secondaryAction={
        !disableRemove && (
          <IconButton
            title="remove file"
            edge="end"
            onClick={() => {
              onRemoveFile(upload.id, upload);
            }}
          >
            <DeleteIcon />
          </IconButton>
        )
      }
    >
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" width="100%" flexWrap="wrap">
        <Grid size={{ xs: 'auto' }}>
          <ListItemIcon sx={{ minWidth: '1.5rem' }}>
            <Icon />
          </ListItemIcon>
        </Grid>
        <Grid size={{ xs: 4 }} sx={{ minWidth: '8rem' }}>
          <ListItemText sx={{ wordBreak: 'break-all' }}>{upload.trimFileName(upload.file.name)}</ListItemText>
        </Grid>
        <Grid size={{ xs: 2 }} sx={{ minWidth: '3rem' }}>
          <ListItemText sx={{ textAlign: 'end' }}>{formatBytes(upload.file.size)}</ListItemText>
        </Grid>
        <Grid size={{ xs: 'grow' }} sx={{ minWidth: '6rem' }}>
          <UploadProgressBar upload={upload} />
        </Grid>
      </Grid>
      <Divider />
    </ListItem>
  );
};

export type FileList2Props = Omit<FileListProps, 'files'> & {
  /**
   * Array of File objects to be displayed in the list
   */
  uploads: Upload[];
} & Omit<FileRow2Props, 'upload'>;

/**
 * `<FileList2 />` is the future of the the `<FileList />` component. In a
 * future release, the `<FileList />` and `<FileList2 />` components will
 * be consolidated into a single component.
 *
 * `<FileList2 />` replaces the `files` prop with the `uploads` prop.
 */
export const FileList2 = ({
  uploads,
  options,
  onRemoveFile,
  customFileRow,
  disableRemove,
}: FileList2Props): React.JSX.Element | null => {
  if (uploads.length === 0) return null;

  return (
    <List>
      {uploads.map((upload) => {
        return (
          <FileRow2
            key={upload.id}
            upload={upload}
            options={options}
            onRemoveFile={onRemoveFile}
            customFileRow={customFileRow}
            disableRemove={disableRemove}
          />
        );
      })}
    </List>
  );
};
