import { faImage } from '@fortawesome/free-regular-svg-icons/faImage';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';
import { faFileWord } from '@fortawesome/free-regular-svg-icons/faFileWord';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons/faFileExcel';
import { faFilePowerpoint } from '@fortawesome/free-regular-svg-icons/faFilePowerpoint';
import { faFileAudio } from '@fortawesome/free-regular-svg-icons/faFileAudio';
import { faFileVideo } from '@fortawesome/free-regular-svg-icons/faFileVideo';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';
import { faFileImage } from '@fortawesome/free-regular-svg-icons/faFileImage';
import { faFileArchive } from '@fortawesome/free-regular-svg-icons/faFileArchive';
import { faFileCode } from '@fortawesome/free-regular-svg-icons/faFileCode'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faFolderTree } from '@fortawesome/free-solid-svg-icons/faFolderTree';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons/faPaperclip';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faTrash  } from '@fortawesome/free-solid-svg-icons/faTrash'
import { SvgIconProps } from '@mui/material';
import { FaSvgIcon } from '../FaSvgIcon';

export const FolderIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faFolder} {...props}/>
);

export const FolderOpenIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFolderOpen} {...props}/>
);

export const FolderTreeIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFolderTree} {...props}/>
);

export const BoxIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faBoxArchive} {...props}/>
);

export const AttachmentIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faPaperclip} {...props}/>
);

export const DownloadIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faDownload} {...props}/>
);

export const DeleteIcon = ({ ...props }: SvgIconProps): JSX.Element => (
  <FaSvgIcon icon={faTrash} {...props}/>
);

export const FileImageIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileImage} {...props}/>
);

export const FileExcelIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileExcel} {...props}/>
);

export const FileWordIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileWord} {...props}/>
);

export const FilePdfIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFilePdf} {...props}/>
);

export const FileArchiveIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileArchive} {...props}/>
);

export const FileCodeIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileCode} {...props}/>
);

export const FileIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFile} {...props}/>
);

export const PictureIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faImage} {...props}/>
);

export const FileVideoIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileVideo} {...props}/>
);

export const FileAudioIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFileAudio} {...props}/>
);

export const FilePowerpointIcon = ({...props} : SvgIconProps) : JSX.Element => (
  <FaSvgIcon icon={faFilePowerpoint} {...props}/>
);

