// Each exported component in the package should have its own stories file
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Radio, RadioGroup, FormControl, InputAdornment } from '@mui/material';
import { TextField } from '@availity/mui-textfield';
import { Autocomplete } from '@availity/mui-autocomplete';
import { Datepicker } from '@availity/mui-datepicker';
import { FormControlLabel, FormLabel } from '@availity/mui-form-utils';
import { Button, IconButton } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';
import { PageHeader } from '@availity/mui-page-header';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid, Container } from '@availity/mui-layout';
import { SearchIcon } from '@availity/mui-icon';
import { Divider } from '@availity/mui-divider';
import { Stack } from '@availity/mui-layout';
import dayjs from 'dayjs';

const meta: Meta = {
  title: 'Layouts/Form',
  tags: ['autodocs'],
};

export default meta;

const SectionText = ({ marginBottom }: { marginBottom: string }) => (
  <Typography paragraph sx={{ marginBottom }}>
    This is introduction or helper text that helps the user understand the data that needs to be entered or selections
    that need to be made in this section.
  </Typography>
);

const AsteriskMessage = ({ marginBottom }: { marginBottom: string }) => (
  <Typography paragraph sx={{ marginBottom }}>
    <Typography component="span" color="error.main" variant="inherit">
      *
    </Typography>{' '}
    is a required field.
  </Typography>
);

type SimpleFormInputs = {
  text: string;
  dropdown: string;
};

const dropdownOptions = ['Bulbasaur', 'Squirtle', 'Charmander'];

export const _SimpleForm: StoryObj = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
      control,
      reset,
    } = useForm<SimpleFormInputs>();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit: SubmitHandler<SimpleFormInputs> = (data) => {
      console.log(data);
      setSubmitted(true);
    };

    return (
      <Container>
        <Paper sx={{ padding: '1.5rem' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography component="h1" variant="h2" sx={{ marginBottom: '.5rem' }}>
              Simple Form
            </Typography>
            <Grid container>
              <Grid xs={12} md={6}>
                <SectionText marginBottom="1rem" />
                <AsteriskMessage marginBottom="1rem" />
              </Grid>
            </Grid>
            <Grid container marginBottom="1rem">
              <Grid xs={12} md={6}>
                <TextField
                  label="Example"
                  fullWidth
                  {...register('text', {
                    required: 'This field is required',
                    maxLength: { value: 5, message: 'Too long' },
                  })}
                  error={!!errors.text}
                  helperText={errors.text?.message || 'This is helper text'}
                  placeholder="Value"
                  required
                />
              </Grid>
            </Grid>
            <Grid container marginBottom="2rem">
              <Grid xs={12} md={6}>
                <Controller
                  control={control}
                  name="dropdown"
                  render={({ field: { onChange, value, onBlur } }) => {
                    return (
                      <Autocomplete
                        onChange={(event, value, reason) => {
                          if (reason === 'clear') {
                            onChange(null);
                          }
                          onChange(value);
                        }}
                        onBlur={onBlur}
                        FieldProps={{ label: 'Dropdown', helperText: 'This is helper text', placeholder: 'Value' }}
                        options={dropdownOptions}
                        value={value || null}
                      />
                    );
                  }}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Button
                type="reset"
                color="secondary"
                onClick={() => {
                  reset();
                  setSubmitted(false);
                }}
                sx={{ marginRight: '.5rem' }}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Grid>
          </form>
        </Paper>
        {submitted && (
          <Paper sx={{ padding: '12px 16px' }}>
            <Typography variant="h2">Submitted Values</Typography>
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
          </Paper>
        )}
      </Container>
    );
  },
  args: {},
};

type CompactFormInputs = {
  status: string;
  toDate: dayjs.Dayjs;
  fromDate: dayjs.Dayjs;
  customerName: string;
  payerName: string;
};

const today = dayjs().startOf('D');

