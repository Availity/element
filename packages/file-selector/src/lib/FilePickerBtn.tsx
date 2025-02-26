import type { ChangeEvent, RefObject } from 'react';
import type { DropzoneInputProps } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { Button, ButtonProps } from '@availity/mui-button';
import { Input } from '@availity/mui-form-utils';

export type FilePickerBtnProps = {
  /**
   * Name attribute for the input field, used by react-hook-form for form state management.
   */
  name: string;
  /**
   *  Callback function triggered when files are selected through the input.
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional ID attribute for the file input element.
   */
  inputId?: string;
  /**
   * Additional props to customize the underlying input element.
   */
  inputProps?: DropzoneInputProps & { ref?: RefObject<HTMLInputElement> };
  /**
   * Maximum allowed size per file in bytes. Files exceeding this size will be rejected.
   */
  maxSize?: number;
} & Omit<ButtonProps, 'onChange'>;

export const FilePickerBtn = ({
  name,
  children,
  color,
  inputId,
  inputProps = {},
  maxSize,
  onChange,
  onClick,
  ...rest
}: FilePickerBtnProps) => {
  const { register } = useFormContext();

  const { accept, multiple, ref, style, type: inputType } = inputProps;

  const field = register(name);

  return (
    <>
      <Input
        {...field}
        onChange={onChange}
        value=""
        inputRef={ref}
        type={inputType}
        sx={style}
        inputProps={{
          accept,
          size: maxSize ?? undefined,
          multiple,
        }}
        id={inputId}
      />
      <Button color={color} {...rest} onClick={onClick} fullWidth={false}>
        {children}
      </Button>
    </>
  );
};
