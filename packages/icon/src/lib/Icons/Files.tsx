import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons/faFileAudio';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons/faFileCircleCheck';
import { faFileCode } from '@fortawesome/free-solid-svg-icons/faFileCode';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons/faFileCsv';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons/faFileExcel';
import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage';
import { faFileLines } from '@fortawesome/free-solid-svg-icons/faFileLines';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons/faFilePowerpoint';
import { faFileVideo } from '@fortawesome/free-solid-svg-icons/faFileVideo';
import { faFileWord } from '@fortawesome/free-solid-svg-icons/faFileWord';
import { faFileZipper } from '@fortawesome/free-solid-svg-icons/faFileZipper';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faFolderTree } from '@fortawesome/free-solid-svg-icons/faFolderTree';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons/faPaperclip';
import { faFile as faFileEmpty } from '@fortawesome/free-regular-svg-icons/faFile';
import { faFolder as faFolderEmpty } from '@fortawesome/free-regular-svg-icons/faFolder';
import { faFolderOpen as faFolderOpenEmpty } from '@fortawesome/free-regular-svg-icons/faFolderOpen';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { FaSvgIcon } from '../FaSvgIcon';

export const FolderIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFolder} {...props} />;

export const FolderOpenIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFolderOpen} {...props} />;

export const FolderOpenEmptyIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFolderOpenEmpty} {...props} />;

export const FolderEmptyIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFolderEmpty} {...props} />;

export const FolderTreeIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFolderTree} {...props} />;

export const BoxIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faBoxArchive} {...props} />;

export const AttachmentIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faPaperclip} {...props} />;

export const PictureIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faImage} {...props} />;

export const FileIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFile} {...props} />;

export const FileEmptyIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileEmpty} {...props} />;

export const FileVideoIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileVideo} {...props} />;

export const FileImageIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileImage} {...props} />;

export const FileExcelIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileExcel} {...props} />;

export const FileWordIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileWord} {...props} />;

export const FilePdfIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFilePdf} {...props} />;

export const FileArchiveIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileZipper} {...props} />;

export const FileCodeIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileCode} {...props} />;

export const FileAudioIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileAudio} {...props} />;

export const FilePowerpointIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFilePowerpoint} {...props} />;

export const FileCsvIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileCsv} {...props} />;

export const FileLinesIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileLines} {...props} />;

export const FileCircleCheckIcon = (props: SvgIconProps): JSX.Element => <FaSvgIcon icon={faFileCircleCheck} {...props} />;
