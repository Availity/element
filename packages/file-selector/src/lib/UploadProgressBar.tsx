import { useState } from 'react';
// import { ChangeEvent, FormEventHandler, useState } from 'react';
import { LinearProgress } from '@availity/mui-progress';
import type Upload from '@availity/upload-core';
import { Typography } from '@availity/mui-typography';
import { WarningTriangleIcon } from '@availity/mui-icon';

export type UploadProgressBarProps = {
  /**
   * The upload instance returned by creating a new Upload via @availity/upload-core.
   */
  upload: Upload;
  /**
   * Callback function to hook into the onProgress within the Upload instance provided in the upload prop.
   */
  onProgress?: (upload: Upload) => void;
  /**
   * Callback function to hook into the onSuccess within the Upload instance provided in the upload prop.
   */
  onSuccess?: (upload: Upload) => void;
  /**
   * Callback function to hook into the onError within the Upload instance provided in the upload prop.
   */
  onError?: (upload: Upload) => void;
};

export const UploadProgressBar = ({ upload, onProgress, onError, onSuccess }: UploadProgressBarProps) => {
  const [statePercentage, setStatePercentage] = useState(upload.percentage || 0);
  const [error, setError] = useState(false);
  // const [password, setPassword] = useState('');
  // const [modalOpen, setModalOpen] = useState(false);

  const handleOnProgress = () => {
    setStatePercentage(upload.percentage);
    setError(false);

    if (onProgress) onProgress(upload);
  };

  const handleOnError = () => {
    setError(true);

    if (onError) onError(upload);
  };

  const handleOnSuccess = () => {
    setStatePercentage(100);
    setError(false);

    if (onSuccess) onSuccess(upload);
  };

  // const toggleModal = () => {
  //   setModalOpen((prev) => !prev);
  //   setPassword('');
  // };

  // const verifyPassword: FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   upload.sendPassword(password);
  //   toggleModal();
  // };

  // const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  upload.onProgress.push(handleOnProgress);
  upload.onSuccess.push(handleOnSuccess);
  upload.onError.push(handleOnError);

  return upload.errorMessage ? (
    <>
      <Typography color="text.error">
        <WarningTriangleIcon /> {upload.errorMessage}
      </Typography>
      {/* {upload.status === 'encrypted' && (
        <div className="pwRequired">
          <Button color="primary" onClick={toggleModal}>
            Enter password
          </Button>
          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <form onSubmit={verifyPassword}>
              <ModalHeader toggle={toggleModal}>Enter Password</ModalHeader>
              <ModalBody>
                <Label for="upload-password">Password</Label>
                <Input id="upload-password" onChange={handlePasswordChange} type="password" placeholder="password" />
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Ok</Button>
              </ModalFooter>
            </form>
          </Modal>
        </div>
      )} */}
    </>
  ) : (
    <LinearProgress value={statePercentage} aria-label={`${upload.file.name}-progress`} />
  );
};
