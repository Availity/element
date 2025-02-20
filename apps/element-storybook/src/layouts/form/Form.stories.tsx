// Each exported component in the package should have its own stories file
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { BlockUi, Button, CloseIcon, Container, ControlledAutocomplete, ControlledDatepicker, ControlledRadioGroup, ControlledTextField, Divider, FormControlLabel, FormProvider, Grid, IconButton, InputAdornment, PageHeader, Paper, Radio, RequiredKey, SearchIcon, Stack, SubmitHandler, Typography, useForm } from '@availity/element';

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

const today = dayjs().startOf('D');

type SimpleFormInputs = {
  text: string;
  dropdown: string;
};

const dropdownOptions = ['Bulbasaur', 'Squirtle', 'Charmander'];

export const _SimpleForm: StoryObj = {
  render: () => {
    const methods = useForm<SimpleFormInputs>();

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
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Typography component="h1" variant="h2" sx={{ marginBottom: '.5rem' }}>
                  Simple Form
                </Typography>
                <Grid container rowSpacing={2}>
                  <Grid xs={12} md={6}>
                    <SectionText />
                  </Grid>
                  <Grid xs={0} md={6} padding={0} />
                  <Grid xs={12} md={6}>
                    <RequiredKey />
                  </Grid>
                  <Grid xs={0} md={6} padding={0} />
                  <Grid xs={12} />
                  <Grid xs={12} md={6}>
                    <ControlledTextField
                      label="Example"
                      name="text"
                      fullWidth
                      helperText='This is helper text'
                      required
                      rules={{required: 'This field is required.'}}
                    />
                  </Grid>
                  <Grid xs={0} md={6} padding={0} />
                  <Grid xs={12} md={6}>
                    <ControlledAutocomplete
                      name="dropdown"
                      FieldProps={{
                        label: 'Dropdown',
                        helperText: 'This is helper text',
                        placeholder: 'Value'
                      }}
                      options={dropdownOptions}
                    />
                  </Grid>
                  <Grid xs={0} md={6} padding={0} />
                  <Grid xs={12} />
                  <Grid xs={12} justifyContent="end" display="flex" paddingTop={2.5}>
                    <Button
                      type="reset"
                      color="secondary"
                      onClick={() => {
                        methods.reset();
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
            </FormProvider>
          </Paper>
        </BlockUi>
        {submitted && (
          <Paper sx={{ padding: '12px 16px' }}>
            <Typography variant="h2">Submitted Values</Typography>
            <pre>{JSON.stringify(methods.getValues(), null, 2)}</pre>
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

export const _CompactForm: StoryObj = {
  render: () => {
    const methods = useForm<CompactFormInputs>();

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
        <Grid container justifyContent="center">
          <BlockUi blocking={loading}>
            <Paper sx={{ padding: '1rem', maxWidth: '400px' }}>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom="1rem">
                    <Typography component="h1" variant="h5">
                      Filters
                    </Typography>
                    <IconButton title="close" size="small">
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                  <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid xs={12}>
                      <ControlledAutocomplete
                        name="status"
                        FieldProps={{
                          label: 'Status',
                          placeholder: 'Value',
                        }}
                        options={['Pending', 'Accepted', 'Denied']}
                      />
                    </Grid>
                    <Grid xs={6}>
                      <ControlledDatepicker
                        name="fromDate"
                        defaultValue={today}
                        FieldProps={{
                          label: "From Date",
                        }}
                      />
                    </Grid>
                    <Grid xs={6}>
                      <ControlledDatepicker
                        name="toDate"
                        defaultValue={today}
                        FieldProps={{
                          label: "To Date",
                        }}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <ControlledTextField
                        label="Customer Name"
                        fullWidth
                        name="customerName"
                        placeholder="Value"
                      />
                    </Grid>
                    <Grid xs={12}>
                      <ControlledAutocomplete
                        name="payerName"
                        FieldProps={{
                          label: 'Payer Name',
                          placeholder: 'Value'
                        }}
                        options={['Health Plan', 'Another Plan', 'Best Plan']}
                      />
                    </Grid>
                    <Grid xs={12} paddingY={1} />
                    <Grid xs={6}>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          methods.reset();
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
              </FormProvider>
            </Paper>
          </BlockUi>
          {submitted && (
            <Paper sx={{ padding: '12px 16px', maxWidth: '400px' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre>{JSON.stringify(methods.getValues(), null, 2)}</pre>
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
  dropdown7: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  radio: string;
};

export const _SectionedForm: StoryObj = {
  render: () => {
    const methods = useForm<SectionedFormInputs>();

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
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Paper sx={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
                  <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
                    <Grid xs={12}>
                      <Typography variant="h2">Section Header</Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                      <SectionText />
                    </Grid>
                    <Grid xs={0} md={6} padding={0} />
                    <Grid xs={12} md={6}>
                      <RequiredKey />
                    </Grid>
                    <Grid xs={0} md={6} padding={0} />
                    <Grid xs={12} />
                    <Grid xs={12} md={4}>
                      <ControlledAutocomplete
                        name="dropdown1"
                        rules={{ required: 'This field is required' }}
                        FieldProps={{
                          label: 'Dropdown',
                          placeholder: 'Value',
                          required: true,
                        }}
                        options={dropdownOptions}
                      />
                    </Grid>
                    <Grid xs={0} md={8} padding={0} />
                    <Grid xs={12} sm={6} md={4}>
                      <ControlledTextField
                        label="Text Field"
                        fullWidth
                        name="field1"
                        required
                        rules={{ required: 'This field is required' }}
                        helperText='Help text'
                        placeholder="Value"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={8}>
                      <ControlledAutocomplete
                        name="dropdown2"
                        FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                        options={dropdownOptions}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <ControlledTextField
                        label="Medium Text Field"
                        fullWidth
                        name='field2'
                        required
                        rules={{ required: 'This field is required' }}
                        helperText='Help text'
                        placeholder="Value"
                        size="medium"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={8}>
                      <ControlledAutocomplete
                        name="dropdown3"
                        FieldProps={{ label: 'Medium Dropdown', placeholder: 'Value', size: 'medium' }}
                        options={dropdownOptions}
                      />
                    </Grid>
                    <Grid xs={12} />
                    <Grid xs={12}>
                      <Divider />
                    </Grid>
                    <Grid xs={12} />
                    <Grid xs={12}>
                      <Typography variant="h4" component="h3">
                        Subsection Header
                      </Typography>
                    </Grid>
                    <Grid xs={12} />
                    <Grid xs={12} sm={6} md={4}>
                      <ControlledTextField label="Text Field" fullWidth name='field3' placeholder="Value" />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <ControlledAutocomplete
                        name="dropdown4"
                        FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                        options={dropdownOptions}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <ControlledAutocomplete
                        name="dropdown5"
                        FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                        options={dropdownOptions}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <ControlledAutocomplete
                        name="dropdown6"
                        FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                        options={dropdownOptions}
                      />
                    </Grid>
                    <Grid xs={12} />
                    <Grid xs={12}>
                      <Button color="secondary">Secondary Action Button</Button>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper sx={{ padding: '1.5rem' }}>
                  <Grid container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
                    <Grid xs={12}>
                      <Typography variant="h2">Section Header</Typography>
                    </Grid>
                    <Grid xs={12} lg={6}>
                      <SectionText />
                    </Grid>
                    <Grid xs={0} lg={6} padding={0} />
                    <Grid xs={12} lg={6}>
                      <RequiredKey />
                    </Grid>
                    <Grid xs={0} lg={6} padding={0} />
                    <Grid xs={12} />
                    <Grid xs={12}>
                      <ControlledTextField
                        fullWidth
                        name='field4'
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'Search' }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <ControlledRadioGroup
                        label="Radio Group"
                        name="radio"
                        defaultValue="3"
                        row
                      >
                        <FormControlLabel control={<Radio />} value="1" label="Option 1" />
                        <FormControlLabel control={<Radio />} value="2" label="Option 2" />
                      </ControlledRadioGroup>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <ControlledTextField
                        label="Text Field"
                        fullWidth
                        name='field5'
                        required
                        rules={{ required: 'This field is required' }}
                        placeholder="Value"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <ControlledAutocomplete
                        name="dropdown7"
                        FieldProps={{ label: 'Dropdown', placeholder: 'Value' }}
                        options={dropdownOptions}
                      />
                    </Grid>
                  </Grid>
                </Paper>
                <Grid container justifyContent="flex-end" marginTop={2}>
                  <Button
                    type="reset"
                    color="secondary"
                    onClick={() => {
                      methods.reset();
                      setSubmitted(false);
                    }}
                    sx={{ marginRight: 1 }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Submit</Button>
                </Grid>
              </form>
            </FormProvider>
            {submitted && (
              <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
                <Typography variant="h2">Submitted Values</Typography>
                <pre>{JSON.stringify(methods.getValues(), null, 2)}</pre>
              </Paper>
            )}
          </Container>
        </BlockUi>
      </>
    );
  },
  args: {},
};
