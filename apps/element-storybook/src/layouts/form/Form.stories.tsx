// Each exported component in the package should have its own stories file
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField } from '@availity/mui-textfield';
import { Autocomplete } from '@availity/mui-autocomplete';
import { Datepicker } from '@availity/mui-datepicker';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  RequiredKey,
} from '@availity/mui-form-utils';
import { Button, IconButton } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';
import { PageHeader } from '@availity/mui-page-header';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid, Container } from '@availity/mui-layout';
import { SearchIcon } from '@availity/mui-icon';
import { Divider } from '@availity/mui-divider';
import { Stack } from '@availity/mui-layout';
import { BlockUi } from '@availity/mui-block-ui';
import dayjs from 'dayjs';

/** Some form examples with proper layouts and spacings. As `Grid` is already used to handle layout it is easiest to also use it for form spacing.
 *
 * There are two spacing variations: `normal` and `dense` (See [Element Design documentation](https://design.availity.com/2e36e50c7/p/72201e-forms/b/32e1a2/t/page-72201e-81827849-32e1a2-27) for when to use each). Normal spacing will use `rowSpacing={2}` & `columnSpacing={3}` while dense spacing will use `rowSpacing={1}` & `columnSpacing={2}` on the wrapping `Grid container`.
 *
 * While `Grid` will be the most common way to handle spacing, the form components have their own `margin` prop that can be used en lieu of `rowSpacing` in the case where all form components have the same width, removing the need for a `Grid`.
 */
const meta: Meta = {
  title: 'Sample Layouts/Form',
  tags: ['autodocs'],
};

export default meta;

async function sleep(duration = 2500) {
  await new Promise((resolve) => setTimeout(resolve, duration));
}

