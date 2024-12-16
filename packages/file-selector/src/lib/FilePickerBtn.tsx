import { ChangeEvent, RefObject } from 'react';
import type { DropzoneInputProps } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { Button, ButtonProps } from '@availity/mui-button';
import { Input } from '@availity/mui-form-utils';

type FilePickerBtnProps = {
  /** Name give to the input used for react-hook-form */
  name: string;
  /** Files pulled from the input when the input is updated */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** ID passed to the input */
  inputId?: string;
  /** Props that will be passed to the input component */
  inputProps?: DropzoneInputProps & { ref?: RefObject<HTMLInputElement> };
  /** Maximum size per file */
  maxSize?: number;
} & Omit<ButtonProps, 'onChange'>;

export const FilePickerBtn = ({
  name,
  children = 'Browse Files',
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
