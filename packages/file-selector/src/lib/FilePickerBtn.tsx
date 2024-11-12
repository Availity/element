import { ChangeEvent, MouseEvent, RefObject, Dispatch, useState } from 'react';
import type { DropzoneInputProps } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { Button, ButtonProps } from '@availity/mui-button';
import { Input } from '@availity/mui-form-utils';

type FilePickerBtnProps = {
  /** Name give to the input used for react-hook-form */
  name: string;
  /** Maximum size per file */
  maxSize?: number;
  /** ID passed to the input */
  inputId?: string;
  /** Props that will be passed to the input component */
  inputProps?: DropzoneInputProps & { ref?: RefObject<HTMLInputElement> };
  /** Files pulled from the input when the input is updated */
  onChange?: (files: File[]) => void;
  setTotalSize: Dispatch<React.SetStateAction<number>>;
  totalSize: number;
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
  setTotalSize,
  totalSize,
  ...rest
}: FilePickerBtnProps) => {
  const { register, getValues, setValue } = useFormContext();
  const [errorMessage, setErrorMessage] = useState('');

  const { accept, multiple, ref, style, type: inputType } = inputProps;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    let error = '';
    const value: File[] = [];
    if (files) {
      // FileList is not iterable. Must use for loop for now
      for (let i = 0; i < files.length; i++) {
        // Check if file exceeds size limit
        if (maxSize && totalSize + files[i].size > maxSize) {
          error = 'The selected files will exceed the allowed total size.';
        } else {
          value[i] = files[i];
          setTotalSize((prev) => prev + files[i].size);
        }
      }
    }

    const previous = getValues(name) ?? [];

    // setValue(name, value);
    setValue(name, previous.concat(value));
    setTotalSize((prev) => prev + totalSize);
    setErrorMessage(error);

    if (onChange) onChange(value);
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