const SectionText = () => (
  <Typography>
    This is introduction or helper text that helps the user understand the data that needs to be entered or selections
    that need to be made in this section.
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
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<SimpleFormInputs> = async (data) => {
      setLoading(true);
      console.log(data);

      await sleep();

      setSubmitted(true);
      setLoading(false);
    };

    return (
      <Container>
        <BlockUi blocking={loading} message="Loading">
          <Paper sx={{ padding: '1.5rem' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography component="h1" variant="h2" sx={{ marginBottom: '.5rem' }}>
                Simple Form
              </Typography>
              <Grid container rowSpacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <SectionText />
                </Grid>
                <Grid size={{ xs: 0, md: 6 }} sx={{ padding: 0 }} />
                <Grid size={{ xs: 12, md: 6 }}>
                  <RequiredKey />
                </Grid>
                <Grid size={{ xs: 0, md: 6 }} sx={{ padding: 0 }} />
                <Grid size={{ xs: 12 }} />
                <Grid size={{ xs: 12, md: 6 }}>
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
                <Grid size={{ xs: 0, md: 6 }} sx={{ padding: 0 }} />
                <Grid size={{ xs: 12, md: 6 }}>
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
                <Grid size={{ xs: 0, md: 6 }} sx={{ padding: 0 }} />
                <Grid size={{ xs: 12 }} />
                <Grid size={{ xs: 12 }} sx={{ justifyContent: 'end', display: 'flex', paddingTop: 2.5 }}>
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
              </Grid>
            </form>
          </Paper>
        </BlockUi>
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
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<CompactFormInputs> = async (data) => {
      setLoading(true);
      console.log('submitted', data);

      await sleep();

      setLoading(false);
      setSubmitted(true);
    };

    return (
      <Container>
        <Grid container sx={{ justifyContent: 'center' }}>
          <BlockUi blocking={loading}>
            <Paper sx={{ padding: '1rem', maxWidth: '400px' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}
                >
                  <Typography component="h1" variant="h5">
                    Filters
                  </Typography>
                  <IconButton title="close" size="small">
                    <CloseIcon />
                  </IconButton>
                </Stack>
                <Grid container rowSpacing={1} columnSpacing={2}>
                  <Grid size={{ xs: 12 }}>
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
                  <Grid size={{ xs: 6 }}>
                    <Controller
                      control={control}
                      name="fromDate"
                      defaultValue={today}
                      render={({ field: { onChange, value, ref } }) => (
                        <Datepicker label="From Date" value={value} onChange={onChange} ref={ref} />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Controller
                      control={control}
                      name="toDate"
                      defaultValue={today}
                      render={({ field: { onChange, value, ref } }) => (
                        <Datepicker label="To Date" value={value} onChange={onChange} ref={ref} />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Customer Name"
                      fullWidth
                      {...register('customerName')}
                      error={!!errors.customerName}
                      helperText={errors.customerName?.message}
                      placeholder="Value"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
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
                  <Grid size={{ xs: 12 }} sx={{ paddingY: 1 }} />
                  <Grid size={{ xs: 6 }}>
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
                  <Grid size={{ xs: 6 }}>
                    <Button type="submit" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </BlockUi>
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
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<SectionedFormInputs> = async (data) => {
      setLoading(true);
      console.log('Submit', data);

      await sleep();

      setLoading(false);
      setSubmitted(true);
    };

    return (
      <>
        <PageHeader breadcrumbs={crumbs} headerText="Page Header" />
        <BlockUi blocking={loading}>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Paper sx={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
                <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="h2">Section Header</Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <SectionText />
                  </Grid>
                  <Grid size={{ xs: 0, md: 6 }} sx={{ padding: 0 }} />
                  <Grid size={{ xs: 12, md: 6 }}>
                    <RequiredKey />
                  </Grid>
                  <Grid size={{ xs: 0, md: 6 }} sx={{ padding: 0 }} />
                  <Grid size={{ xs: 12 }} />
                  <Grid size={{ xs: 12, md: 4 }}>
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
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 0, md: 8 }} sx={{ padding: 0 }} />
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      label="Text Field"
                      fullWidth
                      required
                      {...register('field1', { required: 'This field is required' })}
                      error={!!errors.field1?.message}
                      helperText={errors.field1?.message || 'Help text'}
                      placeholder="Value"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 8 }}>
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
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      label="Text Field"
                      fullWidth
                      required
                      {...register('field2', { required: 'This field is required' })}
                      error={!!errors.field1?.message}
                      helperText={errors.field1?.message || 'Help text'}
                      placeholder="Value"
                      size="medium"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 8 }}>
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
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value', size: 'medium' }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }} />
                  <Grid size={{ xs: 12 }}>
                    <Divider />
                  </Grid>
                  <Grid size={{ xs: 12 }} />
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="h4" component="h3">
                      Subsection Header
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12 }} />
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField label="Text Field" fullWidth {...register('field2')} placeholder="Value" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
                            FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                            options={dropdownOptions}
                            value={value || null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }} />
                  <Grid size={{ xs: 12 }}>
                    <Button color="secondary">Secondary Action Button</Button>
                  </Grid>
                </Grid>
              </Paper>
              <Paper sx={{ padding: '1.5rem' }}>
                <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="h2">Section Header</Typography>
                  </Grid>
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <SectionText />
                  </Grid>
                  <Grid size={{ xs: 0, lg: 6 }} sx={{ padding: 0 }} />
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <RequiredKey />
                  </Grid>
                  <Grid size={{ xs: 0, lg: 6 }} sx={{ padding: 0 }} />
                  <Grid size={{ xs: 12 }} />
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      {...register('field3')}
                      required
                      error={!!errors.field3}
                      helperText={errors.field3?.message}
                      placeholder="Search"
                      slotProps={{
                        htmlInput: { 'aria-label': 'Search' },
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl error={!!errors.radio}>
                      <FormLabel id="radio-group" component="div">
                        Radio Group
                      </FormLabel>
                      <Controller
                        control={control}
                        name="radio"
                        defaultValue="3"
                        render={({ field }) => (
                          <RadioGroup aria-labelledby="radio-group" row {...field}>
                            <FormControlLabel control={<Radio />} value="1" label="Option 1" />
                            <FormControlLabel control={<Radio />} value="2" label="Option 2" />
                          </RadioGroup>
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12, sm: 6 }}>
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
              </Paper>
              <Grid container sx={{ justifyContent: 'flex-end', marginTop: 2 }}>
                <Button
                  type="reset"
                  color="secondary"
                  onClick={() => {
                    reset();
                    setSubmitted(false);
                  }}
                  sx={{ marginRight: 1 }}
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
        </BlockUi>
      </>
    );
  },
  args: {},
};
