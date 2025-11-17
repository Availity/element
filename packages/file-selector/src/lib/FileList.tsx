import type { default as Upload } from '@availity/upload-core';
import { List, ListItem, ListItemText, ListItemIcon } from '@availity/mui-list';
import { IconButton } from '@availity/mui-button';
import { DeleteIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Divider } from '@availity/mui-divider';

import { UploadProgressBar } from './UploadProgressBar';
import { formatBytes, getFileExtIcon } from './util';
import { useUploadCore } from './useUploadCore';
import type { Options, UploadQueryOptions } from './useUploadCore';

export type FileRowProps = {
  /**
   * The File object containing information about the uploaded file
   * */
  file: File;
  /**
   * Callback function called when a file is removed
   * @param id - The unique identifier of the file being removed
   * @param upload - The Upload instance associated with the file
   */
  onRemoveFile: (id: string, upload: Upload) => void;
  /**
   * Configuration options for the upload call
   * */
  options: Options;
  /**
   * Query options from `react-query` for the upload call
   * */
  queryOptions?: UploadQueryOptions;
  customFileRow?: React.ElementType<{
    upload?: Upload;
    options: Options;
    onRemoveFile: (id: string, upload: Upload) => void;
  }>;
  /**
   * Whether the remove button is disabled
   * @default false
   */
  disableRemove?: boolean;
};

export const FileRow = ({
  file,
  options,
  onRemoveFile,
  queryOptions,
  customFileRow: CustomRow,
  disableRemove = false,
}: FileRowProps) => {
  const Icon = getFileExtIcon(file.name);

  const { data: upload } = useUploadCore(file, options, queryOptions);

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

export type FileListProps = {
  /**
   * Array of File objects to be displayed in the list
   */
  files: File[];
} & Omit<FileRowProps, 'file'>;

export const FileList = ({
  files,
  options,
  onRemoveFile,
  queryOptions,
  customFileRow,
  disableRemove,
}: FileListProps): React.JSX.Element | null => {
  if (files.length === 0) return null;

  return (
    <List>
      {files.map((file) => {
        return (
          <FileRow
            key={file.name}
            file={file}
            options={options}
            onRemoveFile={onRemoveFile}
            queryOptions={queryOptions}
            customFileRow={customFileRow}
            disableRemove={disableRemove}
          />
        );
      })}
    </List>
  );
};
