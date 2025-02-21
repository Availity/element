import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons/faLinkSlash';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faPaste } from '@fortawesome/free-solid-svg-icons/faPaste';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons/faCloudArrowUp';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons/faThumbtack';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons/faXmarkCircle';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faMessage as faMessageEmpty } from '@fortawesome/free-regular-svg-icons/faMessage';
import { FaSvgIcon, IconProps } from '../FaSvgIcon';

export const HeartIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faHeart} {...props} />;

export const HeartEmptyIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faHeartEmpty} {...props} />;

export const MinusCircleIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faMinusCircle} {...props} />;

export const PlusCircleIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPlusCircle} {...props} />;

export const CancelCircleIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faXmarkCircle} {...props} />;

export const CloseIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faClose} {...props} />;

export const ExpandIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faAngleDown} {...props} />;

export const CollapseIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faAngleUp} {...props} />;

export const TriangleExpandIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faCaretDown} {...props} />;

export const TriangleCollapseIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faCaretUp} {...props} />;

export const DeleteIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faTrashCan} {...props} />;

export const CommentsIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faComments} {...props} />;

export const EditIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPenToSquare} {...props} />;

export const MinusIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faMinus} {...props} />;

export const PlusIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPlus} {...props} />;

export const LinkIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faLink} {...props} />;

export const LinkSlashIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faLinkSlash} {...props} />;

export const ThumbtackIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faThumbtack} {...props} />;

export const TagIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faTag} {...props} />;

export const TagsIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faTags} {...props} />;

export const PenIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPen} {...props} />;

export const PencilIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPencil} {...props} />;

export const MessageIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faMessage} {...props} />;

export const MessageEmptyIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faMessageEmpty} {...props} />;

export const ArrowsRotateIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faArrowsRotate} {...props} />;

export const PasteIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPaste} {...props} />;

export const PlayIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPlay} {...props} />;

export const PauseIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faPause} {...props} />;

export const GearsIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faGears} {...props} />;

export const CloudDownloadIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faCloudArrowDown} {...props} />;

export const CloudUploadIcon = (props: IconProps): JSX.Element => <FaSvgIcon icon={faCloudArrowUp} {...props} />;
