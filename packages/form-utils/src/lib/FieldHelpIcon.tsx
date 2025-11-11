import avMessages from '@availity/message-core';
import { HelpCircleIcon } from '@availity/mui-icon';
import { IconButton, IconButtonProps } from '@availity/mui-button';

export const triggerFieldHelp = (id: string): void => {
  avMessages.send({
    event: 'nav:help:field',
    id,
  });
};

export type FieldHelpIconProps = {
  /** The Help ID */
  helpTopicId: string;
  /** The id of the on-screen label for aria-describedby, needed for accessibility */
  labelId?: string;
} & Omit<
  IconButtonProps,
  | 'action'
  | 'children'
  | 'classes'
  | 'className'
  | 'color'
  | 'disabled'
  | 'edge'
  | 'focusVisibleClassName'
  | 'onFocusVisible'
  | 'role'
  | 'size'
  | 'tabIndex'
  | 'title'
  | 'variant'
>;

export const FieldHelpIcon = ({ helpTopicId, labelId, sx, ...rest }: FieldHelpIconProps): React.JSX.Element => {
  return (
    <IconButton
      {...rest}
      color="primary"
      title="Help"
      role="link"
      onClick={() => triggerFieldHelp(helpTopicId)}
      aria-describedby={labelId}
      size="small"
      sx={{ ...sx, fontSize: 'inherit', marginTop: '-2px', opacity: 1 }}
    >
      <HelpCircleIcon aria-hidden titleAccess={undefined} />
    </IconButton>
  );
};
