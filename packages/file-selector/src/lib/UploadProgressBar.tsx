import { ChangeEvent, FormEventHandler, useState } from 'react';
import { Button, IconButton } from '@availity/mui-button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@availity/mui-dialog';
import { InputAdornment } from '@availity/mui-form-utils';
import { EyeIcon, EyeSlashIcon, WarningTriangleIcon } from '@availity/mui-icon';
import { Box } from '@availity/mui-layout';
import { ListItemText } from '@availity/mui-list';
import { LinearProgress } from '@availity/mui-progress';
import { TextField } from '@availity/mui-textfield';
import type Upload from '@availity/upload-core';

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

type ErrorMapping = {
  pattern: RegExp;
  friendlyMessage: string;
};

/**
 * These errors are separate from the errors associated with ErrorAlert.
 * These are errors received in the response from vault.
 */
const ERROR_MAPPINGS: ErrorMapping[] = [
  {
    pattern: /but has an extension for/i,
    friendlyMessage: 'File format does not match file extension.',
  },
];

const friendlyErrorMessage = (errorMessage: string): string => {
  const mapping = ERROR_MAPPINGS.find(({ pattern }) => pattern.test(errorMessage));
  return mapping ? mapping.friendlyMessage : errorMessage;
};

export const UploadProgressBar = ({ upload, onProgress, onError, onSuccess }: UploadProgressBarProps) => {
  const [statePercentage, setStatePercentage] = useState(upload.percentage || 0);
  const [errorMessage, setErrorMessage] = useState(
    upload.errorMessage ? friendlyErrorMessage(upload.errorMessage) : ''
  );
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOnProgress = () => {
    setStatePercentage(upload.percentage);
    setErrorMessage('');

    if (onProgress) onProgress(upload);
  };

  const handleOnError = () => {
    setErrorMessage(upload.errorMessage ? friendlyErrorMessage(upload.errorMessage) : 'Error');

    if (onError) onError(upload);
  };

  const handleOnSuccess = () => {
    setStatePercentage(100);
    setErrorMessage('');

    if (onSuccess) onSuccess(upload);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
    setPassword('');
  };

  const verifyPassword: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    upload.sendPassword(password);
    toggleModal();
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  upload.onProgress.push(handleOnProgress);
  upload.onSuccess.push(handleOnSuccess);
  upload.onError.push(handleOnError);

  return errorMessage ? (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: '4px' }}>
      <ListItemText
        slotProps={{ primary: { color: 'text.error', variant: 'body2', component: 'div' } }}
        sx={{ wordWrap: 'break-word' }}
      >
        <WarningTriangleIcon sx={{ verticalAlign: 'middle', mt: '-2px' }} /> {errorMessage}
      </ListItemText>
      {upload.status === 'encrypted' && (
        <div className="pwRequired">
          <Button color="secondary" size="small" onClick={toggleModal}>
            Enter Password
          </Button>
          <Dialog open={modalOpen} onClose={toggleModal}>
            <form onSubmit={verifyPassword}>
              <DialogTitle>Enter Password</DialogTitle>
              <DialogContent>
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  name="upload-password"
                  label="Password"
                  onChange={handlePasswordChange}
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          title="password visibility"
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <EyeIcon fontSize="small" /> : <EyeSlashIcon fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button color="primary" type="submit">
                  Ok
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      )}
    </Box>
  ) : (
    <LinearProgress value={statePercentage} aria-label={`${upload.file.name}-progress`} />
  );
};
