import { ChangeEvent, RefObject, useState } from 'react';
import { Input } from '@availity/mui-form-utils';

const idCounter = () => {
  let id = 0;
  const increment = () => (id += 1);
  const generateId = () => {
    return `filepicker-${increment()}`;
  };
  return {
    generateId,
  };
};

const counter = idCounter();

const inputSx = { display: 'none' };

export type FilePickerInputProps = {
  /** Identifies the field and matches the validation schema. */
  name: string;
  /** The file types you want to restrict uploading to. eg: ['.jpeg', '.jpg']. */
  allowedFileTypes?: `.${string}`[];
  /** id passed to the input component. It is randomly generated if not passed */
  id?: string;
  /** ref passed to the input component */
  inputRef?: RefObject<HTMLInputElement>;
  /** The maximum file size (in bytes) for a file to be uploaded. */
  maxSize?: number;
  /** Indicates that the user will be allowed to select multiple files when selecting files from the OS prompt. */
  multiple?: boolean;
  /** Callback when the user has selected a file or multiple files. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const FilePickerInput = ({
  allowedFileTypes,
  id,
  inputRef,
  maxSize,
  multiple,
  name,
  onChange,
}: FilePickerInputProps) => {
  const [stateId] = useState(counter.generateId());

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    // TODO: get size of file and compare to maxSize

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

    if (onChange) onChange(event);
  };

  const inputId = id || stateId;

  return (
    <Input
      inputRef={inputRef}
      sx={inputSx}
      value=""
      type="file"
      inputProps={{
        accept: Array.isArray(allowedFileTypes) && allowedFileTypes.length > 0 ? allowedFileTypes.join(',') : undefined,
        multiple,
      }}
      id={inputId}
      onChange={handleOnChange}
    />
  );
};
