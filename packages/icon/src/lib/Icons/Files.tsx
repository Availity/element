import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons/faFileArrowUp';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons/faFileAudio';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons/faFileCircleCheck';
import { faFileCode } from '@fortawesome/free-solid-svg-icons/faFileCode';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons/faFileCsv';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons/faFileExcel';
import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage';
import { faFileImport } from '@fortawesome/free-solid-svg-icons/faFileImport';
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
import { FaSvgIcon, IconProps } from '../FaSvgIcon';

export const FolderIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFolder} {...props} />;

export const FolderOpenIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFolderOpen} {...props} />;

export const FolderOpenEmptyIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFolderOpenEmpty} {...props} />;

export const FolderEmptyIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFolderEmpty} {...props} />;

export const FolderTreeIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFolderTree} {...props} />;

export const BoxIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faBoxArchive} {...props} />;

export const AttachmentIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faPaperclip} {...props} />;

export const PictureIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faImage} {...props} />;

export const FileIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFile} {...props} />;

export const FileEmptyIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileEmpty} {...props} />;

export const FileVideoIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileVideo} {...props} />;

export const FileImageIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileImage} {...props} />;

export const FileExcelIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileExcel} {...props} />;

export const FileWordIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileWord} {...props} />;

export const FilePdfIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFilePdf} {...props} />;

export const FileArchiveIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileZipper} {...props} />;

export const FileCodeIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileCode} {...props} />;

export const FileAudioIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileAudio} {...props} />;

export const FilePowerpointIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFilePowerpoint} {...props} />;

export const FileCsvIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileCsv} {...props} />;

export const FileLinesIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileLines} {...props} />;

export const FileCircleCheckIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileCircleCheck} {...props} />;

export const FileImportIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileImport} {...props} />;

export const FileArrowUpIcon = (props: IconProps): React.JSX.Element => <FaSvgIcon icon={faFileArrowUp} {...props} />;
