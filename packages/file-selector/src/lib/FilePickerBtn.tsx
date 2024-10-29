import { ChangeEvent, MouseEvent, RefObject } from 'react';
import type { DropzoneInputProps } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { Button, ButtonProps } from '@availity/mui-button';
import { Input } from '@availity/mui-form-utils';

type FilePickerBtnProps = {
  name: string;
  maxSize?: number;
  inputId?: string;
  inputProps?: DropzoneInputProps & { ref?: RefObject<HTMLInputElement> };
} & Omit<ButtonProps, 'onChange'>;

export const FilePickerBtn = ({
  name,
  children = 'Browse Files',
  color,
  inputId,
  inputProps = {},
  maxSize,
  onClick,
  ...rest
}: FilePickerBtnProps) => {
  const { register, setValue } = useFormContext();

  const { accept, multiple, ref, style, type: inputType, onChange } = inputProps;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    const value: File[] = [];
    if (files) {
      // FileList is not iterable. Must use for loop for now
      for (let i = 0; i < files.length; i++) {
        if (maxSize) {
          console.log('file is too big:', files[i].size > maxSize);
        }
        value[i] = files[i];
      }
    }

    setValue(name, value);

    // if (onChange) onChange(event);
  };

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
  };

  const field = register(name);

  return (
    <>
      <Input
        {...field}
        onChange={handleOnChange}
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
      <Button color={color} {...rest} onClick={handleOnClick} fullWidth={false}>
        {children}
      </Button>
    </>
  );
};