export const _CompactForm: StoryObj = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
      control,
      reset,
    } = useForm<CompactFormInputs>();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit: SubmitHandler<CompactFormInputs> = (data) => {
      console.log('submitted', data);
      setSubmitted(true);
    };

    return (
      <Container>
        <Grid container justifyContent="center">
          <Paper sx={{ padding: '1rem', maxWidth: '400px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom="1rem">
                <Typography component="h1" variant="h5">
                  Filters
                </Typography>
                <IconButton title="close" size="small">
                  <CloseIcon />
                </IconButton>
              </Stack>
              <Grid container marginBottom="1rem">
                <Grid xs={12}>
                  <Controller
                    control={control}
                    name="status"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Autocomplete
                        ref={ref}
                        onChange={(event, value, reason) => {
                          if (reason === 'clear') {
                            onChange(null);
                          }
                          onChange(value);
                        }}
                        onBlur={onBlur}
                        value={value || null}
                        FieldProps={{
                          label: 'Status',
                          error: !!errors.status?.message,
                          helperText: errors.status?.message,
                          placeholder: 'Value',
                        }}
                        options={['Pending', 'Accepted', 'Denied']}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container columnSpacing={2} marginBottom="1rem">
                <Grid xs={6}>
                  <Controller
                    control={control}
                    name="fromDate"
                    defaultValue={today}
                    render={({ field: { onChange, value, ref } }) => (
                      <Datepicker label="From Date" value={value} onChange={onChange} ref={ref} />
                    )}
                  />
                </Grid>
                <Grid xs={6}>
                  <Controller
                    control={control}
                    name="toDate"
                    defaultValue={today}
                    render={({ field: { onChange, value, ref } }) => (
                      <Datepicker label="To Date" value={value} onChange={onChange} ref={ref} />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container marginBottom="1rem">
                <Grid xs={12}>
                  <TextField
                    label="Customer Name"
                    fullWidth
                    {...register('customerName')}
                    error={!!errors.customerName}
                    helperText={errors.customerName?.message}
                    placeholder="Value"
                  />
                </Grid>
              </Grid>
              <Grid container marginBottom="2rem">
                <Grid xs={12}>
                  <Controller
                    control={control}
                    name="payerName"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Autocomplete
                        onChange={(event, value, reason) => {
                          if (reason === 'clear') {
                            onChange(null);
                          }
                          onChange(value);
                        }}
                        onBlur={onBlur}
                        value={value || null}
                        FieldProps={{ label: 'Payer Name', placeholder: 'Value' }}
                        options={['Health Plan', 'Another Plan', 'Best Plan']}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid xs={6}>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      reset();
                    }}
                    type="reset"
                    color="secondary"
                    fullWidth
                  >
                    Reset Filters
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
          {submitted && (
            <Paper sx={{ padding: '12px 16px', maxWidth: '400px' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            </Paper>
          )}
        </Grid>
      </Container>
    );
  },
  args: {},
};

const crumbs = { active: 'This Page', crumbs: [{ name: 'Previous Page', url: window.location.href }] };

type SectionedFormInputs = {
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  dropdown4: string;
  dropdown5: string;
  dropdown6: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  radio: string;
};

export const _SectionedForm: StoryObj = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      reset,
      getValues,
    } = useForm<SectionedFormInputs>();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit: SubmitHandler<SectionedFormInputs> = (data) => {
      console.log('Submit', data);
      setSubmitted(true);
    };

    return (
      <>
        <PageHeader breadcrumbs={crumbs} headerText="Page Header" />
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper sx={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
              <Grid container direction="column">
                <Typography variant="h2" marginBottom=".5rem">
                  Section Header
                </Typography>
                <Grid md={6}>
                  <SectionText marginBottom="1rem" />
                  <AsteriskMessage marginBottom="1rem" />
                </Grid>
                <Grid container spacing={{ md: 3 }}>
                  <Grid xs={12} md={4}>
                    <Controller
                      control={control}
                      name="dropdown1"
                      rules={{ required: 'This field is required' }}
                      render={({ field: { onChange, value, onBlur } }) => {
                        return (
                          <Autocomplete
                            onChange={(event, value, reason) => {
                              if (reason === 'clear') {
                                onChange(null);
                              }
                              onChange(value);
                            }}
                            onBlur={onBlur}
                            FieldProps={{
                              label: 'Dropdown',
                              placeholder: 'Value',
                              required: true,
                              error: !!errors.dropdown1?.message,
                              helperText: errors.dropdown1?.message,
                            }}
                            options={dropdownOptions}
                            value={value || null}
                            sx={{ marginBottom: '1.25rem', minHeight: '0px' }}
                          />
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={{ sm: 2, md: 3 }}>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <TextField
                      label="Text Field"
                      fullWidth
                      required
                      {...register('field1', { required: 'This field is required' })}
                      error={!!errors.field1?.message}
                      helperText={errors.field1?.message || 'Help text'}
                      placeholder="Value"
                      sx={{ marginBottom: '1.25rem' }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={8} lg={8}>
                    <Controller
                      control={control}
                      name="dropdown2"
                      render={({ field: { onChange, value, onBlur } }) => {
                        return (
                          <Autocomplete
                            onChange={(event, value, reason) => {
                              if (reason === 'clear') {
                                onChange(null);
                              }
                              onChange(value);
                            }}
                            onBlur={onBlur}
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value', sx: { marginBottom: '1.25rem' } }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Typography marginY="1.25rem" variant="h4" component="h3">
                  Subsection Header
                </Typography>
                <Grid container columnSpacing={{ sm: 2, md: 3 }}>
                  <Grid xs={12} sm={6} md={4}>
                    <TextField
                      label="Text Field"
                      fullWidth
                      {...register('field2')}
                      placeholder="Value"
                      sx={{ marginBottom: '1.25rem' }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Controller
                      control={control}
                      name="dropdown3"
                      render={({ field: { onChange, value, onBlur } }) => {
                        return (
                          <Autocomplete
                            onChange={(event, value, reason) => {
                              if (reason === 'clear') {
                                onChange(null);
                              }
                              onChange(value);
                            }}
                            onBlur={onBlur}
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value', sx: { marginBottom: '1.25rem' } }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Controller
                      control={control}
                      name="dropdown4"
                      render={({ field: { onChange, value, onBlur } }) => {
                        return (
                          <Autocomplete
                            onChange={(event, value, reason) => {
                              if (reason === 'clear') {
                                onChange(null);
                              }
                              onChange(value);
                            }}
                            onBlur={onBlur}
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value', sx: { marginBottom: '1.25rem' } }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Controller
                      control={control}
                      name="dropdown5"
                      render={({ field: { onChange, value, onBlur } }) => {
                        return (
                          <Autocomplete
                            onChange={(event, value, reason) => {
                              if (reason === 'clear') {
                                onChange(null);
                              }
                              onChange(value);
                            }}
                            onBlur={onBlur}
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value', sx: { marginBottom: '1.25rem' } }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Button color="secondary" sx={{ marginTop: '.75rem' }}>
                    Secondary Action Button
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <Paper sx={{ padding: '1.5rem' }}>
              <Grid container direction="column">
                <Typography variant="h2" marginBottom=".5rem">
                  Section Header
                </Typography>
                <Grid lg={6}>
                  <SectionText marginBottom="1rem" />
                  <AsteriskMessage marginBottom="1rem" />
                </Grid>
                <Grid container>
                  <Grid xs={12} marginBottom="1.25rem">
                    <TextField
                      label="Text Field"
                      fullWidth
                      {...register('field3', { required: 'This field is required' })}
                      required
                      error={!!errors.field3}
                      helperText={errors.field3?.message}
                      placeholder="Search"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container marginBottom="1rem">
                  <Grid lg={12}>
                    <FormControl error={!!errors.radio}>
                      <FormLabel id="radio-group">Radio Group</FormLabel>
                      <RadioGroup aria-labelledby="radio-group" defaultValue="3" {...register('radio')}>
                        <Grid container direction="row">
                          <FormControlLabel
                            control={<Radio />}
                            value="1"
                            label="Option 1"
                            sx={{ marginRight: '16px' }}
                          />
                          <FormControlLabel control={<Radio />} value="2" label="Option 2" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} marginBottom="1.25rem" columnSpacing={{ sm: 2, md: 3 }}>
                  <Grid xs={12} sm={6}>
                    <TextField
                      label="Text Field"
                      fullWidth
                      {...register('field4', { required: 'This field is required' })}
                      required
                      error={!!errors.field4}
                      helperText={errors.field4?.message}
                      placeholder="Value"
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Controller
                      control={control}
                      name="dropdown6"
                      render={({ field: { onChange, value, onBlur } }) => {
                        return (
                          <Autocomplete
                            onChange={(event, value, reason) => {
                              if (reason === 'clear') {
                                onChange(null);
                              }
                              onChange(value);
                            }}
                            onBlur={onBlur}
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Grid container justifyContent="flex-end" marginTop="1.25rem">
              <Button
                type="reset"
                color="secondary"
                onClick={() => {
                  reset();
                  setSubmitted(false);
                }}
                sx={{ marginRight: '.5rem' }}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Grid>
          </form>
          {submitted && (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            </Paper>
          )}
        </Container>
      </>
    );
  },
  args: {},
};
