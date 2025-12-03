// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormProvider, useForm } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Alert, AlertProps, AlertTitle } from '@availity/mui-alert';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import Collapse from '@mui/material/Collapse';

import { FileSelector2, FileSelector2Props } from './FileSelector2';

const meta: Meta<typeof FileSelector2> = {
  title: 'Components/File Selector/FileSelector2',
  component: FileSelector2,
  tags: ['autodocs'],
  args: {
    name: 'file-selector-2',
    allowedFileTypes: ['.txt', '.png', '.pdf'],
    clientId: '123',
    customerId: '456',
    bucketId: '789',
    uploadOptions: {
      retryDelays: [],
    },
    maxFiles: 2,
    maxSize: 1 * 1024 * 1024, // 1MB
    enableDropArea: true,
    multiple: true,
  },
  argTypes: {
    customSizeMessage: {
      control: 'text',
    },
    customTypesMessage: {
      control: 'text',
    },
  },
};

export default meta;

const DismissableAlert = (props: AlertProps) => {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Collapse in={visible}>
      <Alert onClose={onClose} {...props} />
    </Collapse>
  );
};

export const _FileSelector2: StoryObj<typeof FileSelector2> = {
  render: (props: FileSelector2Props) => {
    const methods = useForm({
      defaultValues: {
        [props.name]: [] as File[],
      },
    });

    const uploads = methods.watch(props.name);

    const handleOnSubmit = (values: Record<string, File[]>) => {
      if (values[props.name].length === 0) return;
    };

    return (
      <Paper sx={{ padding: '2rem' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FileSelector2 {...props}>
              <DismissableAlert severity="warning">
                <AlertTitle>Make an Appeal</AlertTitle>
                This is an example alert. It is not part of the component. `children` you pass to the component will
                show up here.
              </DismissableAlert>
            </FileSelector2>
            {uploads.length > 0 && (
              <Grid size={{ xs: 12 }} justifyContent="end" display="flex" paddingTop={2.5}>
                <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
                  Submit
                </Button>
              </Grid>
            )}
          </form>
        </FormProvider>
      </Paper>
    );
  },
};

/** Set `enableDropzone` to `false` for a button only file selector. */
export const _FileSelector2ButtonOnly: StoryObj<typeof FileSelector2> = {
  render: (props: FileSelector2Props) => {
    const methods = useForm({
      defaultValues: {
        [props.name]: [] as File[],
      },
    });

    const uploads = methods.watch(props.name);

    const handleOnSubmit = (values: Record<string, File[]>) => {
      if (values[props.name].length === 0) return;
    };

    return (
      <Paper sx={{ padding: '2rem' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FileSelector2 {...props} enableDropArea={false} />
            {uploads.length > 0 && (
              <Grid size={{ xs: 12 }} justifyContent="end" display="flex" paddingTop={2.5}>
                <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
                  Submit
                </Button>
              </Grid>
            )}
          </form>
        </FormProvider>
      </Paper>
    );
  },
};

/** Upload password protected files. _For this example, the password for any file is '1234'_ */
export const _FileSelector2Encrypted: StoryObj<typeof FileSelector2> = {
  render: (props: Omit<FileSelector2Props, 'bucketId'>) => {
    const methods = useForm({
      defaultValues: {
        [props.name]: [] as File[],
      },
    });

    const uploads = methods.watch(props.name);

    const handleOnSubmit = (values: Record<string, File[]>) => {
      if (values[props.name].length === 0) return;
    };

    return (
      <Paper sx={{ padding: '2rem' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FileSelector2 {...props} bucketId="enc" />
            {uploads.length > 0 && (
              <Grid size={{ xs: 12 }} justifyContent="end" display="flex" paddingTop={2.5}>
                <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
                  Submit
                </Button>
              </Grid>
            )}
          </form>
        </FormProvider>
      </Paper>
    );
  },
  args: {
    bucketId: 'enc',
  },
  argTypes: {
    bucketId: { control: false },
  },
};

export const _FileSelector2CustomTypesMessage: StoryObj<typeof FileSelector2> = {
  render: (props: FileSelector2Props) => {
    const methods = useForm({
      defaultValues: {
        [props.name]: [] as File[],
      },
    });

    const uploads = methods.watch(props.name);

    const handleOnSubmit = (values: Record<string, File[]>) => {
      if (values[props.name].length === 0) return;
    };

    return (
      <Paper sx={{ padding: '2rem' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FileSelector2 {...props}>
              <DismissableAlert severity="warning">
                <AlertTitle>Make an Appeal</AlertTitle>
                This is an example alert. It is not part of the component. `children` you pass to the component will
                show up here.
              </DismissableAlert>
            </FileSelector2>
            {uploads.length > 0 && (
              <Grid size={{ xs: 12 }} justifyContent="end" display="flex" paddingTop={2.5}>
                <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
                  Submit
                </Button>
              </Grid>
            )}
          </form>
        </FormProvider>
      </Paper>
    );
  },
  args: {
    customTypesMessage: 'Only cool file types allowed',
  },
};

export const _FileSelector2CustomSizeMessage: StoryObj<typeof FileSelector2> = {
  render: (props: FileSelector2Props) => {
    const methods = useForm({
      defaultValues: {
        [props.name]: [] as File[],
      },
    });

    const uploads = methods.watch(props.name);

    const handleOnSubmit = (values: Record<string, File[]>) => {
      if (values[props.name].length === 0) return;
    };

    return (
      <Paper sx={{ padding: '2rem' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FileSelector2 {...props}>
              <DismissableAlert severity="warning">
                <AlertTitle>Make an Appeal</AlertTitle>
                This is an example alert. It is not part of the component. `children` you pass to the component will
                show up here.
              </DismissableAlert>
            </FileSelector2>
            {uploads.length > 0 && (
              <Grid size={{ xs: 12 }} justifyContent="end" display="flex" paddingTop={2.5}>
                <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
                  Submit
                </Button>
              </Grid>
            )}
          </form>
        </FormProvider>
      </Paper>
    );
  },
  args: {
    customSizeMessage: 'Only huge files allowed. ',
  },
};
